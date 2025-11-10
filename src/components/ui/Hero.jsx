import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { heroSection } from '../../constants';

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

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="text-center relative z-10 max-w-5xl">

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fadeIn">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {heroSection.author}
                    </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-cyan-300 font-semibold mb-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                    {heroSection.role}
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    {heroSection.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
                    >
                        Contact Me
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10 transition-all"
                    >
                        View Work
                    </button>
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    {achievements.map((item, idx) => (
                        <div key={idx} className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-cyan-500/20">
                            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{item.number}</div>
                            <div className="text-sm text-gray-400">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={() => scrollToSection('about')}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <ChevronDown className="w-8 h-8 text-cyan-400" />
            </button>
        </section>
    )
}

export default HeroSection;