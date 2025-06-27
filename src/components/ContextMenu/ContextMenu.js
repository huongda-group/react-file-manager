import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import SubMenu from "./SubMenu";
import "./ContextMenu.scss";
const ContextMenu = ({ filesViewRef, contextMenuRef, menuItems, visible, clickPosition }) => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);
    const [subMenuPosition, setSubMenuPosition] = useState("right");
    const subMenuRef = useRef(null);
    const contextMenuPosition = () => {
        const { clickX, clickY } = clickPosition;
        const container = filesViewRef.current;
        const containerRect = container.getBoundingClientRect();
        const scrollBarWidth = container.offsetWidth - container.clientWidth;
        // Context menu size
        const contextMenuContainer = contextMenuRef.current.getBoundingClientRect();
        const menuWidth = contextMenuContainer.width;
        const menuHeight = contextMenuContainer.height;
        // Check if there is enough space at the right for the context menu
        const leftToCursor = clickX - containerRect.left;
        const right = containerRect.width - (leftToCursor + scrollBarWidth) > menuWidth;
        const left = !right;
        const topToCursor = clickY - containerRect.top;
        const top = containerRect.height - topToCursor > menuHeight;
        const bottom = !top;
        if (right) {
            setLeft(`${leftToCursor}px`);
            setSubMenuPosition("right");
        }
        else if (left) {
            // Location: -width of the context menu from cursor's position i.e. left side
            setLeft(`${leftToCursor - menuWidth}px`);
            setSubMenuPosition("left");
        }
        if (top) {
            setTop(`${topToCursor + container.scrollTop}px`);
        }
        else if (bottom) {
            setTop(`${topToCursor + container.scrollTop - menuHeight}px`);
        }
    };
    const handleContextMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const handleMouseOver = (index) => {
        setActiveSubMenuIndex(index);
    };
    useEffect(() => {
        if (visible && contextMenuRef.current) {
            contextMenuPosition();
        }
        else {
            setTop(0);
            setLeft(0);
            setActiveSubMenuIndex(null);
        }
    }, [visible]);
    if (visible) {
        return (_jsx("div", { ref: contextMenuRef, onContextMenu: handleContextMenu, onClick: (e) => e.stopPropagation(), className: `fm-context-menu ${top ? "visible" : "hidden"}`, style: {
                top: top,
                left: left,
            }, children: _jsx("div", { className: "file-context-menu-list", children: _jsx("ul", { children: menuItems
                        .filter((item) => !item.hidden)
                        .map((item, index) => {
                        const hasChildren = item.hasOwnProperty("children");
                        const activeSubMenu = activeSubMenuIndex === index && hasChildren;
                        return (_jsxs("div", { children: [_jsxs("li", { onClick: item.onClick, className: `${item.className ?? ""} ${activeSubMenu ? "active" : ""}`, onMouseOver: () => handleMouseOver(index), children: [item.icon, _jsx("span", { children: item.title }), hasChildren && (_jsxs(_Fragment, { children: [_jsx(FaChevronRight, { size: 14, className: "list-expand-icon" }), activeSubMenu && (_jsx(SubMenu, { subMenuRef: subMenuRef, list: item.children, position: subMenuPosition }))] }))] }), item.divider &&
                                    index !== menuItems.filter((item) => !item.hidden).length - 1 && (_jsx("div", { className: "divider" }))] }, item.title));
                    }) }) }) }));
    }
};
export default ContextMenu;
