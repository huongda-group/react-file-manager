import "../error-tooltip/error-tooltip.css";

const ErrorTooltip = ({ message, xPlacement, yPlacement }) => {
  return <p className={`error-tooltip ${xPlacement} ${yPlacement}`}>{message}</p>;
};

export default ErrorTooltip;
