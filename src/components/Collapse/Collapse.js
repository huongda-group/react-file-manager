import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useCollapse } from "react-collapsed";
const Collapse = ({ open, children }) => {
    const [isExpanded, setExpanded] = useState(open);
    const { getCollapseProps } = useCollapse({
        isExpanded,
        duration: 500,
    });
    useEffect(() => {
        setExpanded(open);
    }, [open, setExpanded]);
    return (_jsx(_Fragment, { children: _jsx("div", { ...getCollapseProps(), children: children }) }));
};
export default Collapse;
