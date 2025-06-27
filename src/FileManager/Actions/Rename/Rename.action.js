import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../../components/Button/Button";
import { IoWarningOutline } from "react-icons/io5";
import { useDetectOutsideClick } from "../../../hooks/useDetectOutsideClick";
import Modal from "../../../components/Modal/Modal";
import { getFileExtension } from "../../../utils/getFileExtension";
import NameInput from "../../../components/NameInput/NameInput";
import ErrorTooltip from "../../../components/ErrorTooltip/ErrorTooltip";
import { useFileNavigation } from "../../../contexts/FileNavigationContext";
import { useLayout } from "../../../contexts/LayoutContext";
import { validateApiCallback } from "../../../utils/validateApiCallback";
import { useTranslation } from "../../../contexts/TranslationProvider";
const maxNameLength = 220;
const RenameAction = ({ filesViewRef, file, onRename, triggerAction }) => {
    const [renameFile, setRenameFile] = useState(file?.name);
    const [renameFileWarning, setRenameFileWarning] = useState(false);
    const [fileRenameError, setFileRenameError] = useState(false);
    const [renameErrorMessage, setRenameErrorMessage] = useState("");
    const [errorXPlacement, setErrorXPlacement] = useState("right");
    const [errorYPlacement, setErrorYPlacement] = useState("bottom");
    const { currentPathFiles, setCurrentPathFiles } = useFileNavigation();
    const { activeLayout } = useLayout();
    const t = useTranslation();
    const warningModalRef = useRef(null);
    const outsideClick = useDetectOutsideClick((e) => {
        if (!warningModalRef.current?.contains(e.target)) {
            e.preventDefault();
            e.stopPropagation();
        }
    });
    const handleValidateFolderRename = (e) => {
        e.stopPropagation();
        if (e.key === "Enter") {
            e.preventDefault();
            outsideClick.setIsClicked(true);
            return;
        }
        if (e.key === "Escape") {
            e.preventDefault();
            setCurrentPathFiles((prev) => prev.map((f) => {
                if (f.key === file.key) {
                    f.isEditing = false;
                }
                return f;
            }));
            triggerAction.close();
            return;
        }
        const invalidCharsRegex = /[\\/:*?"<>|]/;
        if (invalidCharsRegex.test(e.key)) {
            e.preventDefault();
            setRenameErrorMessage(t("invalidFileName"));
            setFileRenameError(true);
        }
        else {
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
    function handleFileRenaming(isConfirmed) {
        if (renameFile === "" || renameFile === file.name) {
            setCurrentPathFiles((prev) => prev.map((f) => {
                if (f.key === file.key) {
                    f.isEditing = false;
                }
                return f;
            }));
            triggerAction.close();
            return;
        }
        else if (currentPathFiles.some((file) => file.name === renameFile)) {
            setFileRenameError(true);
            setRenameErrorMessage(t("folderExists", { renameFile }));
            outsideClick.setIsClicked(false);
            return;
        }
        else if (!file.isDirectory && !isConfirmed) {
            const fileExtension = getFileExtension(file.name);
            const renameFileExtension = getFileExtension(renameFile);
            if (fileExtension !== renameFileExtension) {
                setRenameFileWarning(true);
                return;
            }
        }
        setFileRenameError(false);
        validateApiCallback(onRename, "onRename", file, renameFile);
        setCurrentPathFiles((prev) => prev.filter((f) => f.key !== file.key)); // Todo: Should only filter on success API call
        triggerAction.close();
    }
    const focusName = () => {
        outsideClick.ref?.current?.focus();
        if (file.isDirectory) {
            outsideClick.ref?.current?.select();
        }
        else {
            const fileExtension = getFileExtension(file.name);
            const fileNameLength = file.name.length - fileExtension.length - 1;
            outsideClick.ref?.current?.setSelectionRange(0, fileNameLength);
        }
    };
    useEffect(() => {
        focusName();
        // Dynamic Error Message Placement based on available space
        if (outsideClick.ref?.current) {
            const errorMessageWidth = 292 + 8 + 8 + 5; // 8px padding on left and right + additional 5px for gap
            const errorMessageHeight = 56 + 20 + 10 + 2; // 20px :before height
            const filesContainer = filesViewRef.current;
            const filesContainerRect = filesContainer.getBoundingClientRect();
            const renameInputContainer = outsideClick.ref.current;
            const renameInputContainerRect = renameInputContainer.getBoundingClientRect();
            const rightAvailableSpace = filesContainerRect.right - renameInputContainerRect.left;
            rightAvailableSpace > errorMessageWidth
                ? setErrorXPlacement("right")
                : setErrorXPlacement("left");
            const bottomAvailableSpace = filesContainerRect.bottom -
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
    return (_jsxs(_Fragment, { children: [_jsx(NameInput, { nameInputRef: outsideClick.ref, maxLength: maxNameLength, value: renameFile, onChange: (e) => {
                    setRenameFile(e.target.value);
                    setFileRenameError(false);
                }, onKeyDown: handleValidateFolderRename, onClick: (e) => e.stopPropagation(), ...(activeLayout === "list" && { rows: 1 }) }), fileRenameError && (_jsx(ErrorTooltip, { message: renameErrorMessage, xPlacement: errorXPlacement, yPlacement: errorYPlacement })), _jsx(Modal, { heading: t("rename"), show: renameFileWarning, setShow: setRenameFileWarning, dialogWidth: "25vw", closeButton: false, children: _jsxs("div", { className: "fm-rename-folder-container", ref: warningModalRef, children: [_jsx("div", { className: "fm-rename-folder-input", children: _jsxs("div", { className: "fm-rename-warning", children: [_jsx(IoWarningOutline, { size: 70, color: "orange" }), _jsx("div", { children: t("fileNameChangeWarning") })] }) }), _jsxs("div", { className: "fm-rename-folder-action", children: [_jsx(Button, { type: "secondary", onClick: () => {
                                        setCurrentPathFiles((prev) => prev.map((f) => {
                                            if (f.key === file.key) {
                                                f.isEditing = false;
                                            }
                                            return f;
                                        }));
                                        setRenameFileWarning(false);
                                        triggerAction.close();
                                    }, children: t("no") }), _jsx(Button, { type: "danger", onClick: () => {
                                        setRenameFileWarning(false);
                                        handleFileRenaming(true);
                                    }, children: t("yes") })] })] }) })] }));
};
export default RenameAction;
