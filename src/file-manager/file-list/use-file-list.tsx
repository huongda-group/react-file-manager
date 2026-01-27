import {
  FilePenLine,
  CheckSquare,
  Copy,
  FolderPlus,
  Grid,
  Scissors,
  List,
  File,
  ClipboardPaste,
  RefreshCw,
  Trash2,
  Download,
  Upload,
  FolderOpen,
  Shield
} from "lucide-react";
import { AnimatedIcon } from "../../components/ui/animated-icon";
import { useClipBoard } from "../../contexts/clipboard";
import { useEffect, useState, MouseEvent } from "react";
import { useSelection } from "../../contexts/selection";
import { useLayout } from "../../contexts/layout";
import { useFileNavigation } from "../../contexts/file-navigation";
import { duplicateNameHandler } from "../../utils/duplicate-name-handler";
import { validateApiCallback } from "../../utils/validate-api-callback";
import { useTranslation } from "../../contexts/translation";
import { IFile } from "../../types";
import { IUseTriggerActionReturn } from "../../hooks/use-trigger-action";
import { IMenuItem } from "../../components/context-menu/sub-menu";

interface IPermissions {
  create?: boolean;
  upload?: boolean;
  move?: boolean;
  copy?: boolean;
  rename?: boolean;
  download?: boolean;
  delete?: boolean;
  chmod?: boolean;
}

const useFileList = (
  onRefresh: () => void,
  enableFilePreview: boolean | undefined,
  triggerAction: IUseTriggerActionReturn,
  permissions: IPermissions,
  onFileOpen: (file: IFile) => void
) => {
  const [selectedFileIndexes, setSelectedFileIndexes] = useState<number[]>([]);
  const [visible, setVisible] = useState(false);
  const [isSelectionCtx, setIsSelectionCtx] = useState(false);
  const [clickPosition, setClickPosition] = useState({ clickX: 0, clickY: 0 });
  const [lastSelectedFile, setLastSelectedFile] = useState<IFile | null>(null);

  const { clipBoard, setClipBoard, handleCutCopy, handlePasting } =
    useClipBoard();
  const { selectedFiles, setSelectedFiles, handleDownload } = useSelection();
  const {
    currentPath,
    setCurrentPath,
    currentPathFiles,
    setCurrentPathFiles,
    onFolderChange,
  } = useFileNavigation();
  const { activeLayout, setActiveLayout } = useLayout();
  const t = useTranslation();

  // Context Menu
  const handleFileOpen = () => {
    if (!lastSelectedFile) return;

    onFileOpen(lastSelectedFile);
    if (lastSelectedFile.isDirectory) {
      setCurrentPath(lastSelectedFile.path);
      onFolderChange?.(lastSelectedFile.path);
      setSelectedFileIndexes([]);
      setSelectedFiles([]);
    } else {
      enableFilePreview && triggerAction.show("previewFile");
    }
    setVisible(false);
  };

  const handleMoveOrCopyItems = (isMoving: boolean) => {
    handleCutCopy(isMoving);
    setVisible(false);
  };

  const handleFilePasting = () => {
    handlePasting(lastSelectedFile);
    setVisible(false);
  };

  const handleRenaming = () => {
    setVisible(false);
    triggerAction.show("rename");
  };

  const handleDownloadItems = () => {
    handleDownload();
    setVisible(false);
  };

  const handleDelete = () => {
    setVisible(false);
    triggerAction.show("delete");
  };

  const handleChmod = () => {
    setVisible(false);
    triggerAction.show("chmod");
  };

  const handleRefresh = () => {
    setVisible(false);
    validateApiCallback(onRefresh, "onRefresh");
    setClipBoard(null);
    setSelectedFiles([]);
  };

  const handleCreateNewFolder = () => {
    triggerAction.show("createFolder");
    setVisible(false);
  };

  const handleUpload = () => {
    setVisible(false);
    triggerAction.show("uploadFile");
  };

  const handleselectAllFiles = () => {
    setSelectedFiles(currentPathFiles);
    setVisible(false);
  };

  const emptySelecCtxItems: IMenuItem[] = [
    {
      title: t("view"),
      icon:
        activeLayout === "grid" ? (
          <AnimatedIcon icon={Grid} size={18} />
        ) : (
          <AnimatedIcon icon={List} size={18} />
        ),
      children: [
        {
          title: t("grid"),
          icon: <AnimatedIcon icon={Grid} size={18} />,
          selected: activeLayout === "grid",
          onClick: () => {
            setActiveLayout("grid");
            setVisible(false);
          },
        },
        {
          title: t("list"),
          icon: <AnimatedIcon icon={List} size={18} />,
          selected: activeLayout === "list",
          onClick: () => {
            setActiveLayout("list");
            setVisible(false);
          },
        },
      ],
    },
    {
      title: t("refresh"),
      icon: <AnimatedIcon icon={RefreshCw} size={18} animation="spin" />,
      onClick: handleRefresh,
      divider: true,
    },
    {
      title: t("newFolder"),
      icon: <AnimatedIcon icon={FolderPlus} size={18} animation="bounce" />,
      onClick: handleCreateNewFolder,
      hidden: !permissions.create,
      divider: !permissions.upload,
    },
    {
      title: t("upload"),
      icon: <AnimatedIcon icon={Upload} size={18} animation="bounce" />,
      onClick: handleUpload,
      divider: true,
      hidden: !permissions.upload,
    },
    {
      title: t("selectAll"),
      icon: <AnimatedIcon icon={CheckSquare} size={18} animation="scale" />,
      onClick: handleselectAllFiles,
    },
  ];

  const selecCtxItems: IMenuItem[] = [
    {
      title: t("open"),
      icon: lastSelectedFile?.isDirectory ? (
        <AnimatedIcon icon={FolderOpen} size={20} />
      ) : (
        <AnimatedIcon icon={File} size={16} />
      ),
      onClick: handleFileOpen,
      divider: true,
    },
    {
      title: t("refresh"),
      icon: <AnimatedIcon icon={RefreshCw} size={18} animation="spin" />,
      onClick: handleRefresh,
      divider: true,
    },
    {
      title: t("cut"),
      icon: <AnimatedIcon icon={Scissors} size={19} />,
      onClick: () => handleMoveOrCopyItems(true),
      divider: !lastSelectedFile?.isDirectory && !permissions.copy,
      hidden: !permissions.move,
    },
    {
      title: t("copy"),
      icon: <AnimatedIcon icon={Copy} strokeWidth={0.1} size={17} />,
      onClick: () => handleMoveOrCopyItems(false),
      divider: !lastSelectedFile?.isDirectory,
      hidden: !permissions.copy,
    },
    {
      title: t("paste"),
      icon: <AnimatedIcon icon={ClipboardPaste} size={18} />,
      onClick: handleFilePasting,
      className: `${clipBoard ? "" : "disable-paste"}`,
      hidden:
        !lastSelectedFile?.isDirectory ||
        (!permissions.move && !permissions.copy),
      divider: true,
    },
    {
      title: t("rename"),
      icon: <AnimatedIcon icon={FilePenLine} size={19} animation="wiggle" />,
      onClick: handleRenaming,
      hidden: selectedFiles.length > 1 || !permissions.rename,
    },
    {
      title: t("chmod"),
      icon: <AnimatedIcon icon={Shield} size={18} />,
      onClick: handleChmod,
      hidden: !permissions.chmod,
    },
    {
      title: t("download"),
      icon: <AnimatedIcon icon={Download} size={18} animation="bounce" />,
      onClick: handleDownloadItems,
      hidden: !permissions.download,
    },
    {
      title: t("delete"),
      icon: <AnimatedIcon icon={Trash2} size={19} animation="shake" />,
      onClick: handleDelete,
      hidden: !permissions.delete,
    },
  ];

  const handleFolderCreating = () => {
    setCurrentPathFiles((prev) => {
      // Create a temporary file object for editing
      const newFile: IFile = {
        _id: "temp-id-" + Date.now(),
        name: duplicateNameHandler("New Folder", true, prev),
        isDirectory: true,
        path: currentPath,
        size: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isEditing: true,
        key: new Date().valueOf().toString(), // Helper property
      };

      return [...prev, newFile];
    });
  };

  const handleItemRenaming = () => {
    setCurrentPathFiles((prev) => {
      const lastFileIndex = selectedFileIndexes[selectedFileIndexes.length - 1];

      if (lastFileIndex === undefined || !prev[lastFileIndex]) {
        triggerAction.close();
        return prev;
      }

      return prev.map((file, index) => {
        if (index === lastFileIndex) {
          return {
            ...file,
            isEditing: true,
          };
        }

        return file;
      });
    });

    setSelectedFileIndexes([]);
    setSelectedFiles([]);
  };

  const unselectFiles = () => {
    setSelectedFileIndexes([]);
    setSelectedFiles((prev) => (prev.length > 0 ? [] : prev));
  };

  const handleContextMenu = (e: MouseEvent, isSelection: boolean = false) => {
    e.preventDefault();
    setClickPosition({ clickX: e.clientX, clickY: e.clientY });
    setIsSelectionCtx(isSelection);
    if (!isSelection) unselectFiles();
    setVisible(true);
  };

  useEffect(() => {
    if (triggerAction.isActive) {
      switch (triggerAction.actionType) {
        case "createFolder":
          handleFolderCreating();
          break;
        case "rename":
          handleItemRenaming();
          break;
      }
    }
  }, [triggerAction.isActive]);

  useEffect(() => {
    setSelectedFileIndexes([]);
    setSelectedFiles([]);
  }, [currentPath]);

  useEffect(() => {
    if (selectedFiles.length > 0) {
      setSelectedFileIndexes(() => {
        return selectedFiles.map((selectedFile) => {
          return currentPathFiles.findIndex(
            (f) => f.path === selectedFile.path
          );
        });
      });
    } else {
      setSelectedFileIndexes([]);
    }
  }, [selectedFiles, currentPathFiles]);

  return {
    emptySelecCtxItems,
    selecCtxItems,
    handleContextMenu,
    unselectFiles,
    visible,
    setVisible,
    setLastSelectedFile,
    selectedFileIndexes,
    clickPosition,
    isSelectionCtx,
  };
};

export default useFileList;
