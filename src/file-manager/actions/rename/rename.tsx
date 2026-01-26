import React, {
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  RefObject,
} from "react";
import Button from "../../../components/button/button";
import { AlertTriangle } from "lucide-react";
import { AnimatedIcon } from "../../../components/ui/animated-icon";
import { useDetectOutsideClick } from "../../../hooks/use-detect-outside-click";
import Modal from "../../../components/modal/modal";
import { getFileExtension } from "../../../utils/get-file-extension";
import NameInput from "../../../components/name-input/name-input";
import ErrorTooltip from "../../../components/error-tooltip/error-tooltip";
import { useFileNavigation } from "../../../contexts/file-navigation";
import { useLayout } from "../../../contexts/layout";
import { validateApiCallback } from "../../../utils/validate-api-callback";
import { useTranslation } from "../../../contexts/translation";
import { IFile } from "../../../types";
import { IUseTriggerActionReturn } from "../../../hooks/use-trigger-action";

const maxNameLength = 220;

interface RenameActionProps {
  filesViewRef: RefObject<HTMLElement | null>;
  file: IFile;
  onRename?: (file: IFile, newName: string) => void;
  triggerAction: IUseTriggerActionReturn;
}

const RenameAction: React.FC<RenameActionProps> = ({
  filesViewRef,
  file,
  onRename,
  triggerAction,
}) => {
  const [renameFile, setRenameFile] = useState(file?.name);
  const [renameFileWarning, setRenameFileWarning] = useState(false);
  const [fileRenameError, setFileRenameError] = useState(false);
  const [renameErrorMessage, setRenameErrorMessage] = useState("");
  const [errorXPlacement, setErrorXPlacement] = useState("right");
  const [errorYPlacement, setErrorYPlacement] = useState("bottom");
  const { currentPathFiles, setCurrentPathFiles } = useFileNavigation();
  const { activeLayout } = useLayout();
  const t = useTranslation();

  const warningModalRef = useRef<HTMLDivElement>(null);
  const outsideClick = useDetectOutsideClick((e) => {
    if (
      warningModalRef.current &&
      e.target instanceof Node &&
      !warningModalRef.current.contains(e.target)
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  const handleValidateFolderRename = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      e.preventDefault();
      outsideClick.setIsClicked(true);
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setCurrentPathFiles((prev) =>
        prev.map((f) => {
          if (f.key === file.key) {
            f.isEditing = false;
          }
          return f;
        })
      );
      triggerAction.close();
      return;
    }

    const invalidCharsRegex = /[\\/:*?"<>|]/;
    if (invalidCharsRegex.test(e.key)) {
      e.preventDefault();
      setRenameErrorMessage(t("invalidFileName"));
      setFileRenameError(true);
    } else {
      setFileRenameError(false);
    }
  };

  // Auto hide error message after 7 seconds
  useEffect(() => {
    if (fileRenameError) {
      const autoHideError = setTimeout(() => {
        setFileRenameError(false);
        setRenameErrorMessage("");
      }, 7000);

      return () => clearTimeout(autoHideError);
    }
  }, [fileRenameError]);
  //

  async function handleFileRenaming(isConfirmed: boolean) {
    if (renameFile === "" || renameFile === file.name) {
      setCurrentPathFiles((prev) =>
        prev.map((f) => {
          if (f.key === file.key) {
            f.isEditing = false;
          }
          return f;
        })
      );
      triggerAction.close();
      return;
    } else if (currentPathFiles.some((file) => file.name === renameFile)) {
      setFileRenameError(true);
      setRenameErrorMessage(t("folderExists", { renameFile }));
      outsideClick.setIsClicked(false);
      return;
    } else if (!file.isDirectory && !isConfirmed) {
      const fileExtension = getFileExtension(file.name);
      const renameFileExtension = getFileExtension(renameFile);
      if (fileExtension !== renameFileExtension) {
        setRenameFileWarning(true);
        return;
      }
    }
    setFileRenameError(false);

    try {
      await validateApiCallback(onRename, "onRename", file, renameFile);
      setCurrentPathFiles((prev) => prev.filter((f) => f.key !== file.key)); // Todo: Should only filter on success API call
      triggerAction.close();
    } catch (error) {
      console.error("Error renaming file:", error);
      outsideClick.setIsClicked(false);
      outsideClick.ref.current?.focus();
    }
  }

  const focusName = () => {
    outsideClick.ref?.current?.focus();

    if (file.isDirectory) {
      outsideClick.ref?.current?.select();
    } else {
      const fileExtension = getFileExtension(file.name);
      const fileNameLength = file.name.length - fileExtension.length - 1;
      outsideClick.ref?.current?.setSelectionRange(0, fileNameLength);
    }
  };

  useEffect(() => {
    focusName();

    // Dynamic Error Message Placement based on available space
    if (outsideClick.ref?.current && filesViewRef.current) {
      const errorMessageWidth = 292 + 8 + 8 + 5; // 8px padding on left and right + additional 5px for gap
      const errorMessageHeight = 56 + 20 + 10 + 2; // 20px :before height
      const filesContainer = filesViewRef.current;
      const filesContainerRect = filesContainer.getBoundingClientRect();
      const renameInputContainer = outsideClick.ref.current;
      const renameInputContainerRect = renameInputContainer.getBoundingClientRect();

      const rightAvailableSpace =
        filesContainerRect.right - renameInputContainerRect.left;
      rightAvailableSpace > errorMessageWidth
        ? setErrorXPlacement("right")
        : setErrorXPlacement("left");

      const bottomAvailableSpace =
        filesContainerRect.bottom -
        (renameInputContainerRect.top + renameInputContainer.clientHeight);
      bottomAvailableSpace > errorMessageHeight
        ? setErrorYPlacement("bottom")
        : setErrorYPlacement("top");
    }
  }, []);

  useEffect(() => {
    if (outsideClick.isClicked) {
      handleFileRenaming(false);
    }
    focusName();
  }, [outsideClick.isClicked]);

  return (
    <>
      <NameInput
        id={file.name}
        nameInputRef={outsideClick.ref}
        maxLength={maxNameLength}
        value={renameFile}
        onChange={(e) => {
          setRenameFile(e.target.value);
          setFileRenameError(false);
        }}
        onKeyDown={handleValidateFolderRename}
        onClick={(e) => e.stopPropagation()}
        rows={activeLayout === "list" ? 1 : undefined}
      />
      {fileRenameError && (
        <ErrorTooltip
          message={renameErrorMessage}
          xPlacement={errorXPlacement}
          yPlacement={errorYPlacement}
        />
      )}

      <Modal
        heading={t("rename")}
        show={renameFileWarning}
        setShow={setRenameFileWarning}
        dialogWidth={"25vw"}
        closeButton={false}
      >
        <div className="fm-rename-folder-container" ref={warningModalRef}>
          <div className="fm-rename-folder-input">
            <div className="fm-rename-warning">
              <AnimatedIcon icon={AlertTriangle} size={70} color="orange" />
              <div>{t("fileNameChangeWarning")}</div>
            </div>
          </div>
          <div className="fm-rename-folder-action">
            <Button
              type="secondary"
              onClick={() => {
                setCurrentPathFiles((prev) =>
                  prev.map((f) => {
                    if (f.key === file.key) {
                      f.isEditing = false;
                    }
                    return f;
                  })
                );
                setRenameFileWarning(false);
                triggerAction.close();
              }}
            >
              {t("no")}
            </Button>
            <Button
              type="danger"
              onClick={() => {
                setRenameFileWarning(false);
                handleFileRenaming(true);
              }}
            >
              {t("yes")}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RenameAction;
