import { motion } from "motion/react"
import pj from '../../assets/catchthem.webp'
import { projects } from "../../constants"
import Swrapper, { fadeIn } from "../extras/Swrapper"

const Card = ({ title, description, image }) => {
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


            className=' flex flex-col md:flex-row xl:flex-col items-center justify-center'>
            <img src={image} alt={title} className="min-w-56 object-fill rounded-xl" />
            <div className="flex flex-col md:pl-10 xl:p-0 items-center justify-center">
                <h2 className="text-sm sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl text-amber-100 font-bold mt-4">
                    <span>
                        🎲 {title}
                    </span>
                </h2>
                <p className="text-sm pt-3 sm:text-lg lg:text-xl xl:text-xl text-gray-500 xl:pl-8">{description}</p>
            </div>
        </motion.div >

    )
}


const Projects = () => {
    return (

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 justify-center items-centr">
            {
                projects.map((project, index) => (
                    <Card key={index} title={project.title} description={project.description} image={project.image} />
                ))
            }
        </div>



    )
}

export default Swrapper(Projects, "Projects");