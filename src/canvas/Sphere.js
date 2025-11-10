import { useTexture } from "@react-three/drei"

export const Sphere = () => {

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