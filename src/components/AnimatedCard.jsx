import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.3}},

}

export default function AnimatedCard({ children, delay = 0, className, id, ...props }) {
    return (
        <motion.div
            id={id}
            className={className}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}
            transition={{ duration: 0.5, delay}}
            style={{ scrollMarginTop: '100px'}}
            {...props}
        >
            {children}
        </motion.div>
    )
}