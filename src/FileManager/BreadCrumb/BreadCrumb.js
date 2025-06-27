import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { MdHome, MdMoreHoriz, MdOutlineNavigateNext } from "react-icons/md";
import { TbLayoutSidebarLeftExpand, TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { useFileNavigation } from "../../contexts/FileNavigationContext";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import { useTranslation } from "../../contexts/TranslationProvider";
import "./BreadCrumb.scss";
const BreadCrumb = ({ collapsibleNav, isNavigationPaneOpen, setNavigationPaneOpen }) => {
    const [folders, setFolders] = useState([]);
    const [hiddenFolders, setHiddenFolders] = useState([]);
    const [hiddenFoldersWidth, setHiddenFoldersWidth] = useState([]);
    const [showHiddenFolders, setShowHiddenFolders] = useState(false);
    const { currentPath, setCurrentPath } = useFileNavigation();
    const breadCrumbRef = useRef(null);
    const foldersRef = useRef([]);
    const moreBtnRef = useRef(null);
    const popoverRef = useDetectOutsideClick(() => {
        setShowHiddenFolders(false);
    });
    const t = useTranslation();
    const navTogglerRef = useRef(null);
    useEffect(() => {
        setFolders(() => {
            let path = "";
            return currentPath?.split("/").map((item) => {
                return {
                    name: item || t("home"),
                    path: item === "" ? item : (path += `/${item}`),
                };
            });
        });
        setHiddenFolders([]);
        setHiddenFoldersWidth([]);
    }, [currentPath, t]);
    const switchPath = (path) => {
        setCurrentPath(path);
    };
    const getBreadCrumbWidth = () => {
        const containerWidth = breadCrumbRef.current.clientWidth;
        const containerStyles = getComputedStyle(breadCrumbRef.current);
        const paddingLeft = parseFloat(containerStyles.paddingLeft);
        const navTogglerGap = collapsibleNav ? 2 : 0;
        const navTogglerDividerWidth = 1;
        const navTogglerWidth = collapsibleNav
            ? navTogglerRef.current?.clientWidth + navTogglerDividerWidth
            : 0;
        const moreBtnGap = hiddenFolders.length > 0 ? 1 : 0;
        const flexGap = parseFloat(containerStyles.gap) * (folders.length + moreBtnGap + navTogglerGap);
        return containerWidth - (paddingLeft + flexGap + navTogglerWidth);
    };
    const checkAvailableSpace = () => {
        const availableSpace = getBreadCrumbWidth();
        const remainingFoldersWidth = foldersRef.current.reduce((prev, curr) => {
            if (!curr)
                return prev;
            return prev + curr.clientWidth;
        }, 0);
        const moreBtnWidth = moreBtnRef.current?.clientWidth || 0;
        return availableSpace - (remainingFoldersWidth + moreBtnWidth);
    };
    const isBreadCrumbOverflowing = () => {
        return breadCrumbRef.current.scrollWidth > breadCrumbRef.current.clientWidth;
    };
    useEffect(() => {
        if (isBreadCrumbOverflowing()) {
            const hiddenFolder = folders[1];
            const hiddenFolderWidth = foldersRef.current[1]?.clientWidth;
            setHiddenFoldersWidth((prev) => [...prev, hiddenFolderWidth]);
            setHiddenFolders((prev) => [...prev, hiddenFolder]);
            setFolders((prev) => prev.filter((_, index) => index !== 1));
        }
        else if (hiddenFolders.length > 0 && checkAvailableSpace() > hiddenFoldersWidth.at(-1)) {
            const newFolders = [folders[0], hiddenFolders.at(-1), ...folders.slice(1)];
            setFolders(newFolders);
            setHiddenFolders((prev) => prev.slice(0, -1));
            setHiddenFoldersWidth((prev) => prev.slice(0, -1));
        }
    }, [isBreadCrumbOverflowing]);
    return (_jsxs("div", { className: "bread-crumb-container", children: [_jsxs("div", { className: "breadcrumb", ref: breadCrumbRef, children: [collapsibleNav && (_jsxs(_Fragment, { children: [_jsx("div", { ref: navTogglerRef, className: "nav-toggler", title: `${isNavigationPaneOpen ? t("collapseNavigationPane") : t("expandNavigationPane")}`, children: _jsx("span", { className: "folder-name folder-name-btn", onClick: () => setNavigationPaneOpen((prev) => !prev), children: isNavigationPaneOpen ? (_jsx(TbLayoutSidebarLeftCollapseFilled, {})) : (_jsx(TbLayoutSidebarLeftExpand, {})) }) }), _jsx("div", { className: "divider" })] })), folders.map((folder, index) => (_jsxs("div", { style: { display: "contents" }, children: [_jsxs("span", { className: "folder-name", onClick: () => switchPath(folder.path), ref: (el) => (foldersRef.current[index] = el), children: [index === 0 ? _jsx(MdHome, {}) : _jsx(MdOutlineNavigateNext, {}), folder.name] }), hiddenFolders?.length > 0 && index === 0 && (_jsx("button", { className: "folder-name folder-name-btn", onClick: () => setShowHiddenFolders(true), ref: moreBtnRef, title: t("showMoreFolder"), children: _jsx(MdMoreHoriz, { size: 22, className: "hidden-folders" }) }))] }, index)))] }), showHiddenFolders && (_jsx("ul", { ref: popoverRef.ref, className: "hidden-folders-container", children: hiddenFolders.map((folder, index) => (_jsx("li", { onClick: () => {
                        switchPath(folder.path);
                        setShowHiddenFolders(false);
                    }, children: folder.name }, index))) }))] }));
};
BreadCrumb.displayName = "BreadCrumb";
BreadCrumb.propTypes = {
    isNavigationPaneOpen: PropTypes.bool.isRequired,
    setNavigationPaneOpen: PropTypes.func.isRequired,
};
export default BreadCrumb;
