import { useState, useEffect } from "react";
import Button from "../../../components/button/button";
import { useSelection } from "../../../contexts/selection";
import { useTranslation } from "../../../contexts/translation";
import { IUseTriggerActionReturn } from "../../../hooks/use-trigger-action";
import { IFile } from "../../../types";
import "./compress.css";

interface CompressActionProps {
    triggerAction: IUseTriggerActionReturn;
    onCompress: (files: IFile[], name: string) => void;
}

const CompressAction: React.FC<CompressActionProps> = ({
    triggerAction,
    onCompress,
}) => {
    const { selectedFiles } = useSelection();
    const t = useTranslation();
    const [fileName, setFileName] = useState("");

    useEffect(() => {
        if (selectedFiles.length > 0) {
            const firstFile = selectedFiles[0];
            let baseName = firstFile.name;
            // Heuristic: remove extension if it's a file
            if (!firstFile.isDirectory) {
                const lastDotIndex = baseName.lastIndexOf(".");
                if (lastDotIndex > 0) {
                    baseName = baseName.substring(0, lastDotIndex);
                }
            }
            setFileName(baseName);
        }
    }, [selectedFiles]);

    const handleCompress = () => {
        if (!fileName.trim()) return;
        onCompress(selectedFiles, `${fileName}.zip`);
        triggerAction.close();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleCompress();
        }
    };

    return (
        <div className="fm-compress-container">
            <div className="fm-compress-input-group">
                <label>{t("name")}</label>
                <div className="fm-compress-input-wrapper">
                    <input
                        type="text"
                        className="fm-compress-input"
                        value={fileName}
                        onChange={(e) => setFileName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                    <span className="fm-compress-extension">.zip</span>
                </div>
            </div>

            <div className="fm-compress-actions">
                <Button type="secondary" onClick={triggerAction.close}>
                    {t("cancel")}
                </Button>
                <Button type="primary" onClick={handleCompress}>
                    {t("compress")}
                </Button>
            </div>
        </div>
    );
};

export default CompressAction;
