import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import myPicture from '@/assets/my-avatar.jpg'
import { useTranslation } from "@/context/LocaleContext.jsx";

export default function Header ({  theme,isScrolled, onThemeToggle }) {

    const { locale, changeLocale, t } = useTranslation()
    const [isLangOpen, setIsLangOpen] = useState(false)

    const LANGS = [
        { locale: 'en', label: 'English', flag: 'EN' },
        { locale: 'ru', label: 'Русский', flag: 'RU' },
        { locale: 'ua', label: 'Українська', flag: 'UA' },
    ]
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
                <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>{t('nav.skills')}</a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}>{t('nav.contact')}</a>
                <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>{t('nav.projects')}</a>
                <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>{t('nav.experience')}</a>
            </nav>

            <div className="lang-switcher">
                <button
                    onClick={() => setIsLangOpen(prev => !prev)}
                    className="lang-switcher__toggle"
                >
                    {LANGS.map(l => l.locale === locale)?.flag} ▼
                </button>

                {isLangOpen && (
                    <>
                        <div
                            className="lang-switcher__overlay"
                            onClick={() => setIsLangOpen(false)}
                        />
                        <div className="lang-switcher__menu">
                            {LANGS.map(lang => (
                                <button
                                    key={lang.locale}
                                    onClick={() => { changeLocale(lang.locale); setIsLangOpen(false) }}
                                    className={`lang-switcher__option ${locale === lang.locale ? 'lang-switcher__option--active' : ''}`}
                                >
                                    <span className="lang-switcher__flag">{lang.flag}</span>
                                    <span className="lang-switcher__label">{lang.label}</span>
                                    {locale === lang.locale && <span className="lang-switcher__check">✓</span>}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <button
                className="theme-toggle"
                onClick={onThemeToggle}
            >
                {theme === 'light' ? <HiMoon /> : <HiSun /> }
            </button>
        </header>


    )
}
