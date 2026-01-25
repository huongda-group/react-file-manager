import { useRef, MouseEvent } from "react";
import FileItem from "../../file-manager/file-list/file-item";
import { useFileNavigation } from "../../contexts/file-navigation";
import { useLayout } from "../../contexts/layout";
import ContextMenu from "../../components/context-menu/context-menu";
import { useDetectOutsideClick } from "../../hooks/use-detect-outside-click";
import useFileList from "../../file-manager/file-list/use-file-list";
import FilesHeader from "../../file-manager/file-list/files-header";
import { useTranslation } from "../../contexts/translation";
import "../../file-manager/file-list/file-list.css";
import { IFile } from "../../types";
import { IUseTriggerActionReturn } from "../../hooks/use-trigger-action";

interface IPermissions {
  create?: boolean;
  upload?: boolean;
  move?: boolean;
  copy?: boolean;
  rename?: boolean;
  download?: boolean;
  delete?: boolean;
}

interface FileListProps {
  onCreateFolder?: (name: string, parent: IFile | null) => void;
  onRename?: (file: IFile, newName: string) => void;
  onFileOpen: (file: IFile) => void;
  onRefresh: () => void;
  enableFilePreview?: boolean;
  triggerAction: IUseTriggerActionReturn;
  permissions: IPermissions;
  formatDate: (date: string | number | Date) => string;
}

const FileList: React.FC<FileListProps> = ({
  onCreateFolder,
  onRename,
  onFileOpen,
  onRefresh,
  enableFilePreview,
  triggerAction,
  permissions,
  formatDate,
}) => {
  const { currentPathFiles, sortConfig, setSortConfig } = useFileNavigation();
  const filesViewRef = useRef<HTMLDivElement>(null);
  const { activeLayout } = useLayout();
  const t = useTranslation();

  const {
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
  } = useFileList(
    onRefresh,
    enableFilePreview,
    triggerAction,
    permissions,
    onFileOpen
  );

  const contextMenuRef = useDetectOutsideClick(() => setVisible(false));

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div
      ref={filesViewRef}
      className={`files ${activeLayout}`}
      onContextMenu={(e) => handleContextMenu(e as unknown as MouseEvent, false)}
      onClick={unselectFiles}
    >
      {activeLayout === "list" && (
        <FilesHeader
          unselectFiles={unselectFiles}
          onSort={handleSort}
          sortConfig={sortConfig}
        />
      )}

      {currentPathFiles?.length > 0 ? (
        <>
          {currentPathFiles.map((file, index) => (
            <FileItem
              key={file.key || index} // Preferred key from file if available (e.g. from creation)
              index={index}
              file={file}
              onCreateFolder={onCreateFolder}
              onRename={onRename}
              onFileOpen={onFileOpen}
              enableFilePreview={enableFilePreview}
              triggerAction={triggerAction}
              filesViewRef={filesViewRef}
              selectedFileIndexes={selectedFileIndexes}
              handleContextMenu={handleContextMenu}
              setLastSelectedFile={setLastSelectedFile}
              draggable={permissions.move}
              formatDate={formatDate}
            />
          ))}
        </>
      ) : (
        <div className="empty-folder">{t("folderEmpty")}</div>
      )}

      <ContextMenu
        filesViewRef={filesViewRef}
        contextMenuRef={contextMenuRef.ref}
        menuItems={isSelectionCtx ? selecCtxItems : emptySelecCtxItems}
        visible={visible}
        // setVisible is not in ContextMenu props, check conversion
        // ContextMenu conversion: visible: boolean
        // It does not accept setVisible in our previous conversion. Logic uses visible prop.
        clickPosition={clickPosition}
      />
    </div>
  );
};

export default FileList;
