import { Loader2 } from "lucide-react";
import "./loader.css";

interface LoaderProps {
  loading?: boolean;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ loading = false, className = "" }) => {
  if (!loading) return null;

  return (
    <div className={`loader-container ${className}`}>
      <Loader2 className="spinner" />
    </div>
  );
};

export default Loader;
