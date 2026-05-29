import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
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

  // ⚡ Bolt: Memoize context methods to maintain stable references
  const handleDownload = useCallback(() => {
    validateApiCallback(onDownload, "onDownload", selectedFiles);
  }, [onDownload, selectedFiles]);

  // ⚡ Bolt: Wrap Context Provider value in useMemo to prevent widespread
  // re-render cascades across consumer components whenever the provider re-renders.
  const contextValue = useMemo(() => ({
    selectedFiles,
    setSelectedFiles,
    handleDownload
  }), [selectedFiles, setSelectedFiles, handleDownload]);

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
