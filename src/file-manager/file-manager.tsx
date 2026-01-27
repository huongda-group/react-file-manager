import { useMemo, useState, CSSProperties, ReactElement, RefObject, useEffect, useRef } from "react";
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
import { ThemeProvider } from "../contexts/theme";
import { formatDate as defaultFormatDate } from "../utils/format-date";
import "../styles/variables.css";
import "../file-manager/file-manager.css";
import { IFile } from "../types";
interface ICallbackResult {
  status: boolean;
  message: string;
}

interface IPermissions {
  create?: boolean;
  upload?: boolean;
  move?: boolean;
  copy?: boolean;
  rename?: boolean;
  download?: boolean;
  delete?: boolean;
  chmod?: boolean;
  compress?: boolean;
  decompress?: boolean;
}

interface FileManagerProps {
  files: IFile[];
  onUpload?: (file: File) => Promise<any>;
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
  onCompress?: (files: IFile[], callback: (result: ICallbackResult) => void) => void;
  onDecompress?: (files: IFile[], callback: (result: ICallbackResult) => void) => void;
  onChmod?: (files: IFile[], permissions: string) => void;
  onLayoutChange?: (layout: LayoutType) => void;
  onRefresh?: () => void;
  onFileOpen?: (file: IFile) => void;
  onFolderChange?: (path: string) => void;

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
  theme?: "light" | "dark";
}

const defaultPermissions: IPermissions = {
  create: true,
  upload: true,
  move: true,
  copy: true,
  rename: true,
  download: true,
  delete: true,
  chmod: true,
  compress: true,
  decompress: true,
};

const FileManager: React.FC<FileManagerProps> = ({
  files,
  onUpload,
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
  onCompress,
  onDecompress,
  onChmod,
  onLayoutChange = () => { },
  onRefresh,
  onFileOpen = () => { },
  onFolderChange = () => { },

  onSelectionChange,
  onError = () => { },
  layout = "list",
  enableFilePreview = true,
  maxFileSize,
  filePreviewPath,
  acceptedFileTypes,
  height = "600px",
  width = "100%",
  initialPath = "",
  filePreviewComponent,
  primaryColor = "#6155b4",
  fontFamily = "inherit",
  language = "en-US",
  permissions: userPermissions = {},
  collapsibleNav = false,
  defaultNavExpanded = true,
  className = "",
  style = {},
  formatDate = defaultFormatDate,
  theme = "dark",
}) => {
  const [isNavigationPaneOpen, setNavigationPaneOpen] =
    useState(defaultNavExpanded);
  const [internalLoading, setInternalLoading] = useState(false);
  const triggerAction = useTriggerAction();
  const {
    containerRef,
    colSizes,
    isDragging,
    handleMouseMove,
    handleMouseUp,
    handleMouseDown,
  } = useColumnResize(20, 80);

  const mainRef = useRef<HTMLElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const toggleFullScreen = async () => {
    const root = mainRef.current as any;
    if (!document.fullscreenElement) {
      if (root?.requestFullscreen) {
        await root.requestFullscreen();
      } else if (root?.webkitRequestFullscreen) {
        await root.webkitRequestFullscreen();
      } else if (root?.msRequestFullscreen) {
        await root.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    }
  };

  const customStyles: CSSProperties = {
    // @ts-ignore
    "--fm-font-family": fontFamily,
    "--fm-primary-color": primaryColor,
    height,
    width,
  };

  const permissionsObj = useMemo(
    () => ({ ...defaultPermissions, ...userPermissions }),
    [userPermissions]
  );

  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    }
  };

  const handleCompression = (filesToCompress: IFile[]) => {
    if (onCompress) {
      setInternalLoading(true);
      onCompress(filesToCompress, (result) => {
        setInternalLoading(false);
        if (!result.status && result.message) {
          onError({ type: "compress", message: result.message });
        }
      });
    }
  };

  const handleDecompression = (filesToDecompress: IFile[]) => {
    if (onDecompress) {
      setInternalLoading(true);
      onDecompress(filesToDecompress, (result) => {
        setInternalLoading(false);
        if (!result.status && result.message) {
          onError({ type: "decompress", message: result.message });
        }
      });
    }
  };

  return (
    <main
      ref={mainRef}
      data-theme={theme}
      className={`file-explorer ${className}`}
      onContextMenu={(e) => e.preventDefault()}
      style={{ ...customStyles, ...style }}
    >
      <Loader loading={isLoading || internalLoading} />
      <ThemeProvider theme={theme}>
        <TranslationProvider language={language}>
          <FilesProvider filesData={files} onError={onError}>
            <FileNavigationProvider
              initialPath={initialPath}
              onFolderChange={onFolderChange}
            >
              <SelectionProvider
                onDownload={onDownload}
                onSelectionChange={onSelectionChange}
              >
                <ClipBoardProvider onPaste={onPaste} onCut={onCut} onCopy={onCopy}>
                  <LayoutProvider layout={layout}>
                    <Toolbar
                      onLayoutChange={onLayoutChange}
                      onRefresh={handleRefresh}
                      triggerAction={triggerAction}
                      permissions={permissionsObj}
                      isFullScreen={isFullScreen}
                      onFullScreenToggle={toggleFullScreen}
                      onCompress={handleCompression}
                      onDecompress={handleDecompression}
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
                          onRefresh={handleRefresh}
                          enableFilePreview={enableFilePreview}
                          triggerAction={triggerAction}
                          permissions={permissionsObj}
                          formatDate={formatDate}
                          onCompress={handleCompression}
                          onDecompress={handleDecompression}
                        />
                      </div>
                    </section>

                    {/* Actions need fileUploadConfig to be potentially undefined, handled in component */}
                    <Actions
                      onUpload={onUpload}
                      onFileUploading={onFileUploading}
                      onFileUploaded={onFileUploaded}
                      onDelete={onDelete}
                      onChmod={onChmod}
                      onRefresh={handleRefresh}
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
      </ThemeProvider>
    </main>
  );
};

export default FileManager;
