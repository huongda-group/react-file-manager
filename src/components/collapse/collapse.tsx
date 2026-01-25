import { useState, useEffect, PropsWithChildren } from "react";
import { useCollapse } from "react-collapsed";

interface CollapseProps extends PropsWithChildren {
  open: boolean;
}

const Collapse: React.FC<CollapseProps> = ({ open, children }) => {
  const [isExpanded, setExpanded] = useState(open);
  const { getCollapseProps } = useCollapse({
    isExpanded,
    duration: 500,
  });

  useEffect(() => {
    setExpanded(open);
  }, [open, setExpanded]);

  return (
    <>
      <div {...getCollapseProps()}>{children}</div>
    </>
  );
};

export default Collapse;
