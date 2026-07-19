import React from 'react';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    ...props
}) {
    /* Estilos base inquebrantables de Vercel */
    const baseStyles = "inline-flex items-center justify-center font-sans tracking-tight rounded-md transition-all duration-200 select-none cursor-pointer active:scale-[0.98] focus:outline-none whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none";

    /* Diccionario de Tamaños */
    const sizes = {
        sm: "!px-4 !py-1.5 text-xs gap-1.5 rounded-sm",   // Para filtros, tags y modales
        md: "!px-6 !py-2.5 text-sm gap-2 rounded-md",     // Para Hero, formularios y CTAs estándar
        lg: "!px-8 !py-3.5 text-base gap-2.5 rounded-md", // Para botones de impacto mayor
    };

    /* Diccionario de Variantes (Geist Design System) */
    const variants = {
        // 1. PRIMARIO: Alto contraste sólido (Ej: "Contact Me", Enviar formulario)
        primary: "bg-[var(--text-main)] text-[var(--bg-main)] font-medium shadow-sm hover:opacity-90 border border-transparent",

        // 2. SECUNDARIO: Borde grafito sutil, fondo mate (Ej: "View Work", botones de cancelar)
        secondary: "bg-[var(--bg-main)] border border-[var(--border)] text-[var(--text-muted)] font-medium hover:text-[var(--text-main)] hover:border-[#666] hover:bg-[var(--bg-card)] shadow-sm",

        // 3. GHOST: Sin bordes, se ilumina al pasar el mouse (Ej: Enlaces de Navbar, acciones secundarias)
        ghost: "bg-transparent text-[var(--text-muted)] font-medium hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/5 border border-transparent",

        // 4. TAB ACTIVO: Píldora seleccionada en barras de navegación/filtros
        "tab-active": "bg-[var(--text-main)] text-[var(--bg-main)] font-semibold shadow-md border border-transparent",

        // 5. TAB INACTIVO: Píldora no seleccionada
        "tab-inactive": "bg-transparent text-[var(--text-muted)] font-medium hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/5 border border-transparent",
    };

    return (
        <button
            disabled={disabled}
            className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}