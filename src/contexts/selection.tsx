import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
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

  const handleDownload = useCallback(() => {
    validateApiCallback(onDownload, "onDownload", selectedFiles);
  }, [onDownload, selectedFiles]);

  // ⚡ Bolt Performance Optimization:
  // Memoized context value prevents excessive re-rendering of all consumers
  // whenever the parent component re-renders.
  const value = useMemo(
    () => ({ selectedFiles, setSelectedFiles, handleDownload }),
    [selectedFiles, setSelectedFiles, handleDownload]
  );

  return (
    <SelectionContext.Provider value={value}>
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
