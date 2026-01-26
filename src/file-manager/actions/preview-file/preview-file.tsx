import React, { useMemo, useState, ReactElement } from "react";
import { getFileExtension } from "../../../utils/get-file-extension";
import Loader from "../../../components/loader/loader";
import { useSelection } from "../../../contexts/selection";
import Button from "../../../components/button/button";
import { getDataSize } from "../../../utils/get-data-size";
import { Download, FileText } from "lucide-react";
import { useFileIcons } from "../../../hooks/use-file-icons";
import { AnimatedIcon } from "../../../components/ui/animated-icon";
import { useTranslation } from "../../../contexts/translation";
import { IFile } from "../../../types";
import "./preview-file.css";

const imageExtensions = ["jpg", "jpeg", "png"];
const videoExtensions = ["mp4", "mov", "avi"];
const audioExtensions = ["mp3", "wav", "m4a"];
const iFrameExtensions = ["txt", "pdf"];

interface PreviewFileActionProps {
  filePreviewPath?: string;
  filePreviewComponent?: (file: IFile) => ReactElement;
}

const PreviewFileAction: React.FC<PreviewFileActionProps> = ({
  filePreviewPath,
  filePreviewComponent,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { selectedFiles, handleDownload: triggerDownload } = useSelection();
  const fileIcons = useFileIcons(73);
  const selectedFile = selectedFiles[0];
  const extension = selectedFile
    ? getFileExtension(selectedFile.name)?.toLowerCase()
    : "";
  const filePath = `${filePreviewPath}${selectedFile?.path}`;
  const t = useTranslation();

  // Custom file preview component
  const customPreview = useMemo(() => {
    if (selectedFile) {
      return filePreviewComponent?.(selectedFile);
    }
  }, [filePreviewComponent, selectedFile]);

  const handleImageLoad = () => {
    setIsLoading(false); // Loading is complete
    setHasError(false); // No error
  };

  const handleImageError = () => {
    setIsLoading(false); // Loading is complete
    setHasError(true); // Error occurred
  };

  const handleDownload = () => {
    // Delegate to host download handler so the main app controls download (no navigation)
    triggerDownload();
  };

  if (React.isValidElement(customPreview)) {
    return customPreview as ReactElement;
  }

  if (!selectedFile) return null;

  return (
    <section
      className={`file-previewer ${extension === "pdf" ? "pdf-previewer" : ""}`}
    >
      {hasError ||
        (![
          ...imageExtensions,
          ...videoExtensions,
          ...audioExtensions,
          ...iFrameExtensions,
        ].includes(extension) && (
            <div className="preview-error">
              <span className="error-icon">
                {fileIcons[extension] ?? <AnimatedIcon icon={FileText} size={73} />}
              </span>
              <span className="error-msg">{t("previewUnavailable")}</span>
              <div className="file-info">
                <span className="file-name">{selectedFile.name}</span>
                {selectedFile.size && <span>-</span>}
                <span className="file-size">{getDataSize(selectedFile.size ?? 0)}</span>
              </div>
              <Button onClick={handleDownload} padding="0.45rem .9rem">
                <div className="download-btn">
                  <AnimatedIcon icon={Download} size={18} />
                  <span>{t("download")}</span>
                </div>
              </Button>
            </div>
          ))}
      {imageExtensions.includes(extension) && (
        <>
          <Loader loading={isLoading} />
          <img
            src={filePath}
            alt="Preview Unavailable"
            className={`photo-popup-image ${isLoading ? "img-loading" : ""}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        </>
      )}
      {videoExtensions.includes(extension) && (
        <video src={filePath} className="video-preview" controls autoPlay />
      )}
      {audioExtensions.includes(extension) && (
        <audio src={filePath} controls autoPlay className="audio-preview" />
      )}
      {iFrameExtensions.includes(extension) && (
        <>
          <iframe
            src={filePath}
            onLoad={handleImageLoad}
            onError={handleImageError}
            frameBorder="0"
            className={`photo-popup-iframe ${isLoading ? "img-loading" : ""}`}
          ></iframe>
        </>
      )}
    </section>
  );
};

export default PreviewFileAction;
