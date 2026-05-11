import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  PropsWithChildren,
} from "react";
import { validateApiCallback } from "../utils/validate-api-callback";
import { IFile } from "../types";

export interface ISelectionContext {
  selectedFiles: IFile[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<IFile[]>>;
  handleDownload: () => void;
}

const SelectionContext = createContext<ISelectionContext | undefined>(undefined);

interface SelectionProviderProps extends PropsWithChildren {
  onDownload?: (files: IFile[]) => void;

  onSelectionChange?: (files: IFile[]) => void;
}

export const SelectionProvider = ({
  children,
  onDownload,

  onSelectionChange,
}: SelectionProviderProps) => {
  const [selectedFiles, setSelectedFiles] = useState<IFile[]>([]);

  useEffect(() => {

    onSelectionChange?.(selectedFiles);
  }, [selectedFiles]);

  // ⚡ Bolt: Memoize the context value to prevent unnecessary re-renders of consumer components
  // Without this, the inline object passed to value={} would recreate on every render,
  // causing widespread rendering cascades across the application.
  const contextValue = useMemo(() => {
    const handleDownload = () => {
      validateApiCallback(onDownload, "onDownload", selectedFiles);
    };
    return { selectedFiles, setSelectedFiles, handleDownload };
  }, [selectedFiles, onDownload]);

  return (
    <SelectionContext.Provider value={contextValue}>
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = (): ISelectionContext => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within a SelectionProvider");
  }
  return context;
};
