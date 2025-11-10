import {
    DeviconAngular, DeviconCss3, DeviconHtml5, DeviconCplusplus, DeviconFigma,
    DeviconGit, DeviconGithub, DeviconJava, DeviconJavascript, DeviconMysql, DeviconPostgresql, DeviconPython,
    DeviconReact, DeviconSpring, DeviconTypescript, DeviconVscode
} from '../components/extras/Icons.jsx';

import shopstore from '../assets/image.webp';
import todo from '../assets/todoapp.webp';
import pj from '../assets/finance_app.png';

const heroSection = {
    author: "Carlos Hernandez",
    role: "Full Stack Developer | Aspiring DevSecOps Engineer",
    description: "Engineering student. From the line of code to cloud configuration, with security as my primary focus. I'm looking for a role where my full-stack skills can be applied to robust and proactive DevSecOps solutions.",
    slogan: "Code. Secure. Deploy.",
    footerDescription: "© 2025 Carlos Hernandez."
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
]

const icons = [
    { name: 'HTML5', icon: <DeviconHtml5 width={40} /> },
    { name: 'CSS3', icon: <DeviconCss3 width={40} /> },
    { name: 'Javascript', icon: <DeviconJavascript width={40} /> },
    { name: 'Typescript', icon: <DeviconTypescript width={40} /> },
    { name: 'React', icon: <DeviconReact width={40} /> },
    { name: 'Angular', icon: <DeviconAngular width={40} /> },
    { name: 'Java', icon: <DeviconJava width={40} /> },
    { name: 'Spring', icon: <DeviconSpring width={40} /> },
    { name: 'Python', icon: <DeviconPython width={40} /> },
    { name: 'C++', icon: <DeviconCplusplus width={40} /> },
    { name: 'Figma', icon: <DeviconFigma width={40} /> },
    // { name: 'VSCode', icon: <DeviconVscode width={40} /> },
    { name: 'Git', icon: <DeviconGit width={40} /> },
    { name: 'Github', icon: <DeviconGithub width={40} /> },
    { name: 'PostgreSQL', icon: <DeviconPostgresql width={40} /> },
    { name: 'MySQL', icon: <DeviconMysql width={40} /> },

]

const projects = [
    {
        id: 1,
        title: 'Finance App',
        category: 'web',
        description: 'Personal finance manager built with React and Tailwind CSS',
        longDescription: 'Developed a responsive finance management app allowing users to track income, expenses, and savings goals. Features include dynamic charts, category filtering, and local storage persistence.',
        tags: ['React', 'Tailwind CSS', 'Chart.js', 'LocalStorage'],
        image: pj,
        url: 'https://react-n2jk.vercel.app/',
        achievements: ['Improved budgeting habits for 100+ users', 'Responsive design across devices', 'Zero external dependencies']
    },
    {
        id: 2,
        title: 'Shopping Cart',
        category: 'web',
        description: 'Simple shopping cart using React, Tailwind CSS, and Context API',
        longDescription: 'Built a lightweight e-commerce cart system with product listing, quantity adjustment, and checkout simulation. Utilized Context API for global state and Tailwind for UI styling.',
        tags: ['React', 'Tailwind CSS', 'Context API'],
        image: shopstore,
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
        image: todo,
        url: 'https://github.com/CarlosHernandezLl/React/tree/master/01-To-Do-App',
        achievements: ['100% Lighthouse accessibility score', 'Used by students for daily planning', 'Modular component structure']
    }
];


const jobs = [
    {
        title: "IT Systems Intern",
        company: "Dinet S.A. - Lima, Peru",
        period: "April 2025 - September 2025",
        responsibilities: [
            "Implementation and configuration of the GLPI platform as an ITSM system for incident management.",
            "Proposal for help desk process improvements following ITIL guidelines.",
            "Presentation of technical and functional proposals to management for decision-making.",
            "Development of improvements to Android mobile applications to enhance the user experience.",
            "Support in the development of a security system for access to the company's applications and systems. Also, improvement proposals for the front and back ends of the current system.",
            "Transfer of knowledge of the Help Desk control project with documentation and follow-up to the new manager for proper integration into the project.",
        ],
    },
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
    ]

};


export {
    colors,
    icons,
    projects,
    jobs,
    heroSection,
    aboutMe
};
