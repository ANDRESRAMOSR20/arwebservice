"use client";

import { motion, MotionProps } from "framer-motion";

interface AnimationContainerProps extends MotionProps {
    children?: React.ReactNode;
    delay?: number;
    reverse?: boolean;
    className?: string;
    onClick?: () => void;
    onMouseEnter?: () => void; // Agregado
    onMouseLeave?: () => void; // Agregado
}

const AnimationContainer = ({
                                children,
                                className,
                                reverse,
                                delay,
                                animate,
                                initial,
                                exit,
                                transition,
                                onClick,
                                onMouseEnter, // Agregado
                                onMouseLeave, // Agregado
                            }: AnimationContainerProps) => {
    return (
        <motion.div
            className={className}
            initial={initial || { opacity: 0, y: reverse ? -20 : 20 }}
            animate={animate || { opacity: 1, y: 0 }}
            exit={exit}
            viewport={{ once: false }}
            transition={
                transition || {
                    duration: 0.2,
                    delay: delay,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }
            }
            onClick={onClick}
            onMouseEnter={onMouseEnter} // Aplicado aquí
            onMouseLeave={onMouseLeave} // Aplicado aquí
        >
            {children}
        </motion.div>
    );
};


export default AnimationContainer;
