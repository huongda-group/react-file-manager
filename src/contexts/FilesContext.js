import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
const FilesContext = createContext();
export const FilesProvider = ({ children, filesData, onError }) => {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        setFiles(filesData);
    }, [filesData]);
    const getChildren = (file) => {
        if (!file.isDirectory)
            return [];
        return files.filter((child) => child.path === `${file.path}/${child.name}`);
    };
    return (_jsx(FilesContext.Provider, { value: { files, setFiles, getChildren, onError }, children: children }));
};
export const useFiles = () => useContext(FilesContext);
