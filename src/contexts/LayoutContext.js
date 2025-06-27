import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const LayoutContext = createContext();
export const LayoutProvider = ({ children, layout }) => {
    const [activeLayout, setActiveLayout] = useState(() => validateLayout(layout));
    function validateLayout(layout) {
        const acceptedValue = ["list", "grid"];
        return acceptedValue.includes(layout) ? layout : "grid";
    }
    return (_jsx(LayoutContext.Provider, { value: { activeLayout, setActiveLayout }, children: children }));
};
export const useLayout = () => useContext(LayoutContext);
