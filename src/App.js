
import './App.css';
import 'boxicons/css/boxicons.min.css';

import Navigation from './components/Navigation';

import background from './icons/bg.gif'  
import fondo3 from './icons/project2 (2).avif'
import Spline from '@splinetool/react-spline';
import "./styles/Presentation.css";
import "./styles/About.css";
import "./styles/Contact.css";
import "./styles/Navigation.css";

import foto from './icons/foto.webp'

import {
  DeviconAngular, DeviconCplusplus, DeviconCss3, DeviconFigma, DeviconGit, DeviconGithub, DeviconHtml5, DeviconJava, DeviconJavascript, DeviconPostgresql,
  DeviconPython, DeviconReact,
  DeviconTypescript,
  DeviconVscode, DeviconMysql,
  DeviconSpring

} from './components/Icons';
import { CardAnimated } from './components/CardAnimated.jsx';
import { TextField, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import AreaCard from './components/AreaCard.jsx';
import { ThemeProvider } from '@emotion/react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <>
      <Navigation />

      {/*Home*/}
      <section id='home' className='xl:h-screen relative bg-primary mt-16 xl:pt-0 '>
        <img className='w-screen object-cover xl:relative xl:object-cover xl:h-screen' src={background} alt='' ></img>
        <Spline className='absolute inset-y-0 z-10'
          scene="https://prod.spline.design/IUGUaNsLge2NfVp4/scene.splinecode"
        />
        <div className="absolute flex inset-x-1/2 top-[50%] items-start justify-center sm:items-stretch sm:justify-start sm:hidden">
          <div className="flex space-x-4 ">
            <ul className='img-contact'>
              <li>
                <a target='blank' href='https://www.linkedin.com/in/carlos-hernandez-llaocua-08993a237/'>
                  <i className='bx bxl-linkedin'></i>
                </a>
              </li>
              <li>
                <a target='blank' href='https://www.instagram.com/car.loshernandez23/'>
                  <i class='bx bxl-instagram' ></i>
                </a>
              </li>
              <li>
                <a target='blank' href='https://github.com/CarlosHernandezLl'>
                  <i className='bx bxl-github'></i>
                </a>
              </li>

            </ul>
          </div>
        </div>


      </section >

      {/*Project*/}
      <section id='portfolio' className='h-auto mt-auto relative bg-primary pt-16 pb-5'>

        <h2 className='text-xl xl:text-4xl font-normal text-[#049FFF] text-center'>PORTFOLIO</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8 xl:pt-24 pt-4 w-10/12 mx-auto' >
          <AreaCard title='CatchThem' description='This web app can help police stations manage thieves'
            image={fondo3}
            c={
              [
                <DeviconAngular width={20} height={20} />,
                <DeviconSpring width={20} height={20} />,
              ]
            } />
          <AreaCard title='CatchThem' description='This web app can help police stations manage thieves'
            image={fondo3} c={
              [
                <DeviconAngular width={20} height={20} />,
                <DeviconSpring width={20} height={20} />,
              ]
            }
          />
        </div>
      </section>

      {/*Skills*/}
      <section id='skills' className='
      xl:h-auto mt-auto relative bg-primary pt-16'>

        <h2 className='text-xl xl:text-4xl font-normal text-[#049FFF] text-center'>SKILLS</h2>
        <div className='flex flex-col relative justify-center items-center content-center z-10 pt-4 xl:pt-12'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:gap-x-2 xl:grid-cols-2 gap-x-6 lg:gap-x-60 gap-y-8 w-auto '>
            <CardAnimated text='Frontend' array={[
              <DeviconHtml5 width={50} height={50} />,
              <DeviconCss3 />,
              <DeviconJavascript />,
              <DeviconTypescript />,
              <DeviconReact />,
              <DeviconAngular />,
            ]
            } />

            <CardAnimated text='Backend' array={[
              <DeviconPython width={50} height={50} />,
              <DeviconJava />,
              <DeviconCplusplus />,
              <DeviconSpring />,

            ]
            } />

            <CardAnimated text='Tools' array={[
              <DeviconVscode width={50} height={50} />,
              <DeviconGit />,
              <DeviconFigma />,
              <DeviconGithub />,

            ]
            } />

            <CardAnimated text='Database' array={[
              <DeviconPostgresql width={50} height={50} />,
              <DeviconMysql />,
            ]
            } />

          </div>
        </div>
      </section>

      {/*About me*/}
      <section id='about' className='xl:h-auto flex flex-col relative bg-primary pt-16'>
        <h2 className='text-xl xl:text-4xl font-normal text-[#049FFF] text-center'>ABOUT ME</h2>
        <div className='flex flex-col relative justify-center items-center content-center pt-4 xl:pt-12 mb-auto'>
          <div className='about-me xl:flex-row'>
            <div className='flex flex-col justify-center w-[500px] px-20 text-white'>
              <p className='text-pretty lg:text-xl'>
                Hello! I'm Carlos Hernandez, a software developer based in Lima, Peru.
                I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                My goal is to always build products that provide pixel-perfect, performant experiences.
              </p>
            </div>
            <div className='about-me-img'>
              <img src={foto} alt='foto1' />
            </div>
          </div>
        </div>
      </section>

      {/*Contact*/}

      <section id='contact' className='xl:h-auto mt-auto  relative bg-primary pt-16 xl:pb-24'>
        <h2 className='text-xl xl:text-4xl font-normal text-[#049FFF] text-center'>CONTACT</h2>
        <div className='flex flex-col justify-center items-center content-center pt-10 mx-auto'>
          <ThemeProvider theme={darkTheme}>
            <form className='bg-primary '>
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <br />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <br />
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline" style={{ color: 'white' }}
                variant="outlined"
                multiline
                rows={4}
              />
              <br />
              <Button variant="outlined">Send</Button>
            </form>
          </ThemeProvider>
        </div>


      </section>

      {/*Footer*/}
      <section id='footer' className='xl:relative bg-primary pt-10'>
        <footer class="bg-gray-800  rounded-lg shadow shadow-cuaternary m-4 dark:bg-gray-800">
          <div class="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline">Carlos Hernandez™</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
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

    </>
  );
}
export default App;
