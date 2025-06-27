import Loader from "../components/Loader/Loader";
import Toolbar from "./Toolbar/Toolbar";
import NavigationPane from "./NavigationPane/NavigationPane";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import FileList from "./FileList/FileList";
import Actions from "./Actions/Actions";
import { FilesProvider } from "../contexts/FilesContext";
import { FileNavigationProvider } from "../contexts/FileNavigationContext";
import { SelectionProvider } from "../contexts/SelectionContext";
import { ClipBoardProvider } from "../contexts/ClipboardContext";
import { LayoutProvider } from "../contexts/LayoutContext";
import { useTriggerAction } from "../hooks/useTriggerAction";
import { useColumnResize } from "../hooks/useColumnResize";
import { TranslationProvider } from "../contexts/TranslationProvider";
import { useMemo, useState, FC, CSSProperties } from "react";
import { defaultPermissions } from "../constants";
import { FileItem, FileManagerProps } from "../types";
import "./FileManager.scss";

interface Permissions {
  create?: boolean;
  upload?: boolean;
  move?: boolean;
  copy?: boolean;
  rename?: boolean;
  download?: boolean;
  delete?: boolean;
}

const FileManager: FC<FileManagerProps> = ({
  files,
  fileUploadConfig,
  isLoading,
  onCreateFolder,
  onFileUploading = () => ({}),
  onFileUploaded = () => {},
  onCut,
  onCopy,
  onPaste,
  onRename,
  onDownload,
  onDelete = () => null,
  onLayoutChange = () => {},
  onRefresh,
  onFileOpen = () => {},
  onSelect,
  onError = () => {},
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
  language = "en",
  permissions: userPermissions = {},
  collapsibleNav = false,
  defaultNavExpanded = true,
}) => {
  const [isNavigationPaneOpen, setNavigationPaneOpen] = useState<boolean>(defaultNavExpanded);
  const triggerAction = useTriggerAction();
  const { containerRef, colSizes, isDragging, handleMouseMove, handleMouseUp, handleMouseDown } =
    useColumnResize(20, 80);
  const customStyles: CSSProperties = {
    "--file-manager-font-family": fontFamily,
    "--file-manager-primary-color": primaryColor,
    height,
    width,
  } as CSSProperties;

  const permissions = useMemo<Permissions>(
    () => ({ ...defaultPermissions, ...userPermissions }),
    [userPermissions]
  );

  return (
    <main className="file-explorer" onContextMenu={(e) => e.preventDefault()} style={customStyles}>
      <Loader loading={isLoading} className="" />
      <TranslationProvider language={language}>
        <FilesProvider filesData={files} onError={onError}>
          <FileNavigationProvider initialPath={initialPath}>
            <SelectionProvider onDownload={onDownload} onSelect={onSelect}>
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

export default FileManager;
