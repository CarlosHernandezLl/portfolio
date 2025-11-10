// Experience.jsx
import React from 'react';
import { motion } from "motion/react";
import Swrapper from '../extras/Swrapper';
import { aboutMe } from '../../constants';
import { Check } from 'lucide-react';

const Experience = () => {
    return (
        <section id="about" className="py-24 px-6 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-cyan-500/20">
                            <h3 className="text-2xl font-bold mb-4 text-cyan-300">My Story</h3>
                            <p className="text-lg text-gray-300 leading-relaxed mb-4">
                                {aboutMe.my_history}
                            </p>
                        </div>

                        <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-cyan-500/20">
                            <h3 className="text-2xl font-bold mb-4 text-cyan-300">What I Do</h3>
                            <ul className="space-y-3 text-gray-300">
                                {
                                    aboutMe.what_i_do.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                                            <span>{Object.values(item)[0]}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-cyan-500/20">
                            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Mission & Values</h3>
                            <p className="text-lg text-gray-300 leading-relaxed mb-4">
                                {aboutMe.my_mission}
                            </p>

                        </div>

                        <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-cyan-500/20">
                            <h3 className="text-2xl font-bold mb-6 text-cyan-300">Technology Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {aboutMe.stack.map((tech, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-cyan-500/20 rounded-full text-sm border border-cyan-500/30 text-cyan-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;