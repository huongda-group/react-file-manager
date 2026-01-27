import { useState } from "react";
import "./styles/variables.css";
import "./app.css";
import FileManager from "./file-manager/file-manager";
import { IFile } from "./types";
import { LayoutType } from "./contexts/layout";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<IFile[]>([
    {
      _id: "root-1",
      name: "Documents",
      isDirectory: true,
      path: "/Documents",
      updatedAt: new Date().toISOString(),
      size: 0,
    },
    {
      _id: "root-2",
      name: "Images",
      isDirectory: true,
      path: "/Images",
      updatedAt: new Date().toISOString(),
      size: 0,
    },
    {
      _id: "img-1",
      name: "profile.jpg",
      isDirectory: false,
      path: "/Images/profile.jpg",
      updatedAt: new Date().toISOString(),
      size: 1024 * 50,
    }
  ]);
  const [currentPath, setCurrentPath] = useState("");


  // Create Folder
  const handleCreateFolder = async (name: string, parentFolder: IFile | null) => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newFolder: IFile = {
      _id: "dir-" + Date.now(),
      name,
      isDirectory: true,
      path: parentFolder ? `${parentFolder.path}/${name}` : `/${name}`,
      updatedAt: new Date().toISOString(),
      size: 0,
    };

    setFiles((prev) => [...prev, newFolder]);
    setIsLoading(false);
  };

  // File Upload Handlers
  const handleFileUploading = (_file: File, parentFolder: IFile | null) => {
    return { parentId: parentFolder?._id };
  };

  const handleFileUploaded = (response: any) => {
    const uploadedFile = typeof response === 'string' ? JSON.parse(response) : response;
    setFiles((prev) => [...prev, uploadedFile]);
  };

  // Rename File/Folder
  const handleRename = async (file: IFile, newName: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));

    setFiles((prev) =>
      prev.map((f) => {
        if (f._id === file._id) {
          const oldPath = f.path;
          const folderPath = oldPath.substring(0, oldPath.lastIndexOf('/'));
          const newPath = folderPath ? folderPath + '/' + newName : '/' + newName;
          return { ...f, name: newName, path: newPath, updatedAt: new Date().toISOString() };
        }
        // Also update paths of children if it's a directory
        if (file.isDirectory && f.path.startsWith(file.path + '/')) {
          const newPath = f.path.replace(file.path, file.path.substring(0, file.path.lastIndexOf('/')) + '/' + newName);
          return { ...f, path: newPath };
        }
        return f;
      })
    );

    setIsLoading(false);
  };

  // Delete File/Folder
  const handleDelete = async (filesToDelete: IFile[]) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));

    const idsToDelete = new Set(filesToDelete.map((file) => file._id));

    setFiles((prev) => {
      const toRemove = new Set<string>();
      prev.forEach(f => {
        if (idsToDelete.has(f._id)) {
          toRemove.add(f._id);
        }
        filesToDelete.forEach(deletedFile => {
          if (deletedFile.isDirectory && f.path.startsWith(deletedFile.path + '/')) {
            toRemove.add(f._id);
          }
        });
      });
      return prev.filter(f => !toRemove.has(f._id));
    });

    setIsLoading(false);
  };

  // Paste File/Folder
  const handlePaste = async (
    copiedItems: IFile[],
    destinationFolder: IFile | null,
    operationType: "move" | "copy"
  ) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const destPath = destinationFolder ? destinationFolder.path : "";

    if (operationType === "move") {
      setFiles((prev) => {
        const idsToMove = new Set(copiedItems.map(i => i._id));
        return prev.map(f => {
          if (idsToMove.has(f._id)) {
            const newPath = destPath ? destPath + "/" + f.name : "/" + f.name;
            return { ...f, path: newPath, updatedAt: new Date().toISOString() };
          }
          // Handle children
          for (const item of copiedItems) {
            if (item.isDirectory && f.path.startsWith(item.path + '/')) {
              const newPath = f.path.replace(item.path, (destPath ? destPath + "/" : "/") + item.name);
              return { ...f, path: newPath };
            }
          }
          return f;
        });
      });
    } else {
      // Copy
      setFiles((prev) => {
        const newItems: IFile[] = [];
        const createCopies = (items: IFile[], targetPath: string) => {
          items.forEach(item => {
            const newId = "copy-" + Date.now() + "-" + Math.random();
            const newPath = targetPath ? targetPath + "/" + item.name : "/" + item.name;
            const newItem = {
              ...item,
              _id: newId,
              path: newPath,
              updatedAt: new Date().toISOString()
            };
            newItems.push(newItem);

            if (item.isDirectory) {
              const children = prev.filter(f => f.path.startsWith(item.path + '/') && f.path.split('/').length === item.path.split('/').length + 1);
              createCopies(children, newPath);
            }
          });
        };
        createCopies(copiedItems, destPath);
        return [...prev, ...newItems];
      });
    }

    setIsLoading(false);
  };

  const handleLayoutChange = (layout: LayoutType) => {
    console.log(layout);
  };

  // Refresh Files
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleFileOpen = (file: IFile) => {
    console.log(`Opening file: ${file.name}`);
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  const handleDownload = async (filesToDownload: IFile[]) => {
    console.log("Mock Downloading:", filesToDownload);
    alert(`Downloading ${filesToDownload.length} items (Mock)`);
  };

  const handleCut = (filesToCut: IFile[]) => {
    console.log("Moving Files", filesToCut);
  };

  const handleCopy = (filesToCopy: IFile[]) => {
    console.log("Copied Files", filesToCopy);
  };

  const handleSelectionChange = (filesSelected: IFile[]) => {
    console.log("Selected Files", filesSelected);
  };

  return (
    <div className="app">
      <div className="file-manager-container">
        <FileManager
          files={files}
          onUpload={async (file) => {
            console.log("Mock Uploading:", file);
            await new Promise((resolve) => setTimeout(resolve, 500));
            // Return dummy response
            return {
              _id: "file-" + Date.now(),
              name: file.name,
              isDirectory: false,
              path: currentPath ? `${currentPath}/${file.name}` : `/${file.name}`,
              updatedAt: new Date().toISOString(),
              size: file.size,
            };
          }}
          isLoading={isLoading}
          onCreateFolder={handleCreateFolder}
          onFileUploading={handleFileUploading}
          onFileUploaded={handleFileUploaded}
          onCut={handleCut}
          onCopy={handleCopy}
          onPaste={handlePaste}
          onRename={handleRename}
          onDownload={handleDownload}
          onDelete={handleDelete}
          onLayoutChange={handleLayoutChange}
          onRefresh={handleRefresh}
          onFileOpen={handleFileOpen}
          onSelectionChange={handleSelectionChange}
          onError={handleError}
          layout="list"
          enableFilePreview
          maxFileSize={10485760}
          filePreviewPath={import.meta.env.VITE_API_FILES_BASE_URL as string}
          acceptedFileTypes=".txt, .png, .jpg, .jpeg, .pdf, .doc, .docx, .exe"
          height="100%"
          width="100%"
          initialPath={currentPath}
          onFolderChange={setCurrentPath}
        />
      </div>
    </div>
  );
}

export default App;
