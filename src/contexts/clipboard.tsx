import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";
import { useSelection } from "./selection";
import { validateApiCallback } from "../utils/validate-api-callback";
import { IFile } from "../types";

interface ICloneItem {
  files: IFile[];
  isMoving: boolean;
}

export interface IClipBoardContext {
  clipBoard: ICloneItem | null;
  setClipBoard: React.Dispatch<React.SetStateAction<ICloneItem | null>>;
  handleCutCopy: (isMoving: boolean) => void;
  handlePasting: (destinationFolder: IFile | null) => void;
}

const ClipBoardContext = createContext<IClipBoardContext | undefined>(undefined);

interface ClipBoardProviderProps extends PropsWithChildren {
  onPaste?: (
    files: IFile[],
    destination: IFile | null,
    operation: "move" | "copy"
  ) => void;
  onCut?: (files: IFile[]) => void;
  onCopy?: (files: IFile[]) => void;
}

export const ClipBoardProvider = ({
  children,
  onPaste,
  onCut,
  onCopy,
}: ClipBoardProviderProps) => {
  const [clipBoard, setClipBoard] = useState<ICloneItem | null>(null);
  const { selectedFiles, setSelectedFiles } = useSelection();

  const handleCutCopy = (isMoving: boolean) => {
    setClipBoard({
      files: selectedFiles,
      isMoving: isMoving,
    });

    if (isMoving) {
      if (onCut) onCut(selectedFiles);
    } else {
      if (onCopy) onCopy(selectedFiles);
    }
  };

  // Todo: Show error if destination folder already has file(s) with the same name
  const handlePasting = (destinationFolder: IFile | null) => {
    if (destinationFolder && !destinationFolder.isDirectory) return;

    if (clipBoard) {
      const copiedFiles = clipBoard.files;
      const operationType = clipBoard.isMoving ? "move" : "copy";

      validateApiCallback(
        onPaste,
        "onPaste",
        copiedFiles,
        destinationFolder,
        operationType
      );

      if (clipBoard.isMoving) {
        setClipBoard(null);
      }
      setSelectedFiles([]);
    }
  };

  return (
    <ClipBoardContext.Provider
      value={{ clipBoard, setClipBoard, handleCutCopy, handlePasting }}
    >
      {children}
    </ClipBoardContext.Provider>
  );
};

export const useClipBoard = (): IClipBoardContext => {
  const context = useContext(ClipBoardContext);
  if (!context) {
    throw new Error("useClipBoard must be used within a ClipBoardProvider");
  }
  return context;
};
