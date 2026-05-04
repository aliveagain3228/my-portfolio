import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import myPicture from '@/assets/my-avatar.jpg'

export default function Header ({  theme,isScrolled, onThemeToggle }) {

    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const sections = document.querySelectorAll('[data-section]')
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id || '')
                }
            })
        },
        {
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0
        }
    )

    sections.forEach(s => observer.observe(s));

    return () => observer.disconnect()
}, [])


    const headerClass = `main-header ${isScrolled ? 'scrolled' : ''}`

    return (
        <header className={headerClass}>
            <div className="header-left">
                <div className="header-avatar">
                    <img src={myPicture} alt="My Avatar"/>
                </div>
                <div className="header-logo">NK</div>
            </div>

            <nav className="header-nav">
                <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}>Contact me</a>
                <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
                <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
            </nav>
            <button
                className="theme-toggle"
                onClick={onThemeToggle}
            >
                {theme === 'light' ? <HiMoon /> : <HiSun /> }
            </button>
        </header>


    )
}
