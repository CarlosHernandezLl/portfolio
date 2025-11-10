import { heroSection } from "../../constants";
import Swrapper from "../extras/Swrapper";

// Footer
const Footer = () => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };


    return (

        <footer className="py-12 px-6 border-t border-cyan-500/20 bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                            {heroSection.author}
                        </h3>
                        <p className="text-gray-400">
                            {heroSection.slogan}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-cyan-300">Quick Links</h4>
                        <div className="space-y-2">
                            {['About', 'Skills', 'Projects', 'Contact'].map(item => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="block text-gray-400 hover:text-cyan-400 transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-cyan-300">Services</h4>
                        <div className="space-y-2 text-gray-400">
                            <p>Web Development</p>
                            <p>Backend Security</p>
                            <p>Cloud Integration</p>
                            <p>Mobile Development</p>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-purple-500/20 text-center text-gray-400">
                    <p>{heroSection.footerDescription}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;