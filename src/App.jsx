import {useEffect, useState} from "react";
import Header from "@/sections/Header.jsx";
import BentoCard from "@/components/BentoCard.jsx";
import '@/styles/index.scss'
import {techStack, languages, projects, softSkills, socialLinks, experience} from '@/constants/index.jsx';
import AnimatedCard from "@/components/AnimatedCard.jsx";
import AnimatedItem from "@/components/AnimatedItem.jsx";
import PageLoader from "@/components/PageLoader.jsx";
import TypeWritter from "@/components/TypeWritter.jsx";
import heroImage from "@/assets/heroImage.jpg";


export default function App() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])
        function switchTheme () {
            if (theme === 'light') {
                setTheme('dark')
            } else if (theme === 'dark') {
                setTheme('light')
            }
        }
        return (
            <>
                <PageLoader/>
                <Header onThemeToggle={switchTheme} theme={theme} isScrolled={isScrolled}  />

                <main className="bento-container">


                        <AnimatedCard delay={0.1} data-section className="span-full">
                        <BentoCard className="hero-card">
                            <div className="hero-content">
                                <h1>
                                    <TypeWritter text="Hello, my name is Nikita Koida." />
                                </h1>
                                <h2><TypeWritter text="Frontend Developer" /></h2>
                                <p>
                                    I build modern, fast, and visually appealing web applications. I love writing clean code and creating cool animations.
                                </p>
                            </div>

                            <div className="hero-image-wrapper">
                                <img src={heroImage} alt=""/>
                            </div>
                        </BentoCard>
                    </AnimatedCard>


                    <AnimatedCard id="skills" delay={0.3} data-section className="span-full">
                        <div className="skills-split-container">
                            <div className="skills-column">
                                <h3 className="section-title">
                                    Hard Skills
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
                                <h3 className="section-title">Soft Skills</h3>
                                <div className="soft-skills-list">
                                    {softSkills.map(skill => (
                                        <BentoCard key={skill.id} className="soft-skill-item">
                                            <h4>{skill.title}</h4>
                                            <p>{skill.description}</p>
                                        </BentoCard>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </AnimatedCard>

                    <AnimatedCard delay={0.3} data-section className="span-full">
                        <BentoCard className="languages-card">
                            <h3>Language skills</h3>
                            <div className="languages-grid">
                                {languages.map(lang => (
                                    <div key={lang.id} className="language-item">
                                        <div className="lang-info">
                                            <span className="lang-name">{lang.name}</span>
                                            <span className="lang-level">{lang.level}</span>
                                        </div>
                                        <div className="lang-progress-bar">
                                            <div className="lang-progress-fill" style={{ width: `${lang.progress}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </BentoCard>
                    </AnimatedCard>

                        <AnimatedCard id="experience" delay={0.4} data-section className="span-full">
                            <BentoCard  className="experience-card">
                                <h3>Work Experience</h3>
                                <div className="experience-list">
                                    {experience.map(exp => (
                                        <div key={exp.id} className="experience-item">
                                            <div className="exp-header">
                                                <h4 className="exp-role">{exp.role}</h4>
                                            </div>
                                            <div className="exp-company">{exp.company}</div>
                                            <p className="exp-desc">{exp.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </BentoCard>
                        </AnimatedCard>

                        <AnimatedCard id="projects" className="span-full" data-section delay={0.5}>
                            <BentoCard className="projects-card">
                                <h3>My Projects</h3>
                                <div className="project-list">
                                    {projects.map(proj => (
                                        <AnimatedItem key={proj.id}>
                                            <div className="project-item">
                                                <div className="project-info">
                                                    <h4 className="project-title">{proj.name}</h4>
                                                    <p className="project-desc">
                                                        {proj.description}
                                                    </p>
                                                    <div className="project-techs">
                                                        {proj.techs.map((icon, index) => (
                                                            <span key={index} className="tech-icon">{icon}</span>
                                                        ))}
                                                    </div>
                                                    <a href={proj.url} target="_blank" className="project-link-button">
                                                        View code
                                                    </a>
                                                </div>
                                                <div className="project-preview">
                                                    {proj.image && (
                                                        <img
                                                            src={proj.image}
                                                            alt=""
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </AnimatedItem>
                                    ))}
                                </div>
                            </BentoCard>
                        </AnimatedCard>

                        <AnimatedCard id="about" delay={0.6} data-section className="span-full">
                            <BentoCard className="contact-section">
                                <p className="contact-eyebrow">Do you have any questions for me?</p>
                                <h3 className="contact-title">Contact me!</h3>
                                <p className="contact-subtitle">Always open to collaboration</p>
                                <div className="social-grid">
                                    {socialLinks.map(link => (
                                        <a key={link.id} href={link.url} className="social-item">
                                            {link.icon} <span>{link.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </BentoCard>
                        </AnimatedCard>
                </main>
            </>
            )

}



