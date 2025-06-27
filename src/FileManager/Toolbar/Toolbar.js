import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { BsCopy, BsFolderPlus, BsGridFill, BsScissors } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { MdClear, MdOutlineDelete, MdOutlineFileDownload, MdOutlineFileUpload, } from "react-icons/md";
import { BiRename } from "react-icons/bi";
import { FaListUl, FaRegPaste } from "react-icons/fa6";
import LayoutToggler from "./LayoutToggler";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import { useSelection } from "../../contexts/SelectionContext";
import { useClipBoard } from "../../contexts/ClipboardContext";
import { useLayout } from "../../contexts/LayoutContext";
import { validateApiCallback } from "../../utils/validateApiCallback";
import { useTranslation } from "../../contexts/TranslationProvider";
import "./Toolbar.scss";
const Toolbar = ({ onLayoutChange, onRefresh, triggerAction, permissions }) => {
    const [showToggleViewMenu, setShowToggleViewMenu] = useState(false);
    const { currentFolder } = useFileNavigation();
    const { selectedFiles, setSelectedFiles, handleDownload } = useSelection();
    const { clipBoard, setClipBoard, handleCutCopy, handlePasting } = useClipBoard();
    const { activeLayout } = useLayout();
    const t = useTranslation();
    // Toolbar Items
    const toolbarLeftItems = [
        {
            icon: _jsx(BsFolderPlus, { size: 17, strokeWidth: 0.3 }),
            text: t("newFolder"),
            permission: permissions.create,
            onClick: () => triggerAction.show("createFolder"),
        },
        {
            icon: _jsx(MdOutlineFileUpload, { size: 18 }),
            text: t("upload"),
            permission: permissions.upload,
            onClick: () => triggerAction.show("uploadFile"),
        },
        {
            icon: _jsx(FaRegPaste, { size: 18 }),
            text: t("paste"),
            permission: !!clipBoard,
            onClick: handleFilePasting,
        },
    ];
    const toolbarRightItems = [
        {
            icon: activeLayout === "grid" ? _jsx(BsGridFill, { size: 16 }) : _jsx(FaListUl, { size: 16 }),
            title: t("changeView"),
            onClick: () => setShowToggleViewMenu((prev) => !prev),
        },
        {
            icon: _jsx(FiRefreshCw, { size: 16 }),
            title: t("refresh"),
            onClick: () => {
                validateApiCallback(onRefresh, "onRefresh");
                setClipBoard(null);
            },
        },
    ];
    function handleFilePasting() {
        handlePasting(currentFolder);
    }
    const handleDownloadItems = () => {
        handleDownload();
        setSelectedFiles([]);
    };
    // Selected File/Folder Actions
    if (selectedFiles.length > 0) {
        return (_jsx("div", { className: "toolbar file-selected", children: _jsxs("div", { className: "file-action-container", children: [_jsxs("div", { children: [permissions.move && (_jsxs("button", { className: "item-action file-action", onClick: () => handleCutCopy(true), children: [_jsx(BsScissors, { size: 18 }), _jsx("span", { children: t("cut") })] })), permissions.copy && (_jsxs("button", { className: "item-action file-action", onClick: () => handleCutCopy(false), children: [_jsx(BsCopy, { strokeWidth: 0.1, size: 17 }), _jsx("span", { children: t("copy") })] })), clipBoard?.files?.length > 0 && (_jsxs("button", { className: "item-action file-action", onClick: handleFilePasting, children: [_jsx(FaRegPaste, { size: 18 }), _jsx("span", { children: t("paste") })] })), selectedFiles.length === 1 && permissions.rename && (_jsxs("button", { className: "item-action file-action", onClick: () => triggerAction.show("rename"), children: [_jsx(BiRename, { size: 19 }), _jsx("span", { children: t("rename") })] })), permissions.download && (_jsxs("button", { className: "item-action file-action", onClick: handleDownloadItems, children: [_jsx(MdOutlineFileDownload, { size: 19 }), _jsx("span", { children: t("download") })] })), permissions.delete && (_jsxs("button", { className: "item-action file-action", onClick: () => triggerAction.show("delete"), children: [_jsx(MdOutlineDelete, { size: 19 }), _jsx("span", { children: t("delete") })] }))] }), _jsxs("button", { className: "item-action file-action", title: t("clearSelection"), onClick: () => setSelectedFiles([]), children: [_jsxs("span", { children: [selectedFiles.length, " ", t(selectedFiles.length > 1 ? "itemsSelected" : "itemSelected")] }), _jsx(MdClear, { size: 18 })] })] }) }));
    }
    //
    return (_jsx("div", { className: "toolbar", children: _jsxs("div", { className: "fm-toolbar", children: [_jsx("div", { children: toolbarLeftItems
                        .filter((item) => item.permission)
                        .map((item, index) => (_jsxs("button", { className: "item-action", onClick: item.onClick, children: [item.icon, _jsx("span", { children: item.text })] }, index))) }), _jsxs("div", { children: [toolbarRightItems.map((item, index) => (_jsxs("div", { className: "toolbar-left-items", children: [_jsx("button", { className: "item-action icon-only", title: item.title, onClick: item.onClick, children: item.icon }), index !== toolbarRightItems.length - 1 && _jsx("div", { className: "item-separator" })] }, index))), showToggleViewMenu && (_jsx(LayoutToggler, { setShowToggleViewMenu: setShowToggleViewMenu, onLayoutChange: onLayoutChange }))] })] }) }));
};
Toolbar.displayName = "Toolbar";
export default Toolbar;
