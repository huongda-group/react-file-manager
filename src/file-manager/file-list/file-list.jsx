import { useRef } from "react";
import FileItem from "../../file-manager/file-list/file-item";
import { useFileNavigation } from "../../contexts/file-navigation-context";
import { useLayout } from "../../contexts/layout-context";
import ContextMenu from "../../components/context-menu/context-menu";
import { useDetectOutsideClick } from "../../hooks/use-detect-outside-click";
import useFileList from "../../file-manager/file-list/use-file-list";
import FilesHeader from "../../file-manager/file-list/files-header";
import { useTranslation } from "../../contexts/translation-provider";
import "../../file-manager/file-list/file-list.scss";

const FileList = ({
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
  const filesViewRef = useRef(null);
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
  } = useFileList(onRefresh, enableFilePreview, triggerAction, permissions, onFileOpen);

  const contextMenuRef = useDetectOutsideClick(() => setVisible(false));

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div
      ref={filesViewRef}
      className={`files ${activeLayout}`}
      onContextMenu={handleContextMenu}
      onClick={unselectFiles}
    >
      {activeLayout === "list" && (
        <FilesHeader unselectFiles={unselectFiles} onSort={handleSort} sortConfig={sortConfig} />
      )}

      {currentPathFiles?.length > 0 ? (
        <>
          {currentPathFiles.map((file, index) => (
            <FileItem
              key={index}
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
              setVisible={setVisible}
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
        setVisible={setVisible}
        clickPosition={clickPosition}
      />
    </div>
  );
};

FileList.displayName = "FileList";

export default FileList;
