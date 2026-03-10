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
    <div role="progressbar" className="hdgrfm-fm-progress">
      {!error && (
        <div className="hdgrfm-fm-progress-bar">
          <div
            className="hdgrfm-fm-progress-bar-fill"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      )}
      {isCanceled ? (
        <span className="hdgrfm-fm-upload-canceled">{t("canceled")}</span>
      ) : error ? (
        <span className="hdgrfm-fm-upload-canceled">{error}</span>
      ) : (
        <div className="hdgrfm-fm-progress-status">
          <span>
            {isCompleted ? t("completed") : t("percentDone", { percent })}
          </span>
        </div>
      )}
    </div>
  );
};

export default Progress;
