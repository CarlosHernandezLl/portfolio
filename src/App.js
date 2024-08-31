
import './App.css';

import {
  DeviconAngular, DeviconCplusplus, DeviconCss3, DeviconFigma, DeviconGit, DeviconHtml5, DeviconJava, DeviconPostgresql,
  DeviconPython, DeviconReact
} from './icons/Icons';

import foto2 from './icons/foto2.jpeg';

import 'boxicons/css/boxicons.min.css';

import proyecto1 from './icons/proyecto1.png';
import { SkillIconsGithubLight, SkillIconsInstagram, SkillIconsLinkedin } from './icons/Icons';

import Spline from '@splinetool/react-spline';
import { useState } from 'react';


const listaSkills = [
  <DeviconHtml5 />,
  <DeviconPostgresql />,
  <DeviconCss3 />,
  <DeviconCplusplus />,
  <DeviconReact />,
  <DeviconPython />,
  <DeviconAngular />,
  <DeviconJava />,
  <DeviconFigma />,
  <DeviconGit />,
]

const lista = [
  { name: "HOME", link: "#home" },
  { name: "ABOUT", link: "#about" },
  { name: "SKILLS", link: "#skills" },
  { name: "PORTFOLIO", link: "#projects" },
  { name: "CONTACT", link: "#contact" }
];

const portafolio = [proyecto1, foto2, proyecto1, foto2, proyecto1, foto2, foto2];


function App() {

  const [index, setIndex] = useState(0);
  const imagevisible = 3;

  const nexti = () => {
    setIndex((prevIndex) =>
      prevIndex >= portafolio.length - imagevisible ? 0 : prevIndex + 1
    );
  };

  const backi = () => {
    setIndex((prevIndex) =>
      prevIndex <= 0 ? portafolio.length - imagevisible : prevIndex - 1
    );
  };



  return (
    <>
      {/* Navigation*/}
      <nav className='navigation'>
        <div className='navigation-img'>

        </div>
        <div className='navigation-list'>
          <ul className='list-home-1'>
            {lista.map((item) =>
              <li key={item.name} >
                <a href={item.link}>{item.name}</a>
              </li>)}
          </ul>
        </div>
        <div className='navigation-contact'>
          <h2>Contact</h2>
          <ul className='img-contact'>
            <li>
              <a target='blank' href='https://www.linkedin.com/in/carlos-hernandez-llaocua-08993a237/'>
                <i className='bx bxl-linkedin'></i>
              </a>
            </li>
            <li>
              <a target='blank' href='https://github.com/CarlosHernandezLl'>
                <i className='bx bxl-github'></i>
              </a>
            </li>
            <li>
              <a target='blank' href='https://www.instagram.com'>
                <i className='bx bxl-instagram'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav >
      {/* Presentation*/}
      <section id='home'>
        <div className='presentation'>
          <p>HELLO MY NAME IS</p>
          <p>CARLOS HERNANDEZ</p>
          <p>Front Developer & Data analytics</p>
        </div>
      </section>

      {/*About me*/}
      <section id='about'>
        <div className='about'>
          <h2>ABOUT ME</h2>
          <hr></hr>
          <div className='about-me'>
            <div className='about-me-img'>
              <img src={foto2} alt='foto1' />
            </div>
            <div className='about-me-text'>
              <p>
                Hi I'm Carlos.
              </p>
              <p>
                I am a student of the Systems Engineering career at the
                University of Science Applied.
                I am passionate about technology and programming.
                I have knowledge in web development, data analysis, and programming languages such as Python, Java, and C ++.
              </p>
              <p>
                I am currently learning new technologies such as React and Angular.
                I am a person who likes to learn new things and face new challenges.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills*/}
      <section id='skills'>

        <div className='skills'>
          <Spline className='spline'
            scene="https://prod.spline.design/Drxb0a97fJuj7jH3/scene.splinecode"
          />
          <h2>MY SKILLS</h2>
          <hr></hr>
          <ul>
            <div className='barra-1'></div>
            <div className='barra-2'></div>
            {listaSkills.map((skill) => <li>{skill}</li>)}
          </ul>
        </div>
      </section>

      {/* Projects*/}


      <section id='projects'>
        <h2>PORTFOLIO</h2>
        <div className='project-table'>

          {portafolio.slice(index, index + imagevisible).map((proyecto, i) => (
            <div className='table'>
              <img key={i} src={proyecto} alt={`proyecto${i + 1}`} />
            </div>
          ))}
          <button className='flecha-back' onClick={backi}>
            <i className='bx bx-chevron-left'></i>
          </button>
          <button className='flecha-front' onClick={nexti}>
            <i className='bx bx-chevron-right'></i>
          </button>
          <div className='ovalo'></div>
        </div>
      </section>



      {/*Contact*/}
      <section id='contact'>
        <h2>CONTACT</h2>
        <hr></hr>
        <p>If you want to meet me. I leave you my social media here <br />
          <a href='https://www.linkedin.com/in/carlos-hernandez-llaocua-08993a237/'>LinkedIn</a>
          . So you can see my repositories in
          <a href='https://github.com/CarlosHernandezLl'> GitHub</a>.
          <br />
          I hope you like this. Don't forget follow me!!!
        </p>
        <div id='footer'>
          <ul>
            <li>
              <a
                target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/carlos-hernandez-08993a237/"
              >
                <SkillIconsLinkedin className='fa-brands' />
                <span>- LinkedIn</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/CarlosHernandezLl">
                <SkillIconsGithubLight className='fa-brands' />
                <span>- GitHub</span>
              </a>
            </li>
            <li>
              <a
                target="_blank" rel="noopener noreferrer"
                href="https://www.instagram.com/car.loshernandez23/"
              >
                <SkillIconsInstagram className='fa-brands' />
                <span>- Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer className='container-copyright'>
        <p>Copyright © Carlos Hernandez Llaocua 2024</p>
      </footer>
    </>


  );
}

/*
   <div className='message'>
                <a href='https://api.whatsapp.com/send/?phone=51926281975&text&type=phone_number&app_absent=0'>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="50" height="50" viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z">
                    </path>
                  </svg>
                </a>
              </div> */

export default App;
