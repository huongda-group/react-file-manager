import { jsx as _jsx } from "react/jsx-runtime";
import "./ErrorTooltip.scss";
const ErrorTooltip = ({ message, xPlacement, yPlacement }) => {
    return _jsx("p", { className: `error-tooltip ${xPlacement} ${yPlacement}`, children: message });
};
export default ErrorTooltip;
