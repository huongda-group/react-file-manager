import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BsGridFill } from "react-icons/bs";
import { FaCheck, FaListUl } from "react-icons/fa6";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { useLayout } from "../../contexts/LayoutContext";
import { useTranslation } from "../../contexts/TranslationProvider";
const LayoutToggler = ({ setShowToggleViewMenu, onLayoutChange }) => {
    const toggleViewRef = useDetectOutsideClick(() => {
        setShowToggleViewMenu(false);
    });
    const { activeLayout, setActiveLayout } = useLayout();
    const t = useTranslation();
    const layoutOptions = [
        {
            key: "grid",
            name: t("grid"),
            icon: _jsx(BsGridFill, { size: 18 }),
        },
        {
            key: "list",
            name: t("list"),
            icon: _jsx(FaListUl, { size: 18 }),
        },
    ];
    const handleSelection = (key) => {
        setActiveLayout(key);
        onLayoutChange(key);
        setShowToggleViewMenu(false);
    };
    return (_jsx("div", { ref: toggleViewRef.ref, className: "toggle-view", role: "dropdown", children: _jsx("ul", { role: "menu", "aria-orientation": "vertical", children: layoutOptions.map((option) => (_jsxs("li", { role: "menuitem", onClick: () => handleSelection(option.key), onKeyDown: () => handleSelection(option.key), children: [_jsx("span", { children: option.key === activeLayout && _jsx(FaCheck, { size: 13 }) }), _jsx("span", { children: option.icon }), _jsx("span", { children: option.name })] }, option.key))) }) }));
};
export default LayoutToggler;
