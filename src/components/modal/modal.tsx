import { MdClose } from "react-icons/md";
import { useEffect, useRef, KeyboardEvent, PropsWithChildren } from "react";
import { useTranslation } from "../../contexts/translation";
import "./modal.css";

interface ModalProps extends PropsWithChildren {
  show: boolean;
  setShow: (show: boolean) => void;
  heading: string;
  dialogWidth?: string;
  contentClassName?: string;
  closeButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  show,
  setShow,
  heading,
  dialogWidth = "25%",
  contentClassName = "",
  closeButton = true,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const t = useTranslation();

  const handleKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "Escape") {
      setShow(false);
    }
  };

  useEffect(() => {
    if (show && modalRef.current) {
      modalRef.current.showModal();
    } else if (modalRef.current) {
      modalRef.current.close();
    }
  }, [show]);

  return (
    <dialog
      ref={modalRef}
      className={`fm-modal dialog ${contentClassName}`}
      style={{ width: dialogWidth }}
      onKeyDown={handleKeyDown}
    >
      <div className="fm-modal-header">
        <span className="fm-modal-heading">{heading}</span>
        {closeButton && (
          <MdClose
            size={18}
            onClick={() => setShow(false)}
            className="close-icon"
            title={t("close")}
          />
        )}
      </div>
      {children}
    </dialog>
  );
};

export default Modal;
