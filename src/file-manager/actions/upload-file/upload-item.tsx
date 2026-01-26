import { AiOutlineClose } from "react-icons/ai";
import Progress from "../../../components/progress/progress";
import { getFileExtension } from "../../../utils/get-file-extension";
import { useFileIcons } from "../../../hooks/use-file-icons";
import { FaRegFile } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getDataSize } from "../../../utils/get-data-size";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { useFiles } from "../../../contexts/files";
import { useTranslation } from "../../../contexts/translation";
import { IUploadFileData } from "./upload-file";

interface UploadItemProps {
  index: number;
  fileData: IUploadFileData;
  setFiles: React.Dispatch<React.SetStateAction<IUploadFileData[]>>;
  setIsUploading: React.Dispatch<
    React.SetStateAction<{ [key: number]: boolean }>
  >;
  onUpload?: (file: File) => Promise<any>;
  onFileUploaded: (response: any) => void;
  handleFileRemove: (index: number) => void;
}

const UploadItem: React.FC<UploadItemProps> = ({
  index,
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

  // const xhrRef = useRef<XMLHttpRequest | null>(null); // Removing XHR ref
  // Aborting promise is harder, for now we just handle UI state or if we want to support abort we need AbortController support in onUpload.
  // Assuming simple promise for now.
  const { onError } = useFiles();
  const t = useTranslation();

  const handleUploadError = (err: any) => {
    setUploadProgress(0);
    setIsUploading((prev) => ({
      ...prev,
      [index]: false,
    }));
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
      prev.map((file, i) => {
        if (index === i) {
          return {
            ...file,
            error: error.message,
          };
        }
        return file;
      })
    );

    setUploadFailed(true);

    onError(error); // Adjusted onError to match current signature or updated Context if needed
  };

  const fileUpload = async (fileData: IUploadFileData) => {
    if (!!fileData.error) return;

    try {
      setIsUploading((prev) => ({
        ...prev,
        [index]: true,
      }));

      let response;
      if (onUpload) {
        response = await onUpload(fileData.file);
      } else {
        // Fallback or error if onUpload is not provided (though it should be required in types mainly)
        throw new Error("Upload handler not provided");
      }

      setIsUploading((prev) => ({
        ...prev,
        [index]: false,
      }));
      setUploadProgress(100);
      setIsUploaded(true);
      onFileUploaded(response);
      return response;
    } catch (err: any) {
      setIsUploading((prev) => ({
        ...prev,
        [index]: false,
      }));
      handleUploadError(err);
      throw err.message || "Upload failed";
    }
  };

  useEffect(() => {
    // Prevent double uploads with strict mode
    // if (!xhrRef.current) {
    fileUpload(fileData);
    // }
  }, []);

  const handleAbortUpload = () => {
    // If we want to support real abort, onUpload should accept an AbortSignal
    setIsUploading((prev) => ({
      ...prev,
      [index]: false,
    }));
    setIsCanceled(true);
    setUploadProgress(0);
  };

  const handleRetry = () => {
    if (fileData?.file) {
      setFiles((prev) =>
        prev.map((file, i) => {
          if (index === i) {
            return {
              ...file,
              error: undefined, // Fixed to clear error
            };
          }
          return file;
        })
      );
      fileUpload({ ...fileData, error: undefined });
      setIsCanceled(false);
      setUploadFailed(false);
    }
  };

  // File was removed by the user beacuse it was unsupported or exceeds file size limit.
  if (!!fileData.removed) {
    return null;
  }
  //

  return (
    <li>
      <div className="file-icon">
        {fileIcons[getFileExtension(fileData.file?.name)] ?? (
          <FaRegFile size={33} />
        )}
      </div>
      <div className="file">
        <div className="file-details">
          <div className="file-info">
            <span
              className="file-name text-truncate"
              title={fileData.file?.name}
            >
              {fileData.file?.name}
            </span>
            <span className="file-size">{getDataSize(fileData.file?.size)}</span>
          </div>
          {isUploaded ? (
            <FaRegCheckCircle title={t("uploaded")} className="upload-success" />
          ) : isCanceled || uploadFailed ? (
            <IoMdRefresh
              className="retry-upload"
              title="Retry"
              onClick={handleRetry}
            />
          ) : (
            <div
              className="rm-file"
              title={`${!!fileData.error ? t("Remove") : t("abortUpload")}`}
              onClick={
                !!fileData.error
                  ? () => handleFileRemove(index)
                  : handleAbortUpload
              }
            >
              <AiOutlineClose />
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
};

export default UploadItem;
