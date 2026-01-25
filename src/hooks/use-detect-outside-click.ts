import { useEffect, useRef, useState, RefObject } from "react";

interface IUseDetectOutsideClickReturn {
  ref: RefObject<any>; // Can be generic, usually HTMLDivElement
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useDetectOutsideClick = (
  handleOutsideClick: (event: MouseEvent, ref: RefObject<any>) => void = () => { }
): IUseDetectOutsideClickReturn => {
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (
      ref.current &&
      event.target instanceof Node &&
      !ref.current.contains(event.target)
    ) {
      setIsClicked(true);
      handleOutsideClick(event, ref);
    } else {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    // Cast to any because EventListener expects Event, but we use strict MouseEvent
    document.addEventListener("click", handleClick as EventListener, true);
    document.addEventListener("mousedown", handleClick as EventListener, true);
    return () => {
      document.removeEventListener("click", handleClick as EventListener, true);
      document.removeEventListener("mousedown", handleClick as EventListener, true);
    };
  }, []);

  return { ref, isClicked, setIsClicked };
};
