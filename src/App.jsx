import { Icon, SvgIcon } from '@mui/material';
import './App.css';
import { GitHub } from '@mui/icons-material';
import BackgroundAnimate from './components/BackgroundAnimate';
import { useCallback, useEffect, useState } from 'react';
import pj from './icons/unsplash_KNZHyTpre18.svg'
import reac from './icons/react.svg'
import {
  DeviconAngular, DeviconCss3, DeviconHtml5, DeviconCplusplus, DeviconFigma,
  DeviconGit, DeviconGithub, DeviconJava, DeviconJavascript, DeviconMysql, DeviconPostgresql, DeviconPython,
  DeviconReact, DeviconSpring, DeviconTypescript, DeviconVscode
} from './components/Icons';

import { ContactForm } from './components/ContactForm.jsx';
import UseAnimationFrame from './components/CubeAnimation.jsx';
import { hover } from 'motion';


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

const Button = ({ children }) => {
  return (
    <button className="bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-50">
      {children}
    </button>
  )
}

const ImageBackground = ({ children }) => {
  return (
    <div className="absolute p-4 rounded-lg shadow-lg">
      {children}
    </div>
  )
}

const HeroSection = () => {

  return (
    <>
      <main className="text-center w-screen min-h-screen flex flex-col justify-center relative items-center lg:px-24 xl:px-40 px-10 z-50 pointer-events-auto sm:pointer-events-none">
        <div className=" absolute w-screen h-screen">
          {/* <img src="https://avatars.githubusercontent.com/u/77449594?v=4" alt="Carlos Hernandez" className="absolute right-0 rounded-full h-40 w-40 z-50" /> */}
          <BackgroundAnimate />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className="text-4xl lg:text-7xl z-10 font-bold text-white md:pointer-events-none">FULL STACK</h1>
          <div className='flex md:flex-row h-auto w-auto z-50 ' >
            <h1 className="text-4xl lg:text-7xl font-bold text-white ">DEVEL</h1>
            <div className='flex w-9 h-9 lg:w-16 lg:h-16 items-center justify-center'>
              <a href='https://github.com/CarlosHernandezLl' target='_blank' rel='noreferrer'>
                <GitHub className='scale-150 lg:scale-300 bg-white rounded-4xl ' />
              </a>
            </div>
            <h1 className='text-4xl lg:text-7xl font-bold text-white md:pointer-events-none'>       PER</h1>
          </div>
        </div>
        <p className="text-xl text-amber-100 mt-10 mb-10 z-50 md:pointer-events-none ">{paragraph}</p>
        <Button>LinkedIn</Button>
      </main>
    </>
  )
}

const Card = ({ title, description, image }) => {
  return (
    <>
      <div className=' flex flex-col md:flex-row xl:flex-col items-center justify-center'>
        <img src={image} alt={title} className="min-w-56 object-fill rounded-xl" />
        <div className="flex flex-col md:pl-10 xl:p-0 items-center justify-center">
          <h2 className="text-sm sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl text-amber-100 font-bold mt-4">
            <span>
              🎲 {title}
            </span>
          </h2>
          <p className="text-sm pt-3 sm:text-lg lg:text-xl xl:text-xl text-gray-500 xl:pl-8">{description}</p>
        </div>
      </div >
    </>
  )
}

//sm: 640px
//md: 768px
//lg: 1024px
//xl: 1280px
//2xl: 1536px

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

const Knowledge = () => {

  return (
    <section className=" w-screen dark:bg-gray-800 px-10 sm:px-20 xl:px-40 lg:px-24 2xl:px-96 pb-40">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-pretty text-amber-100 font-bold pt-0 ">{paragraph2}</h2>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6
      lg:grid-cols-7
      xl:grid-cols-8
      2x:grid-cols-9
      gap-2 relative sm:gap-4 h-auto pt-10 justify-center items-center">
        {
          icons.map((icon, index) => (
            <div key={index} className={`${colors[index]} hover:ease-in-out relative top-1/2 left-1/2 -translate-1/2 w-20 h-20 place-content-center rounded-2xl shadow-lg `} >
              <span className="absolute top-1/2 left-1/2 -translate-1/2 rounded-lg">
                {icon.icon}
              </span>
            </div>
          ))
        }
      </div>
    </section >
  )
}

const Projects = () => {
  return (

    <section className="min-h-screen w-screen dark:bg-gray-800 px-10 sm:px-20 lg:px-24 xl:px-40 2xl:px-96 py-40">

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 justify-center items-centr">
        <Card title="Project 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc." image={pj} />
        <Card title="Project 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc." image={pj} />
        <Card title="Project 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc." image={pj} />
        <Card title="Project 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc." image={pj} />
      </div>

    </section>


  )
}



const paragraph3 = "If you want to contact me, please fill the form below"

const Contact = () => {
  return (
    <section id='contact' className='w-screen dark:bg-gray-800 px-10 sm:px-20 lg:px-24 xl:px-40 2xl:px-96 py-0'>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-pretty text-amber-100 font-bold pt-0 ">{paragraph3}</h2>
      <div className='flex flex-col items-center content-center pt-10'>
        <ContactForm />
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (

    <footer className="bg-transparent rounded-lg shadow shadow-cuaternary p-4 sm:px-20 xl:px-40 lg:px-24 2xl:px-96 dark:bg-gray-800">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2024
          <a href="" className="hover:underline">  Carlos Hernandez™</a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}



export default function App() {

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 h-full">
      <HeroSection />

      <Projects />
      <UseAnimationFrame />
      <span className='absolute right-40'>
        <UseAnimationFrame />
      </span>
      <Knowledge />
      <UseAnimationFrame />
      <span className='absolute right-40'>
        <UseAnimationFrame />
      </span>
      <Contact />
      <UseAnimationFrame />
      <span className='absolute right-40'>
        <UseAnimationFrame />
      </span>
      <Footer />
    </div>
  )



}
// export default App;
