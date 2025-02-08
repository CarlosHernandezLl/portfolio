import { motion } from "motion/react";
import { paragraph2 } from "../../constants";
import { icons, colors } from "../../constants/index";
import Swrapper from "../extras/Swrapper";

const Knowledge = () => {

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
                viewport={
                    {
                        once: true,
                        amount: 0.25
                    }
                }
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                text-pretty text-amber-100 font-bold pt-0 ">{paragraph2}</motion.h2>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6
        lg:grid-cols-7
        xl:grid-cols-8
        2x:grid-cols-9
        gap-2 relative sm:gap-4 h-auto pt-10 justify-center items-center">
                {
                    icons.map((icon, index) => (

                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    delay: 0.2,
                                    duration: 0.5
                                }
                            }}
                            viewport={
                                {
                                    once: true,
                                    amount: 0.25
                                }
                            }

                            key={index} className={`${colors[index]}  hover:ease-in-out relative top-1/2 left-1/2 -translate-1/2 w-20 h-20 place-content-center rounded-2xl shadow-2xl `} >
                            <span className="absolute top-1/2 left-1/2 -translate-1/2 rounded-lg">
                                {icon.icon}
                            </span>
                        </motion.div>
                    ))
                }
            </div>
        </>

    )
}

export default Swrapper(Knowledge, "Knowledge");