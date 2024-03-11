import { useState, Suspense } from 'react'

import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from '../public/Model'
import Model2 from '../public/Model2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model />
          
        </Suspense>
      </Canvas>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Model2 />
          
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
