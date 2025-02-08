import { Canvas, extend, useLoader } from '@react-three/fiber';
import { DirectionalLight, DoubleSide, MeshBasicMaterial, MeshPhysicalMaterial, RepeatWrapping, SphereGeometry, TextureLoader, TrianglesDrawMode } from 'three/src/Three.Core.js';
import { Effects, Environment, OrbitControls, useTexture } from '@react-three/drei';

// import {cube} from '../../src/icons/cubicle-99.CUBE'
import water from '../assets/water.webp'


const Sphere = () => {

    const jellyTexture = useTexture(water)
    jellyTexture.wrapS = jellyTexture.wrapT = RepeatWrapping
    jellyTexture.repeat.set(1, 1)
    jellyTexture.anisotropy = 16
    jellyTexture.encoding = 3000

    return (
        <mesh >
            <sphereGeometry args={[1.5, 64, 64]} />
            <meshPhysicalMaterial
                map={jellyTexture}
                side={DoubleSide} // Aplica la textura a ambos lados
                transparent
                transmission={0.9} // Simula el efecto de gelatina
                roughness={0.1}
                thickness={0.9}
            />
        </mesh>
    )
}

export default function BackgroundAnimate() {

    return (
        <Canvas frameloop='demand' camera={{ position: [0, 0, 3] }} >
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 2]} />
            <Sphere />
            <OrbitControls enableRotate={true} enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>

    )
}