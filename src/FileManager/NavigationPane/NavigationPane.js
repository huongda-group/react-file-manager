import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import FolderTree from "./FolderTree";
import { getParentPath } from "../../utils/getParentPath";
import { useFiles } from "../../contexts/FilesContext";
import { useTranslation } from "../../contexts/TranslationProvider";
import "./NavigationPane.scss";
const NavigationPane = ({ onFileOpen }) => {
    const [foldersTree, setFoldersTree] = useState([]);
    const { files } = useFiles();
    const t = useTranslation();
    const createChildRecursive = (path, foldersStruct) => {
        if (!foldersStruct[path])
            return []; // No children for this path (folder)
        return foldersStruct[path]?.map((folder) => {
            return {
                ...folder,
                subDirectories: createChildRecursive(folder.path, foldersStruct),
            };
        });
    };
    useEffect(() => {
        if (Array.isArray(files)) {
            const folders = files.filter((file) => file.isDirectory);
            // Grouping folders by parent path
            const foldersStruct = Object.groupBy(folders, ({ path }) => getParentPath(path));
            setFoldersTree(() => {
                const rootPath = "";
                return createChildRecursive(rootPath, foldersStruct);
            });
        }
    }, [files]);
    return (_jsx("div", { className: "sb-folders-list", children: foldersTree?.length > 0 ? (_jsx(_Fragment, { children: foldersTree?.map((folder, index) => {
                return _jsx(FolderTree, { folder: folder, onFileOpen: onFileOpen }, index);
            }) })) : (_jsx("div", { className: "empty-nav-pane", children: t("nothingHereYet") })) }));
};
NavigationPane.displayName = "NavigationPane";
export default NavigationPane;
