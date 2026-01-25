import React, { useEffect, useState } from "react";
import FolderTree from "../../file-manager/navigation-pane/folder-tree";
import { getParentPath } from "../../utils/get-parent-path";
import { useFiles } from "../../contexts/files-context";
import { useTranslation } from "../../contexts/translation-provider";
import "../../file-manager/navigation-pane/navigation-pane.css";

const NavigationPane = ({ onFileOpen }) => {
  const [foldersTree, setFoldersTree] = useState([]);
  const { files } = useFiles();
  const t = useTranslation();

  const createChildRecursive = (path, foldersStruct) => {
    if (!foldersStruct[path]) return []; // No children for this path (folder)

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
      // Grouping folders by parent path
      const foldersStruct = Object.groupBy(folders, ({ path }) => getParentPath(path));
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
            return <FolderTree key={index} folder={folder} onFileOpen={onFileOpen} />;
          })}
        </>
      ) : (
        <div className="empty-nav-pane">{t("nothingHereYet")}</div>
      )}
    </div>
  );
};

NavigationPane.displayName = "NavigationPane";

export default NavigationPane;
