import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
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

  // ⚡ Bolt: Memoize the context value to prevent unnecessary re-renders of consumer components
  // Without this, the inline object passed to value={} would recreate on every render,
  // causing widespread rendering cascades across the application.
  const contextValue = useMemo(() => {
    const getChildren = (file: IFile): IFile[] => {
      if (!file.isDirectory) return [];

      return files.filter(
        (child) => child.path === `${file.path}/${child.name}`
      );
    };

    return { files, setFiles, getChildren, onError };
  }, [files, onError]);

  return (
    <FilesContext.Provider value={contextValue}>
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
