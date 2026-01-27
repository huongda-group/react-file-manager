import { ChangeEventHandler, MouseEventHandler } from "react";
import "./checkbox.css";

interface CheckboxProps {
  name?: string;
  id?: string;
  checked?: boolean;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  title?: string;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  id,
  checked,
  onClick,
  onChange,
  className = "",
  title,
  disabled = false,
}) => {
  return (
    <label className={`fm-checkbox-wrapper ${className}`} title={title}>
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onClick={onClick}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="fm-checkbox-checkmark"></span>
    </label>
  );
};

export default Checkbox;
