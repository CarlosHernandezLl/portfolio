import { motion } from "motion/react";
import { ContactForm } from '../extras/ContactForm';
import BackgroundAnimate from '../../canvas/BackgroundAnimate';
import Swrapper from "../extras/Swrapper";
import { useState } from "react";
import { Send, Check, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";



const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [formStatus, setFormStatus] = useState(''); // 'success' or 'error'

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required.';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid.';
        }
        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required.';
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required.';
        }
        return errors;
    };

    const handleSubmit = async () => {
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        // Simulate form submission
        setFormStatus('success');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        }); setFormErrors({});
    }
    
    const goToSocialMedia = (link) => {
        window.open(link, '_blank');
    }


    return (

        < section id="contact" className="py-24 px-6" >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Let's Work Together
                </h2>
                <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Whether you have a project in mind, need assistance, or just want to say hello, feel free to reach out. I'm always open to discussing new opportunities and collaborations. Looking forward to connecting with you!
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 backdrop-blur-lg bg-white/5 rounded-3xl p-8 md:p-10 border border-cyan-500/20 shadow-2xl">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-300">
                                    Name <span className="text-blue-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => {
                                        setFormData({ ...formData, name: e.target.value });
                                        if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                                    }}
                                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white ${formErrors.name ? 'border-red-500' : 'border-cyan-500/30'
                                        }`}
                                    placeholder="Your name"
                                />
                                {formErrors.name && (
                                    <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-300">
                                    Email <span className="text-blue-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => {
                                        setFormData({ ...formData, email: e.target.value });
                                        if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                                    }}
                                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white ${formErrors.email ? 'border-red-500' : 'border-cyan-500/30'
                                        }`}
                                    placeholder="your.email@example.com"
                                />
                                {formErrors.email && (
                                    <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-300">
                                    Subject <span className="text-blue-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => {
                                        setFormData({ ...formData, subject: e.target.value });
                                        if (formErrors.subject) setFormErrors({ ...formErrors, subject: '' });
                                    }}
                                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white ${formErrors.subject ? 'border-red-500' : 'border-cyan-500/30'
                                        }`}
                                    placeholder="What's this about?"
                                />
                                {formErrors.subject && (
                                    <p className="mt-1 text-sm text-red-400">{formErrors.subject}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-300">
                                    Message <span className="text-blue-400">*</span>
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => {
                                        setFormData({ ...formData, message: e.target.value });
                                        if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                                    }}
                                    rows="6"
                                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl focus:outline-none focus:border-cyan-500 transition-colors text-white resize-none ${formErrors.message ? 'border-red-500' : 'border-cyan-500/30'
                                        }`}
                                    placeholder="Tell me about your project..."
                                ></textarea>
                                {formErrors.message && (
                                    <p className="mt-1 text-sm text-red-400">{formErrors.message}</p>
                                )}
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>

                            {formStatus === 'success' && (
                                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl animate-fadeIn">
                                    <p className="text-green-400 font-semibold flex items-center gap-2">
                                        <Check className="w-5 h-5" />
                                        Message sent successfully! I'll get back to you soon.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-6 border border-cyan-500/20">
                            <h3 className="text-xl font-bold mb-6 text-cyan-300">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                                        <Mail className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Email</p>
                                        <p className="text-white font-medium">carlosllaocua@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                                        <MapPin className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Location</p>
                                        <p className="text-white font-medium">Lima, Peru</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-6 border border-cyan-500/20">
                            <h3 className="text-xl font-bold mb-6 text-cyan-300">Follow Me</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { Icon: Github, label: 'GitHub', link: 'https://github.com/CarlosHernandezLl' },
                                    { Icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/carloshernandezll/' },
                                ].map(({ Icon, label, link }) => (
                                    <button onClick={() => goToSocialMedia(link)}
                                        key={label}
                                        className="p-4 bg-cyan-500/20 rounded-xl hover:bg-cyan-500/30 transition-all hover:scale-105 border border-cyan-500/30 flex flex-col items-center gap-2 group"
                                    >
                                        <Icon className="w-6 h-6 text-cyan-400 group-hover:text-blue-400 transition-colors" />
                                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >

    )
}

export default Contact;