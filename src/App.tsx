import { useEffect, useRef, useState } from "react";
import { createFolderAPI } from "./api/create-folder-api";
import { deleteAPI } from "./api/delete-api";
import { downloadFile } from "./api/download-file-api";
import { copyItemAPI, moveItemAPI } from "./api/file-transfer-api";
import { getAllFilesAPI } from "./api/get-all-files-api";
import { renameAPI } from "./api/rename-api";
import "./styles/variables.css";
import "./app.css";
import FileManager from "./file-manager/file-manager";
import { IFile } from "./types";
import { LayoutType } from "./contexts/layout";

function App() {
  const fileUploadConfig = {
    url: (import.meta.env.VITE_API_BASE_URL as string) + "/upload",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<IFile[]>([]);
  const [currentPath, setCurrentPath] = useState("");
  const isMountRef = useRef(false);

  // Get Files
  const getFiles = async () => {
    setIsLoading(true);
    const response = await getAllFilesAPI();
    if (response.status === 200 && response.data) {
      setFiles(response.data);
    } else {
      console.error(response);
      setFiles([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isMountRef.current) return;
    isMountRef.current = true;
    getFiles();
  }, []);
  //

  // Create Folder
  const handleCreateFolder = async (name: string, parentFolder: IFile | null) => {
    setIsLoading(true);
    // Assuming parentFolder has _id if it's not null. IFile usually has it if from API.
    const response = await createFolderAPI(name, parentFolder?._id);
    if (response.status === 200 || response.status === 201) {
      const newFile = response.data;
      if (newFile) {
        setFiles((prev) => [...prev, newFile]);
      }
    } else {
      console.error(response);
    }
    setIsLoading(false);
  };
  //

  // File Upload Handlers
  const handleFileUploading = (_file: File, parentFolder: IFile | null) => {
    return { parentId: parentFolder?._id };
  };

  const handleFileUploaded = (response: any) => {
    // response might be JSON string or object depending on XHR response type?
    // UploadItem uses xhr.response which is usually string unless responseType set.
    // In UploadItem we saw `onFileUploaded(xhr.response)`.
    const uploadedFile = typeof response === 'string' ? JSON.parse(response) : response;
    setFiles((prev) => [...prev, uploadedFile]);
  };
  //

  // Rename File/Folder
  const handleRename = async (file: IFile, newName: string) => {
    setIsLoading(true);
    if (!file._id) {
      console.error("File ID missing");
      setIsLoading(false);
      return;
    }
    const response = await renameAPI(file._id, newName);
    if (response.status === 200) {
      getFiles();
    } else {
      console.error(response);
    }
    setIsLoading(false);
  };
  //

  // Delete File/Folder
  const handleDelete = async (filesToDelete: IFile[]) => {
    setIsLoading(true);
    const idsToDelete = filesToDelete.map((file) => file._id).filter((id): id is string => !!id);
    const response = await deleteAPI(idsToDelete);
    if (response.status === 200) {
      getFiles();
    } else {
      console.error(response);
      setIsLoading(false);
    }
  };
  //

  // Paste File/Folder
  const handlePaste = async (
    copiedItems: IFile[],
    destinationFolder: IFile | null,
    operationType: "move" | "copy"
  ) => {
    setIsLoading(true);
    const copiedItemIds = copiedItems.map((item) => item._id).filter((id): id is string => !!id);
    if (operationType === "copy") {
      await copyItemAPI(copiedItemIds, destinationFolder?._id);
    } else {
      await moveItemAPI(copiedItemIds, destinationFolder?._id);
    }
    await getFiles();
  };
  //

  const handleLayoutChange = (layout: LayoutType) => {
    console.log(layout);
  };

  // Refresh Files
  const handleRefresh = () => {
    getFiles();
  };
  //

  const handleFileOpen = (file: IFile) => {
    console.log(`Opening file: ${file.name}`);
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  const handleDownload = async (filesToDownload: IFile[]) => {
    await downloadFile(filesToDownload);
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
          fileUploadConfig={fileUploadConfig}
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
          layout="grid"
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
