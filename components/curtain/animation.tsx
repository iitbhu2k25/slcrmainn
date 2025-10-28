'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface CurtainProps {
  side: 'left' | 'right';
  onAnimationComplete?: () => void;
}

function Curtain({ side, onAnimationComplete }: CurtainProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isOpening, setIsOpening] = useState(false);
  const targetX = side === 'left' ? -3.5 : 3.5;
  const startX = side === 'left' ? -0.1 : 0.1;
  const completedRef = useRef(false);

  useEffect(() => {
    // Start opening after a brief delay
    const timer = setTimeout(() => setIsOpening(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useFrame((state) => {
    if (meshRef.current && isOpening) {
      const currentX = meshRef.current.position.x;
      const distance = Math.abs(targetX - currentX);
      
      if (distance > 0.01) {
        // Smooth easing animation
        const speed = 0.03;
        meshRef.current.position.x += (targetX - currentX) * speed;
        
        // Add subtle wave animation for realism
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.y = Math.sin(time * 2 + currentX) * 0.02;
        
        // Update geometry for fabric fold effect
        const geometry = meshRef.current.geometry as THREE.BufferGeometry;
        const position = geometry.attributes.position;
        
        if (position) {
          for (let i = 0; i < position.count; i++) {
            const x = position.getX(i);
            const y = position.getY(i);
            
            // Create curtain folds
            const waveX = Math.sin(y * 3 + time * 2) * 0.08;
            const waveY = Math.sin(x * 2 + time * 1.5) * 0.05;
            
            position.setZ(i, waveX + waveY);
          }
          position.needsUpdate = true;
        }
      } else if (onAnimationComplete && !completedRef.current) {
        completedRef.current = true;
        onAnimationComplete();
      }
    }
  });

  // Create curtain geometry with segments for smooth folds
  const geometry = new THREE.PlaneGeometry(2.5, 6, 32, 32);

  return (
    <mesh ref={meshRef} position={[startX, 0, 0]} geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial
        color="#8B0000"
        roughness={0.8}
        metalness={0.1}
        side={THREE.DoubleSide}
        emissive="#330000"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function CurtainRod() {
  return (
    <>
      {/* Main rod */}
      <mesh position={[0, 3.2, 0]} castShadow rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 7, 32]} />
        <meshStandardMaterial color="#8B7355" roughness={0.3} metalness={0.7} />
      </mesh>
      
      {/* End caps */}
      <mesh position={[-3.5, 3.2, 0]} castShadow>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="#CD853F" roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[3.5, 3.2, 0]} castShadow>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial color="#CD853F" roughness={0.2} metalness={0.8} />
      </mesh>
    </>
  );
}

function Stage() {
  return (
    <>
      {/* Back wall */}
      <mesh position={[0, 0, -2]} receiveShadow>
        <planeGeometry args={[20, 12]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>
      
      {/* Floor */}
      <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.8} />
      </mesh>
    </>
  );
}

interface SceneProps {
  onComplete?: () => void;
}

function Scene({ onComplete }: SceneProps) {
  const [leftComplete, setLeftComplete] = useState(false);
  const [rightComplete, setRightComplete] = useState(false);

  useEffect(() => {
    if (leftComplete && rightComplete && onComplete) {
      onComplete();
    }
  }, [leftComplete, rightComplete, onComplete]);

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Main spotlight from top */}
      <spotLight
        position={[0, 5, 3]}
        angle={0.6}
        penumbra={0.5}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Side lights for depth */}
      <pointLight position={[-5, 2, 2]} intensity={0.5} color="#ff6b6b" />
      <pointLight position={[5, 2, 2]} intensity={0.5} color="#4ecdc4" />
      
      {/* Rim light from behind */}
      <pointLight position={[0, 3, -3]} intensity={0.3} color="#ffffff" />
      
      <Stage />
      <CurtainRod />
      <Curtain side="left" onAnimationComplete={() => setLeftComplete(true)} />
      <Curtain side="right" onAnimationComplete={() => setRightComplete(true)} />
    </>
  );
}

interface CurtainOpeningProps {
  onComplete?: () => void;
  enableControls?: boolean;
}

export default function CurtainOpening({ onComplete, enableControls = false }: CurtainOpeningProps) {
  return (
    <div style={{ width: '100%', height: '100vh', background: '#000' }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
      >
        <Scene onComplete={onComplete} />
        {enableControls && <OrbitControls />}
      </Canvas>
    </div>
  );
}