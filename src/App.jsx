import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter, ExternalLink, X, Code, Palette, Smartphone, ChevronDown, Menu, MapPin, Phone, Send, Check } from 'lucide-react';
import HeroSection from './components/ui/Hero';
import Experience from './components/ui/Experience';
import Footer from './components/ui/Footer';
import NavigatorComponent from './components/ui/NavigatorComponent';
import StarCanvas from './canvas/Stars.jsx';
import { projects } from './constants';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('');
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) setActiveSection(current);

      const skillsSection = document.getElementById('skills');
      if (skillsSection && !skillsVisible) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setSkillsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [skillsVisible]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = () => {
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  const skills = {
    development: [
      { name: 'React & Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Node.js & Express', level: 88 },
      { name: 'Python & Django', level: 85 }
    ],
    design: [
      { name: 'UI/UX Design', level: 92 },
      { name: 'Figma & Adobe XD', level: 90 },
      { name: 'Design Systems', level: 88 },
      { name: 'Motion Design', level: 82 }
    ],
    soft: [
      { name: 'Project Management', level: 90 },
      { name: 'Client Communication', level: 95 },
      { name: 'Problem Solving', level: 93 },
      { name: 'Team Leadership', level: 87 }
    ]
  };


  
  const filteredProjects = projectFilter === 'all'
    ? projects
    : projects.filter(p => p.category === projectFilter);


  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white min-h-screen">

      <StarCanvas />

      <NavigatorComponent />

      <HeroSection />

      <Experience />

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Development Skills */}
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-xl">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold">Development</h3>
              </div>
              <div className="space-y-5">
                {skills.development.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: skillsVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Skills */}
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Palette className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">Design</h3>
              </div>
              <div className="space-y-5">
                {skills.design.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: skillsVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-500/20 rounded-xl">
                  <Smartphone className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>
              <div className="space-y-5">
                {skills.soft.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-teal-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: skillsVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, design, and mobile applications
          </p>

          {/* Project Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { label: 'All Projects', value: 'all' },
              { label: 'Web Development', value: 'web' },
              { label: 'Mobile Apps', value: 'mobile' }
            ].map(filter => (
              <button
                key={filter.value}
                onClick={() => setProjectFilter(filter.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${projectFilter === filter.value
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-cyan-500/20'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group backdrop-blur-lg bg-white/5 rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/20 rounded-full text-xs text-cyan-300 border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 hover:text-blue-400 transition-colors font-semibold">
                    View Details <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/20" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-80 overflow-hidden rounded-t-3xl">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900/80 backdrop-blur-sm rounded-full hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {selectedProject.title}
              </h2>
              <p className="text-xl text-gray-300 mb-6">{selectedProject.longDescription}</p>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-cyan-300">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-cyan-500/20 rounded-full text-sm border border-cyan-500/30 text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-cyan-300">Key Achievements</h3>
                <ul className="space-y-2">
                  {selectedProject.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Footer */}
      <Footer />


      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}