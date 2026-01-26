import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

export type AnimationType = "scale" | "rotate" | "shake" | "wiggle" | "spin" | "bounce" | "slide";

interface AnimatedIconProps extends HTMLMotionProps<"div"> {
    icon: LucideIcon;
    size?: number;
    className?: string; // Allow passing Tailwind classes for colors/etc
    color?: string; // Fallback for explicit color
    strokeWidth?: number;
    animation?: AnimationType;
}

const variants: Record<AnimationType, Variants> = {
    scale: {
        hover: { scale: 1.2 },
        tap: { scale: 0.9 },
    },
    rotate: {
        hover: { rotate: 90 },
        tap: { scale: 0.9, rotate: 90 },
    },
    shake: {
        hover: { x: [0, -3, 3, -3, 3, 0], transition: { duration: 0.4 } },
        tap: { scale: 0.9 },
    },
    wiggle: {
        hover: { rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.4 } },
        tap: { scale: 0.9 },
    },
    spin: {
        hover: { rotate: 360, transition: { duration: 0.8, ease: "linear", repeat: Infinity } },
        tap: { scale: 0.9 },
    },
    bounce: {
        hover: { y: [0, -5, 0], transition: { duration: 0.4, repeat: Infinity, repeatType: "reverse" } },
        tap: { scale: 0.9 },
    },
    slide: {
        hover: { x: 5 },
        tap: { scale: 0.9 },
    },
};

export const AnimatedIcon = ({
    icon: Icon,
    size = 24,
    className = "",
    color,
    strokeWidth,
    animation = "scale",
    ...props
}: AnimatedIconProps) => {
    return (
        <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={variants[animation]}
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
            {...props}
        >
            <Icon size={size} className={className} color={color} strokeWidth={strokeWidth} />
        </motion.div>
    );
};
