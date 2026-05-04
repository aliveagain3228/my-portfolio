export default function BentoCard({ children, className = '' }) {
return <div className={`bento-card ${className}`}>{children}</div>
}