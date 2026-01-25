import {
  createContext,
  useContext,
  useEffect,
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
  setCurrentFolder: React.Dispatch<React.SetStateAction<IFile | null>>;
  currentPathFiles: IFile[];
  setCurrentPathFiles: React.Dispatch<React.SetStateAction<IFile[]>>;
  sortConfig: ISortConfig;
  setSortConfig: React.Dispatch<React.SetStateAction<ISortConfig>>;
  onFolderChange?: (path: string) => void;
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
  const [currentFolder, setCurrentFolder] = useState<IFile | null>(null);
  const [currentPathFiles, setCurrentPathFiles] = useState<IFile[]>([]);
  const [sortConfig, setSortConfig] = useState<ISortConfig>({
    key: "name",
    direction: "asc",
  });

  useEffect(() => {
    if (Array.isArray(files) && files.length > 0) {
      setCurrentPathFiles(() => {
        const currPathFiles = files.filter(
          (file) => file.path === `${currentPath}/${file.name}`
        );
        return sortFiles(
          currPathFiles,
          sortConfig.key,
          sortConfig.direction
        );
      });

      setCurrentFolder(() => {
        return files.find((file) => file.path === currentPath) ?? null;
      });
    } else {
      setCurrentPathFiles([]);
      setCurrentFolder(null);
    }
  }, [files, currentPath, sortConfig]);

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
  }, [files]);

  return (
    <FileNavigationContext.Provider
      value={{
        currentPath,
        setCurrentPath,
        currentFolder,
        setCurrentFolder,
        currentPathFiles,
        setCurrentPathFiles,
        sortConfig,
        setSortConfig,
        onFolderChange,
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
