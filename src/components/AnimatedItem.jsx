import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8},
    visible: { opacity: 1, scale: 1},
}

export default function AnimatedItem({ children }) {
    return (
    <motion.div
        variants={itemVariants}>
        {children}
    </motion.div>
    )
}