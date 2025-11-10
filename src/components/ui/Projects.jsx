import { motion } from "motion/react"
// import pj from '../../assets/catchthem.webp'
import { projects } from "../../constants"
import Swrapper, { fadeIn } from "../extras/Swrapper"
import { GitHub } from "@mui/icons-material"

const Card = ({ title, description, image, url }) => {
    return (

        <motion.div
            initial="hidden"
            variants={fadeIn("up", "tween", 0.2, 0.5)}
            whileInView="show"
            viewport={
                {
                    once: true,
                    amount: 0.25
                }
            }

            className='relative rounded-2xl shadow-2xl flex flex-col  p-2'>

            <img src={image} alt={title} className=" object-contain rounded-xl shadow-2xl " />
            {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-xl shadow-2xl"></div> */}
            <button className="absolute top-0 right-0 flex flex-col items-center justify-center bg-blue-700 rounded-full shadow-2xl mr-5 mt-5 p-2
            hover:bg-amber-100 transition duration-300 ease-in-out transform hover:scale-110 hover:rotate-12 group cursor-pointer
            peer
            ">
                <a href={url} target="_blank" className="text-white group-hover:text-black" >
                    <GitHub color="#fff" />
                </a>
            </button>

            <div className="relative flex flex-col items-start justify-start">
                <h2 className="text-sm sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl text-amber-100 font-bold m-4">
                    <span>
                        🎲 {title}
                    </span>
                </h2>
                <p className="text-sm pl-6 text-pretty sm:text-lg lg:text-xl xl:text-xl text-gray-500 ">{description}</p>
            </div>
        </motion.div >

    )
}


const Projects = () => {
    return (

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
                        { label: 'Design', value: 'design' },
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
        </section >


    )
}

export default Swrapper(Projects, "Projects");