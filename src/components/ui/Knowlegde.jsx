import { motion } from "motion/react";
import { paragraph2 } from "../../constants";
import { icons, colors } from "../../constants/index";
import Swrapper from "../extras/Swrapper";

const Knowledge = () => {

    return (
        <>
            <motion.span
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

                className="flex flex-row space-x-4 items-center text-[#1fc9d0]">

                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="size-6 sm:size-8 md:size-10 lg:size-12 xl:size-14"
                    viewBox="0 0 24 24">
                    <rect width="24" height="24" fill="none" />
                    <path fill="none" stroke="#1fc9d0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.5 19a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M10 5l2-2m-4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m.5 6l8-8M5.5 21a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m13-13a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M12 21l2-2" />
                </svg>
                <motion.h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                text-pretty font-bold pt-0 ">{paragraph2}</motion.h2>
            </motion.span>
            <motion.div
                initial={{
                    opacity: 0,
                    x: 0,
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

                className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6
        lg:grid-cols-7
        xl:grid-cols-8
        2x:grid-cols-9
        gap-10 relative sm:gap-14 h-auto pt-10 justify-center items-center mt-3">
                {
                    icons.map((icon, index) => (

                        <div className={`${colors[index]} relative w-24 h-24 shadow-xl rounded-xl`} >
                            <span className="absolute top-1/2 left-1/2 -translate-1/2">
                                {icon.icon}
                            </span>
                        </div>
                    ))
                }
            </motion.div>
        </>

    )
}

export default Swrapper(Knowledge, "Knowledge");