import { ReactElement, RefObject } from "react";
import { FaCheck } from "react-icons/fa6";

export interface IMenuItem {
  title: string;
  onClick?: () => void;
  icon?: ReactElement;
  selected?: boolean;
  children?: IMenuItem[];
  hidden?: boolean;
  divider?: boolean;
  className?: string;
}

interface SubMenuProps {
  subMenuRef: RefObject<HTMLUListElement | null>;
  list?: IMenuItem[];
  position?: "left" | "right" | string;
}

const SubMenu: React.FC<SubMenuProps> = ({
  subMenuRef,
  list,
  position = "right",
}) => {
  return (
    <ul ref={subMenuRef} className={`sub-menu ${position}`}>
      {list?.map((item) => (
        <li key={item.title} onClick={item.onClick}>
          <span className="item-selected">
            {item.selected && <FaCheck size={13} />}
          </span>
          {item.icon}
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
