import { useState } from "react";

export interface IUseTriggerActionReturn {
  isActive: boolean;
  actionType: string | null;
  show: (type: string) => void;
  close: () => void;
}

export const useTriggerAction = (): IUseTriggerActionReturn => {
  const [isActive, setIsActive] = useState(false);
  const [actionType, setActionType] = useState<string | null>(null);

  const show = (type: string) => {
    setIsActive(true);
    setActionType(type);
  };

  const close = () => {
    setIsActive(false);
    setActionType(null);
  };

  return {
    isActive,
    actionType,
    show,
    close,
  };
};
