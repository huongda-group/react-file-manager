import React, { useEffect, useState } from "react";
import FolderTree, { IFolderTreeItem } from "../../file-manager/navigation-pane/folder-tree";
import { getParentPath } from "../../utils/get-parent-path";
import { useFiles } from "../../contexts/files";
import { useTranslation } from "../../contexts/translation";
import { IFile } from "../../types";
import "../../file-manager/navigation-pane/navigation-pane.css";

interface NavigationPaneProps {
  onFileOpen: (file: IFile) => void;
}

const NavigationPane: React.FC<NavigationPaneProps> = ({ onFileOpen }) => {
  const [foldersTree, setFoldersTree] = useState<IFolderTreeItem[]>([]);
  const { files } = useFiles();
  const t = useTranslation();

  const createChildRecursive = (
    path: string,
    foldersStruct: Record<string, IFile[]>
  ): IFolderTreeItem[] => {
    if (!foldersStruct[path]) return []; // No children for this path

    return foldersStruct[path]?.map((folder) => {
      return {
        ...folder,
        subDirectories: createChildRecursive(folder.path, foldersStruct),
      };
    });
  };

  useEffect(() => {
    if (Array.isArray(files)) {
      const folders = files.filter((file) => file.isDirectory);
      // Replace Object.groupBy with reduce for compatibility
      const foldersStruct = folders.reduce((acc, folder) => {
        const parentPath = getParentPath(folder.path);
        if (!acc[parentPath]) acc[parentPath] = [];
        acc[parentPath].push(folder);
        return acc;
      }, {} as Record<string, IFile[]>);

      setFoldersTree(() => {
        const rootPath = "";
        return createChildRecursive(rootPath, foldersStruct);
      });
    }
  }, [files]);

  return (
    <div className="sb-folders-list">
      {foldersTree?.length > 0 ? (
        <>
          {foldersTree?.map((folder, index) => {
            return (
              <FolderTree key={index} folder={folder} onFileOpen={onFileOpen} />
            );
          })}
        </>
      ) : (
        <div className="empty-nav-pane">{t("nothingHereYet")}</div>
      )}
    </div>
  );
};

export default NavigationPane;
