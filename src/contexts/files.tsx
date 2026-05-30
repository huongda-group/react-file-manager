import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
  PropsWithChildren,
} from "react";
import { IFile } from "../types";

export interface IFilesContext {
  files: IFile[];
  setFiles: React.Dispatch<React.SetStateAction<IFile[]>>;
  getChildren: (file: IFile) => IFile[];
  onError: (error: any) => void;
}

const FilesContext = createContext<IFilesContext | undefined>(undefined);

interface FilesProviderProps extends PropsWithChildren {
  filesData: IFile[];
  onError: (error: any) => void;
}

export const FilesProvider = ({
  children,
  filesData,
  onError,
}: FilesProviderProps) => {
  const [files, setFiles] = useState<IFile[]>(filesData);

  // Sync files with filesData whenever prop changes
  useEffect(() => {
    setFiles(filesData);
  }, [filesData]);

  // ⚡ Bolt: Memoized getChildren function to maintain reference equality
  // between renders unless files array changes
  const getChildren = useCallback((file: IFile): IFile[] => {
    if (!file.isDirectory) return [];

    return files.filter(
      (child) => child.path === `${file.path}/${child.name}`
    );
  }, [files]);

  // ⚡ Bolt: Memoized context value to prevent unnecessary re-render cascades
  // in all child components that consume this context
  const value = useMemo(
    () => ({ files, setFiles, getChildren, onError }),
    [files, setFiles, getChildren, onError]
  );

  return (
    <FilesContext.Provider value={value}>
      {children}
    </FilesContext.Provider>
  );
};

export const useFiles = (): IFilesContext => {
  const context = useContext(FilesContext);
  if (!context) {
    throw new Error("useFiles must be used within a FilesProvider");
  }
  return context;
};
