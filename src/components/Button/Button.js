import { jsx as _jsx } from "react/jsx-runtime";
import "./Button.scss";
const Button = ({ onClick, onKeyDown, type = "primary", padding = "0.4rem 0.8rem", children }) => {
    return (_jsx("button", { onClick: onClick, onKeyDown: onKeyDown, className: `fm-button fm-button-${type}`, style: { padding: padding }, children: children }));
};
export default Button;
