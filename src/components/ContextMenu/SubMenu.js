import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaCheck } from "react-icons/fa6";
const SubMenu = ({ subMenuRef, list, position = "right" }) => {
    return (_jsx("ul", { ref: subMenuRef, className: `sub-menu ${position}`, children: list?.map((item) => (_jsxs("li", { onClick: item.onClick, children: [_jsx("span", { className: "item-selected", children: item.selected && _jsx(FaCheck, { size: 13 }) }), item.icon, _jsx("span", { children: item.title })] }, item.title))) }));
};
export default SubMenu;
