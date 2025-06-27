import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Loader from "../components/Loader/Loader";
import Toolbar from "./Toolbar/Toolbar";
import NavigationPane from "./NavigationPane/NavigationPane";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import FileList from "./FileList/FileList";
import Actions from "./Actions/Actions";
import { FilesProvider } from "../contexts/FilesContext";
import { FileNavigationProvider } from "../contexts/FileNavigationContext";
import { SelectionProvider } from "../contexts/SelectionContext";
import { ClipBoardProvider } from "../contexts/ClipboardContext";
import { LayoutProvider } from "../contexts/LayoutContext";
import { useTriggerAction } from "../hooks/useTriggerAction";
import { useColumnResize } from "../hooks/useColumnResize";
import { TranslationProvider } from "../contexts/TranslationProvider";
import { useMemo, useState } from "react";
import { defaultPermissions } from "../constants";
import "./FileManager.scss";
const FileManager = ({ files, fileUploadConfig, isLoading, onCreateFolder, onFileUploading = () => ({}), onFileUploaded = () => { }, onCut, onCopy, onPaste, onRename, onDownload, onDelete = () => null, onLayoutChange = () => { }, onRefresh, onFileOpen = () => { }, onSelect, onError = () => { }, layout = "grid", enableFilePreview = true, maxFileSize, filePreviewPath, acceptedFileTypes, height = "600px", width = "100%", initialPath = "", filePreviewComponent, primaryColor = "#6155b4", fontFamily = "Nunito Sans, sans-serif", language = "en", permissions: userPermissions = {}, collapsibleNav = false, defaultNavExpanded = true, }) => {
    const [isNavigationPaneOpen, setNavigationPaneOpen] = useState(defaultNavExpanded);
    const triggerAction = useTriggerAction();
    const { containerRef, colSizes, isDragging, handleMouseMove, handleMouseUp, handleMouseDown } = useColumnResize(20, 80);
    const customStyles = {
        "--file-manager-font-family": fontFamily,
        "--file-manager-primary-color": primaryColor,
        height,
        width,
    };
    const permissions = useMemo(() => ({ ...defaultPermissions, ...userPermissions }), [userPermissions]);
    return (_jsxs("main", { className: "file-explorer", onContextMenu: (e) => e.preventDefault(), style: customStyles, children: [_jsx(Loader, { loading: isLoading }), _jsx(TranslationProvider, { language: language, children: _jsx(FilesProvider, { filesData: files, onError: onError, children: _jsx(FileNavigationProvider, { initialPath: initialPath, children: _jsx(SelectionProvider, { onDownload: onDownload, onSelect: onSelect, children: _jsx(ClipBoardProvider, { onPaste: onPaste, onCut: onCut, onCopy: onCopy, children: _jsxs(LayoutProvider, { layout: layout, children: [_jsx(Toolbar, { onLayoutChange: onLayoutChange, onRefresh: onRefresh, triggerAction: triggerAction, permissions: permissions }), _jsxs("section", { ref: containerRef, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, className: "files-container", children: [_jsxs("div", { className: `navigation-pane ${isNavigationPaneOpen ? "open" : "closed"}`, style: {
                                                        width: colSizes.col1 + "%",
                                                    }, children: [_jsx(NavigationPane, { onFileOpen: onFileOpen }), _jsx("div", { className: `sidebar-resize ${isDragging ? "sidebar-dragging" : ""}`, onMouseDown: handleMouseDown })] }), _jsxs("div", { className: "folders-preview", style: { width: (isNavigationPaneOpen ? colSizes.col2 : 100) + "%" }, children: [_jsx(BreadCrumb, { collapsibleNav: collapsibleNav, isNavigationPaneOpen: isNavigationPaneOpen, setNavigationPaneOpen: setNavigationPaneOpen }), _jsx(FileList, { onCreateFolder: onCreateFolder, onRename: onRename, onFileOpen: onFileOpen, onRefresh: onRefresh, enableFilePreview: enableFilePreview, triggerAction: triggerAction, permissions: permissions })] })] }), _jsx(Actions, { fileUploadConfig: fileUploadConfig, onFileUploading: onFileUploading, onFileUploaded: onFileUploaded, onDelete: onDelete, onRefresh: onRefresh, maxFileSize: maxFileSize, filePreviewPath: filePreviewPath, filePreviewComponent: filePreviewComponent, acceptedFileTypes: acceptedFileTypes, triggerAction: triggerAction, permissions: permissions })] }) }) }) }) }) })] }));
};
FileManager.displayName = "FileManager";
export default FileManager;
