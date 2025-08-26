import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingShape = ({ position, color, shape = 'sphere' }: { 
  position: [number, number, number]; 
  color: string; 
  shape?: 'sphere' | 'box' | 'torus';
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  console.log('FloatingShape rendering with:', { position, color, shape });

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
      // Rotation animation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const renderGeometry = () => {
    console.log('Rendering geometry for shape:', shape);
    switch (shape) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'torus':
        return <torusGeometry args={[0.5, 0.2, 8, 16]} />;
      default:
        return <sphereGeometry args={[0.5, 32, 32]} />;
    }
  };

  try {
    return (
      <mesh ref={meshRef} position={[position[0], position[1], position[2]]}>
        {renderGeometry()}
        <meshPhongMaterial color={color} transparent opacity={0.7} />
      </mesh>
    );
  } catch (error) {
    console.error('Error in FloatingShape:', error);
    return null;
  }
};

export const FloatingElements3D = () => {
  console.log('FloatingElements3D component rendering');
  
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <FloatingShape position={[-4, 2, 0]} color="#3b82f6" shape="sphere" />
        <FloatingShape position={[4, -2, 0]} color="#1d4ed8" shape="box" />
        <FloatingShape position={[0, 3, -2]} color="#60a5fa" shape="torus" />
        <FloatingShape position={[-3, -3, 1]} color="#93c5fd" shape="sphere" />
        <FloatingShape position={[3, 1, -1]} color="#2563eb" shape="box" />
      </Canvas>
    </div>
  );
};