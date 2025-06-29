import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import Button from "../../../components/Button/Button";
import { AiOutlineCloudUpload } from "react-icons/ai";
import UploadItem from "./UploadItem";
import Loader from "../../../components/Loader/Loader";
import { useFileNavigation } from "../../../contexts/FileNavigationContext";
import { getFileExtension } from "../../../utils/getFileExtension";
import { getDataSize } from "../../../utils/getDataSize";
import { useFiles } from "../../../contexts/FilesContext";
import { useTranslation } from "../../../contexts/TranslationProvider";
import "./UploadFile.action.scss";
const UploadFileAction = ({ fileUploadConfig, maxFileSize, acceptedFileTypes, onFileUploading, onFileUploaded, }) => {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState({});
    const { currentFolder, currentPathFiles } = useFileNavigation();
    const { onError } = useFiles();
    const fileInputRef = useRef(null);
    const t = useTranslation();
    // To open choose file if the "Choose File" button is focused and Enter key is pressed
    const handleChooseFileKeyDown = (e) => {
        if (e.key === "Enter") {
            fileInputRef.current.click();
        }
    };
    const checkFileError = (file) => {
        if (acceptedFileTypes) {
            const extError = !acceptedFileTypes.includes(getFileExtension(file.name));
            if (extError)
                return t("fileTypeNotAllowed");
        }
        const fileExists = currentPathFiles.some((item) => item.name.toLowerCase() === file.name.toLowerCase() && !item.isDirectory);
        if (fileExists)
            return t("fileAlreadyExist");
        const sizeError = maxFileSize && file.size > maxFileSize;
        if (sizeError)
            return `${t("maxUploadSize")} ${getDataSize(maxFileSize, 0)}.`;
    };
    const setSelectedFiles = (selectedFiles) => {
        selectedFiles = selectedFiles.filter((item) => !files.some((fileData) => fileData.file.name.toLowerCase() === item.name.toLowerCase()));
        if (selectedFiles.length > 0) {
            const newFiles = selectedFiles.map((file) => {
                const appendData = onFileUploading(file, currentFolder);
                const error = checkFileError(file);
                error && onError({ type: "upload", message: error }, file);
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
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        setSelectedFiles(droppedFiles);
    };
    const handleChooseFile = (e) => {
        const choosenFiles = Array.from(e.target.files);
        setSelectedFiles(choosenFiles);
    };
    const handleFileRemove = (index) => {
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
            if (newFiles.every((file) => !!file.removed))
                return [];
            return newFiles;
        });
    };
    return (_jsxs("div", { className: `fm-upload-file ${files.length > 0 ? "file-selcted" : ""}`, children: [_jsxs("div", { className: "select-files", children: [_jsx("div", { className: `draggable-file-input ${isDragging ? "dragging" : ""}`, onDrop: handleDrop, onDragOver: (e) => e.preventDefault(), onDragEnter: () => setIsDragging(true), onDragLeave: () => setIsDragging(false), children: _jsxs("div", { className: "input-text", children: [_jsx(AiOutlineCloudUpload, { size: 30 }), _jsx("span", { children: t("dragFileToUpload") })] }) }), _jsx("div", { className: "btn-choose-file", children: _jsxs(Button, { padding: "0", onKeyDown: handleChooseFileKeyDown, children: [_jsx("label", { htmlFor: "chooseFile", children: t("chooseFile") }), _jsx("input", { ref: fileInputRef, type: "file", id: "chooseFile", className: "choose-file-input", onChange: handleChooseFile, multiple: true, accept: acceptedFileTypes })] }) })] }), files.length > 0 && (_jsxs("div", { className: "files-progress", children: [_jsx("div", { className: "heading", children: Object.values(isUploading).some((fileUploading) => fileUploading) ? (_jsxs(_Fragment, { children: [_jsx("h2", { children: t("uploading") }), _jsx(Loader, { loading: true, className: "upload-loading" })] })) : (_jsx("h2", { children: t("completed") })) }), _jsx("ul", { children: files.map((fileData, index) => (_jsx(UploadItem, { index: index, fileData: fileData, setFiles: setFiles, fileUploadConfig: fileUploadConfig, setIsUploading: setIsUploading, onFileUploaded: onFileUploaded, handleFileRemove: handleFileRemove }, index))) })] }))] }));
};
export default UploadFileAction;
