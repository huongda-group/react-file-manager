import React from 'react';

export interface FileItem {
  _id: string;
  name: string;
  type: string;
  path?: string;
  parentId?: string | null;
  [key: string]: any;
}

export interface FileManagerProps {
  files: FileItem[];
  fileUploadConfig: {
    url: string;
    headers?: Record<string, string>;
    method?: "POST" | "PUT";
    [key: string]: any;
  };
  isLoading?: boolean;
  onCreateFolder: (name: string, parentFolder?: FileItem | null) => Promise<void>;
  onFileUploading?: (file: File, parentFolder?: FileItem | null) => any;
  onFileUploaded?: (response: string) => void;
  onCut?: (files: FileItem[]) => void;
  onCopy?: (files: FileItem[]) => void;
  onPaste?: (copiedItems: FileItem[], destinationFolder: FileItem | null, operationType: "copy" | "move") => Promise<void>;
  onRename?: (file: FileItem, newName: string) => Promise<void>;
  onDownload?: (files: FileItem[]) => Promise<void>;
  onDelete?: (files: FileItem[]) => Promise<void>;
  onLayoutChange?: (layout: string) => void;
  onRefresh?: () => void;
  onFileOpen?: (file: FileItem) => void;
  onSelect?: (files: FileItem[]) => void;
  onError?: (error: any, file?: File) => void;
  layout?: "grid" | "list";
  enableFilePreview?: boolean;
  maxFileSize?: number;
  filePreviewPath?: string;
  acceptedFileTypes?: string;
  height?: string | number;
  width?: string | number;
  initialPath?: string;
  filePreviewComponent?: React.ComponentType<any>;
  primaryColor?: string;
  fontFamily?: string;
  language?: string;
  permissions?: {
    create?: boolean;
    upload?: boolean;
    move?: boolean;
    copy?: boolean;
    rename?: boolean;
    download?: boolean;
    delete?: boolean;
  };
  collapsibleNav?: boolean;
  defaultNavExpanded?: boolean;
}
