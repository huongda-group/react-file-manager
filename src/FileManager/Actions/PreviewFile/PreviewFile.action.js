import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useMemo, useState } from "react";
import { getFileExtension } from "../../../utils/getFileExtension";
import Loader from "../../../components/Loader/Loader";
import { useSelection } from "../../../contexts/SelectionContext";
import Button from "../../../components/Button/Button";
import { getDataSize } from "../../../utils/getDataSize";
import { MdOutlineFileDownload } from "react-icons/md";
import { useFileIcons } from "../../../hooks/useFileIcons";
import { FaRegFileAlt } from "react-icons/fa";
import { useTranslation } from "../../../contexts/TranslationProvider";
import "./PreviewFile.action.scss";
const imageExtensions = ["jpg", "jpeg", "png"];
const videoExtensions = ["mp4", "mov", "avi"];
const audioExtensions = ["mp3", "wav", "m4a"];
const iFrameExtensions = ["txt", "pdf"];
const PreviewFileAction = ({ filePreviewPath, filePreviewComponent }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const { selectedFiles } = useSelection();
    const fileIcons = useFileIcons(73);
    const extension = getFileExtension(selectedFiles[0].name)?.toLowerCase();
    const filePath = `${filePreviewPath}${selectedFiles[0].path}`;
    const t = useTranslation();
    // Custom file preview component
    const customPreview = useMemo(() => filePreviewComponent?.(selectedFiles[0]), [filePreviewComponent]);
    const handleImageLoad = () => {
        setIsLoading(false); // Loading is complete
        setHasError(false); // No error
    };
    const handleImageError = () => {
        setIsLoading(false); // Loading is complete
        setHasError(true); // Error occurred
    };
    const handleDownload = () => {
        window.location.href = filePath;
    };
    if (React.isValidElement(customPreview)) {
        return customPreview;
    }
    return (_jsxs("section", { className: `file-previewer ${extension === "pdf" ? "pdf-previewer" : ""}`, children: [hasError ||
                (![
                    ...imageExtensions,
                    ...videoExtensions,
                    ...audioExtensions,
                    ...iFrameExtensions,
                ].includes(extension) && (_jsxs("div", { className: "preview-error", children: [_jsx("span", { className: "error-icon", children: fileIcons[extension] ?? _jsx(FaRegFileAlt, { size: 73 }) }), _jsx("span", { className: "error-msg", children: t("previewUnavailable") }), _jsxs("div", { className: "file-info", children: [_jsx("span", { className: "file-name", children: selectedFiles[0].name }), selectedFiles[0].size && _jsx("span", { children: "-" }), _jsx("span", { className: "file-size", children: getDataSize(selectedFiles[0].size) })] }), _jsx(Button, { onClick: handleDownload, padding: "0.45rem .9rem", children: _jsxs("div", { className: "download-btn", children: [_jsx(MdOutlineFileDownload, { size: 18 }), _jsx("span", { children: t("download") })] }) })] }))), imageExtensions.includes(extension) && (_jsxs(_Fragment, { children: [_jsx(Loader, { isLoading: isLoading }), _jsx("img", { src: filePath, alt: "Preview Unavailable", className: `photo-popup-image ${isLoading ? "img-loading" : ""}`, onLoad: handleImageLoad, onError: handleImageError, loading: "lazy" })] })), videoExtensions.includes(extension) && (_jsx("video", { src: filePath, className: "video-preview", controls: true, autoPlay: true })), audioExtensions.includes(extension) && (_jsx("audio", { src: filePath, controls: true, autoPlay: true, className: "audio-preview" })), iFrameExtensions.includes(extension) && (_jsx(_Fragment, { children: _jsx("iframe", { src: filePath, onLoad: handleImageLoad, onError: handleImageError, frameBorder: "0", className: `photo-popup-iframe ${isLoading ? "img-loading" : ""}` }) }))] }));
};
export default PreviewFileAction;
