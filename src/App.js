import './App.css';
import 'boxicons/css/boxicons.min.css';
import fondo3 from './icons/catchthem.webp'
import Spline from '@splinetool/react-spline';
import './styles/Contact.css'
import linkedin from './icons/linkedin.svg'
import { ContactForm } from './components/ContactForm.jsx';

import {
  DeviconAngular, DeviconCplusplus, DeviconCss3, DeviconFigma, DeviconGit, DeviconGithub, DeviconHtml5, DeviconJava, DeviconJavascript, DeviconPostgresql,
  DeviconPython, DeviconReact,
  DeviconTypescript,
  DeviconVscode, DeviconMysql,
  DeviconSpring,
  SkillIconsLinkedin,
  IcRoundWbSunny,
  LineMdSunnyOutlineToMoonAltLoopTransition,
  LineMdMoonToSunnyOutlineLoopTransition

} from './components/Icons';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AreaCard from './components/AreaCard.jsx';
import CubeAnimation from './components/CubeAnimation.jsx';
import { useTheme } from './ThemeContext.js';



function App() {

  const { theme, toggleTheme } = useTheme();
  // const [isDarkMode, setIsDarkMode] = useState(false);

  return (

    <body className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-bg'} lg:pl-44 lg:pr-44 xl:pl-96 xl:pr-96 `} >

      <div className='absolute top-0 right-0 pt-4 pr-4 z-10'>

        <button
          className="px-4 py-2 rounded bg-blue-500 text-white"
          onClick={toggleTheme}
        >
          {theme === 'dark' ?
            <LineMdMoonToSunnyOutlineLoopTransition />
            : <LineMdSunnyOutlineToMoonAltLoopTransition />}
        </button>
      </div>


      <div className='relative h-28 w-full'>
        <CubeAnimation />
      </div>


      {/*Home*/}
      <main id='' className='h-auto pl-6 pr-6 relative'>

        <h1 className={`${theme === 'dark' ? 'text-titledark' : 'text-white'} font-bold text-3xl font-montserrat pb-2 sm:text-4xl
        md:text-5xl lg:text-5xl xl:text-5xl
        `}>CARLOS HERNANDEZ</h1>
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-white'} font-montserrat text-2xl pb-4`}>FULL STACK DEVELOPER</h2>
        <p className='text-white text-xl text-pretty font-extralight pb-4  lg:w-full xl:w-full'>
          Hi, I’m software developer based in Lima, Peru. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between
        </p>

        <div className='flex flex-row gap-x-4 pb-4'>
          <div>
            <button className='bg-white rounded-md w-14 h-14 relative'>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <a href='https://github.com/CarlosHernandezLl' target='_blank' rel='noreferrer'>
                  <DeviconGithub width={40} height={40} />
                </a>
              </div>
            </button>
          </div>
          <div>
            <button className='bg-white rounded-md w-14 h-14 relative'>
              <a href='https://www.linkedin.com/in/carloshernandezll/' target='_blank' rel='noreferrer'>
                <img src={linkedin} alt='linkedin' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8' />
              </a>
            </button>
          </div>
        </div>
      </main >
      <div className='absolute top-50 left-52 sm:left-96 md:left-96 lg:left-96 xl:left-[1000px]'>
        <CubeAnimation />
      </div>
      {/*Project*/}
      <section id='' className='h-auto w-full relative'>

        <h2 className='text-xl font-bold text-white pl-6 xl:text-3xl '>PROJECTS</h2>
        <div className='grid grid-cols-1 gap-y-8 pt-4 pl-3 pr-3' >
          <AreaCard
            title='CatchThem'
            description='App can manage thieves and administrate the comisary inclued. This web app can help police stations manage thieves'
            image={fondo3}
            c={
              [
                <DeviconAngular width={20} height={20} />,
                <DeviconSpring width={20} height={20} />,
                <DeviconPostgresql width={20} height={20} />,
                <DeviconGit width={20} height={20} />,
                <DeviconTypescript width={20} height={20} />,
              ]
            } />
          <AreaCard
            title='CatchThem'
            description='App can manage thieves and administrate the comisary inclued. This web app can help police stations manage thieves'
            image={fondo3}
            c={
              [
                <DeviconAngular width={20} height={20} />,
                <DeviconSpring width={20} height={20} />,
                <DeviconPostgresql width={20} height={20} />,
                <DeviconGit width={20} height={20} />,
                <DeviconTypescript width={20} height={20} />,
              ]
            } />
        </div>
      </section>

      {/*Skills*/}
      <section id='' className=''>
        <h2 className='text-xl xl:text-3xl font-bold text-white pl-6 pt-6 pb-6'>SKILLS</h2>
        <div className='flex flex-row gap-x-2 w-auto pl-4 pr-4 justify-start content-center'>
          <button className="border-solid border-2 border-white rounded-full text-white pr-4 pl-4">
            All
          </button>
          <button className="border-solid border-2 border-white rounded-full text-white pr-4 pl-4">
            Frontend
          </button>
          <button className="border-solid border-2 border-white rounded-full text-white pr-4 pl-4">
            Backend
          </button>
          <button className="border-solid border-2 border-white rounded-full text-white pr-4 pl-4">
            Tools
          </button>

        </div>
        <div className='flex flex-col relative justify-center items-center content-center z-10 pt-4 xl:pt-12'>
          <div className='grid grid-cols-7 gap-y-8 pt-4 pl-3 pr-3 gap-4 sm:gap-x-5' >
            <DeviconHtml5 width={40} height={40} />
            <DeviconCss3 width={40} height={40} />
            <DeviconJavascript width={40} height={40} />
            <DeviconTypescript width={40} height={40} />
            <DeviconReact width={40} height={40} />
            <DeviconAngular width={40} height={40} />

            <DeviconJava width={40} height={40} />
            <DeviconPython width={40} height={40} />
            <DeviconCplusplus width={40} height={40} />
            <DeviconSpring width={40} height={40} />

            <DeviconMysql width={40} height={40} />
            <DeviconPostgresql width={40} height={40} />

            <DeviconGit width={40} height={40} />

          </div>
        </div>
      </section>



      {/*Contact*/}

      <section id='contact' className='xl:h-auto relative bg-primary pt-16 xl:pb-24'>
        <h2 className='text-xl  font-bold text-white pl-6 pt-6 pb-6 xl:text-3xl'>CONTACT</h2>
        <div className='flex flex-col items-center content-center '>
          <ContactForm />
        </div>


      </section>

      {/*Footer*/}
      <section id='' className='xl:relative bg-primary'>
        <footer class="bg-gray-800  rounded-lg shadow shadow-cuaternary m-4 dark:bg-gray-800">
          <div class="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline">Carlos Hernandez™</a>
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </body >

  );
}
export default App;
