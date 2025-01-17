/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 model2.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/model2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh.geometry} material={materials.main} />
    </group>
  )
}

useGLTF.preload('/model2.glb')
