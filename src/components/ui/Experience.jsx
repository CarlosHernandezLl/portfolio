import React from 'react';
import { aboutMe } from '../../constants';
import { Check } from 'lucide-react';

const Experience = () => {
    return (
        <section id="about" className="bg-[var(--bg-main)] relative overflow-hidden w-full">

            {/* Resplandor ambiental Geist ultra sutil */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-[500px] h-[500px] bg-neutral-500/[0.02] dark:bg-neutral-800/[0.02] rounded-full blur-[120px] top-1/4 -right-48"></div>
            </div>

            {/* Contenedor estándar (1024px max-width) */}
            <div className="section-container container-standard relative z-10">

                {/* Encabezado del módulo */}
                <div className="flex flex-col items-center text-center">
                    <span className="section-tag-mono">
                        Background
                    </span>
                    <h2 className="text-gradient-premium mt-2">
                        Professional Journey
                    </h2>
                </div>

                {/* Contenedor principal de trayectoria corporativa */}
                {aboutMe.jobs.map((job, idx) => (
                    <div className="card-premium divide-y divide-[var(--border)]">
                        <div
                            key={idx}
                            className="py-10 first:pt-0 last:pb-0 animate-fadeIn group/job"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            {/* 
                              CABECERA DEL PUESTO:
                              Aumentamos la separación inferior a mb-8 sm:mb-10 (32px a 40px) 
                              para crear una frontera visual clara antes de los checks.
                            */}
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8 sm:mb-10">

                                {/* Bloque Izquierdo: Logo + Rol */}
                                <div className="flex items-start gap-4 flex-1">

                                    {/* Contenedor del Logo */}
                                    {job.logo && (
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md border border-[var(--border)] bg-white/5 p-2 flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-200 group-hover/job:scale-105">
                                            <img
                                                src={job.logo}
                                                alt={job.company || "Company Logo"}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    )}

                                    {/* Textos de la posición */}
                                    <div className="flex-1 mt-0.5">
                                        <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)] tracking-tight group-hover/job:text-[var(--accent)] transition-colors duration-200 leading-snug">
                                            {job.position}
                                        </h3>

                                        {job.company && (
                                            <p className="text-sm font-mono text-[var(--text-muted)] tracking-wide mt-1">
                                                {job.company}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Bloque Derecho: Fechas */}
                                <div className="text-xs font-mono text-[var(--text-muted)] whitespace-nowrap sm:text-right flex-shrink-0 pl-16 sm:pl-0 mt-1 sm:mt-1">
                                    {job.period}
                                    {job.location && (
                                        <>
                                            <span className="text-[var(--border)] mx-1.5">|</span>
                                            {job.location}
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* 
                              LISTADO DE RESPONSABILIDADES:
                              Ampliada la separación entre cada línea de check a gap-4 sm:gap-5 (16px a 20px)
                              para que los párrafos técnicos largos no colisionen entre sí.
                            */}
                            <ul className="flex flex-col gap-4 !py-5 sm:gap-5 pl-0 sm:pl-[4.5rem]">
                                {job.responsibilities.map((resp, rIdx) => (
                                    <li key={rIdx} className="text-sm text-[var(--text-muted)] flex items-start leading-relaxed group/item">
                                        <Check className="w-4 h-4 text-[var(--text-main)] mr-3.5 mt-1 flex-shrink-0 transition-colors group-hover/item:text-[var(--accent)]" />
                                        <span className="transition-colors group-hover/item:text-[var(--text-main)]">
                                            {resp}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Experience;