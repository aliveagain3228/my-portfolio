import { motion } from "framer-motion";

export default function PageLoader() {
    return (
        <motion.div
            className="loader-container"
            initial="initial"
            animate="animate"
            variants={{
                animate: { transition: { staggerChildren: 0.1}}
            }}
        >
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="loader-stripe"
                    variants={{
                        initial: { scaleX: 1 },
                        animate: { scaleX: 0 }
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
            ))}
        </motion.div>
    )
}