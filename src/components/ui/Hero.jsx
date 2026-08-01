import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';
import { heroSection } from '../../constants';
import Button from './Button';
import cvPdf from '../../assets/cv-carlos-hernandez.pdf';
import HeroBackground3D from './HeroBackground3D';
import StarsCanvas from '../../canvas/Stars';

const achievements = [
    // { number: '1', label: 'Years of Experience' },
    // { number: '2', label: 'Projects Completed' },
    // { number: '20+', label: 'Happy Clients' },
    // { number: '10', label: 'Awards Won' },
];

const HeroSection = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    /* 
      FUNCIÓN DE DESCARGA DE CV:
      Asegúrate de tener el archivo PDF dentro de la carpeta "/public" de tu proyecto
      (por ejemplo: /public/cv-carlos-hernandez.pdf).
    */
    const handleDownloadCV = () => {

        const link = document.createElement('a');
        link.href = cvPdf;
        link.setAttribute('download', 'CV_Carlos_Hernandez.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        /* 
          ESPACIADO DE SECCIÓN FORZADO (!py-28 md:!py-36):
          Obligamos al contenedor a tener un margen vertical amplio para que el contenido 
          nunca choque con el header ni el indicador de scroll.
        */
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 !py-28 md:!py-36 relative overflow-hidden bg-[var(--bg-main)] text-[var(--text-main)] w-full">
            {/* Animación 3D */}
            {/* <StarsCanvas /> */}
            <HeroBackground3D />
            {/* Resplandores de fondo Geist */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/[0.02] rounded-full blur-[140px] -top-48 -left-48"></div>
                <div className="absolute w-[500px] h-[500px] bg-slate-500/5 dark:bg-slate-800/[0.03] rounded-full blur-[120px] bottom-0 right-0"></div>
            </div>

            <div className="text-center relative z-10 max-w-4xl mx-auto flex flex-col items-center">

                {/* Tag de contexto con separación forzada (!mb-6) */}
                <span className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase !mb-6 animate-fadeIn">
                    Systems Engineering Portfolio //
                </span>

                {/* Nombre del Autor con separación forzada (!mb-6) */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter !mb-6 animate-fadeIn">
                    <span className="bg-gradient-to-b from-[var(--text-main)] to-[var(--text-muted)] bg-clip-text text-transparent">
                        {heroSection.author}
                    </span>
                </h1>

                {/* Rol Técnico con separación forzada (!mb-8) */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-[var(--text-main)] !mb-8 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                    {heroSection.role}
                </h2>

                {/* Descripción con margen inferior amplio (!mb-12) para separar el texto de los botones */}
                <p className="text-base md:text-lg text-[var(--text-muted)] !mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    {heroSection.description}
                </p>

                {/* 
                  BOTONES DE ACCIÓN:
                  Se reemplazó "Contact Me" por "Download CV" como acción primaria,
                  sumando el ícono de descarga y separación garantizada (!gap-4).
                */}
                <div className="flex flex-col sm:flex-row items-center justify-center !gap-4 w-full sm:w-auto animate-fadeIn" style={{ animationDelay: '0.3s' }}>

                    {/* Botón Primario: Descargar CV */}
                    <Button variant="primary" size="md" onClick={handleDownloadCV} className="w-full sm:w-auto group">
                        <span>Download CV</span>
                        <Download className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                    </Button>

                    {/* Botón Secundario: Ver Proyectos */}
                    <Button variant="secondary" size="md" onClick={() => scrollToSection('projects')} className="w-full sm:w-auto group">
                        <span>View Work</span>
                        <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Button>
                </div>

                {/* Bento Grid de Logros con separación superior masiva (!mt-24) */}
                {achievements.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 !mt-24 w-full max-w-3xl animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                        {achievements.map((item, idx) => (
                            <div key={idx} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-md p-5 transition-all duration-200 hover:border-[#555]">
                                <div className="text-2xl md:text-3xl font-bold text-[var(--text-main)] mb-1">{item.number}</div>
                                <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">{item.label}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Control de Scroll Inferior */}
            <button
                onClick={() => scrollToSection('about')}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors duration-200 animate-bounce cursor-pointer focus:outline-none"
                aria-label="Scroll to content"
            >
                <ChevronDown className="w-5 h-5" />
            </button>
        </section>
    );
};

export default HeroSection;