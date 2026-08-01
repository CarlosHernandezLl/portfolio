import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBackground3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Configuración de la escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Creación de Geometría de Nodos / Partículas (Simulando Redes/Backend)
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 8;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Material minimalista (puntos sutiles estilo color de bordes de Vercel)
    const material = new THREE.PointsMaterial({
      size: 0.025,
      color: 0x888888,
      transparent: true,
      opacity: 0.6,
    });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // 3. Creación de una Malla Geométrica Central (Icosaedro Wireframe de baja densidad)
    const wireGeometry = new THREE.IcosahedronGeometry(1.8, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x444444,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    scene.add(wireMesh);

    // 4. Interacción suave con el movimiento del mouse
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 500;
      mouseY = (event.clientY - window.innerHeight / 2) / 500;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 5. Manejo de responsividad de pantalla
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 6. Loop de Animación de alto rendimiento (60 FPS estables)
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Interpolación suave para el movimiento del mouse (Lerp)
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotación constante y orgánica de las mallas
      particlesMesh.rotation.y = elapsedTime * 0.03 + targetX;
      particlesMesh.rotation.x = -elapsedTime * 0.02 + targetY;

      wireMesh.rotation.y = elapsedTime * 0.05;
      wireMesh.rotation.x = elapsedTime * 0.03;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Limpieza de recursos al desmontar el componente (Evita fugas de memoria en SPA)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.75 }}
    />
  );
}