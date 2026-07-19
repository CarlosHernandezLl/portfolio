import React from 'react';
import { ExternalLink, X, Check } from 'lucide-react';
import BadgeEmbed from './BadgeEmbed.jsx';
import Button from './Button.jsx';

export default function Projects({
    projectFilter,
    setProjectFilter,
    filteredProjects,
    selectedProject,
    setSelectedProject
}) {
    // Definimos los filtros en un arreglo constante para mayor limpieza
    const filters = [
        { label: 'All Projects', value: 'all' },
        { label: 'Web Dev', value: 'web' },
        { label: 'Mobile', value: 'mobile' }
    ];

    return (
        <section id="projects" className="bg-[var(--bg-main)] relative overflow-hidden w-full">
            {/* 
              SIN SIGNOS DE EXCLAMACIÓN (!): 
              Ahora usamos max-w-5xl y gap-16 de forma nativa gracias a la limpieza del theme.css 
            */}
            <div className="section-container max-w-5xl gap-16 relative z-10">

                {/* Encabezado del Módulo */}
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="animate-fadeIn">
                        <BadgeEmbed />
                    </div>
                    <span className="section-tag-mono">Portfolio</span>
                    <h2 className="text-gradient-premium mt-1">
                        Featured Engineering Work
                    </h2>
                    <p className="text-sm md:text-base text-[var(--text-muted)] max-w-2xl font-normal leading-relaxed">
                        A curated selection of robust full-stack applications, enterprise system migrations, and security architectures.
                    </p>
                </div>

                {/* 
                  SELECTOR DE FILTROS GEIST UI:
                  Implementa nuestro componente <Button> reutilizable usando las variantes de pestaña.
                */}
                <div className="flex items-center justify-center flex-nowrap gap-1.5 p-1.5 bg-[var(--bg-card)] rounded-lg border border-[var(--border)] w-max mx-auto mt-2 mb-8 shadow-sm">
                    {filters.map(filter => (
                        <Button
                            key={filter.value}
                            onClick={() => setProjectFilter(filter.value)}
                            size="sm"
                            variant={projectFilter === filter.value ? 'tab-active' : 'tab-inactive'}
                        >
                            {filter.label}
                        </Button>
                    ))}
                </div>

                {/* Lista de Proyectos en 1 Sola Columna (Estilo Vercel Case Studies) */}
                <div className="flex flex-col gap-12 w-full">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group flex flex-col lg:flex-row items-stretch bg-[var(--bg-card)] rounded-md overflow-hidden border border-[var(--border)] hover:border-[#555] transition-all duration-300 cursor-pointer p-6 sm:p-8 gap-8 w-full shadow-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.01)]"
                        >
                            {/* Lado Izquierdo: Contenedor de Imagen (45% ancho en desktop) */}
                            <div className="w-full lg:w-[45%] h-52 sm:h-64 lg:h-auto min-h-[220px] overflow-hidden rounded-sm border border-[var(--border)] bg-black/10 flex-shrink-0 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                />
                            </div>

                            {/* Lado Derecho: Información Técnica (55% ancho en desktop) */}
                            <div className="w-full lg:w-[55%] flex flex-col justify-between py-2 gap-6">
                                <div className="flex flex-col gap-2.5">
                                    <h3 className="text-xl font-bold text-[var(--text-main)] tracking-tight group-hover:text-[var(--accent)] transition-colors duration-200">
                                        {project.title}
                                    </h3>
                                    <p className="text-[var(--text-muted)] text-sm font-normal leading-relaxed text-balance">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 bg-[var(--bg-main)] text-[var(--text-muted)] rounded-sm text-[10px] font-mono tracking-wide border border-[var(--border)]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wider text-[var(--text-main)] hover:opacity-80 transition-opacity mt-1">
                                        CASE STUDY <ExternalLink className="w-3.5 h-3.5 text-[var(--accent)]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ==========================================================================
               MODAL DETALLADO BLINDADO CONTRA COLAPSO DE PADDING
               ========================================================================== */}
            {selectedProject && (
                <div className="geist-modal-backdrop animate-fadeIn" onClick={() => setSelectedProject(null)}>
                    <div className="geist-modal-box" onClick={(e) => e.stopPropagation()}>

                        {/* Cabecera de Imagen del Modal */}
                        <div className="relative h-64 sm:h-72 w-full bg-black/40 border-b border-[var(--border)] flex-shrink-0">
                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover opacity-90" />
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2.5 bg-black/80 backdrop-blur-md rounded-md border border-[#333] text-[#888] hover:text-white hover:border-[#666] transition-all cursor-pointer z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Cuerpo de Contenido con Relleno CSS Real (40px) */}
                        <div className="geist-modal-body">
                            <div>
                                <span className="section-tag-mono block mb-2">Project Details</span>
                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-main)] mb-4">
                                    {selectedProject.title}
                                </h2>
                                <p className="text-[var(--text-muted)] text-base leading-relaxed font-normal">
                                    {selectedProject.longDescription || selectedProject.description}
                                </p>
                            </div>

                            {/* Grilla Superior Dividida: Tecnologías y Entregables */}
                            <div className="geist-modal-grid">
                                <div>
                                    <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3 font-semibold">
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap">
                                        {selectedProject.tags.map((tag, i) => (
                                            <span key={i} className="geist-tag-box">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3 font-semibold">
                                        Key Deliverables & Impact
                                    </h3>
                                    <ul className="flex flex-col gap-3">
                                        {(selectedProject.achievements || [
                                            "Lightweight & clean UI architecture",
                                            "Optimized state management & performance",
                                            "Responsive layout following ITIL / modern standards"
                                        ]).map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-muted)] leading-relaxed">
                                                <Check className="w-4 h-4 text-[var(--text-main)] mt-0.5 flex-shrink-0" />
                                                <span className="text-[var(--text-main)]/90">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}