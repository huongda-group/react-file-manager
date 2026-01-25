import Loader from "../components/loader/loader";
import Toolbar from "../file-manager/toolbar/toolbar";
import NavigationPane from "../file-manager/navigation-pane/navigation-pane";
import BreadCrumb from "../file-manager/bread-crumb/bread-crumb";
import FileList from "../file-manager/file-list/file-list";
import Actions from "../file-manager/actions/actions";
import { FilesProvider } from "../contexts/files";
import { FileNavigationProvider } from "../contexts/file-navigation";
import { SelectionProvider } from "../contexts/selection";
import { ClipBoardProvider } from "../contexts/clipboard";
import { LayoutProvider } from "../contexts/layout";
import { useTriggerAction } from "../hooks/use-trigger-action";
import { useColumnResize } from "../hooks/use-column-resize";
import PropTypes from "prop-types";
import { dateStringValidator, urlValidator } from "../validators/prop";
import { TranslationProvider } from "../contexts/translation";
import { useMemo, useState } from "react";
import { formatDate as defaultFormatDate } from "../utils/format-date";
import "../file-manager/file-manager.css";

const defaultPermissions = {
  create: true,
  upload: true,
  move: true,
  copy: true,
  rename: true,
  download: true,
  delete: true,
};

const FileManager = ({
  files,
  fileUploadConfig,
  isLoading,
  onCreateFolder,
  onFileUploading = () => { },
  onFileUploaded = () => { },
  onCut,
  onCopy,
  onPaste,
  onRename,
  onDownload,
  onDelete = () => null,
  onLayoutChange = () => { },
  onRefresh,
  onFileOpen = () => { },
  onFolderChange = () => { },
  onSelect,
  onSelectionChange,
  onError = () => { },
  layout = "grid",
  enableFilePreview = true,
  maxFileSize,
  filePreviewPath,
  acceptedFileTypes,
  height = "600px",
  width = "100%",
  initialPath = "",
  filePreviewComponent,
  primaryColor = "#6155b4",
  fontFamily = "Nunito Sans, sans-serif",
  language = "en-US",
  permissions: userPermissions = {},
  collapsibleNav = false,
  defaultNavExpanded = true,
  className = "",
  style = {},
  formatDate = defaultFormatDate,
}) => {
  const [isNavigationPaneOpen, setNavigationPaneOpen] = useState(defaultNavExpanded);
  const triggerAction = useTriggerAction();
  const { containerRef, colSizes, isDragging, handleMouseMove, handleMouseUp, handleMouseDown } =
    useColumnResize(20, 80);
  const customStyles = {
    "--file-manager-font-family": fontFamily,
    "--file-manager-primary-color": primaryColor,
    height,
    width,
  };

  const permissions = useMemo(
    () => ({ ...defaultPermissions, ...userPermissions }),
    [userPermissions]
  );

  return (
    <main
      className={`file-explorer ${className}`}
      onContextMenu={(e) => e.preventDefault()}
      style={{ ...customStyles, ...style }}
    >
      <Loader loading={isLoading} />
      <TranslationProvider language={language}>
        <FilesProvider filesData={files} onError={onError}>
          <FileNavigationProvider initialPath={initialPath} onFolderChange={onFolderChange}>
            <SelectionProvider
              onDownload={onDownload}
              onSelect={onSelect}
              onSelectionChange={onSelectionChange}
            >
              <ClipBoardProvider onPaste={onPaste} onCut={onCut} onCopy={onCopy}>
                <LayoutProvider layout={layout}>
                  <Toolbar
                    onLayoutChange={onLayoutChange}
                    onRefresh={onRefresh}
                    triggerAction={triggerAction}
                    permissions={permissions}
                  />
                  <section
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    className="files-container"
                  >
                    <div
                      className={`navigation-pane ${isNavigationPaneOpen ? "open" : "closed"}`}
                      style={{
                        width: colSizes.col1 + "%",
                      }}
                    >
                      <NavigationPane onFileOpen={onFileOpen} />
                      <div
                        className={`sidebar-resize ${isDragging ? "sidebar-dragging" : ""}`}
                        onMouseDown={handleMouseDown}
                      />
                    </div>

                    <div
                      className="folders-preview"
                      style={{ width: (isNavigationPaneOpen ? colSizes.col2 : 100) + "%" }}
                    >
                      <BreadCrumb
                        collapsibleNav={collapsibleNav}
                        isNavigationPaneOpen={isNavigationPaneOpen}
                        setNavigationPaneOpen={setNavigationPaneOpen}
                      />
                      <FileList
                        onCreateFolder={onCreateFolder}
                        onRename={onRename}
                        onFileOpen={onFileOpen}
                        onRefresh={onRefresh}
                        enableFilePreview={enableFilePreview}
                        triggerAction={triggerAction}
                        permissions={permissions}
                        formatDate={formatDate}
                      />
                    </div>
                  </section>

                  <Actions
                    fileUploadConfig={fileUploadConfig}
                    onFileUploading={onFileUploading}
                    onFileUploaded={onFileUploaded}
                    onDelete={onDelete}
                    onRefresh={onRefresh}
                    maxFileSize={maxFileSize}
                    filePreviewPath={filePreviewPath}
                    filePreviewComponent={filePreviewComponent}
                    acceptedFileTypes={acceptedFileTypes}
                    triggerAction={triggerAction}
                    permissions={permissions}
                  />
                </LayoutProvider>
              </ClipBoardProvider>
            </SelectionProvider>
          </FileNavigationProvider>
        </FilesProvider>
      </TranslationProvider>
    </main>
  );
};

FileManager.displayName = "FileManager";

FileManager.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isDirectory: PropTypes.bool.isRequired,
      path: PropTypes.string.isRequired,
      updatedAt: dateStringValidator,
      size: PropTypes.number,
    })
  ).isRequired,
  fileUploadConfig: PropTypes.shape({
    url: urlValidator,
    headers: PropTypes.objectOf(PropTypes.string),
    method: PropTypes.oneOf(["POST", "PUT"]),
  }),
  isLoading: PropTypes.bool,
  onCreateFolder: PropTypes.func,
  onFileUploading: PropTypes.func,
  onFileUploaded: PropTypes.func,
  onRename: PropTypes.func,
  onDelete: PropTypes.func,
  onCut: PropTypes.func,
  onCopy: PropTypes.func,
  onPaste: PropTypes.func,
  onDownload: PropTypes.func,
  onLayoutChange: PropTypes.func,
  onRefresh: PropTypes.func,
  onFileOpen: PropTypes.func,
  onFolderChange: PropTypes.func,
  onSelect: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onError: PropTypes.func,
  layout: PropTypes.oneOf(["grid", "list"]),
  maxFileSize: PropTypes.number,
  enableFilePreview: PropTypes.bool,
  filePreviewPath: urlValidator,
  acceptedFileTypes: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  initialPath: PropTypes.string,
  filePreviewComponent: PropTypes.func,
  primaryColor: PropTypes.string,
  fontFamily: PropTypes.string,
  language: PropTypes.string,
  permissions: PropTypes.shape({
    create: PropTypes.bool,
    upload: PropTypes.bool,
    move: PropTypes.bool,
    copy: PropTypes.bool,
    rename: PropTypes.bool,
    download: PropTypes.bool,
    delete: PropTypes.bool,
  }),
  collapsibleNav: PropTypes.bool,
  defaultNavExpanded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  formatDate: PropTypes.func,
};

export default FileManager;
