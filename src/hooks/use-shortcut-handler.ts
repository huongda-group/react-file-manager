import { useKeyPress } from "./use-key-press";
import { shortcuts } from "../utils/shortcuts";
import { useClipBoard } from "../contexts/clipboard";
import { useFileNavigation } from "../contexts/file-navigation";
import { useSelection } from "../contexts/selection";
import { useLayout } from "../contexts/layout";
import { validateApiCallback } from "../utils/validate-api-callback";
import { IUseTriggerActionReturn } from "./use-trigger-action";

interface IPermissions {
  create?: boolean;
  upload?: boolean;
  move?: boolean;
  copy?: boolean;
  rename?: boolean;
  download?: boolean;
  delete?: boolean;
}

export const useShortcutHandler = (
  triggerAction: IUseTriggerActionReturn,
  onRefresh: () => void,
  permissions: IPermissions
) => {
  const { setClipBoard, handleCutCopy, handlePasting } = useClipBoard();
  const { currentFolder, currentPathFiles } = useFileNavigation();
  const { selectedFiles, setSelectedFiles, handleDownload } = useSelection();
  const { setActiveLayout } = useLayout();

  const triggerCreateFolder = () => {
    if (permissions.create) triggerAction.show("createFolder");
  };

  const triggerUploadFiles = () => {
    if (permissions.upload) triggerAction.show("uploadFile");
  };

  const triggerCutItems = () => {
    if (permissions.move) handleCutCopy(true);
  };

  const triggerCopyItems = () => {
    if (permissions.copy) handleCutCopy(false);
  };

  const triggerPasteItems = () => {
    handlePasting(currentFolder);
  };

  const triggerRename = () => {
    if (permissions.rename) triggerAction.show("rename");
  };

  const triggerDownload = () => {
    if (permissions.download) handleDownload();
  };

  const triggerDelete = () => {
    if (permissions.delete && selectedFiles.length) {
      triggerAction.show("delete");
    }
  };

  const triggerSelectFirst = () => {
    if (currentPathFiles.length > 0) {
      setSelectedFiles([currentPathFiles[0]]);
    }
  };

  const triggerSelectLast = () => {
    if (currentPathFiles.length > 0) {
      const last = currentPathFiles[currentPathFiles.length - 1];
      if (last) setSelectedFiles([last]);
    }
  };

  const triggerSelectAll = () => {
    setSelectedFiles(currentPathFiles);
  };

  const triggerClearSelection = () => {
    setSelectedFiles((prev) => (prev.length > 0 ? [] : prev));
  };

  const triggerRefresh = () => {
    validateApiCallback(onRefresh, "onRefresh");
    setClipBoard(null);
  };

  const triggerGridLayout = () => {
    setActiveLayout("grid");
  };
  const triggerListLayout = () => {
    setActiveLayout("list");
  };

  // Keypress detection will be disbaled when some Action is in active state.
  useKeyPress(shortcuts.createFolder, triggerCreateFolder, triggerAction.isActive);
  useKeyPress(shortcuts.uploadFiles, triggerUploadFiles, triggerAction.isActive);
  useKeyPress(shortcuts.cut, triggerCutItems, triggerAction.isActive);
  useKeyPress(shortcuts.copy, triggerCopyItems, triggerAction.isActive);
  useKeyPress(shortcuts.paste, triggerPasteItems, triggerAction.isActive);
  useKeyPress(shortcuts.rename, triggerRename, triggerAction.isActive);
  useKeyPress(shortcuts.download, triggerDownload, triggerAction.isActive);
  useKeyPress(shortcuts.delete, triggerDelete, triggerAction.isActive);
  useKeyPress(shortcuts.jumpToFirst, triggerSelectFirst, triggerAction.isActive);
  useKeyPress(shortcuts.jumpToLast, triggerSelectLast, triggerAction.isActive);
  useKeyPress(shortcuts.selectAll, triggerSelectAll, triggerAction.isActive);
  useKeyPress(shortcuts.clearSelection, triggerClearSelection, triggerAction.isActive);
  useKeyPress(shortcuts.refresh, triggerRefresh, triggerAction.isActive);
  useKeyPress(shortcuts.gridLayout, triggerGridLayout, triggerAction.isActive);
  useKeyPress(shortcuts.listLayout, triggerListLayout, triggerAction.isActive);
};
