import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import { useSelection } from "../../../contexts/SelectionContext";
import { useTranslation } from "../../../contexts/TranslationProvider";
import "./Delete.action.scss";
const DeleteAction = ({ triggerAction, onDelete }) => {
    const [deleteMsg, setDeleteMsg] = useState("");
    const { selectedFiles, setSelectedFiles } = useSelection();
    const t = useTranslation();
    useEffect(() => {
        setDeleteMsg(() => {
            if (selectedFiles.length === 1) {
                return t("deleteItemConfirm", { fileName: selectedFiles[0].name });
            }
            else if (selectedFiles.length > 1) {
                return t("deleteItemsConfirm", { count: selectedFiles.length });
            }
        });
    }, [t]);
    const handleDeleting = () => {
        onDelete(selectedFiles);
        setSelectedFiles([]);
        triggerAction.close();
    };
    return (_jsxs("div", { className: "file-delete-confirm", children: [_jsx("p", { className: "file-delete-confirm-text", children: deleteMsg }), _jsxs("div", { className: "file-delete-confirm-actions", children: [_jsx(Button, { type: "secondary", onClick: () => triggerAction.close(), children: t("cancel") }), _jsx(Button, { type: "danger", onClick: handleDeleting, children: t("delete") })] })] }));
};
export default DeleteAction;
