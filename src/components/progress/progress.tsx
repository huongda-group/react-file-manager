import { useTranslation } from "../../contexts/translation";
import "./progress.css";

interface ProgressProps {
  percent?: number;
  isCanceled?: boolean;
  isCompleted?: boolean;
  error?: string | null;
}

const Progress: React.FC<ProgressProps> = ({
  percent = 0,
  isCanceled = false,
  isCompleted = false,
  error,
}) => {
  const t = useTranslation();

  return (
    <div role="progressbar" className="fm-progress">
      {!error && (
        <div className="fm-progress-bar">
          <div
            className="fm-progress-bar-fill"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      )}
      {isCanceled ? (
        <span className="fm-upload-canceled">{t("canceled")}</span>
      ) : error ? (
        <span className="fm-upload-canceled">{error}</span>
      ) : (
        <div className="fm-progress-status">
          <span>
            {isCompleted ? t("completed") : t("percentDone", { percent })}
          </span>
        </div>
      )}
    </div>
  );
};

export default Progress;
