import "../name-input/name-input.css";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
} from "react";

interface NameInputProps {
  nameInputRef?: RefObject<HTMLTextAreaElement>;
  id?: string;
  maxLength?: number;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement>;
  onClick?: MouseEventHandler<HTMLTextAreaElement>;
  rows?: number;
}

const NameInput: React.FC<NameInputProps> = ({
  nameInputRef,
  id,
  maxLength,
  value,
  onChange,
  onKeyDown,
  onClick,
  rows,
}) => {
  return (
    <textarea
      ref={nameInputRef}
      id={id}
      className="rename-file"
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onClick={onClick}
      rows={rows}
    />
  );
};

export default NameInput;
