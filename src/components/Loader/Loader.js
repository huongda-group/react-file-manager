import { jsx as _jsx } from "react/jsx-runtime";
import { ImSpinner2 } from "react-icons/im";
import "./Loader.scss";
const Loader = ({ loading = false, className }) => {
    if (!loading)
        return null;
    return (_jsx("div", { className: `loader-container ${className}`, children: _jsx(ImSpinner2, { className: "spinner" }) }));
};
export default Loader;
