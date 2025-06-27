import { useEffect, useRef, useState } from "react";
import FileManager from "./FileManager/FileManager";
import { createFolderAPI } from "./api/createFolderAPI";
import { renameAPI } from "./api/renameAPI";
import { deleteAPI } from "./api/deleteAPI";
import { copyItemAPI, moveItemAPI } from "./api/fileTransferAPI";
import { getAllFilesAPI } from "./api/getAllFilesAPI";
import { downloadFile } from "./api/downloadFileAPI";
import { FileItem } from "./types";
import "./App.scss";

function App() {
  const fileUploadConfig = {
    url: import.meta.env.VITE_API_BASE_URL + "/upload",
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [files, setFiles] = useState<FileItem[]>([]);
  const isMountRef = useRef<boolean>(false);

  // Get Files
  const getFiles = async (): Promise<void> => {
    setIsLoading(true);
    const response = await getAllFilesAPI();
    if ('data' in response) {
      setFiles(response.data);
    } else {
      console.error('Error fetching files:', response);
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
  const handleCreateFolder = async (name: string, parentFolder?: FileItem | null): Promise<void> => {
    setIsLoading(true);
    const response = await createFolderAPI(name, parentFolder?._id);
    if ((response.status === 200 || response.status === 201) && 'data' in response) {
      setFiles((prev) => [...prev, response.data]);
    } else {
      console.error(response);
    }
    setIsLoading(false);
  };
  //

  // File Upload Handlers
  const handleFileUploading = (file: File, parentFolder?: FileItem | null) => {
    return { parentId: parentFolder?._id };
  };

  const handleFileUploaded = (response: string): void => {
    const uploadedFile = JSON.parse(response);
    setFiles((prev) => [...prev, uploadedFile]);
  };
  //

  // Rename File/Folder
  const handleRename = async (file: FileItem, newName: string): Promise<void> => {
    setIsLoading(true);
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
  const handleDelete = async (files: FileItem[]): Promise<void> => {
    setIsLoading(true);
    const idsToDelete = files.map((file) => file._id);
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
  const handlePaste = async (copiedItems: FileItem[], destinationFolder: FileItem | null, operationType: "copy" | "move"): Promise<void> => {
    setIsLoading(true);
    const copiedItemIds = copiedItems.map((item) => item._id);
    if (operationType === "copy") {
      const response = await copyItemAPI(copiedItemIds, destinationFolder?._id);
    } else {
      const response = await moveItemAPI(copiedItemIds, destinationFolder?._id);
    }
    await getFiles();
  };
  //

  const handleLayoutChange = (layout: string): void => {
    console.log(layout);
  };

  // Refresh Files
  const handleRefresh = (): void => {
    getFiles();
  };
  //

  const handleFileOpen = (file: FileItem): void => {
    console.log(`Opening file: ${file.name}`);
  };

  const handleError = (error: any, file?: File): void => {
    console.error(error);
  };

  const handleDownload = async (files: FileItem[]): Promise<void> => {
    await downloadFile(files);
  };

  const handleCut = (files: FileItem[]): void => {
    console.log("Moving Files", files);
  };

  const handleCopy = (files: FileItem[]): void => {
    console.log("Copied Files", files);
  };

  const handleSelect = (files: FileItem[]): void => {
    console.log("Selected Files", files);
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
          onSelect={handleSelect}
          onError={handleError}
          layout="grid"
          enableFilePreview
          maxFileSize={10485760}
          filePreviewPath={import.meta.env.VITE_API_FILES_BASE_URL}
          acceptedFileTypes=".txt, .png, .jpg, .jpeg, .pdf, .doc, .docx, .exe"
          height="100%"
          width="100%"
          initialPath=""
        />
      </div>
    </div>
  );
}

export default App;
