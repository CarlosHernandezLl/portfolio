import { Canvas, extend, useLoader } from '@react-three/fiber';
import { DirectionalLight, DoubleSide, MeshBasicMaterial, MeshPhysicalMaterial, RepeatWrapping, SphereGeometry, TextureLoader, TrianglesDrawMode } from 'three/src/Three.Core.js';
import { Effects, Environment, OrbitControls, Preload, useTexture } from '@react-three/drei';

// import {cube} from '../../src/icons/cubicle-99.CUBE'
import water from '../assets/water.webp'
import { Blob } from './Blob';
import { Suspense } from 'react';




export default function BackgroundAnimate() {

    return (

        <Canvas  camera={{ position: [0, 0, 6] }}>
            <Suspense fallback={null}>
                <Blob />
            </Suspense>

            <Preload all />
        </Canvas>

    )
}