import {
    SiReact,
    SiJavascript,
    SiSass,
    SiCss,
    SiHtml5,
    SiTelegram,
    SiGithub,
    SiTailwindcss,
    SiVite,
    SiFramer,
    SiReacthookform, SiFigma, SiTypescript, SiGmail
} from "react-icons/si";
import kanbanPreview from '../assets/kanban-board.png'
import spiceCalcPreview from '../assets/SpiceCalc.png'
import gymTrackerPreview from '../assets/gym-tracker.png'
import moodTrackerPreview from '../assets/mood-tracker.png'

export const SOFT_SKILL_KEYS = ['adaptability', 'communication', 'responsibility', 'criticism', 'knowledge', 'nonConflict']


export const techStack = [
    { id: 1, name: 'React', icon: <SiReact/>},
    { id: 2, name: 'JavaScript', icon: <SiJavascript/>},
    { id: 3, name: 'SCSS', icon: <SiSass/>},
    { id: 4, name: 'CSS', icon: <SiCss/>},
    { id: 5, name: 'HTML', icon: <SiHtml5/>},
    { id: 6, name: 'React Native', icon: <SiReact/>},
    { id: 7, name: 'Tailwind', icon: <SiTailwindcss/>},
    { id: 9, name: 'React Hook Form', icon: <SiReacthookform/>},
    { id: 10, name: 'GitHub', icon: <SiGithub/>},
    {id: 11, name: 'Figma', icon: <SiFigma/>},
    {id: 12, name: 'Typescript', icon: <SiTypescript/>},
    {id: 13, name: 'Vite', icon: <SiVite />},
    {id: 14, name: 'FramerMotion', icon: <SiFramer />},
]

export const languages = [
    {id: 1, name: 'Ukrainian', level: 'Native', flag: <span className="fi fi-ua"></span>, progress: 100},
    {id: 2, name: 'Russian', level: 'Native', flag: <span className="fi fi-ru"></span>, progress: 100},
    {id: 3, name: 'English', level: 'B1', flag: <span className="fi fi-us"></span>, progress: 60},
]

export const EXP_KEYS = ['anthorNet', 'freelance']

export const projects = [
    {
        id: 'calculator',
        image: spiceCalcPreview,
        techs: [<SiReact/>, <SiSass/>, <SiJavascript/>, <SiHtml5/>],
        githubUrl: 'https://github.com/aliveagain3228/Ingredient-Calculator',
        liveUrl: 'https://aliveagain3228.github.io/Ingredient-Calculator/'
    },
    {
        id: 'kanban',
        image: kanbanPreview,
        techs: [<SiReact/>, <SiTailwindcss/>, <SiJavascript/>, <SiHtml5/>, <SiTypescript/>],
        githubUrl: 'https://github.com/aliveagain3228/TodoReactTS',
        liveUrl: 'https://aliveagain3228.github.io/TodoReactTS/'
    },
    {
        id: 'gymTracker',
        image: gymTrackerPreview,
        techs: [<SiReact/>, <SiTypescript/>, <SiTailwindcss/>, <SiVite/>],
        githubUrl: 'https://github.com/aliveagain3228/gym-tracker',
        liveUrl: 'https://aliveagain3228.github.io/gym-tracker/'
    },
    {
        id: 'moodTracker',
        image: moodTrackerPreview,
        techs: [<SiReact/>, <SiTypescript/>, <SiTailwindcss/>, <SiVite/>],
        githubUrl: 'https://github.com/aliveagain3228/mood-tracker',
        liveUrl: 'https://aliveagain3228.github.io/mood-tracker/'
    },
]

export const socialLinks = [
    { id: 1, name: 'Telegram', icon:<SiTelegram/>, url: 'https://t.me/tellmewhy322' },
    { id: 2, name: 'Github', icon:<SiGithub/>, url: 'https://github.com/aliveagain3228' },
    { id: 3, name: 'Gmail', icon:<SiGmail/>, url: 'mailto:kojda1337@gmail.com' }
]