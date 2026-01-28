import { useEffect, useState } from "react";
import Button from "../../../components/button/button";
import { useSelection } from "../../../contexts/selection";
import { useTranslation } from "../../../contexts/translation";
import { IUseTriggerActionReturn } from "../../../hooks/use-trigger-action";
import { IFile } from "../../../types";
import "./delete.css";

interface DeleteActionProps {
  triggerAction: IUseTriggerActionReturn;
  onDelete: (files: IFile[], trash: boolean) => void;
  trash?: boolean;
}

const DeleteAction: React.FC<DeleteActionProps> = ({
  triggerAction,
  onDelete,
  trash,
}) => {
  const [deleteMsg, setDeleteMsg] = useState("");
  const { selectedFiles, setSelectedFiles } = useSelection();
  const t = useTranslation();

  useEffect(() => {
    setDeleteMsg(() => {
      if (selectedFiles.length === 1) {
        return t("deleteItemConfirm", { fileName: selectedFiles[0].name });
      } else if (selectedFiles.length > 1) {
        return t("deleteItemsConfirm", { count: selectedFiles.length });
      }
      return "";
    });
  }, [t, selectedFiles]);

  const handleDeleting = (trash: boolean) => {
    onDelete(selectedFiles, trash);
    setSelectedFiles([]);
    triggerAction.close();
  };

  return (
    <div className="file-delete-confirm">
      <p className="file-delete-confirm-text">{deleteMsg}</p>
      <div className="file-delete-confirm-actions">
        {trash && (
          <Button type="primary" onClick={() => handleDeleting(true)}>
            {t("moveToTrash")}
          </Button>
        )}
        <Button type="danger" onClick={() => handleDeleting(false)}>
          {t("delete")}
        </Button>
        <Button type="secondary" onClick={() => triggerAction.close()}>
          {t("cancel")}
        </Button>
      </div>
    </div>
  );
};

export default DeleteAction;
