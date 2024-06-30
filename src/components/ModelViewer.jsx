import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Model = ({ url, position, rotation, onLoad }) => {
  const { scene } = useGLTF(url);
  const modelRef = useRef();
  const gltf = useLoader(GLTFLoader, url);

  useEffect(() => {
    if (gltf && onLoad) {
      onLoad();
    }
  }, [gltf, onLoad]);

  
  scene.traverse((child) => {
    if (child.isMesh) {
      if (Array.isArray(child.material)) {
        child.material.forEach((material) => {
         
          material.color = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--model-color').trim());
        });
      } else {
      
        child.material.color = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--model-color').trim());
      }
    }
  });


  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.z += 0.01; 
    }
  });

  return (
    <group>
      <primitive 
        ref={modelRef} 
        object={scene} 
        position={position}
        rotation={rotation}
        scale={[1, 1, 1]} 
      />
    </group>
  );
};

const ModelViewer = ({ modelUrl, modelPosition, modelRotation, onLoad }) => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model url={modelUrl} position={modelPosition} rotation={modelRotation} onLoad={onLoad} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
