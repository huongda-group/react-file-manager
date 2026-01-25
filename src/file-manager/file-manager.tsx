import { useMemo, useState, CSSProperties, ReactElement, RefObject } from "react";
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
import { LayoutProvider, LayoutType } from "../contexts/layout";
import { useTriggerAction } from "../hooks/use-trigger-action";
import { useColumnResize } from "../hooks/use-column-resize";
import { TranslationProvider } from "../contexts/translation";
import { formatDate as defaultFormatDate } from "../utils/format-date";
import "../file-manager/file-manager.css";
import { IFile } from "../types";
import { IFileUploadConfig } from "./actions/upload-file/upload-file";

interface IPermissions {
  create?: boolean;
  upload?: boolean;
  move?: boolean;
  copy?: boolean;
  rename?: boolean;
  download?: boolean;
  delete?: boolean;
}

interface FileManagerProps {
  files: IFile[];
  fileUploadConfig?: IFileUploadConfig;
  isLoading?: boolean;
  onCreateFolder?: (name: string, parent: IFile | null) => void;
  onFileUploading?: (file: File, parent: IFile | null) => any;
  onFileUploaded?: (response: any) => void;
  onCut?: (files: IFile[]) => void;
  onCopy?: (files: IFile[]) => void;
  onPaste?: (
    files: IFile[],
    destination: IFile | null,
    operation: "move" | "copy"
  ) => void;
  onRename?: (file: IFile, newName: string) => void;
  onDownload?: (files: IFile[]) => void;
  onDelete?: (files: IFile[]) => void;
  onLayoutChange?: (layout: LayoutType) => void;
  onRefresh?: () => void;
  onFileOpen?: (file: IFile) => void;
  onFolderChange?: (path: string) => void;
  onSelect?: (files: IFile[]) => void;
  onSelectionChange?: (files: IFile[]) => void;
  onError?: (error: any) => void;
  layout?: "grid" | "list";
  enableFilePreview?: boolean;
  maxFileSize?: number;
  filePreviewPath?: string;
  acceptedFileTypes?: string;
  height?: string | number;
  width?: string | number;
  initialPath?: string;
  filePreviewComponent?: (file: IFile) => ReactElement;
  primaryColor?: string;
  fontFamily?: string;
  language?: string;
  permissions?: IPermissions;
  collapsibleNav?: boolean;
  defaultNavExpanded?: boolean;
  className?: string;
  style?: CSSProperties;
  formatDate?: (date: string | number | Date) => string;
}

const defaultPermissions: IPermissions = {
  create: true,
  upload: true,
  move: true,
  copy: true,
  rename: true,
  download: true,
  delete: true,
};

const FileManager: React.FC<FileManagerProps> = ({
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
  onRefresh = () => { },
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
  const [isNavigationPaneOpen, setNavigationPaneOpen] =
    useState(defaultNavExpanded);
  const triggerAction = useTriggerAction();
  const {
    containerRef,
    colSizes,
    isDragging,
    handleMouseMove,
    handleMouseUp,
    handleMouseDown,
  } = useColumnResize(20, 80);

  const customStyles: CSSProperties = {
    // @ts-ignore
    "--file-manager-font-family": fontFamily,
    "--file-manager-primary-color": primaryColor,
    height,
    width,
  };

  const permissionsObj = useMemo(
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
          <FileNavigationProvider
            initialPath={initialPath}
            onFolderChange={onFolderChange}
          >
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
                    permissions={permissionsObj}
                  />
                  <section
                    ref={containerRef as RefObject<HTMLDivElement>}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    className="files-container"
                  >
                    <div
                      className={`navigation-pane ${isNavigationPaneOpen ? "open" : "closed"
                        }`}
                      style={{
                        width: colSizes.col1 + "%",
                      }}
                    >
                      <NavigationPane onFileOpen={onFileOpen} />
                      <div
                        className={`sidebar-resize ${isDragging ? "sidebar-dragging" : ""
                          }`}
                        onMouseDown={handleMouseDown}
                      />
                    </div>

                    <div
                      className="folders-preview"
                      style={{
                        width: (isNavigationPaneOpen ? colSizes.col2 : 100) + "%",
                      }}
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
                        permissions={permissionsObj}
                        formatDate={formatDate}
                      />
                    </div>
                  </section>

                  {/* Actions need fileUploadConfig to be potentially undefined, handled in component */}
                  <Actions
                    fileUploadConfig={fileUploadConfig as IFileUploadConfig}
                    onFileUploading={onFileUploading}
                    onFileUploaded={onFileUploaded}
                    onDelete={onDelete}
                    onRefresh={onRefresh}
                    maxFileSize={maxFileSize}
                    filePreviewPath={filePreviewPath}
                    filePreviewComponent={filePreviewComponent}
                    acceptedFileTypes={acceptedFileTypes}
                    triggerAction={triggerAction}
                    permissions={permissionsObj}
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

export default FileManager;
