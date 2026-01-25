import { useEffect, useRef, useState, DragEvent, MouseEvent, KeyboardEvent, RefObject } from "react";
import { FaRegFile, FaRegFolderOpen } from "react-icons/fa6";
import { useFileIcons } from "../../hooks/use-file-icons";
import CreateFolderAction from "../../file-manager/actions/create-folder/create-folder";
import RenameAction from "../../file-manager/actions/rename/rename";
import { getDataSize } from "../../utils/get-data-size";
import { useFileNavigation } from "../../contexts/file-navigation";
import { useSelection } from "../../contexts/selection";
import { useClipBoard } from "../../contexts/clipboard";
import { useLayout } from "../../contexts/layout";
import Checkbox from "../../components/checkbox/checkbox";
import { IFile } from "../../types";
import { IUseTriggerActionReturn } from "../../hooks/use-trigger-action";

const dragIconSize = 50;

interface FileItemProps {
  index: number;
  file: IFile;
  onCreateFolder?: (name: string, parent: IFile | null) => void;
  onRename?: (file: IFile, newName: string) => void;
  enableFilePreview?: boolean;
  onFileOpen: (file: IFile) => void;
  filesViewRef: RefObject<HTMLElement | null>;
  selectedFileIndexes: number[];
  triggerAction: IUseTriggerActionReturn;
  handleContextMenu: (e: MouseEvent, isSelection?: boolean) => void;
  setLastSelectedFile: (file: IFile | null) => void;
  draggable?: boolean;
  formatDate: (date: string | number | Date) => string;
}

const FileItem: React.FC<FileItemProps> = ({
  index,
  file,
  onCreateFolder,
  onRename,
  enableFilePreview,
  onFileOpen,
  filesViewRef,
  selectedFileIndexes,
  triggerAction,
  handleContextMenu,
  setLastSelectedFile,
  draggable,
  formatDate,
}) => {
  const [fileSelected, setFileSelected] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [checkboxClassName, setCheckboxClassName] = useState("hidden");
  const [dropZoneClass, setDropZoneClass] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const { activeLayout } = useLayout();
  const iconSize = activeLayout === "grid" ? 48 : 20;
  const fileIcons = useFileIcons(iconSize);
  const { setCurrentPath, currentPathFiles, onFolderChange } =
    useFileNavigation();
  const { setSelectedFiles } = useSelection();
  const { clipBoard, handleCutCopy, setClipBoard, handlePasting } =
    useClipBoard();
  const dragIconRef = useRef<HTMLDivElement>(null);
  const dragIcons = useFileIcons(dragIconSize);

  const isFileMoving =
    clipBoard?.isMoving &&
    clipBoard.files.find((f) => f.name === file.name && f.path === file.path);

  const handleFileAccess = () => {
    onFileOpen(file);
    if (file.isDirectory) {
      setCurrentPath(file.path);
      onFolderChange?.(file.path);
      setSelectedFiles([]);
    } else {
      enableFilePreview && triggerAction.show("previewFile");
    }
  };

  const handleFileRangeSelection = (shiftKey: boolean, ctrlKey: boolean) => {
    if (selectedFileIndexes.length > 0 && shiftKey) {
      let reverseSelection = false;
      let startRange = selectedFileIndexes[0];
      let endRange = index;

      // Reverse Selection
      if (startRange >= endRange) {
        const temp = startRange;
        startRange = endRange;
        endRange = temp;
        reverseSelection = true;
      }

      const filesRange = currentPathFiles.slice(startRange, endRange + 1);
      setSelectedFiles(reverseSelection ? filesRange.reverse() : filesRange);
    } else if (selectedFileIndexes.length > 0 && ctrlKey) {
      // Remove file from selected files if it already exists on CTRL + Click, otherwise push it in selectedFiles
      setSelectedFiles((prev) => {
        const filteredFiles = prev.filter((f) => f.path !== file.path);
        if (prev.length === filteredFiles.length) {
          return [...prev, file];
        }
        return filteredFiles;
      });
    } else {
      setSelectedFiles([file]);
    }
  };

  const handleFileSelection = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (file.isEditing) return;

    handleFileRangeSelection(e.shiftKey, e.ctrlKey);

    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 300) {
      handleFileAccess();
      return;
    }
    setLastClickTime(currentTime);
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.stopPropagation();
      setSelectedFiles([file]);
      handleFileAccess();
    }
  };

  const handleItemContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (file.isEditing) return;

    if (!fileSelected) {
      setSelectedFiles([file]);
    }

    setLastSelectedFile(file);
    handleContextMenu(e, true);
  };

  // Selection Checkbox Functions
  const handleMouseOver = () => {
    setCheckboxClassName("visible");
  };

  const handleMouseLeave = () => {
    !fileSelected && setCheckboxClassName("hidden");
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedFiles((prev) => [...prev, file]);
    } else {
      setSelectedFiles((prev) =>
        prev.filter((f) => f.name !== file.name && f.path !== file.path)
      );
    }

    setFileSelected(e.target.checked);
  };
  //

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    if (dragIconRef.current) {
      e.dataTransfer.setDragImage(dragIconRef.current, 30, 50);
    }
    e.dataTransfer.effectAllowed = "copy";
    handleCutCopy(true);
  };

  const handleDragEnd = () => setClipBoard(null);

  const handleDragEnterOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (fileSelected || !file.isDirectory) {
      e.dataTransfer.dropEffect = "none";
    } else {
      setTooltipPosition({ x: e.clientX, y: e.clientY + 12 });
      e.dataTransfer.dropEffect = "copy";
      setDropZoneClass("file-drop-zone");
    }
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    // To stay in dragging state for the child elements of the target drop-zone
    const related = e.relatedTarget as Node | null;
    if (
      e.currentTarget &&
      related &&
      !e.currentTarget.contains(related)
    ) {
      setDropZoneClass((prev) => (prev ? "" : prev));
      setTooltipPosition(null);
    }
    // Handle case where relatedTarget is null (dragging out of window)
    if (!related) {
      setDropZoneClass((prev) => (prev ? "" : prev));
      setTooltipPosition(null);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (fileSelected || !file.isDirectory) return;

    handlePasting(file);
    setDropZoneClass((prev) => (prev ? "" : prev));
    setTooltipPosition(null);
  };

  useEffect(() => {
    setFileSelected(selectedFileIndexes.includes(index));
    setCheckboxClassName(
      selectedFileIndexes.includes(index) ? "visible" : "hidden"
    );
  }, [selectedFileIndexes]);

  return (
    <div
      className={`file-item-container ${dropZoneClass} ${fileSelected || !!file.isEditing ? "file-selected" : ""
        } ${isFileMoving ? "file-moving" : ""}`}
      tabIndex={0}
      title={file.name}
      onClick={handleFileSelection}
      onKeyDown={handleOnKeyDown}
      onContextMenu={handleItemContextMenu}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      draggable={fileSelected && draggable}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDragEnterOver}
      onDragOver={handleDragEnterOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="file-item">
        {!file.isEditing && (
          <Checkbox
            name={file.name}
            id={file.name}
            checked={fileSelected}
            className={`selection-checkbox ${checkboxClassName}`}
            onChange={handleCheckboxChange}
            onClick={(e) => e.stopPropagation()}
          />
        )}
        {file.isDirectory ? (
          <FaRegFolderOpen size={iconSize} />
        ) : (
          <>
            {fileIcons[file.name?.split(".").pop()?.toLowerCase() || ""] ?? (
              <FaRegFile size={iconSize} />
            )}
          </>
        )}

        {file.isEditing ? (
          <div className={`rename-file-container ${activeLayout}`}>
            {triggerAction.actionType === "createFolder" ? (
              <CreateFolderAction
                filesViewRef={filesViewRef}
                file={file}
                onCreateFolder={onCreateFolder}
                triggerAction={triggerAction}
              />
            ) : (
              <RenameAction
                filesViewRef={filesViewRef}
                file={file}
                onRename={onRename}
                triggerAction={triggerAction}
              />
            )}
          </div>
        ) : (
          <span className="text-truncate file-name">{file.name}</span>
        )}
      </div>

      {activeLayout === "list" && (
        <>
          <div className="modified-date">{formatDate(file.updatedAt)}</div>
          <div className="size">
            {file?.size && file.size > 0 ? getDataSize(file?.size) : ""}
          </div>
        </>
      )}

      {/* Drag Icon & Tooltip Setup */}
      {tooltipPosition && (
        <div
          style={{
            top: `${tooltipPosition.y}px`,
            left: `${tooltipPosition.x}px`,
          }}
          className="drag-move-tooltip"
        >
          Move to <span className="drop-zone-file-name">{file.name}</span>
        </div>
      )}

      <div ref={dragIconRef} className="drag-icon">
        {file.isDirectory ? (
          <FaRegFolderOpen size={dragIconSize} />
        ) : (
          <>
            {dragIcons[file.name?.split(".").pop()?.toLowerCase() || ""] ?? (
              <FaRegFile size={dragIconSize} />
            )}
          </>
        )}
      </div>
      {/* Drag Icon & Tooltip Setup */}
    </div>
  );
};

export default FileItem;
