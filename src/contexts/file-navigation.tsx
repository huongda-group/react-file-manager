import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  PropsWithChildren,
} from "react";
import { useFiles } from "./files";
import sortFiles from "../utils/sort-files";
import { IFile } from "../types";

interface ISortConfig {
  key: string;
  direction: "asc" | "desc";
}

export interface IFileNavigationContext {
  currentPath: string;
  setCurrentPath: React.Dispatch<React.SetStateAction<string>>;
  currentFolder: IFile | null;
  currentPathFiles: IFile[];
  sortConfig: ISortConfig;
  setSortConfig: React.Dispatch<React.SetStateAction<ISortConfig>>;
  onFolderChange?: (path: string) => void;
  // Editing state
  editingFileId: string | null;
  setEditingFileId: React.Dispatch<React.SetStateAction<string | null>>;
  // Temp new folder for creation
  tempNewFolder: IFile | null;
  setTempNewFolder: React.Dispatch<React.SetStateAction<IFile | null>>;
}

const FileNavigationContext = createContext<IFileNavigationContext | undefined>(
  undefined
);

interface FileNavigationProviderProps extends PropsWithChildren {
  initialPath: string;
  onFolderChange?: (path: string) => void;
}

export const FileNavigationProvider = ({
  children,
  initialPath,
  onFolderChange,
}: FileNavigationProviderProps) => {
  const { files } = useFiles();
  const isMountRef = useRef(false);
  const [currentPath, setCurrentPath] = useState("");
  const [sortConfig, setSortConfig] = useState<ISortConfig>({
    key: "name",
    direction: "asc",
  });

  // Local UI state for editing and temp folder
  const [editingFileId, setEditingFileId] = useState<string | null>(null);
  const [tempNewFolder, setTempNewFolder] = useState<IFile | null>(null);

  // Pure derived state - currentPathFiles is always computed from files
  const currentPathFiles = useMemo(() => {
    if (!Array.isArray(files)) return [];

    // Filter files for current path
    const filtered = files.filter(
      (file) => file.path === `${currentPath}/${file.name}`
    );

    // Sort files
    const sorted = sortFiles(filtered, sortConfig.key, sortConfig.direction);

    // Add isEditing flag based on editingFileId
    const withEditingFlag = sorted.map((file) => ({
      ...file,
      isEditing: file._id === editingFileId,
    }));

    // Prepend temp new folder if exists
    if (tempNewFolder) {
      return [{ ...tempNewFolder, isEditing: true }, ...withEditingFlag];
    }

    return withEditingFlag;
  }, [files, currentPath, sortConfig, editingFileId, tempNewFolder]);

  // Compute current folder
  const currentFolder = useMemo(() => {
    if (!Array.isArray(files)) return null;
    return files.find((file) => file.path === currentPath) ?? null;
  }, [files, currentPath]);

  // Set initial path on first mount when files are available
  useEffect(() => {
    if (!isMountRef.current && Array.isArray(files) && files.length > 0) {
      const activePath = files.some(
        (file) => file.isDirectory && file.path === initialPath
      )
        ? initialPath
        : "";
      setCurrentPath(activePath);
      isMountRef.current = true;
    }
  }, [files, initialPath]);

  // Clear editing state when path changes
  useEffect(() => {
    setEditingFileId(null);
    setTempNewFolder(null);
  }, [currentPath]);

  return (
    <FileNavigationContext.Provider
      value={{
        currentPath,
        setCurrentPath,
        currentFolder,
        currentPathFiles,
        sortConfig,
        setSortConfig,
        onFolderChange,
        editingFileId,
        setEditingFileId,
        tempNewFolder,
        setTempNewFolder,
      }}
    >
      {children}
    </FileNavigationContext.Provider>
  );
};

export const useFileNavigation = (): IFileNavigationContext => {
  const context = useContext(FileNavigationContext);
  if (!context) {
    throw new Error(
      "useFileNavigation must be used within a FileNavigationProvider"
    );
  }
  return context;
};
