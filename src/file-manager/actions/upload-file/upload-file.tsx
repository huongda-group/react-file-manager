import { useRef, useState, DragEvent, ChangeEvent, useCallback } from "react";
import Button from "../../../components/button/button";
import { CloudUpload } from "lucide-react";
import { AnimatedIcon } from "../../../components/ui/animated-icon";
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
  id: string;
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

const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const UploadFileAction: React.FC<UploadFileActionProps> = ({
  onUpload,
  maxFileSize,
  acceptedFileTypes,
  onFileUploading,
  onFileUploaded,
}) => {
  const [files, setFiles] = useState<IUploadFileData[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState<{ [key: string]: boolean }>({});
  const { currentFolder } = useFileNavigation();
  const { onError } = useFiles();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = useTranslation();

  const handleChooseFileKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      fileInputRef.current?.click();
    }
  }, []);

  const checkFileError = useCallback((file: File) => {
    if (acceptedFileTypes) {
      const extError = !acceptedFileTypes.includes(getFileExtension(file.name));
      if (extError) {
        return t("fileTypeNotAllowed");
      }
    }
    const sizeError = maxFileSize && file.size > maxFileSize;
    if (sizeError) {
      return `${t("maxUploadSize")} ${getDataSize(maxFileSize, 0)}.`;
    }
  }, [acceptedFileTypes, maxFileSize, t]);

  const setSelectedFiles = useCallback((fileList: File[]) => {
    setFiles((prev) => {
      const validFiles = fileList.filter(
        (item) => !prev.some((fileData) => fileData.file.name.toLowerCase() === item.name.toLowerCase())
      );

      if (validFiles.length === 0) {
        return prev;
      }

      const newFiles = validFiles.map((file) => {
        const appendData = onFileUploading(file, currentFolder);
        const error = checkFileError(file);
        if (error) {
          onError({ type: "upload", message: error });
        }
        return {
          id: generateId(),
          file: file,
          appendData: appendData,
          ...(error && { error: error }),
        };
      });
      return [...prev, ...newFiles];
    });
  }, [checkFileError, currentFolder, onError, onFileUploading]);

  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    setSelectedFiles(Array.from(e.dataTransfer.files));
  }, [setSelectedFiles]);

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleDragEnter = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleChooseFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
      e.target.value = "";
    }
  }, [setSelectedFiles]);

  const handleFileRemove = useCallback((id: string) => {
    setFiles((prev) => {
      const newFiles = prev.map((file) => {
        if (file.id === id) {
          return { ...file, removed: true };
        }
        return file;
      });
      if (newFiles.every((file) => !!file.removed)) {
        return [];
      }
      return newFiles;
    });
  }, []);

  const isAnyUploading = Object.values(isUploading).some(Boolean);

  return (
    <div className={`fm-upload-file ${files.length > 0 ? "file-selcted" : ""}`}>
      <div className="select-files">
        <div
          className={`draggable-file-input ${isDragging ? "dragging" : ""}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
        >
          <div className="input-text">
            <AnimatedIcon icon={CloudUpload} size={30} animation="bounce" />
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
            {isAnyUploading ? (
              <>
                <h2>{t("uploading")}</h2>
                <Loader loading={true} className="upload-loading" />
              </>
            ) : (
              <h2>{t("completed")}</h2>
            )}
          </div>
          <ul>
            {files.map((fileData) => (
              <UploadItem
                key={fileData.id}
                id={fileData.id}
                fileData={fileData}
                setFiles={setFiles}
                onUpload={onUpload}
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
