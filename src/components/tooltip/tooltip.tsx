import React, { useState, ReactNode } from "react";
import "./tooltip.css";

interface TooltipProps {
    text: string;
    children: ReactNode;
    delay?: number;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, delay = 200 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

    const showTooltip = () => {
        const id = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        setTimeoutId(id);
    };

    const hideTooltip = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setIsVisible(false);
    };

    return (
        <div
            className="fm-tooltip-container"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {children}
            {isVisible && (
                <div className={`fm-tooltip ${isVisible ? "visible" : ""}`}>
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
