import { X } from "lucide-react";
import { AnimatedIcon } from "../ui/animated-icon";
import { useEffect, useRef, KeyboardEvent, PropsWithChildren } from "react";
import { useTranslation } from "../../contexts/translation";
import { useTheme } from "../../contexts/theme";
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
  const theme = useTheme();

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
      data-theme={theme}
    >
      <div className="fm-modal-header">
        <span className="fm-modal-heading">{heading}</span>
        {closeButton && (
          <AnimatedIcon
            icon={X}
            size={18}
            className="close-icon"
            onClick={() => setShow(false)}
            title={t("close")}
            animation="rotate"
          />
        )}
      </div>
      {children}
    </dialog>
  );
};

export default Modal;

