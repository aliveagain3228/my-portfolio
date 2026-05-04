import {
    SiReact,
    SiJavascript,
    SiSass,
    SiCss,
    SiHtml5,
    SiTelegram,
    SiGithub,
    SiTailwindcss,
    SiReacthookform, SiFigma, SiTypescript
} from "react-icons/si";

export const softSkills = [
    {
        id: 1,
        title: "Adaptability ",
        description: "I quickly grasp new technologies and frameworks and can understand code written by others",
    },
    {
        id: 2,
        title: "Communication Skills",
        description: "I easily connect with the team, explain the reasoning behind my decisions, and am a good listener",
    },
    {
        id: 3,
        title: "Responsibility",
        description: "I always strive to meet deadlines and carefully assess my ability to take on tasks of a certain level of complexity",
    },
    {
        id: 4,
        title: "Open to criticism",
        description: "I always welcome criticism and see it as a big plus, because it helps me grow as a programmer",
    },
    {
        id: 5,
        title: "A thirst for new knowledge",
        description: "I am motivated by the desire to improve my skills and constantly learn about new technologies in my field",
    },
    {
        id: 6,
        title: "Non-confrontational",
        description: "I never make personal attacks. Of course, it makes sense to debate a topic that can lead us to a better solution for the task at hand",
    },
]

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
    {id: 11, name: 'Figma', icon: <SiFigma/>}
]

export const languages = [
    {id: 1, name: 'Ukranian', level: 'Native', flag: <span className="fi fi-ua"></span>, progress: 100},
    {id: 2, name: 'Russian', level: 'Native', flag: <span className="fi fi-ru"></span>, progress: 100},
    {id: 3, name: 'English', level: 'B1', flag: <span className="fi fi-us"></span>, progress: 60},
]

export const experience = [
    {
        id: 1,
        role: "Junior Frontend Developer",
        title: 'Some sections of the website that serve as a resource and guide for a popular game',
        company: 'AnthorNet helper',
        description: 'I worked indirectly with a person going by the username "AnthorNet"; I was his student and learned a great deal under his guidance. Now I plan to apply some of his techniques, coding style, and other insights. I can confidently say that if you take a look at his work, you’ll see very elegant styles, as well as the organization and layout of elements in the code.'
    },
    {
        id: 2,
        role: "Freelance Web Developer",
        title: "I tried my hand at freelancing, but after completing a couple of projects, I realized it wasn't for me.",
        company: "Upwork",
        description: "Of course, working alone has its advantages, but by working as part of a team with others—taking on tasks you may not be prepared for and figuring out solutions as you go—you can improve your adaptability and enhance your skills as a programmer. That’s why I decided to find a company that would be a good fit for this.",

    }
]

export const projects = [
    {
        id: 1,
        name: 'Ingredients Calculator',
        image: '',
        techs: [<SiReact/>, <SiSass/>, <SiJavascript/>, <SiHtml5/>],
        url: 'https://github.com/aliveagain3228/Ingredient-Calculator'
    },
    {
        id: 2,
        name: 'Kanban Board',
        image: '',
        techs: [<SiReact/>, <SiTailwindcss/>, <SiJavascript/>, <SiHtml5/>, <SiTypescript/>],
        url: 'https://github.com/aliveagain3228/TodoReactTS'
    }
]

export const socialLinks = [
    { id: 1, name: 'Telegram', icon:<SiTelegram/>, url: 'https://t.me/tellmewhy322' },
    { id: 2, name: 'Github', icon:<SiGithub/>, url: 'https://github.com/aliveagain3228' }
]