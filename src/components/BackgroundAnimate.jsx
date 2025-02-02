import zIndex from '@mui/material/styles/zIndex';
import { Canvas, extend, useLoader } from '@react-three/fiber';
import { MeshPhysicalMaterial, SphereGeometry } from 'three/src/Three.Core.js';
import { Effects, Environment, OrbitControls, useTexture } from '@react-three/drei';
import textur from '../../src/icons/terrazo.png'
// import {cube} from '../../src/icons/cubicle-99.CUBE'
import { LUTPass, LUTCubeLoader } from 'three-stdlib'

extend({ LUTPass })

const styles = {
    container: {
        position: 'absolute',
        zIndex: 11,
        width: '50%',
        height: '50%',

    }
}

function Grading() {
    const { texture3D } = useLoader(LUTCubeLoader, '../../src/icons/cubicle-99.CUBE')
    return (
        <Effects>
            <lUTPass lut={texture3D} intensity={1} />
        </Effects>
    )
}

const Sphere = () => {
    const texture = useTexture(textur)

    const getSpace = () => {
        let width = window.innerWidth
        if (width > 1024) {
            return 4
        } else if (width > 768) {
            return 3.5
        } else if (width > 640) {
            return 3.2
        } else {
            return 3
        }
    }

    let radius = getSpace()

    return (
        <mesh >
            <sphereGeometry args={[radius, 64, 64, 1.5]} />
            <meshPhysicalMaterial emissive={'#000'} color={'#fff'} metalness={1} roughness={0} ior={1} reflectivity={1} />
        </mesh>
    )
}

export default function BackgroundAnimate() {

    return (
        <Canvas frameloop='demand' camera={{ position: [0, 0, 15], fov: 50 }} >
            <ambientLight />
            <spotLight intensity={1} angle={0.2} penumbra={5} position={[5, 40, 40]} />
            <Sphere />
            <Grading />
            <Environment preset="night" backgroundRotation={[4, 2, 1]} backgroundIntensity={2.5} background blur={0.5} />
            <OrbitControls enableRotate={false} enableZoom={false} autoRotate autoRotateSpeed={5} />
        </Canvas>


    )
}