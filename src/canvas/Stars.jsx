import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
    const ref = useRef();

    // Inicialización segura: Limpiamos proactivamente cualquier NaN que maath pueda retornar
    const [sphere] = useState(() => {
        const coords = random.inSphere(new Float32Array(5000), { radius: 1.2 });
        for (let i = 0; i < coords.length; i++) {
            if (isNaN(coords[i])) {
                coords[i] = 0; // Forzamos a posición neutra si el cálculo flotante falla
            }
        }
        return coords;
    });

    useFrame((state, delta) => {
        // Evitamos mutar la rotación si el componente se desmonta o el delta viene corrupto en el cambio de tema
        if (!ref.current || isNaN(delta) || delta > 0.1) return;

        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    // color='#f272c8'
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    return (

        <div className='w-full h-auto absolute inset-0 z-[1] pointer-events-none'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;