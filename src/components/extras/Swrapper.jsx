import { motion } from "framer-motion";
import { Component } from "react";

export const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

const staggerContainer = (staggerChildren, delayChildren) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};

const Swrapper = (Component, idName) => function HOC() {
    return (
        <motion.section
            // variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{
                once: true,
                amount: 0.25
            }}
            className="
             w-screen px-10 sm:px-20 lg:px-24 xl:px-40 2xl:px-96 py-16">
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section >
    )
}

export default Swrapper;