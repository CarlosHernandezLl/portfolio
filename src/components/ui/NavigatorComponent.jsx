import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { heroSection } from '../../constants';

const { author } = heroSection;

export default function NavigatorComponent({ changeTheme, theme }) {
  const [isDarkMode, setIsDarkMode] = useState(theme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme);
  }, [theme]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    /* 
      NAVBAR GEIST LAYOUT:
      Uses var(--bg-main) with 75% opacity and backdrop-blur for that signature Vercel 
      frosted-glass effect, anchored by a solid 1px bottom border.
    */
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--bg-main)]/75 border-b border-[var(--border)] transition-all duration-300 w-full flex justify-center">

      {/* 
        ALIGNMENT FIX:
        Replaced "max-w-7xl" with "section-container container-standard !py-0".
        Now the logo and theme toggle line up 100% flush with your Experience cards and Footer!
      */}
      <div className="section-container container-standard !py-0 !gap-0 h-16 flex flex-row items-center justify-between w-full">

        {/* Personal Brand / Logo */}
        <span
          onClick={() => scrollToSection('hero')}
          className="text-sm font-mono tracking-wider font-semibold cursor-pointer text-[var(--text-main)] hover:opacity-80 transition-opacity select-none"
        >
          {/* {author} */}
        </span>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Projects'].map(item => (
            <button
              key={item}
              type="button"
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-xs uppercase tracking-widest font-mono text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              {item}
            </button>
          ))}

          {/* Theme Toggle Button (Geist UI Polish) */}
          <button
            type="button"
            onClick={changeTheme}
            className="p-2 rounded-md border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[#666] transition-all duration-200 focus:outline-none cursor-pointer active:scale-[0.96]"
            aria-label="Toggle theme"
          >
            {isDarkMode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={changeTheme}
            className="p-2 rounded-md border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] active:scale-[0.96]"
            aria-label="Toggle theme"
          >
            {isDarkMode === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            className="text-[var(--text-main)] p-1.5 rounded-md hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border)] transition-all cursor-pointer focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Anchored to the bottom of the nav) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 border-b border-[var(--border)] bg-[var(--bg-main)]/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 animate-fadeIn shadow-2xl">
          {['About', 'Skills', 'Projects', 'Contact'].map(item => (
            <button
              key={item}
              type="button"
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left text-xs uppercase tracking-widest font-mono py-2 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors focus:outline-none"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}