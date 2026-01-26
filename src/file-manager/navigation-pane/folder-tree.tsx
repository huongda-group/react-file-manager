import React, { useEffect, useState, MouseEvent } from "react";
import Collapse from "../../components/collapse/collapse";
import { FaRegFolder, FaRegFolderOpen } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useFileNavigation } from "../../contexts/file-navigation";
import { IFile } from "../../types";

// Extended interface for recursive structure
export interface IFolderTreeItem extends IFile {
  subDirectories: IFolderTreeItem[];
}

interface FolderTreeProps {
  folder: IFolderTreeItem;
  onFileOpen: (file: IFile) => void;
}

const FolderTree: React.FC<FolderTreeProps> = ({ folder, onFileOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { currentPath, setCurrentPath, onFolderChange } = useFileNavigation();

  const handleFolderSwitch = () => {
    setIsActive(true);
    onFileOpen(folder);
    setCurrentPath(folder.path);
    onFolderChange?.(folder.path);
  };

  const handleCollapseChange = (e: MouseEvent) => {
    e.stopPropagation();
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);
    if (nextOpen) {
      handleFolderSwitch();
    }
  };

  useEffect(() => {
    setIsActive(currentPath === folder.path);

    // Auto expand parent folder logic
    const currentPathArray = currentPath.split("/");
    currentPathArray.pop();
    const currentFolderParentPath = currentPathArray.join("/");
    if (currentFolderParentPath === folder.path) {
      setIsOpen(true);
    }
  }, [currentPath, folder.path]);

  const hasSubDirs = folder.subDirectories.length > 0;
  const isExpandable = folder.isDirectory;

  return (
    <>
      <div
        className={`sb-folders-list-item ${isActive ? "active-list-item" : ""
          }`}
        onClick={handleFolderSwitch}
      >
        <span onClick={handleCollapseChange}>
          {isExpandable ? (
            <MdKeyboardArrowRight
              size={20}
              className={`folder-icon-default ${isOpen ? "folder-rotate-down" : ""
                }`}
              style={{ opacity: hasSubDirs ? 1 : 0.5 }}
            />
          ) : (
            <span className="non-expanable"></span>
          )}
        </span>
        <div className="sb-folder-details">
          {isOpen || isActive ? (
            <FaRegFolderOpen size={20} className="folder-open-icon" />
          ) : (
            <FaRegFolder size={17} className="folder-close-icon" />
          )}
          <span className="sb-folder-name" title={folder.name}>
            {folder.name}
          </span>
        </div>
      </div>
      {hasSubDirs && (
        <Collapse open={isOpen}>
          <div className="folder-collapsible">
            {folder.subDirectories.map((item, index) => (
              <FolderTree key={index} folder={item} onFileOpen={onFileOpen} />
            ))}
          </div>
        </Collapse>
      )}
    </>
  );
};

export default FolderTree;
