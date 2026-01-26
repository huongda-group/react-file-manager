import { useRef, useState, DragEvent, ChangeEvent } from "react";
import Button from "../../../components/button/button";
import { AiOutlineCloudUpload } from "react-icons/ai";
import UploadItem from "../../../file-manager/actions/upload-file/upload-item";
import Loader from "../../../components/loader/loader";
import { useFileNavigation } from "../../../contexts/file-navigation";
import { getFileExtension } from "../../../utils/get-file-extension";
import { getDataSize } from "../../../utils/get-data-size";
import { useFiles } from "../../../contexts/files";
import { useTranslation } from "../../../contexts/translation";
import { IFile } from "../../../types";
import "./upload-file.css";



export interface IUploadFileData {
  file: File;
  appendData?: any;
  error?: string;
  removed?: boolean;
}

interface UploadFileActionProps {
  onUpload?: (file: File) => Promise<any>;
  maxFileSize?: number;
  acceptedFileTypes?: string;
  onFileUploading: (file: File, parent: IFile | null) => any;
  onFileUploaded: (response: any) => void;
}

const UploadFileAction: React.FC<UploadFileActionProps> = ({
  onUpload,
  maxFileSize,
  acceptedFileTypes,
  onFileUploading,
  onFileUploaded,
}) => {
  const [files, setFiles] = useState<IUploadFileData[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState<{ [key: number]: boolean }>({});
  const { currentFolder, currentPathFiles } = useFileNavigation();
  const { onError } = useFiles();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = useTranslation();

  // To open choose file if the "Choose File" button is focused and Enter key is pressed
  const handleChooseFileKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      fileInputRef.current?.click();
    }
  };

  const checkFileError = (file: File) => {
    if (acceptedFileTypes) {
      const extError = !acceptedFileTypes.includes(getFileExtension(file.name));
      if (extError) return t("fileTypeNotAllowed");
    }

    const fileExists = currentPathFiles.some(
      (item) =>
        item.name.toLowerCase() === file.name.toLowerCase() && !item.isDirectory
    );
    if (fileExists) return t("fileAlreadyExist");

    const sizeError = maxFileSize && file.size > maxFileSize;
    if (sizeError)
      return `${t("maxUploadSize")} ${getDataSize(maxFileSize, 0)}.`;
  };

  const setSelectedFiles = (fileList: File[]) => {
    const validFiles = fileList.filter(
      (item) =>
        !files.some(
          (fileData) =>
            fileData.file.name.toLowerCase() === item.name.toLowerCase()
        )
    );

    if (validFiles.length > 0) {
      const newFiles = validFiles.map((file) => {
        const appendData = onFileUploading(file, currentFolder);
        const error = checkFileError(file);
        // Error handling matches Context or custom logic
        if (error) onError({ type: "upload", message: error });

        return {
          file: file,
          appendData: appendData,
          ...(error && { error: error }),
        };
      });
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  // Todo: Also validate allowed file extensions on drop
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setSelectedFiles(droppedFiles);
  };

  const handleChooseFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const choosenFiles = Array.from(e.target.files);
      setSelectedFiles(choosenFiles);
    }
  };

  const handleFileRemove = (index: number) => {
    setFiles((prev) => {
      const newFiles = prev.map((file, i) => {
        if (index === i) {
          return {
            ...file,
            removed: true,
          };
        }
        return file;
      });

      // If every file is removed, empty files array
      if (newFiles.every((file) => !!file.removed)) return [];

      return newFiles;
    });
  };

  return (
    <div
      className={`fm-upload-file ${files.length > 0 ? "file-selcted" : ""}`}
    >
      <div className="select-files">
        <div
          className={`draggable-file-input ${isDragging ? "dragging" : ""}`}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => setIsDragging(true)}
          onDragLeave={() => setIsDragging(false)}
        >
          <div className="input-text">
            <AiOutlineCloudUpload size={30} />
            <span>{t("dragFileToUpload")}</span>
          </div>
        </div>
        <div className="btn-choose-file">
          <Button padding="0" onKeyDown={handleChooseFileKeyDown}>
            <label htmlFor="chooseFile">{t("chooseFile")}</label>
            <input
              ref={fileInputRef}
              type="file"
              id="chooseFile"
              className="choose-file-input"
              onChange={handleChooseFile}
              multiple
              accept={acceptedFileTypes}
            />
          </Button>
        </div>
      </div>
      {files.length > 0 && (
        <div className="files-progress">
          <div className="heading">
            {Object.values(isUploading).some((fileUploading) => fileUploading) ? (
              <>
                <h2>{t("uploading")}</h2>
                <Loader loading={true} className="upload-loading" />
              </>
            ) : (
              <h2>{t("completed")}</h2>
            )}
          </div>
          <ul>
            {files.map((fileData, index) => (
              <UploadItem
                index={index}
                key={index}
                fileData={fileData}
                setFiles={setFiles}
                onUpload={onUpload} // Changed prop
                setIsUploading={setIsUploading}
                onFileUploaded={onFileUploaded}
                handleFileRemove={handleFileRemove}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadFileAction;
