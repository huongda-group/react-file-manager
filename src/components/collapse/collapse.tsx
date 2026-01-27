import { PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CollapseProps extends PropsWithChildren {
  open: boolean;
}

const Collapse: React.FC<CollapseProps> = ({ open, children }) => {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Collapse;
