import { useMemo, useState } from "react";
import Checkbox from "../../components/checkbox/checkbox";
import { useFileNavigation } from "../../contexts/file-navigation";
import { useSelection } from "../../contexts/selection";
import { useTranslation } from "../../contexts/translation";
import { ColumnId, ColumnWidths } from "../../hooks/use-table-resize";

interface FilesHeaderProps {
  unselectFiles: () => void;
  onSort?: (key: string) => void;
  sortConfig?: { key: string; direction: "asc" | "desc" };
  columnWidths: ColumnWidths;
  onResizeStart: (e: React.MouseEvent, colId: ColumnId) => void;
}

const FilesHeader: React.FC<FilesHeaderProps> = ({
  unselectFiles,
  onSort,
  sortConfig,
  columnWidths,
  onResizeStart,
}) => {
  const t = useTranslation();

  const [showSelectAll, setShowSelectAll] = useState(false);

  const { selectedFiles, setSelectedFiles } = useSelection();
  const { currentPathFiles } = useFileNavigation();

  const allFilesSelected = useMemo(() => {
    return (
      currentPathFiles.length > 0 &&
      selectedFiles.length === currentPathFiles.length
    );
  }, [selectedFiles, currentPathFiles]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedFiles(currentPathFiles);
      setShowSelectAll(true);
    } else {
      unselectFiles();
    }
  };

  const handleSort = (key: string) => {
    if (onSort) {
      onSort(key);
    }
  };

  return (
    <div
      className="files-header"
      onMouseOver={() => setShowSelectAll(true)}
      onMouseLeave={() => setShowSelectAll(false)}
    >
      <div className="file-select-all">
        {(showSelectAll || allFilesSelected) && (
          <Checkbox
            id="selectAll"
            checked={allFilesSelected}
            onChange={handleSelectAll}
            title="Select all"
            disabled={currentPathFiles.length === 0}
          />
        )}
      </div>
      <div
        className={`file-name ${sortConfig?.key === "name" ? "active" : ""}`}
        onClick={() => handleSort("name")}
        style={{ width: columnWidths.name }}
      >
        {t("name")}
        {sortConfig?.key === "name" && (
          <span className="sort-indicator">
            {sortConfig.direction === "asc" ? " ▲" : " ▼"}
          </span>
        )}
        <div
          className="resize-handle"
          onMouseDown={(e) => onResizeStart(e, "name")}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      <div
        className={`file-date ${sortConfig?.key === "modified" ? "active" : ""}`}
        onClick={() => handleSort("modified")}
        style={{ width: columnWidths.modified }}
      >
        {t("modified")}
        {sortConfig?.key === "modified" && (
          <span className="sort-indicator">
            {sortConfig.direction === "asc" ? " ▲" : " ▼"}
          </span>
        )}
        <div
          className="resize-handle"
          onMouseDown={(e) => onResizeStart(e, "modified")}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div
        className={`file-permissions ${sortConfig?.key === "permissions" ? "active" : ""
          }`}
        onClick={() => handleSort("permissions")}
        style={{ width: columnWidths.permissions }}
      >
        {t("permissions")}
        {sortConfig?.key === "permissions" && (
          <span className="sort-indicator">
            {sortConfig.direction === "asc" ? " ▲" : " ▼"}
          </span>
        )}
        <div
          className="resize-handle"
          onMouseDown={(e) => onResizeStart(e, "permissions")}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div
        className={`file-size ${sortConfig?.key === "size" ? "active" : ""}`}
        onClick={() => handleSort("size")}
        style={{ width: columnWidths.size }}
      >
        {t("size")}
        {sortConfig?.key === "size" && (
          <span className="sort-indicator">
            {sortConfig.direction === "asc" ? " ▲" : " ▼"}
          </span>
        )}
        <div
          className="resize-handle"
          onMouseDown={(e) => onResizeStart(e, "size")}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default FilesHeader;
