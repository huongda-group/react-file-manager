import "../error-tooltip/error-tooltip.css";

interface ErrorTooltipProps {
  message: string;
  xPlacement?: string;
  yPlacement?: string;
}

const ErrorTooltip: React.FC<ErrorTooltipProps> = ({
  message,
  xPlacement = "",
  yPlacement = "",
}) => {
  return (
    <p className={`error-tooltip ${xPlacement} ${yPlacement}`}>{message}</p>
  );
};

export default ErrorTooltip;
