"use client"
import {useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import Effect from "@/app/Effect";

export default function Home() {
  const [aspect, setAspect] = useState(1);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAspect(window.innerWidth / window.innerHeight);
    }
  }, []);

  return (
    <Canvas
      camera={{
        position: [0, 0, 2],
        fov: 50,
        aspect: aspect,
        near: 0.1,
        far: 2000
      }}
    >
      <Effect/>
    </Canvas>
  );
}
