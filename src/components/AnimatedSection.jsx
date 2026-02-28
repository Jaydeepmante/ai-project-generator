/**
 * AnimatedSection — reusable scroll-reveal wrapper.
 * Children fade up + stagger as they enter the viewport.
 */
import { motion } from "framer-motion";

// Container variant: staggers children
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.13,
            delayChildren: 0.05,
        },
    },
};

// Each child rises + fades in
const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
};

/**
 * @param {React.ReactNode} children
 * @param {string} className  — extra Tailwind classes on the wrapper
 * @param {boolean} stagger   — if false, all children animate together
 * @param {number} delay      — optional entrance delay in seconds
 */
export default function AnimatedSection({ children, className = "", stagger = true, delay = 0 }) {
    return (
        <motion.div
            className={className}
            variants={stagger ? containerVariants : undefined}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ willChange: "opacity, transform" }}
        >
            {stagger
                ? // Wrap each direct child in an item motion.div
                Array.isArray(children)
                    ? children.map((child, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            {child}
                        </motion.div>
                    ))
                    : <motion.div variants={itemVariants}>{children}</motion.div>
                : children}
        </motion.div>
    );
}

// Named export for individual item usage
export { itemVariants, containerVariants };
