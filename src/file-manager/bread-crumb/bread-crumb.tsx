import {
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import {
  Home,
  MoreHorizontal,
  ChevronRight,
  PanelLeftOpen,
  PanelLeftClose,
} from "lucide-react";
import { AnimatedIcon } from "../../components/ui/animated-icon";
import { useFileNavigation } from "../../contexts/file-navigation";
import { useDetectOutsideClick } from "../../hooks/use-detect-outside-click";
import { useTranslation } from "../../contexts/translation";
import "../../file-manager/bread-crumb/bread-crumb.css";

interface BreadCrumbProps {
  collapsibleNav?: boolean;
  isNavigationPaneOpen: boolean;
  setNavigationPaneOpen: Dispatch<SetStateAction<boolean>>;
}

interface IFolderStruct {
  name: string;
  path: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  collapsibleNav,
  isNavigationPaneOpen,
  setNavigationPaneOpen,
}) => {
  const [folders, setFolders] = useState<IFolderStruct[]>([]);
  const [hiddenFolders, setHiddenFolders] = useState<IFolderStruct[]>([]);
  const [hiddenFoldersWidth, setHiddenFoldersWidth] = useState<number[]>([]);
  const [showHiddenFolders, setShowHiddenFolders] = useState(false);

  const { currentPath, setCurrentPath, onFolderChange } = useFileNavigation();
  const breadCrumbRef = useRef<HTMLDivElement>(null);
  const foldersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const moreBtnRef = useRef<HTMLButtonElement>(null);
  const navTogglerRef = useRef<HTMLDivElement>(null);
  const popover = useDetectOutsideClick((_e) => {
    // If click is outside, hide
    setShowHiddenFolders(false);
  });

  const t = useTranslation();

  useEffect(() => {
    setFolders(() => {
      let path = "";
      return (currentPath || "").split("/").map((item) => {
        const itemPath = item === "" ? item : (path += `/${item}`);
        if (item === "" && path === "") {
          // This logic mirrors the JS split behavior but needs care
          // "folder".split("/") -> ["folder"].
          // "folder/sub".split("/") -> ["folder", "sub"]
          // If currentPath is "", split -> [""]
          path = ""; // ensure path accumulation is correct
        }
        return {
          name: item || '',
          path: itemPath,
        };
      });
    });
    setHiddenFolders([]);
    setHiddenFoldersWidth([]);
  }, [currentPath, t]);

  const switchPath = (path: string) => {
    setCurrentPath(path);
    onFolderChange?.(path);
  };

  const getBreadCrumbWidth = () => {
    if (!breadCrumbRef.current) return 0;
    const containerWidth = breadCrumbRef.current.clientWidth;
    const containerStyles = getComputedStyle(breadCrumbRef.current);
    const paddingLeft = parseFloat(containerStyles.paddingLeft);
    const navTogglerGap = collapsibleNav ? 2 : 0;
    const navTogglerDividerWidth = 1;
    const navTogglerWidth = collapsibleNav
      ? (navTogglerRef.current?.clientWidth || 0) + navTogglerDividerWidth
      : 0;
    const moreBtnGap = hiddenFolders.length > 0 ? 1 : 0;
    const flexGap =
      parseFloat(containerStyles.gap) *
      (folders.length + moreBtnGap + navTogglerGap);
    return containerWidth - (paddingLeft + flexGap + navTogglerWidth);
  };

  const checkAvailableSpace = () => {
    const availableSpace = getBreadCrumbWidth();
    const remainingFoldersWidth = foldersRef.current.reduce((prev, curr) => {
      if (!curr) return prev;
      return prev + curr.clientWidth;
    }, 0);
    const moreBtnWidth = moreBtnRef.current?.clientWidth || 0;
    return availableSpace - (remainingFoldersWidth + moreBtnWidth);
  };

  const isBreadCrumbOverflowing = () => {
    if (!breadCrumbRef.current) return false;
    return (
      breadCrumbRef.current.scrollWidth > breadCrumbRef.current.clientWidth
    );
  };

  useEffect(() => {
    // Check overflow logic
    // This effect runs on dependency array. But dependency "isBreadCrumbOverflowing" is a function ref.
    // In JS it was `[isBreadCrumbOverflowing]`. This doesn't trigger on resize unless something else triggers render.
    // The JS version might have relied on re-renders from other sources.
    // I will try to run this when folders change.

    // JS Logic: 
    // useEffect(() => { ... }, [isBreadCrumbOverflowing]); 
    // This basically ran once or whenever the function ref changed (which is never).
    // I suspect the JS code might have had issues or relied on something else.
    // I will add `folders` to dependency to re-calc on folder change.
    if (isBreadCrumbOverflowing()) {
      if (folders.length > 1) {
        const hiddenFolder = folders[1];
        const hiddenFolderRef = foldersRef.current[1];
        const hiddenFolderWidth = hiddenFolderRef?.clientWidth || 0;

        setHiddenFoldersWidth((prev) => [...prev, hiddenFolderWidth]);
        setHiddenFolders((prev) => [...prev, hiddenFolder]);
        setFolders((prev) => prev.filter((_, index) => index !== 1));
      }
    } else if (
      hiddenFolders.length > 0 &&
      checkAvailableSpace() > (hiddenFoldersWidth[hiddenFoldersWidth.length - 1] || 0)
    ) {
      const lastHidden = hiddenFolders[hiddenFolders.length - 1];
      if (lastHidden) {
        const newFolders = [
          folders[0],
          lastHidden,
          ...folders.slice(1),
        ];
        setFolders(newFolders);
        setHiddenFolders((prev) => prev.slice(0, -1));
        setHiddenFoldersWidth((prev) => prev.slice(0, -1));
      }
    }
  }, [folders, hiddenFolders, hiddenFoldersWidth]); // Added dependencies

  return (
    <div className="bread-crumb-container">
      <div className="breadcrumb" ref={breadCrumbRef}>
        {collapsibleNav && (
          <>
            <div
              ref={navTogglerRef}
              className="nav-toggler"
              title={`${isNavigationPaneOpen
                ? t("collapseNavigationPane")
                : t("expandNavigationPane")
                }`}
            >
              <span
                className="folder-name folder-name-btn"
                onClick={() => setNavigationPaneOpen((prev) => !prev)}
              >
                {isNavigationPaneOpen ? (
                  <AnimatedIcon icon={PanelLeftClose} />
                ) : (
                  <AnimatedIcon icon={PanelLeftOpen} />
                )}
              </span>
            </div>
            <div className="divider" />
          </>
        )}
        {folders.map((folder, index) => (
          <div key={index} style={{ display: "contents" }}>
            <span
              className="folder-name"
              onClick={() => switchPath(folder.path)}
              ref={(el) => {
                foldersRef.current[index] = el;
              }}
            >
              {index === 0 ? <AnimatedIcon icon={Home} /> : <AnimatedIcon icon={ChevronRight} />}
              {folder.name}
            </span>
            {hiddenFolders?.length > 0 && index === 0 && (
              <button
                className="folder-name folder-name-btn"
                onClick={() => setShowHiddenFolders(true)}
                ref={moreBtnRef}
                title={t("showMoreFolder")}
              >
                <AnimatedIcon icon={MoreHorizontal} size={22} className="hidden-folders" />
              </button>
            )}
          </div>
        ))}
      </div>

      {showHiddenFolders && (
        <ul ref={popover.ref} className="hidden-folders-container">
          {hiddenFolders.map((folder, index) => (
            <li
              key={index}
              onClick={() => {
                switchPath(folder.path);
                setShowHiddenFolders(false);
              }}
            >
              {folder.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BreadCrumb;
