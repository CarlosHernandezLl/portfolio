import React from 'react';
import { heroSection } from '../../constants';

const Footer = () => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        /* 
          CORRECCIÓN DE CENTRADO RAÍZ:
          Agregamos "flex flex-col items-center justify-center w-full" al <footer>
          para obligarlo a comportarse exactamente igual que tus etiquetas <section>.
        */
        <footer className="py-16 md:py-20 border-t border-[var(--border)] bg-[var(--bg-main)] w-full relative z-10 flex flex-col items-center justify-center">

            {/* 
              USO DE SECTION-CONTAINER:
              Al usar "section-container container-standard", el footer hereda automáticamente 
              los 1024px de ancho máximo y el margin: 0 auto de todo tu portafolio.
            */}
            <div className="section-container container-standard">

                {/* Cuadrícula Principal */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-16 w-full">

                    {/* Columna 1: Identidad Corporativa */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-bold text-[var(--text-main)] tracking-tight">
                            {heroSection.author}
                        </h3>
                        <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm">
                            {heroSection.slogan}
                        </p>
                    </div>

                    {/* Columna 2: Enlaces Rápidos */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs uppercase tracking-widest font-mono text-[var(--text-main)] font-semibold">
                            Quick Links
                        </h4>
                        <div className="flex flex-col gap-2.5 items-start">
                            {['About', 'Skills', 'Projects', 'Contact'].map(item => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Columna 3: Servicios */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs uppercase tracking-widest font-mono text-[var(--text-main)] font-semibold">
                            Services
                        </h4>
                        <ul className="flex flex-col gap-2.5 text-sm text-[var(--text-muted)]">
                            <li>Web Development</li>
                            <li>Backend Security</li>
                            <li>Cloud Integration</li>
                            <li>Mobile Development</li>
                        </ul>
                    </div>

                </div>

                {/* Divisor Inferior: Copyright */}
                <div className="pt-8 border-t border-[var(--border)] text-center sm:flex sm:justify-between sm:text-left text-xs font-mono text-[var(--text-muted)] w-full">
                    <p>{heroSection.footerDescription}</p>
                    <p className="mt-2 sm:mt-0">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;