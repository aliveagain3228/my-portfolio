import { motion } from 'framer-motion'

const COLORS = {
    keyword: '#c792ea',
    string: '#c3e88d',
    type: '#82aaff',
    comment: '#546e7a',
    variable: '#f07178',
    plain: '#cdd3de',
    accent: '#ffcb6b',
}

const CODE_LINES = [
    [
        { text: '// my current project', color: COLORS.comment }
    ],
    [
        { text: 'interface ', color: COLORS.keyword },
        { text: 'Developer', color: COLORS.type },
        { text: ' {', color: COLORS.plain },
    ],
    [
        { text: '  name', color: COLORS.accent },
        { text: ': ', color: COLORS.plain },
        { text: '"Nikita"', color: COLORS.string },
        { text: ';', color: COLORS.plain },
    ],
    [
        { text: '  stack', color: COLORS.accent },
        { text: ': ', color: COLORS.plain },
        { text: 'string', color: COLORS.type },
        { text: '[]', color: COLORS.plain },
        { text: ';', color: COLORS.plain },
    ],
    [
        { text: '}', color: COLORS.plain },
    ],
    [
        { text: '', color: COLORS.plain },
    ],
    [
        { text: 'const ', color: COLORS.keyword },
        { text: 'me', color: COLORS.variable },
        { text: ': ', color: COLORS.plain },
        { text: 'Developer', color: COLORS.type },
        { text: ' = {', color: COLORS.plain },
    ],
    [
        { text: '  name', color: COLORS.accent },
        { text: ': ', color: COLORS.plain },
        { text: '"Nikita"', color: COLORS.string },
        { text: ',', color: COLORS.plain },
    ],
    [
        { text: '  stack', color: COLORS.accent },
        { text: ': [', color: COLORS.plain },
        { text: '"React"', color: COLORS.string },
        { text: ', ', color: COLORS.plain },
        { text: '"TypeScript"', color: COLORS.string },
        { text: '],', color: COLORS.plain },
    ],
    [
        { text: '}', color: COLORS.plain },
    ],
    [
        { text: '', color: COLORS.plain },
    ],
    [
        { text: 'export default ', color: COLORS.keyword },
        { text: 'me', color: COLORS.variable },
        { text: ' 🚀', color: COLORS.plain },
    ],
]

export default function HeroCode() {
    return (
        <div className="hero-code-wrapper">
            <div className="hero-code-titlebar">
                <div className="hero-code-dots">
                    <span className="dot dot--red" />
                    <span className="dot dot--yellow" />
                    <span className="dot dot--green" />
                </div>
                <span className="hero-code-filename">developer.ts</span>
            </div>

            <div className="hero-code-body">
                <div className="hero-code-gutter">
                    {CODE_LINES.map((_, i) => (
                        <span key={i} className="hero-code-lineno">
                            {i + 1}
                        </span>
                    ))}
                </div>

                <div className="hero-code-lines">
                    {CODE_LINES.map((tokens, lineIndex) => (
                        <motion.div
                            key={lineIndex}
                            className="hero-code-line"
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.3 + lineIndex * 0.08,
                                duration: 0.3,
                                ease: 'easeOut'
                            }}
                        >
                            {tokens.map((token, tokenIndex) => (
                                <span
                                    key={tokenIndex}
                                    style={{ color: token.color }}
                                >
                                    {token.text}
                                </span>
                            ))}
                        </motion.div>
                    ))}

                    <motion.span
                        className="hero-code-cursor"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    >
                        |
                    </motion.span>
                </div>
            </div>
        </div>
    )
}