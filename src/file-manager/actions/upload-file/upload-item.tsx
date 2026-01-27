import { memo, useRef, useEffect, useState, useCallback } from "react";
import { X, File, CheckCircle, RotateCw } from "lucide-react";
import Progress from "../../../components/progress/progress";
import { getFileExtension } from "../../../utils/get-file-extension";
import { useFileIcons } from "../../../hooks/use-file-icons";
import { getDataSize } from "../../../utils/get-data-size";
import { AnimatedIcon } from "../../../components/ui/animated-icon";
import { useFiles } from "../../../contexts/files";
import { useTranslation } from "../../../contexts/translation";
import { IUploadFileData } from "./upload-file";

interface UploadItemProps {
  id: string;
  fileData: IUploadFileData;
  setFiles: React.Dispatch<React.SetStateAction<IUploadFileData[]>>;
  setIsUploading: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
  onUpload?: (file: File) => Promise<any>;
  onFileUploaded: (response: any) => void;
  handleFileRemove: (id: string) => void;
}

const UploadItem: React.FC<UploadItemProps> = memo(({
  id,
  fileData,
  setFiles,
  setIsUploading,
  onUpload,
  onFileUploaded,
  handleFileRemove,
}) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [uploadFailed, setUploadFailed] = useState(false);
  const fileIcons = useFileIcons(33);
  const { onError } = useFiles();
  const t = useTranslation();
  const hasStartedUploadRef = useRef(false);

  const updateUploadStatus = useCallback((status: boolean) => {
    setIsUploading((prev) => ({ ...prev, [id]: status }));
  }, [id, setIsUploading]);

  const handleUploadError = useCallback((err: any) => {
    setUploadProgress(0);
    updateUploadStatus(false);
    const error = {
      type: "upload",
      message: t("uploadFail"),
      response: {
        status: err.status || 500,
        statusText: err.statusText || "Error",
        data: err,
      },
    };

    setFiles((prev) =>
      prev.map((file) => {
        if (file.id === id) {
          return { ...file, error: error.message };
        }
        return file;
      })
    );

    setUploadFailed(true);
    onError(error);
  }, [id, onError, setFiles, t, updateUploadStatus]);

  const fileUpload = useCallback(async (data: IUploadFileData) => {
    if (data.error) {
      return;
    }

    try {
      updateUploadStatus(true);
      if (!onUpload) {
        throw new Error("Upload handler not provided");
      }
      const response = await onUpload(data.file);
      updateUploadStatus(false);
      setUploadProgress(100);
      setIsUploaded(true);
      onFileUploaded(response);
      return response;
    } catch (err: any) {
      updateUploadStatus(false);
      handleUploadError(err);
      throw err.message || "Upload failed";
    }
  }, [handleUploadError, onFileUploaded, onUpload, updateUploadStatus]);

  useEffect(() => {
    if (!hasStartedUploadRef.current) {
      hasStartedUploadRef.current = true;
      fileUpload(fileData);
    }
  }, []);

  const handleAbortUpload = useCallback(() => {
    updateUploadStatus(false);
    setIsCanceled(true);
    setUploadProgress(0);
  }, [updateUploadStatus]);

  const handleRetry = useCallback(() => {
    if (fileData?.file) {
      setFiles((prev) =>
        prev.map((file) => {
          if (file.id === id) {
            return { ...file, error: undefined };
          }
          return file;
        })
      );
      fileUpload({ ...fileData, error: undefined });
      setIsCanceled(false);
      setUploadFailed(false);
    }
  }, [fileData, fileUpload, id, setFiles]);

  if (fileData.removed) {
    return null;
  }

  return (
    <li>
      <div className="file-icon">
        {fileIcons[getFileExtension(fileData.file?.name)] ?? (
          <AnimatedIcon icon={File} size={33} />
        )}
      </div>
      <div className="file">
        <div className="file-details">
          <div className="file-info">
            <span className="file-name text-truncate" title={fileData.file?.name}>
              {fileData.file?.name}
            </span>
            <span className="file-size">{getDataSize(fileData.file?.size)}</span>
          </div>
          {isUploaded ? (
            <div title={t("uploaded")} className="upload-success">
              <AnimatedIcon icon={CheckCircle} />
            </div>
          ) : isCanceled || uploadFailed ? (
            <div className="retry-upload" title="Retry" onClick={handleRetry}>
              <AnimatedIcon icon={RotateCw} />
            </div>
          ) : (
            <div
              className="rm-file"
              title={fileData.error ? t("remove") : t("abortUpload")}
              onClick={fileData.error ? () => handleFileRemove(id) : handleAbortUpload}
            >
              <AnimatedIcon icon={X} />
            </div>
          )}
        </div>
        <Progress
          percent={uploadProgress}
          isCanceled={isCanceled}
          isCompleted={isUploaded}
          error={fileData.error}
        />
      </div>
    </li>
  );
});

UploadItem.displayName = "UploadItem";

export default UploadItem;
