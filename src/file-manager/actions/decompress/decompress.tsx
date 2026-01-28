import { useState, useEffect } from "react";
import Button from "../../../components/button/button";
import { useSelection } from "../../../contexts/selection";
import { useTranslation } from "../../../contexts/translation";
import { useFileNavigation } from "../../../contexts/file-navigation";
import { IUseTriggerActionReturn } from "../../../hooks/use-trigger-action";
import { IFile } from "../../../types";
import "./decompress.css";

interface DecompressActionProps {
    triggerAction: IUseTriggerActionReturn;
    onDecompress: (files: IFile[], destinationPath: string) => void;
}

const DecompressAction: React.FC<DecompressActionProps> = ({
    triggerAction,
    onDecompress,
}) => {
    const { selectedFiles } = useSelection();
    const { currentPath } = useFileNavigation();
    const t = useTranslation();
    const [destinationPath, setDestinationPath] = useState(currentPath || "/");

    useEffect(() => {
        // Logic to handle destination logic.
        // Default to current path seems correct.
    }, [selectedFiles]);

    const handleDecompress = () => {
        onDecompress(selectedFiles, destinationPath);
        triggerAction.close();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleDecompress();
        }
    };

    return (
        <div className="fm-decompress-container">
            <div className="fm-decompress-input-group">
                <label>{t("destinationPath")}</label>
                <input
                    type="text"
                    className="fm-decompress-input"
                    value={destinationPath}
                    onChange={(e) => setDestinationPath(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            </div>

            <div className="fm-decompress-actions">
                <Button type="secondary" onClick={triggerAction.close}>
                    {t("cancel")}
                </Button>
                <Button type="primary" onClick={handleDecompress}>
                    {t("decompress")}
                </Button>
            </div>
        </div>
    );
};

export default DecompressAction;
