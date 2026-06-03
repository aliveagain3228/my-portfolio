import { useEffect, useState, useCallback } from "react";
import Header from "@/sections/Header.jsx";
import BentoCard from "@/components/BentoCard.jsx";
import '@/styles/index.scss'
import { techStack, languages, projects, socialLinks, SOFT_SKILL_KEYS, EXP_KEYS } from '@/constants/index.jsx';
import AnimatedCard from "@/components/AnimatedCard.jsx";
import AnimatedItem from "@/components/AnimatedItem.jsx";
import PageLoader from "@/components/PageLoader.jsx";
import TypeWritter from "@/components/TypeWritter.jsx";
import { LocaleProvider, useTranslation } from "@/context/LocaleContext.jsx";
import HeroCode from "@/components/HeroCode.jsx";
import { SiGmail } from "react-icons/si";

function EmailCopyButton() {
    const EMAIL = 'kojda1337@gmail.com'
    const [showToast, setShowToast] = useState(false)

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(EMAIL)
        } catch {
            const el = document.createElement('textarea')
            el.value = EMAIL
            el.style.position = 'absolute'
            el.style.left = '-9999px'
            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            document.body.removeChild(el)
        }
        setShowToast(true)
        setTimeout(() => setShowToast(false), 2200)
    }, [])

    return (
        <>
            <button
                onClick={handleCopy}
                className="social-item email-copy-item"
                title={`Click to copy: ${EMAIL}`}
            >
                <SiGmail />
                <span>Gmail</span>
            </button>
            {showToast && (
                <div className="copy-toast">
                    ✓ {EMAIL} — copied!
                </div>
            )}
        </>
    )
}

function AppContent() {
    const { t } = useTranslation()

    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    function switchTheme() {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <PageLoader />
            <Header onThemeToggle={switchTheme} theme={theme} isScrolled={isScrolled} />

            <main className="bento-container">

                <AnimatedCard delay={0.1} data-section className="span-full no-lift">
                    <BentoCard className="hero-card">
                        <div className="hero-content">
                            <h1>
                                <TypeWritter text={t('hero.text')} />
                            </h1>
                            <h2><TypeWritter text={t('hero.role')} /></h2>
                            <p className="hero-description">
                                {t('hero.description')}
                            </p>
                        </div>
                        <div className="hero-image-wrapper">
                            <HeroCode />
                        </div>
                    </BentoCard>
                </AnimatedCard>

                <AnimatedCard id="skills" delay={0.3} data-section className="span-full">
                    <div className="skills-split-container">
                        <div className="skills-column">
                            <h3 className="section-title">
                                {t('sections.hardSkills')}
                            </h3>
                            <div className="skills-wrapper">
                                {techStack.map(tech => (
                                    <div key={tech.id} className="skill-item">
                                        <div className="skill-icon">{tech.icon}</div>
                                        <span className="skill-name">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="skills-column">
                            <h3 className="section-title">{t('sections.softSkills')}</h3>
                            <div className="soft-skills-list">
                                {SOFT_SKILL_KEYS.map(key => (
                                    <BentoCard key={key} className="soft-skill-item">
                                        <h4>{t(`softSkills.${key}.title`)}</h4>
                                        <p>{t(`softSkills.${key}.description`)}</p>
                                    </BentoCard>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedCard>

                <AnimatedCard delay={0.3} data-section className="span-full">
                    <BentoCard className="languages-card">
                        <h3>{t('sections.languages')}</h3>
                        <div className="languages-grid">
                            {languages.map(lang => (
                                <div key={lang.id} className="language-item">
                                    <div className="lang-info">
                                        <span className="lang-name">{lang.name}</span>
                                        <span className="lang-level">{lang.level}</span>
                                    </div>
                                    <div className="lang-progress-bar">
                                        <div className="lang-progress-fill" style={{ width: `${lang.progress}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </BentoCard>
                </AnimatedCard>

                <AnimatedCard id="experience" delay={0.4} data-section className="span-full">
                    <BentoCard className="experience-card">
                        <h3>{t('sections.experience')}</h3>
                        <div className="experience-list">
                            {EXP_KEYS.map(key => (
                                <div key={key} className="experience-item">
                                    <div className="exp-header">
                                        <h4 className="exp-role">{t(`experience.${key}.role`)}</h4>
                                    </div>
                                    <div className="exp-company">{t(`experience.${key}.company`)}</div>
                                    <p className="exp-desc">{t(`experience.${key}.description`)}</p>
                                </div>
                            ))}
                        </div>
                    </BentoCard>
                </AnimatedCard>

                <AnimatedCard id="projects" className="span-full" data-section delay={0.5}>
                    <BentoCard className="projects-card">
                        <h3>{t('sections.projects')}</h3>
                        <div className="project-list">
                            {projects.map(proj => (
                                <AnimatedItem key={proj.id}>
                                    <div className="project-item">
                                        <div className="project-info">
                                            <h4 className="project-title">{t(`projects.${proj.id}.name`)}</h4>
                                            <p className="project-desc">
                                                {t(`projects.${proj.id}.description`)}
                                            </p>
                                            <div className="project-techs">
                                                {proj.techs.map((icon, index) => (
                                                    <span key={index} className="tech-icon">{icon}</span>
                                                ))}
                                            </div>
                                            <div className="project-buttons">
                                                <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="project-link-button primary">
                                                    <span>{t('projects.github')}</span>
                                                </a>
                                                <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="project-link-button secondary">
                                                    <span>{t('projects.live')}</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="project-preview">
                                            {proj.image && (
                                                <img src={proj.image} alt={t(`projects.${proj.id}.name`)} />
                                            )}
                                        </div>
                                    </div>
                                </AnimatedItem>
                            ))}
                        </div>
                    </BentoCard>
                </AnimatedCard>

                <AnimatedCard id="about" delay={0.6} data-section className="span-full no-lift">
                    <BentoCard className="contact-section">
                        <p className="contact-eyebrow">{t('contact.eyebrow')}</p>
                        <h3 className="contact-title">{t('contact.title')}</h3>
                        <p className="contact-subtitle">{t('contact.subtitle')}</p>
                        <div className="social-grid">
                            {socialLinks
                                .filter(link => link.name !== 'Gmail')
                                .map(link => (
                                    <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className="social-item">
                                        {link.icon} <span>{link.name}</span>
                                    </a>
                                ))
                            }
                            <EmailCopyButton />
                        </div>
                    </BentoCard>
                </AnimatedCard>

            </main>
        </>
    )
}

export default function App() {
    return (
        <LocaleProvider>
            <AppContent />
        </LocaleProvider>
    )
}
