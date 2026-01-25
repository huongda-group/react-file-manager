import { ImSpinner2 } from "react-icons/im";
import "./loader.css";

interface LoaderProps {
  loading?: boolean;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ loading = false, className = "" }) => {
  if (!loading) return null;

  return (
    <div className={`loader-container ${className}`}>
      <ImSpinner2 className="spinner" />
    </div>
  );
};

export default Loader;
