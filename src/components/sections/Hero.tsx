"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei/core/RoundedBox";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import * as THREE from "three";
import { OrbitControls as ThreeOrbitControls } from "three/examples/jsm/controls/OrbitControls";

function CameraControls() {
  const { camera, gl } = useThree();
  const controlsRef = useRef<ThreeOrbitControls | null>(null);
  React.useEffect(() => {
    const controls = new ThreeOrbitControls(camera, gl.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.6;
    controlsRef.current = controls;
    return () => controls.dispose();
  }, [camera, gl]);
  useFrame(() => {
    if (controlsRef.current) controlsRef.current.update();
  });
  return null;
}

function LogoCube() {
  const groupRef = useRef<THREE.Group>(null);
  const textures = useLoader(THREE.TextureLoader, [
    "/logos/ads.png",
    "/logos/gmb.png",
    "/logos/meta.png",
    "/logos/wordpress.png",
    "/logos/linkedin.png",
    "/logos/calls.png",
  ]) as THREE.Texture[];

  const materials = useMemo(() => {
    const faces = textures.slice(0, 6);
    // Normalize texture settings for crisp transparent logos
    faces.forEach((tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
    });
    return faces.map((tex) => new THREE.MeshStandardMaterial({ map: tex, transparent: true }));
  }, [textures]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.x = Math.sin(t / 2) / 4 + 0.4;
    groupRef.current.rotation.y = t / 2;
    groupRef.current.position.y = Math.sin(t * 1.2) * 0.12;
  });

  return (
    <group ref={groupRef}>
      {/* Base rounded cube */}
      {(() => {
        const size = 1.8;
        const radius = 0.22;
        const smoothness = 8;
        const epsilon = 0.04; // push slightly outward to avoid any z-fighting with rounded edges
        const inset = radius * 1.05;
        const faceSize = size - 2 * inset;
        const half = size / 2;
        return (
          <>
            <RoundedBox args={[size, size, size]} radius={radius} smoothness={smoothness} castShadow receiveShadow>
              <meshStandardMaterial color="hsl(256.13,47.21%,38.63%)" metalness={0.6} roughness={0.35} />
            </RoundedBox>
            {/* Logo overlays on each face as slightly inset planes to preserve rounded edges */}
            {/* +X */}
            <mesh position={[half + epsilon, 0, 0]} rotation={[0, Math.PI / 2, 0]} castShadow={false} receiveShadow={false} renderOrder={10}>
              <planeGeometry args={[faceSize, faceSize]} />
              <meshStandardMaterial map={materials[0].map as THREE.Texture} transparent depthWrite={false} side={THREE.DoubleSide} />
            </mesh>
            {/* -X */}
            <mesh position={[-half - epsilon, 0, 0]} rotation={[0, -Math.PI / 2, 0]} castShadow={false} receiveShadow={false} renderOrder={10}>
              <planeGeometry args={[faceSize, faceSize]} />
              <meshStandardMaterial map={materials[1].map as THREE.Texture} transparent depthWrite={false} side={THREE.DoubleSide} />
            </mesh>
            {/* +Y */}
            <mesh position={[0, half + epsilon, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow={false} receiveShadow={false} renderOrder={10}>
              <planeGeometry args={[faceSize, faceSize]} />
              <meshStandardMaterial map={materials[2].map as THREE.Texture} transparent depthWrite={false} side={THREE.DoubleSide} />
            </mesh>
            {/* -Y */}
            <mesh position={[0, -half - epsilon, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow={false} receiveShadow={false} renderOrder={10}>
              <planeGeometry args={[faceSize, faceSize]} />
              <meshStandardMaterial map={materials[3].map as THREE.Texture} transparent depthWrite={false} side={THREE.DoubleSide} />
            </mesh>
            {/* +Z (front) */}
            <mesh position={[0, 0, half + epsilon]} rotation={[0, 0, 0]} castShadow={false} receiveShadow={false} renderOrder={10}>
              <planeGeometry args={[faceSize, faceSize]} />
              <meshStandardMaterial map={materials[4].map as THREE.Texture} transparent depthWrite={false} side={THREE.DoubleSide} />
            </mesh>
            {/* -Z (back) */}
            <mesh position={[0, 0, -half - epsilon]} rotation={[0, Math.PI, 0]} castShadow={false} receiveShadow={false} renderOrder={10}>
              <planeGeometry args={[faceSize, faceSize]} />
              <meshStandardMaterial map={materials[5].map as THREE.Texture} transparent depthWrite={false} side={THREE.DoubleSide} />
            </mesh>
          </>
        );
      })()}
    </group>
  );
}

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
              Minimal. Fast.
            <br />
              <span className="accent-gradient-text">Seriously Effective.</span>
          </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              AI answering and SEO-first experiences built to convert. A modern stack that works while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-2">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 glow-button text-lg px-8 py-6 h-auto font-semibold rounded-full">
              Get a Proposal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 h-auto font-semibold rounded-full">
              <Play className="mr-2 h-5 w-5" />
              Talk to an Expert
            </Button>
          </div>
            </div>

          <div className="relative aspect-square lg:aspect-[4/3] w-full max-w-xl mx-auto lg:max-w-none">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-amber-500/10 blur-3xl" />
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_80px_rgba(56,189,248,0.15)]">
              <Canvas shadows dpr={[1, 1.8]} camera={{ position: [0, 0, 4], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[3, 3, 3]} intensity={1.2} castShadow />
                <directionalLight position={[-3, -2, 2]} intensity={0.3} />
                <LogoCube />
                <CameraControls />
              </Canvas>
            </div>
          </div>
        </div>
      </div>

      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />
    </section>
  );
};

export default Hero;