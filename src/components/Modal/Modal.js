import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MdClose } from "react-icons/md";
import { useEffect, useRef } from "react";
import { useTranslation } from "../../contexts/TranslationProvider";
import "./Modal.scss";
const Modal = ({ children, show, setShow, heading, dialogWidth = "25%", contentClassName = "", closeButton = true, }) => {
    const modalRef = useRef(null);
    const t = useTranslation();
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setShow(false);
        }
    };
    useEffect(() => {
        if (show) {
            modalRef.current.showModal();
        }
        else {
            modalRef.current.close();
        }
    }, [show]);
    return (_jsxs("dialog", { ref: modalRef, className: `fm-modal dialog`, style: { width: dialogWidth }, onKeyDown: handleKeyDown, children: [_jsxs("div", { className: "fm-modal-header", children: [_jsx("span", { className: "fm-modal-heading", children: heading }), closeButton && (_jsx(MdClose, { size: 18, onClick: () => setShow(false), className: "close-icon", title: t("close") }))] }), children] }));
};
export default Modal;
