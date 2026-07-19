import {
    DeviconAngular, DeviconCss3, DeviconHtml5, DeviconCplusplus, DeviconFigma,
    DeviconGit, DeviconGithub, DeviconJava, DeviconJavascript, DeviconMysql, DeviconPostgresql, DeviconPython,
    DeviconReact, DeviconSpring, DeviconTypescript, DeviconVscode,
    DeviconCSharp, DeviconDotNet,
    DockerIcon,
    LogosFacebook
} from '../components/extras/Icons.jsx';

import { pngs } from '../assets/index.js';

const heroSection = {
    author: "Carlos Hernandez",
    role: "Full Stack Developer | Aspiring DevSecOps Engineer",
    description: "Engineering student. From the line of code to cloud configuration, with security as my primary focus. I'm looking for a role where my full-stack skills can be applied to robust and proactive DevSecOps solutions.",
    slogan: "Code. Secure. Deploy.",
    // footerDescription: "© 2025 Carlos Hernandez."
};

const colors = [
    'shadow-green-500',
    'shadow-blue-500',
    'shadow-yellow-500',
    'shadow-red-500',
    'shadow-indigo-500',
    'shadow-pink-500',
    'shadow-rose-500',
    'shadow-sky-500',
    'shadow-amber-500',
    'shadow-emerald-500',
    'shadow-cyan-500',
    'shadow-fuchsia-500',
    'shadow-violet-500',
    'shadow-lime-500',
    'shadow-teal-500',
    'shadow-orange-500',
    'shadow-gray-500',
    'shadow-warmGray-500',
    'shadow-trueGray-500',
];


/*
const icons = [
    { name: 'HTML5', icon: <DeviconHtml5 width={40} /> },
    { name: 'CSS3', icon: <DeviconCss3 width={40} /> },
    { name: 'Javascript', icon: <DeviconJavascript width={40} /> },
    { name: 'Typescript', icon: <DeviconTypescript width={40} /> },
    { name: 'React', icon: <DeviconReact width={40} /> },
    { name: 'C#', icon: <DeviconCSharp width={40} /> },
    { name: '.NET', icon: <DeviconDotNet width={40} /> },
    { name: 'Python', icon: <DeviconPython width={40} /> },
    { name: 'Figma', icon: <DeviconFigma width={40} /> },
    { name: 'Git', icon: <DeviconGit width={40} /> },
    { name: 'Github', icon: <DeviconGithub width={40} /> },
    { name: 'PostgreSQL', icon: <DeviconPostgresql width={40} /> },
    { name: 'MySQL', icon: <DeviconMysql width={40} /> },
    { name: 'Docker', icon: <DockerIcon width={40} /> },
]*/

const projects = [
    {
        id: 1,
        title: 'Finance App',
        category: 'web',
        description: 'Personal finance manager built with React and Tailwind CSS',
        longDescription: 'Developed a responsive finance management app allowing users to track income, expenses, and savings goals. Features include dynamic charts, category filtering, and local storage persistence.',
        tags: ['React', 'Tailwind CSS', 'Chart.js', 'LocalStorage'],
        image: pngs.pj,
        url: 'https://react-n2jk.vercel.app/',
        achievements: ['Dynamic data visualization with Chart.js', 'Responsive design for mobile and desktop']
    },
    {
        id: 2,
        title: 'Shopping Cart',
        category: 'web',
        description: 'Simple shopping cart using React, Tailwind CSS, and Context API',
        longDescription: 'Built a lightweight e-commerce cart system with product listing, quantity adjustment, and checkout simulation. Utilized Context API for global state and Tailwind for UI styling.',
        tags: ['React', 'Tailwind CSS', 'Context API'],
        image: pngs.shopstore,
        url: 'https://react-navy-delta.vercel.app/',
        achievements: ['State managed with Context API', 'Minimalist UI with Tailwind', 'Fast load times under 1s']
    },
    {
        id: 3,
        title: 'To Do App',
        category: 'web',
        description: 'Task management app built with React and Tailwind CSS',
        longDescription: 'Created a clean and intuitive To Do application with task creation, completion toggles, and filtering. Designed for simplicity and speed, ideal for daily productivity tracking.',
        tags: ['React', 'Tailwind CSS', 'Hooks'],
        image: pngs.todo,
        url: 'https://github.com/CarlosHernandezLl/React/tree/master/01-To-Do-App',
        achievements: ['Used by organizate daily tasks', 'Lightweight and fast performance']
    },
    // {
    //     id: 4,
    //     title: 'Tempus Untels',
    //     category: 'mobile',
    //     description: 'Android app for managing temperature and humidity in different environments',
    //     longDescription: 'Developed an Android application that allows users to monitor and manage temperature and humidity levels in various settings. The app provides real-time data visualization and alerts for optimal environmental conditions.',
    //     tags: ['Java', 'Android Studio', 'Firebase'],
    //     image: pngs.tempus_untels,
    //     url: 'https://play.google.com/store/apps/details?id=com.tempusuntels.app',
    //     achievements: ['Real-time data monitoring', 'User-friendly interface']
    // }
];


const aboutMe = {
    my_history: `
        My story is one of dual passion: building and protecting.
        I began my journey as a Full Stack Developer to master the complete software lifecycle, from front-end to database.
        Today, that passion has evolved into security and infrastructure.
        My goal is to merge development speed with operational reliability,
        actively seeking opportunities to apply DevSecOps principles
        in production environments.
        `,

    my_mission: `
       My mission is to create software that not only works well,
       but is also secure from the ground up. I aspire to be a bridge
       between development and operations teams, integrating security practices
       into every stage of the software lifecycle. I am committed to continuous improvement,
       learning and adapting to meet emerging challenges in the technology landscape.
        `,

    what_i_do: [
        { 1: "Full-Stack Development: Building modern web applications with a focus on performance." },
        { 2: "Backend Security: Implementing authentication/authorization and mitigating common threats in APIs." },
    ],

    stack: [
        'C#', '.NET', 'React', 'TypeScript', 'SQL Server', 'Tailwind', 'PostgreSQL', 'Azure', 'Git', 'Linux'
    ],

    jobs: [
        {
            logo: pngs.its,
            position: "Full-Stack Software Engineer | ITSight Consulting - Lima, Peru",
            // company: "Dinet S.A.",
            // location: "Lima, Peru",
            period: "January 2026 - Actually",
            responsibilities: [
                "Architecture Modernization: Spearheaded the strategic migration of a complex legacy ecosystem to Angular 18+ and .NET 8, significantly optimizing client-side and server-side performance while ensuring zero service downtime.",
                "Data Engineering: Designed and normalized complex database structures and Stored Procedures in SQL Server, transforming rigid schemas into resilient, scalable data models aligned with critical business rules.",
                "Code Quality & Refactoring: Executed a comprehensive refactoring plan applying SOLID and DRY principles, drastically reducing technical debt and accelerating team time-to-market through decoupled and highly testable code."
            ],
        },
        {
            logo: pngs.dinet,
            position: "IT Systems Intern | Dinet S.A. - Lima, Peru",
            // company: "Dinet S.A.",
            // location: "Lima, Peru",
            period: "April 2025 - September 2025",
            responsibilities: [
                "ITSM Management (ITIL): Designed and architected the GLPI platform implementation, centralizing technical support and transforming incident management based on ITIL best practices, which streamlined operational response times.",
                "Mobile Development: Developed and optimized Android applications for field operations, focusing on efficient code architecture and user experience (UX) to directly increase workforce productivity.",
                "Security & Backend: Co-designed backend (.NET) enhancements for the company's access security systems, strengthening corporate data protection and robust access control mechanisms.",
                "Knowledge Transfer: Managed the technical and functional handoff of the Attendance Control system through targeted mentoring sessions, achieving a seamless transition with zero service disruption and full successor autonomy in record time."
            ]

        },
    ],

};

const icons = [
    { name: 'HTML5', icon: '' },
    { name: 'CSS3', icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.59998 3H5.4C4.63689 3 4.06667 3.65685 4.06667 4.5V9H8.59998V3Z" stroke="currentColor" strokeWidth="1.5"/><path d="M8.59998 3H5.4C4.63689 3 4.06667 3.65685 4.06667 4.5V9H8.59998V3Z" stroke="currentColor" strokeWidth="1.5"/><path d="M8.59998 3H5.4C4.63689 3 4.06667 3.65685 4.06667 4.5V9H8.59998V3Z" stroke="currentColor" strokeWidth="1.5"/></svg>' },
    { name: 'Javascript', icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="#FBBFBCFF" strokeWidth=".7"/><circle cx="-7." cy="-7." r="-7." fill="#FBBFBCFF"/></svg>' },
];


export {
    heroSection,
    colors,
    icons,
    projects,
    aboutMe
}