import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

export default function TypeWritter({ text}) {
    const [displayText, setDispayText] = useState("");

    useEffect(() => {
        let currentIndex = 0
        const intervalId = setInterval(() => {
            if (currentIndex < text.length) {
                setDispayText(text.slice(0, currentIndex + 1))
                currentIndex++
            } else {
                clearInterval(intervalId)
            }
        }, 60)

        return () => clearInterval(intervalId)
    }, [text])

    return (
        <span>
            <span>{displayText}</span>
            <motion.span
                animate={{ opacity: [0, 1, 0]}}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                style={{
                    marginLeft: "2px",
                    color: "var(--text-accent)",
                    fontWeight: "bold",
                }}
            >
                |
            </motion.span>
        </span>
    )
}
