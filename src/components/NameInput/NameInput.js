import { jsx as _jsx } from "react/jsx-runtime";
import "./NameInput.scss";
const NameInput = ({ nameInputRef, maxLength, value, onChange, onKeyDown, onClick, rows }) => {
    return (_jsx("textarea", { ref: nameInputRef, className: "rename-file", maxLength: maxLength, value: value, onChange: onChange, onKeyDown: onKeyDown, onClick: onClick, rows: rows }));
};
export default NameInput;
