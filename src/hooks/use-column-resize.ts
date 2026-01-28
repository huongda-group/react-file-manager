import { useRef, useState, MouseEvent } from "react";

interface IColSizes {
  col1: number;
  col2: number;
}

interface IUseColumnResizeReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  colSizes: IColSizes;
  setColSizes: React.Dispatch<React.SetStateAction<IColSizes>>;
  isDragging: boolean;
  handleMouseDown: () => void;
  handleMouseUp: () => void;
  handleMouseMove: (e: MouseEvent) => void;
}

export const useColumnResize = (
  col1Size: number,
  col2Size: number
): IUseColumnResizeReturn => {
  const [colSizes, setColSizes] = useState<IColSizes>({
    col1: col1Size,
    col2: col2Size,
  });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    // Prevent text selection during drag
    e.preventDefault();

    // Calculate new sizes based on mouse movement
    const container = containerRef.current;
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const newCol1Size =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;

      // Limiting the resizing to 15% to 60% for better UX
      if (newCol1Size >= 15 && newCol1Size <= 60) {
        setColSizes({ col1: newCol1Size, col2: 100 - newCol1Size });
      }
    }
  };

  return {
    containerRef,
    colSizes,
    setColSizes,
    isDragging,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
  };
};
