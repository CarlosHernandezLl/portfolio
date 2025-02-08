import {
    DeviconAngular, DeviconCss3, DeviconHtml5, DeviconCplusplus, DeviconFigma,
    DeviconGit, DeviconGithub, DeviconJava, DeviconJavascript, DeviconMysql, DeviconPostgresql, DeviconPython,
    DeviconReact, DeviconSpring, DeviconTypescript, DeviconVscode
} from '../components/extras/Icons.jsx';

import pj from '../assets/catchthem.webp';
import todo from '../assets/todoapp.png';

const colors = [
    'hover:shadow-green-500',
    'hover:shadow-blue-500',
    'hover:shadow-yellow-500',
    'hover:shadow-red-500',
    'hover:shadow-indigo-500',
    'hover:shadow-pink-500',
    'hover:shadow-rose-500',
    'hover:shadow-sky-500',
    'hover:shadow-amber-500',
    'hover:shadow-emerald-500',
    'hover:shadow-cyan-500',
    'hover:shadow-fuchsia-500',
    'hover:shadow-violet-500',
    'hover:shadow-lime-500',
    'hover:shadow-teal-500',
    'hover:shadow-orange-500',
    'hover:shadow-gray-500',
    'hover:shadow-warmGray-500',
    'hover:shadow-trueGray-500',
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

const paragraph = "Hi, I’m Carlos Hernandez a Frontend Developer from Perú. Specialized in React, Next.js, Tailwind CSS, and with experience in Node.js and SQL/NoSQL databases 🤙"

const paragraph2 = "I have knwoledge in frameworks and tecnologies like"

const paragraph3 = "If you want to contact me, please fill the form below"

const projects = [
    {
        title: 'To Do App',
        description: 'This project is a simple To Do App made with React and Tailwind CSS',
        url: '',
        image: todo
    },
    {
        title: 'Shopping Cart',
        description: 'This project is a simple Shopping Cart made with React and Tailwind CSS, using Context API',
        url: '',
        image: pj
    },
    {
        title: 'Project 3',
        description: 'This is a project description',
        url: '',
        image: pj
    },
    {
        title: 'Project 4',
        description: 'This is a project description',
        url: '',
        image: pj
    },
]


export { colors, icons, paragraph, paragraph2, paragraph3, projects };