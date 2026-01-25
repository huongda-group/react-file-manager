import React, { Dispatch, SetStateAction } from "react";
import { BsGridFill } from "react-icons/bs";
import { FaCheck, FaListUl } from "react-icons/fa6";
import { useDetectOutsideClick } from "../../hooks/use-detect-outside-click";
import { useLayout, LayoutType } from "../../contexts/layout";
import { useTranslation } from "../../contexts/translation";

interface LayoutTogglerProps {
  setShowToggleViewMenu: Dispatch<SetStateAction<boolean>>;
  onLayoutChange: (layout: LayoutType) => void;
}

const LayoutToggler: React.FC<LayoutTogglerProps> = ({
  setShowToggleViewMenu,
  onLayoutChange,
}) => {
  const toggleViewRef = useDetectOutsideClick(() => {
    setShowToggleViewMenu(false);
  });
  const { activeLayout, setActiveLayout } = useLayout();
  const t = useTranslation();

  const layoutOptions: {
    key: LayoutType;
    name: string;
    icon: React.ReactElement;
  }[] = [
      {
        key: "grid",
        name: t("grid"),
        icon: <BsGridFill size={18} />,
      },
      {
        key: "list",
        name: t("list"),
        icon: <FaListUl size={18} />,
      },
    ];

  const handleSelection = (key: LayoutType) => {
    setActiveLayout(key);
    onLayoutChange(key);
    setShowToggleViewMenu(false);
  };

  return (
    <div ref={toggleViewRef.ref} className="toggle-view" role="dropdown">
      <ul role="menu" aria-orientation="vertical">
        {layoutOptions.map((option) => (
          <li
            role="menuitem"
            key={option.key}
            onClick={() => handleSelection(option.key)}
            onKeyDown={() => handleSelection(option.key)}
          >
            <span>{option.key === activeLayout && <FaCheck size={13} />}</span>
            <span>{option.icon}</span>
            <span>{option.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LayoutToggler;
