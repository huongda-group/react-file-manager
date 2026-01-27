import { useState } from "react";
import {
  FolderPlus,
  Upload,
  ClipboardPaste,
  Grid,
  List,
  RefreshCw,
  Maximize,
  Minimize,
  Scissors,
  CopyPlus,
  FilePenLine,
  Download,
  Trash2,
  X,
} from "lucide-react";
import { AnimatedIcon } from "../../components/ui/animated-icon";
import LayoutToggler from "../../file-manager/toolbar/layout-toggler";
import { useFileNavigation } from "../../contexts/file-navigation";
import { useSelection } from "../../contexts/selection";
import { useClipBoard } from "../../contexts/clipboard";
import { useLayout, LayoutType } from "../../contexts/layout";
import { validateApiCallback } from "../../utils/validate-api-callback";
import { useTranslation } from "../../contexts/translation";
import "../../file-manager/toolbar/toolbar.css";
import Tooltip from "../../components/tooltip/tooltip";
import { IUseTriggerActionReturn } from "../../hooks/use-trigger-action";

interface IPermissions {
  create?: boolean;
  upload?: boolean;
  move?: boolean;
  copy?: boolean;
  rename?: boolean;
  download?: boolean;
  delete?: boolean;
}

interface ToolbarProps {
  onLayoutChange: (layout: LayoutType) => void;
  onRefresh: () => void;
  triggerAction: IUseTriggerActionReturn;
  permissions: IPermissions;
  isFullScreen: boolean;
  onFullScreenToggle: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onLayoutChange,
  onRefresh,
  triggerAction,
  permissions,
  isFullScreen,
  onFullScreenToggle,
}) => {
  const [showToggleViewMenu, setShowToggleViewMenu] = useState(false);
  const { currentFolder } = useFileNavigation();
  const { selectedFiles, setSelectedFiles, handleDownload } = useSelection();
  const { clipBoard, setClipBoard, handleCutCopy, handlePasting } =
    useClipBoard();
  const { activeLayout } = useLayout();
  const t = useTranslation();

  function handleFilePasting() {
    handlePasting(currentFolder);
  }

  // Toolbar Items
  const toolbarLeftItems = [
    {
      icon: (
        <AnimatedIcon
          icon={FolderPlus}
          size={18}
          animation="bounce"
        />
      ),
      text: t("newFolder"),
      permission: permissions.create,
      onClick: () => triggerAction.show("createFolder"),
    },
    {
      icon: <AnimatedIcon icon={Upload} size={18} animation="bounce" />,
      text: t("upload"),
      permission: permissions.upload,
      onClick: () => triggerAction.show("uploadFile"),
    },
    {
      icon: <AnimatedIcon icon={ClipboardPaste} size={18} animation="scale" />,
      text: t("paste"),
      permission: !!clipBoard,
      onClick: handleFilePasting,
    },
  ];

  const toolbarRightItems = [
    {
      icon:
        activeLayout === "grid" ? (
          <AnimatedIcon icon={Grid} size={18} />
        ) : (
          <AnimatedIcon icon={List} size={18} />
        ),
      title: t("changeView"),
      text: t("view"), // Assuming "view" is in translation or I'll use raw text if not
      onClick: () => setShowToggleViewMenu((prev) => !prev),
    },
    {
      icon: <AnimatedIcon icon={RefreshCw} size={18} animation="spin" />,
      title: t("refresh"),
      text: t("refresh"),
      onClick: () => {
        validateApiCallback(onRefresh, "onRefresh");
        setClipBoard(null);
        setSelectedFiles([]);
      },
    },
    {
      icon: isFullScreen ? (
        <AnimatedIcon icon={Minimize} size={18} animation="scale" />
      ) : (
        <AnimatedIcon icon={Maximize} size={18} animation="scale" />
      ),
      title: isFullScreen ? t("exitFullScreen") : t("enterFullScreen"),
      text: isFullScreen ? t("minimize") : t("maximize"),
      onClick: onFullScreenToggle,
    },
  ];

  const handleDownloadItems = () => {
    handleDownload();
    setSelectedFiles([]);
  };

  return (
    <div className={`toolbar ${selectedFiles.length > 0 ? "file-selected" : ""}`}>
      <div className="fm-toolbar">
        {selectedFiles.length > 0 ? (
          <div className="file-action-container">
            <div>
              {permissions.move && (
                <button
                  className="item-action file-action"
                  onClick={() => handleCutCopy(true)}
                >
                  <AnimatedIcon icon={Scissors} size={18} animation="scale" />
                  <span>{t("cut")}</span>
                </button>
              )}
              {permissions.copy && (
                <button
                  className="item-action file-action"
                  onClick={() => handleCutCopy(false)}
                >
                  <AnimatedIcon
                    icon={CopyPlus}
                    size={18}
                    animation="scale"
                  />
                  <span>{t("copy")}</span>
                </button>
              )}
              {clipBoard?.files && clipBoard.files.length > 0 && (
                <button
                  className="item-action file-action"
                  onClick={handleFilePasting}
                >
                  <AnimatedIcon
                    icon={ClipboardPaste}
                    size={18}
                    animation="scale"
                  />
                  <span>{t("paste")}</span>
                </button>
              )}
              {selectedFiles.length === 1 && permissions.rename && (
                <button
                  className="item-action file-action"
                  onClick={() => triggerAction.show("rename")}
                >
                  <AnimatedIcon
                    icon={FilePenLine}
                    size={18}
                    animation="wiggle"
                  />
                  <span>{t("rename")}</span>
                </button>
              )}
              {permissions.download && (
                <button
                  className="item-action file-action"
                  onClick={handleDownloadItems}
                >
                  <AnimatedIcon icon={Download} size={18} animation="bounce" />
                  <span>{t("download")}</span>
                </button>
              )}
              {permissions.delete && (
                <button
                  className="item-action file-action"
                  onClick={() => triggerAction.show("delete")}
                >
                  <AnimatedIcon icon={Trash2} size={18} animation="shake" />
                  <span>{t("delete")}</span>
                </button>
              )}
            </div>
            <button
              className="item-action file-action"
              title={t("clearSelection")}
              onClick={() => setSelectedFiles([])}
            >
              <span>
                {selectedFiles.length}{" "}
                {t(selectedFiles.length > 1 ? "itemsSelected" : "itemSelected")}
              </span>
              <AnimatedIcon icon={X} size={18} animation="rotate" />
            </button>
          </div>
        ) : (
          <div>
            {toolbarLeftItems
              .filter((item) => item.permission)
              .map((item, index) => (
                <button
                  className="item-action"
                  key={index}
                  onClick={item.onClick}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </button>
              ))}
          </div>
        )}

        <div className="toolbar-right-container">
          {toolbarRightItems.map((item, index) => (
            <Tooltip text={item.title} key={index}>
              <button className="item-action" onClick={item.onClick}>
                {item.icon}
                <span>{item.text || item.title}</span>
              </button>
            </Tooltip>
          ))}

          {showToggleViewMenu && (
            <LayoutToggler
              setShowToggleViewMenu={setShowToggleViewMenu}
              onLayoutChange={onLayoutChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
