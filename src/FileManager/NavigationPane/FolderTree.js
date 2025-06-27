import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import Collapse from "../../components/Collapse/Collapse";
import { FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
const FolderTree = ({ folder, onFileOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const { currentPath, setCurrentPath } = useFileNavigation();
    const handleFolderSwitch = () => {
        setIsActive(true);
        onFileOpen(folder);
        setCurrentPath(folder.path);
    };
    const handleCollapseChange = (e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    };
    useEffect(() => {
        setIsActive(currentPath === folder.path); //Setting isActive to a folder if its path matches currentPath
        // Auto expand parent folder if its child is accessed via file navigation
        // Explanation: Checks if the current folder's parent path matches with any folder path i.e. Folder's parent
        // then expand that parent.
        const currentPathArray = currentPath.split("/");
        currentPathArray.pop(); //splits with '/' and pops to remove last element to get current folder's parent path
        const currentFolderParentPath = currentPathArray.join("/");
        if (currentFolderParentPath === folder.path) {
            setIsOpen(true);
        }
        //
    }, [currentPath]);
    if (folder.subDirectories.length > 0) {
        return (_jsxs(_Fragment, { children: [_jsxs("div", { className: `sb-folders-list-item ${isActive ? "active-list-item" : ""}`, onClick: handleFolderSwitch, children: [_jsx("span", { onClick: handleCollapseChange, children: _jsx(MdKeyboardArrowRight, { size: 20, className: `folder-icon-default ${isOpen ? "folder-rotate-down" : ""}` }) }), _jsxs("div", { className: "sb-folder-details", children: [isOpen || isActive ? (_jsx(FaRegFolderOpen, { size: 20, className: "folder-open-icon" })) : (_jsx(FaRegFolder, { size: 17, className: "folder-close-icon" })), _jsx("span", { className: "sb-folder-name", title: folder.name, children: folder.name })] })] }), _jsx(Collapse, { open: isOpen, children: _jsx("div", { className: "folder-collapsible", children: folder.subDirectories.map((item, index) => (_jsx(FolderTree, { folder: item, onFileOpen: onFileOpen }, index))) }) })] }));
    }
    else {
        return (_jsxs("div", { className: `sb-folders-list-item ${isActive ? "active-list-item" : ""}`, onClick: handleFolderSwitch, children: [_jsx("span", { className: "non-expanable" }), _jsxs("div", { className: "sb-folder-details", children: [isActive ? (_jsx(FaRegFolderOpen, { size: 20, className: "folder-open-icon" })) : (_jsx(FaRegFolder, { size: 17, className: "folder-close-icon" })), _jsx("span", { className: "sb-folder-name", title: folder.name, children: folder.name })] })] }));
    }
};
export default FolderTree;
