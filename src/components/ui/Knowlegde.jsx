import React from 'react';
// Importamos tus componentes vectoriales directamente desde tu archivo de extras
import {
  DeviconAngular,
  DeviconTypescript,
  DeviconJavascript,
  DeviconHtml5,
  DeviconCss3,
  DeviconPython,
  DeviconCplusplus,
  DeviconJava,
  DeviconPostgresql,
  DeviconGit,
  DeviconFigma,
  DeviconGithub
} from '../extras/Icons.jsx';

// Arreglo local con la configuración de tus herramientas y sus dimensiones adaptativas (100% del contenedor padre)
const techStack = [
  { name: 'Angular', icon: <DeviconAngular width="100%" height="100%" /> },
  { name: 'TypeScript', icon: <DeviconTypescript width="100%" height="100%" /> },
  { name: 'JavaScript', icon: <DeviconJavascript width="100%" height="100%" /> },
  { name: 'HTML5', icon: <DeviconHtml5 width="100%" height="100%" /> },
  { name: 'CSS3', icon: <DeviconCss3 width="100%" height="100%" /> },
  { name: 'Python', icon: <DeviconPython width="100%" height="100%" /> },
  { name: 'C++', icon: <DeviconCplusplus width="100%" height="100%" /> },
  { name: 'Java', icon: <DeviconJava width="100%" height="100%" /> },
  { name: 'PostgreSQL', icon: <DeviconPostgresql width="100%" height="100%" /> },
  { name: 'Git', icon: <DeviconGit width="100%" height="100%" /> },
  { name: 'Figma', icon: <DeviconFigma width="100%" height="100%" /> },
  { name: 'GitHub', icon: <DeviconGithub width="100%" height="100%" /> },
];

export default function Knowlegde({ skillsVisible = true }) {
  return (
    <section id="skills" className="bg-[var(--bg-main)] relative overflow-hidden w-full">
      {/* Contenedor estándar (1024px) heredado del nuevo theme.css */}
      <div className="section-container container-standard relative z-10">

        {/* Encabezado del módulo */}
        <div className="flex flex-col items-center text-center">
          <span className="section-tag-mono">Capabilities</span>
          <h2 className="text-gradient-premium mt-2">
            Tech Stack & Expertise
          </h2>
        </div>

        {/* Contenedor Bento con cuadrícula simétrica (2 filas de 6 íconos en escritorio) */}
        <div className="card-premium">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 sm:gap-10 justify-items-center">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center transition-all duration-500 ease-out transform group select-none ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                {/* 
                  Contenedor del Icono:
                  - Controla el tamaño real (w-12 h-12 md:w-14 md:h-14).
                  - Inicia en escala de grises y opacidad media.
                  - Al hacer hover, recupera el 100% de color y se escala suavemente un 10% hacia adelante.
                */}
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-md">
                  {tech.icon}
                </div>

                {/* Etiqueta de texto inferior */}
                <p className="mt-3 text-center text-xs font-mono tracking-wide text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors duration-200">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}