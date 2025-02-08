import { motion } from "motion/react";
import { paragraph3 } from "../../constants";
import { ContactForm } from '../extras/ContactForm';
import BackgroundAnimate from '../../canvas/BackgroundAnimate';
import Swrapper from "../extras/Swrapper";


const Contact = () => {
    return (
        <>
            <motion.h2
                initial={{
                    opacity: 0,
                    x: -100,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        delay: 0.2,
                        duration: 0.5
                    }
                }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
           text-pretty text-amber-100 font-bold pt-0 ">{paragraph3}</motion.h2>
            <div className='flex flex-col-reverse md:flex-row-reverse gap-y-4 items-center content-center justify-evenly pt-10'>
                <ContactForm />
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,

                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    
                    className='w-[400px] h-[400px]'>

                    <BackgroundAnimate />
                </motion.div>

            </div>

        </>
    )
}

export default Swrapper(Contact, "Contact");