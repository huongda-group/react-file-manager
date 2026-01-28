import { useEffect, useState, KeyboardEvent, RefObject } from "react";
import { useDetectOutsideClick } from "../../../hooks/use-detect-outside-click";
import { duplicateNameHandler } from "../../../utils/duplicate-name-handler";
import NameInput from "../../../components/name-input/name-input";
import ErrorTooltip from "../../../components/error-tooltip/error-tooltip";
import { useFileNavigation } from "../../../contexts/file-navigation";
import { useLayout } from "../../../contexts/layout";
import { validateApiCallback } from "../../../utils/validate-api-callback";
import { useTranslation } from "../../../contexts/translation";
import { IFile } from "../../../types";
import { IUseTriggerActionReturn } from "../../../hooks/use-trigger-action";

const maxNameLength = 220;

interface CreateFolderActionProps {
  filesViewRef: RefObject<HTMLElement | null>;
  file: IFile;
  onCreateFolder?: (name: string, parent: IFile | null) => void;
  triggerAction: IUseTriggerActionReturn;
}

const CreateFolderAction: React.FC<CreateFolderActionProps> = ({
  filesViewRef,
  file,
  onCreateFolder,
  triggerAction,
}) => {
  const [folderName, setFolderName] = useState(file.name);
  const [folderNameError, setFolderNameError] = useState(false);
  const [folderErrorMessage, setFolderErrorMessage] = useState("");
  const [errorXPlacement, setErrorXPlacement] = useState("right");
  const [errorYPlacement, setErrorYPlacement] = useState("bottom");
  const outsideClick = useDetectOutsideClick((e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  const { currentFolder, currentPathFiles, setTempNewFolder } =
    useFileNavigation();
  const { activeLayout } = useLayout();
  const t = useTranslation();

  const handleCancelCreate = () => {
    setTempNewFolder(null);
    triggerAction.close();
  };

  // Folder name change handler function
  const handleFolderNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFolderName(e.target.value);
    setFolderNameError(false);
  };
  //

  // Validate folder name and call "onCreateFolder" function
  const handleValidateFolderName = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      e.preventDefault();
      handleFolderCreating();
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      handleCancelCreate();
      return;
    }

    const invalidCharsRegex = /[\\/:*?"<>|]/;
    if (invalidCharsRegex.test(e.key)) {
      e.preventDefault();
      setFolderErrorMessage(t("invalidFileName"));
      setFolderNameError(true);
    } else {
      setFolderNameError(false);
      setFolderErrorMessage("");
    }
  };

  // Auto hide error message after 7 seconds
  useEffect(() => {
    if (folderNameError) {
      const autoHideError = setTimeout(() => {
        setFolderNameError(false);
        setFolderErrorMessage("");
      }, 7000);

      return () => clearTimeout(autoHideError);
    }
  }, [folderNameError]);
  //

  async function handleFolderCreating() {
    let newFolderName = folderName.trim();
    const existingFiles = currentPathFiles.filter(
      (f) => !f.key?.startsWith("temp-")
    );

    const alreadyExists = existingFiles.find((f) => {
      return f.name.toLowerCase() === newFolderName.toLowerCase();
    });

    if (alreadyExists) {
      setFolderErrorMessage(t("folderExists", { renameFile: newFolderName }));
      setFolderNameError(true);
      outsideClick.ref.current?.focus();
      outsideClick.ref.current?.select();
      outsideClick.setIsClicked(false);
      return;
    }

    if (newFolderName === "") {
      // Warning: duplicateNameHandler types might conflict if not matching usage
      newFolderName = duplicateNameHandler(
        "New Folder",
        true,
        existingFiles
      );
    }

    try {
      await validateApiCallback(
        onCreateFolder,
        "onCreateFolder",
        newFolderName,
        currentFolder
      );
      setTempNewFolder(null);
      triggerAction.close();
    } catch (error) {
      console.error("Error creating folder:", error);
      outsideClick.setIsClicked(false);
      outsideClick.ref.current?.focus();
    }
  }
  //

  // Folder name text selection upon visible
  useEffect(() => {
    outsideClick.ref.current?.focus();
    outsideClick.ref.current?.select();

    // Dynamic Error Message Placement based on available space
    if (outsideClick.ref?.current && filesViewRef.current) {
      const errorMessageWidth = 292 + 8 + 8 + 5; // 8px padding on left and right + additional 5px for gap
      const errorMessageHeight = 56 + 20 + 10 + 2; // 20px :before height
      const filesContainer = filesViewRef.current;
      const filesContainerRect = filesContainer.getBoundingClientRect();
      const nameInputContainer = outsideClick.ref.current;
      const nameInputContainerRect = nameInputContainer.getBoundingClientRect();

      const rightAvailableSpace =
        filesContainerRect.right - nameInputContainerRect.left;
      rightAvailableSpace > errorMessageWidth
        ? setErrorXPlacement("right")
        : setErrorXPlacement("left");

      const bottomAvailableSpace =
        filesContainerRect.bottom -
        (nameInputContainerRect.top + nameInputContainer.clientHeight);
      bottomAvailableSpace > errorMessageHeight
        ? setErrorYPlacement("bottom")
        : setErrorYPlacement("top");
    }
  }, []);
  //

  useEffect(() => {
    if (outsideClick.isClicked) {
      handleFolderCreating();
    }
  }, [outsideClick.isClicked]);

  return (
    <>
      <NameInput
        id="newFolder"
        nameInputRef={outsideClick.ref}
        maxLength={maxNameLength}
        value={folderName}
        onChange={handleFolderNameChange}
        onKeyDown={handleValidateFolderName}
        onClick={(e) => e.stopPropagation()}
        rows={activeLayout === "list" ? 1 : undefined}
      />
      {folderNameError && (
        <ErrorTooltip
          message={folderErrorMessage}
          xPlacement={errorXPlacement}
          yPlacement={errorYPlacement}
        />
      )}
    </>
  );
};

export default CreateFolderAction;
