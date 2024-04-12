import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={90}
      alphaTest={0.85}
      scae={10}
      rotation={[Math.PI / 2, 1, 0]}
      position={[0, 0, -0.35]}
    >
      <RandomizedLight 
        amount={4}
        radius={100}
        intensity={4}
        ambient={0.5}
        position={[-5, 1, -1]}
      />
      <RandomizedLight 
        amount={4}
        radius={100}
        intensity={0.5}
        ambient={0.95}
        position={[1, 1, -1]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop