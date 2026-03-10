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
  const handleOutsideClickRef = useRef(handleOutsideClick);
  handleOutsideClickRef.current = handleOutsideClick;

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        setIsClicked(true);
        handleOutsideClickRef.current(event, ref);
      } else {
        setIsClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClick as EventListener, true);
    return () => {
      document.removeEventListener("mousedown", handleClick as EventListener, true);
    };
  }, []);

  return { ref, isClicked, setIsClicked };
};
