import { useEffect, useRef, useState, RefObject, MouseEvent } from "react";
import { ChevronRight } from "lucide-react";
import { AnimatedIcon } from "../ui/animated-icon";
import SubMenu, { IMenuItem } from "../context-menu/sub-menu";
import "../context-menu/context-menu.css";

interface IClickPosition {
  clickX: number;
  clickY: number;
}

interface ContextMenuProps {
  filesViewRef: RefObject<HTMLElement | null>;
  contextMenuRef: RefObject<HTMLDivElement | null>;
  menuItems: IMenuItem[];
  visible: boolean;
  clickPosition: IClickPosition;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  contextMenuRef,
  menuItems,
  visible,
  clickPosition,
}) => {
  const [left, setLeft] = useState<string | number>(0);
  const [top, setTop] = useState<string | number>(0);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState<number | null>(
    null
  );
  const [subMenuPosition, setSubMenuPosition] = useState<string>("right");

  const subMenuRef = useRef<HTMLUListElement>(null);
  // Separate state to track actual visibility class vs hidden logic if needed
  // Using top/left state implies visibility logic 

  const contextMenuPosition = () => {
    const { clickX, clickY } = clickPosition;
    const contextContainer = contextMenuRef.current;

    if (!contextContainer) return;

    // Viewport dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Context menu size
    const contextMenuContainerRect = contextContainer.getBoundingClientRect();
    const menuWidth = contextMenuContainerRect.width;
    const menuHeight = contextMenuContainerRect.height;

    // Check if there is enough space at the right for the context menu
    const hasSpaceRight = windowWidth - clickX > menuWidth;
    const hasSpaceBottom = windowHeight - clickY > menuHeight;

    if (hasSpaceRight) {
      setLeft(`${clickX}px`);
      setSubMenuPosition("right");
    } else {
      // Show on the left side of the cursor
      setLeft(`${clickX - menuWidth}px`);
      setSubMenuPosition("left");
    }

    if (hasSpaceBottom) {
      setTop(`${clickY}px`);
    } else {
      // Show above the cursor
      setTop(`${clickY - menuHeight}px`);
    }
  };

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleMouseOver = (index: number) => {
    setActiveSubMenuIndex(index);
  };

  useEffect(() => {
    if (visible && contextMenuRef.current) {
      contextMenuPosition();
    } else {
      setTop(0);
      setLeft(0);
      setActiveSubMenuIndex(null);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={contextMenuRef}
      onContextMenu={handleContextMenu}
      onClick={(e) => e.stopPropagation()}
      className={`fm-context-menu ${top ? "visible" : "hidden"}`}
      style={{
        top: top,
        left: left,
      }}
    >
      <div className="file-context-menu-list">
        <ul>
          {menuItems
            .filter((item) => !item.hidden)
            .map((item, index) => {
              const hasChildren = item.children && item.children.length > 0;
              const activeSubMenu = activeSubMenuIndex === index && hasChildren;
              return (
                <div key={item.title}>
                  <li
                    onClick={item.onClick}
                    className={`${item.className ?? ""} ${activeSubMenu ? "active" : ""
                      }`}
                    onMouseOver={() => handleMouseOver(index)}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                    {hasChildren && (
                      <>
                        <AnimatedIcon
                          icon={ChevronRight}
                          size={14}
                          className="list-expand-icon"
                        />
                        {activeSubMenu && (
                          <SubMenu
                            subMenuRef={subMenuRef}
                            list={item.children}
                            position={subMenuPosition}
                          />
                        )}
                      </>
                    )}
                  </li>
                  {item.divider &&
                    index !==
                    menuItems.filter((item) => !item.hidden).length - 1 && (
                      <div className="divider"></div>
                    )}
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ContextMenu;
