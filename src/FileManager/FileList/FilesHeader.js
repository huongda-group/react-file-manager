import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useSelection } from "../../contexts/SelectionContext";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
const FilesHeader = ({ unselectFiles }) => {
    const [showSelectAll, setShowSelectAll] = useState(false);
    const { selectedFiles, setSelectedFiles } = useSelection();
    const { currentPathFiles } = useFileNavigation();
    const allFilesSelected = useMemo(() => {
        return currentPathFiles.length > 0 && selectedFiles.length === currentPathFiles.length;
    }, [selectedFiles, currentPathFiles]);
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedFiles(currentPathFiles);
            setShowSelectAll(true);
        }
        else {
            unselectFiles();
        }
    };
    return (_jsxs("div", { className: "files-header", onMouseOver: () => setShowSelectAll(true), onMouseLeave: () => setShowSelectAll(false), children: [_jsx("div", { className: "file-select-all", children: (showSelectAll || allFilesSelected) && (_jsx(Checkbox, { checked: allFilesSelected, onChange: handleSelectAll, title: "Select all", disabled: currentPathFiles.length === 0 })) }), _jsx("div", { className: "file-name", children: "Name" }), _jsx("div", { className: "file-date", children: "Modified" }), _jsx("div", { className: "file-size", children: "Size" })] }));
};
export default FilesHeader;
