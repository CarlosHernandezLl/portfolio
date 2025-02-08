"use client";
import '../styles/CubeAnimation.css'

import { useAnimationFrame } from "motion/react"
import { useRef } from "react";

export default function CubeAnimation() {
    const refe = useRef();

    useAnimationFrame((t) => {
        if (!refe.current) return

        const rotate = Math.sin(t / 10000) * 200
        const y = (1 + Math.sin(t / 1000)) * -50
        refe.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })

    return (
        <span className="container">
            <div className="cube" ref={refe}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
        </span>

    )
}