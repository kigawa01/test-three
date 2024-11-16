"use client"
import React, {useRef} from "react";
import {extend, useThree} from "@react-three/fiber";
import {EffectComposer, RenderPass, ShaderPass} from "three-stdlib";

extend({EffectComposer, RenderPass, ShaderPass})

export default function Effect(
  {}: object,
) {
  const composerRef = useRef<EffectComposer>(null)
  const {gl, scene, camera} = useThree()

  console.debug(composerRef.current?.passes)

  return (
    <effectComposer ref={composerRef} args={[gl]}>
      <renderPass attach="passes" args={[scene, camera]}/>
    </effectComposer>
  )
}

 