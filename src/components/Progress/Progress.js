import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "../../contexts/TranslationProvider";
import "./Progress.scss";
const Progress = ({ percent = 0, isCanceled = false, isCompleted = false, error }) => {
    const t = useTranslation();
    return (_jsxs("div", { role: "progressbar", className: "fm-progress", children: [!error && (_jsx("div", { className: "fm-progress-bar", children: _jsx("div", { className: "fm-progress-bar-fill", style: { width: `${percent}%` } }) })), isCanceled ? (_jsx("span", { className: "fm-upload-canceled", children: t("canceled") })) : error ? (_jsx("span", { className: "fm-upload-canceled", children: error })) : (_jsx("div", { className: "fm-progress-status", children: _jsx("span", { children: isCompleted ? t("completed") : t("percentDone", { percent }) }) }))] }));
};
export default Progress;
