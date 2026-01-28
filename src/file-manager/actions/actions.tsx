import { useEffect, useState, ReactElement } from "react";
import Modal from "../../components/modal/modal";
import DeleteAction from "../../file-manager/actions/delete/delete";
import UploadFileAction from "../../file-manager/actions/upload-file/upload-file";
import ChmodAction from "../../file-manager/actions/chmod/chmod";
import CompressAction from "../../file-manager/actions/compress/compress";
import DecompressAction from "../../file-manager/actions/decompress/decompress";
import PreviewFileAction from "../../file-manager/actions/preview-file/preview-file";
import { useSelection } from "../../contexts/selection";
import { useShortcutHandler } from "../../hooks/use-shortcut-handler";
import { useTranslation } from "../../contexts/translation";
import { IUseTriggerActionReturn } from "../../hooks/use-trigger-action";
import { IFile } from "../../types";

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

interface ActionsProps {
  onUpload?: (file: File) => Promise<any>;
  onFileUploading: (file: File, parent: IFile | null) => any;
  onFileUploaded: (response: any) => void;
  onDelete: (files: IFile[], trash: boolean) => void;
  onChmod?: (files: IFile[], permissions: string) => void;
  onCompress?: (files: IFile[], name: string) => void;
  onDecompress?: (files: IFile[], destinationPath: string) => void;
  onRefresh: () => void;
  maxFileSize?: number;
  filePreviewPath?: string;
  filePreviewComponent?: (file: IFile) => ReactElement;
  acceptedFileTypes?: string;
  triggerAction: IUseTriggerActionReturn;
  permissions: IPermissions;
}

interface IActionType {
  title: string;
  component: ReactElement;
  width: string;
}

const Actions: React.FC<ActionsProps> = ({
  onUpload,
  onFileUploading,
  onFileUploaded,
  onDelete,
  onChmod = () => { },
  onCompress,
  onDecompress,
  onRefresh,
  maxFileSize,
  filePreviewPath,
  filePreviewComponent,
  acceptedFileTypes,
  triggerAction,
  permissions,
}) => {
  const [activeAction, setActiveAction] = useState<IActionType | null>(null);
  const { selectedFiles } = useSelection();
  const t = useTranslation();

  // Triggers all the keyboard shortcuts based actions
  useShortcutHandler(triggerAction, onRefresh, permissions);

  const actionTypes: Record<string, IActionType> = {
    uploadFile: {
      title: t("upload"),
      component: (
        <UploadFileAction
          onUpload={onUpload}
          maxFileSize={maxFileSize}
          acceptedFileTypes={acceptedFileTypes}
          onFileUploading={onFileUploading}
          onFileUploaded={onFileUploaded}
        />
      ),
      width: "35%",
    },
    delete: {
      title: t("delete"),
      component: (
        <DeleteAction triggerAction={triggerAction} onDelete={onDelete} />
      ),
      width: "25%",
    },
    previewFile: {
      title: t("preview"),
      component: (
        <PreviewFileAction
          filePreviewPath={filePreviewPath}
          filePreviewComponent={filePreviewComponent}
        />
      ),
      width: "50%",
    },
    chmod: {
      title: t("chmod"),
      component: (
        <ChmodAction triggerAction={triggerAction} onChmod={onChmod} />
      ),
      width: "30%",
    },
    compress: {
      title: t("compress"),
      component: onCompress ? (
        <CompressAction triggerAction={triggerAction} onCompress={onCompress} />
      ) : (
        <></>
      ),
      width: "30%",
    },
    decompress: {
      title: t("decompress"),
      component: onDecompress ? (
        <DecompressAction
          triggerAction={triggerAction}
          onDecompress={onDecompress}
        />
      ) : (
        <></>
      ),
      width: "30%",
    },
  };

  useEffect(() => {
    if (triggerAction.isActive && triggerAction.actionType) {
      const actionType = triggerAction.actionType;
      // Ensure the action type exists in our map
      if (actionTypes[actionType]) {
        if (actionType === "previewFile") {
          actionTypes[actionType].title = selectedFiles[0]?.name ?? t("preview");
        }
        setActiveAction(actionTypes[actionType]);
      } else {
        // If action is not handled here (e.g. createFolder), do not set activeAction
        // But maybe we should null it to be safe?
        // createFolder works inline, so it won't use this Modal logic.
        setActiveAction(null);
      }
    } else {
      setActiveAction(null);
    }
  }, [triggerAction.isActive, triggerAction.actionType, selectedFiles, t]);

  if (activeAction) {
    return (
      <Modal
        heading={activeAction.title}
        show={triggerAction.isActive}
        setShow={triggerAction.close}
        dialogWidth={activeAction.width}
      >
        {activeAction?.component}
      </Modal>
    );
  }
  return null;
};

export default Actions;
