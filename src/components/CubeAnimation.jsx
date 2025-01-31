"use client";
import '../styles/CubeAnimation.css'

import { useAnimationFrame } from "motion/react"

import { StrictMode } from "react";
import { useRef } from "react";

export default function UseAnimationFrame() {
    const refe = useRef();

    useAnimationFrame((t) => {
        if (!refe.current) return

        const rotate = Math.sin(t / 10000) * 200
        const y = (1 + Math.sin(t / 1000)) * -50
        refe.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
        // refe.current.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`
    })

    return (

        <div className="container">
            <div className="cube" ref={refe}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
            {/* <StyleSheet /> */}
        </div>

    )
}