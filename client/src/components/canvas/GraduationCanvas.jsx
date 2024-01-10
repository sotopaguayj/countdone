import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import CanvasLoader from '../CanvasLoader'

function Graduation () {
  const graduation = useGLTF('/graduation_hat/scene.gltf')

  return (
    <mesh>
    <hemisphereLight intensity={1.3} groundColor='black' />
    <pointLight intensity={1} />
    <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024} 
    />
    <primitive 
      object={graduation.scene} 
      scale={ 4 } 
      rotation-y={50}
      position={ [0, -2, 0] }
      rotation={[-0.01, 20, -0.1]}
    />
  </mesh>
  )
}

function GraduationCanvas () {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 10, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            autoRotate
            autoRotateSpeed={10}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2} 
          />
          <Graduation />
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default GraduationCanvas