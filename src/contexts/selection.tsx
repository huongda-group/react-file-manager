import {
  createContext,
  useContext,
  useEffect,
  useState,
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
  onSelect?: (files: IFile[]) => void;
  onSelectionChange?: (files: IFile[]) => void;
}

export const SelectionProvider = ({
  children,
  onDownload,
  onSelect,
  onSelectionChange,
}: SelectionProviderProps) => {
  const [selectedFiles, setSelectedFiles] = useState<IFile[]>([]);

  useEffect(() => {
    onSelect?.(selectedFiles);
    onSelectionChange?.(selectedFiles);
  }, [selectedFiles]);

  const handleDownload = () => {
    validateApiCallback(onDownload, "onDownload", selectedFiles);
  };

  return (
    <SelectionContext.Provider
      value={{ selectedFiles, setSelectedFiles, handleDownload }}
    >
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
