import { useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  useTexture,
  Float,
} from "@react-three/drei";
import { useInView } from "react-intersection-observer";
import { book } from "../data";
import * as THREE from "three";

function Book3DModel() {
  const groupRef = useRef();
  const pagesRef = useRef();

  // Load both front and back cover textures
  const frontTexture = useTexture(book.coverImage2);
  frontTexture.minFilter = THREE.LinearMipmapLinearFilter;
  frontTexture.magFilter = THREE.LinearFilter;
  frontTexture.colorSpace = THREE.SRGBColorSpace;

  const backTexture = useTexture(book.coverImageBack);
  backTexture.minFilter = THREE.LinearMipmapLinearFilter;
  backTexture.magFilter = THREE.LinearFilter;
  backTexture.colorSpace = THREE.SRGBColorSpace;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pagesRef.current) {
      pagesRef.current.material.emissiveIntensity =
        0.05 + Math.sin(t * 2) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Back cover */}
      <mesh position={[0, 0, -0.1]} castShadow>
        <boxGeometry args={[2.4, 3.2, 0.03]} />
        <meshStandardMaterial
          map={backTexture}
          roughness={0.35}
          metalness={0.02}
        />
      </mesh>

      {/* Back cover edge (left spine) */}
      <mesh position={[-1.2, 0, 0]}>
        <boxGeometry args={[0.04, 3.1, 0.2]} />
        <meshStandardMaterial
          color="#D4A853"
          roughness={0.25}
          metalness={0.4}
        />
      </mesh>

      {/* Pages block */}
      <mesh position={[0, 0, 0]} ref={pagesRef} castShadow>
        <boxGeometry args={[2.25, 3.05, 0.14]} />
        <meshStandardMaterial
          color="#FBF8F2"
          roughness={0.6}
          metalness={0.0}
          emissive="#FFF8E7"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Page lines - right edge */}
      {[...Array(8)].map((_, i) => (
        <mesh key={`pr-${i}`} position={[1.13, -1.0 + i * 0.28, 0]}>
          <boxGeometry args={[0.003, 0.18, 0.12]} />
          <meshStandardMaterial
            color="#EDE5D8"
            roughness={0.9}
            metalness={0.0}
          />
        </mesh>
      ))}

      {/* Page lines - top edge */}
      {[...Array(6)].map((_, i) => (
        <mesh key={`pt-${i}`} position={[-0.6 + i * 0.22, 1.53, 0]}>
          <boxGeometry args={[0.16, 0.003, 0.12]} />
          <meshStandardMaterial
            color="#EDE5D8"
            roughness={0.9}
            metalness={0.0}
          />
        </mesh>
      ))}

      {/* Page lines - bottom edge */}
      {[...Array(6)].map((_, i) => (
        <mesh key={`pb-${i}`} position={[-0.6 + i * 0.22, -1.53, 0]}>
          <boxGeometry args={[0.16, 0.003, 0.12]} />
          <meshStandardMaterial
            color="#EDE5D8"
            roughness={0.9}
            metalness={0.0}
          />
        </mesh>
      ))}

      {/* Front cover */}
      <mesh position={[0, 0, 0.08]} castShadow>
        <boxGeometry args={[2.4, 3.2, 0.03]} />
        <meshStandardMaterial
          map={frontTexture}
          roughness={0.3}
          metalness={0.02}
        />
      </mesh>

      {/* Gold foil accent on front */}
      <mesh position={[0, 0, 0.1]}>
        <boxGeometry args={[2.25, 3.05, 0.001]} />
        <meshStandardMaterial
          color="#D4A853"
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Spine - right edge */}
      <mesh position={[1.2, 0, 0]} castShadow>
        <boxGeometry args={[0.04, 3.1, 0.2]} />
        <meshStandardMaterial
          color="#C8963E"
          roughness={0.25}
          metalness={0.4}
        />
      </mesh>

      {/* Spine caps */}
      <mesh position={[1.22, 1.2, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
        <meshStandardMaterial color="#B8860B" roughness={0.3} metalness={0.5} />
      </mesh>
      <mesh position={[1.22, -1.2, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
        <meshStandardMaterial color="#B8860B" roughness={0.3} metalness={0.5} />
      </mesh>
    </group>
  );
}

function Sparkles() {
  const sparklesRef = useRef();
  const count = 20;
  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    sizes[i] = Math.random() * 0.04 + 0.01;
  }

  useFrame((state) => {
    if (sparklesRef.current) {
      sparklesRef.current.rotation.y += 0.002;
      sparklesRef.current.rotation.x += 0.001;
    }
  });

  return (
    <points ref={sparklesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#D4A853"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} color="#FFF8F0" />
      <directionalLight
        position={[8, 5, 8]}
        intensity={2.5}
        color="#FFFFFF"
        castShadow
      />
      <directionalLight
        position={[-4, 2, -3]}
        intensity={0.8}
        color="#FFF5E8"
      />
      <directionalLight
        position={[0, -1, -6]}
        intensity={0.5}
        color="#FFE8C0"
      />
      <pointLight position={[3, 2, 4]} intensity={0.6} color="#D4A853" />
      <pointLight position={[0, -3, 2]} intensity={0.3} color="#FFECD0" />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <Book3DModel />
      </Float>

      <Sparkles />

      <ContactShadows
        position={[0, -2.3, 0]}
        opacity={0.3}
        scale={7}
        blur={3}
        far={5}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.7}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={3}
        dampingFactor={0.1}
      />
    </>
  );
}

export default function Book3D() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="book" className="py-28 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg2.png"
          alt="Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        {/* Warm overlay for readability */}
        <div className="absolute inset-0 bg-[#EDE8E0]/15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#EDE8E0]/40 via-transparent to-[#EDE8E0]/40"></div>
      </div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent z-[1]"></div>

      {/* Background glows */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4A853]/3 rounded-full blur-3xl pointer-events-none z-[1]"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#D4A853]/4 rounded-full blur-3xl pointer-events-none z-[1]"></div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #D4A853 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-[#D4A853]/30 text-[#C8963E] px-5 py-2 mb-6 text-[10px] font-roboto-slab font-bold tracking-[0.25em] uppercase rounded-full bg-white/60 backdrop-blur-sm shadow-sm"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-[#D4A853] rounded-full"
            ></motion.span>
            The Book
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-dm-serif text-[#C8963E] mb-4 tracking-tight leading-tight">
            {book.title}
          </h2>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#D4A853]/40"></div>
            <span className="text-[#D4A853] text-sm">✦</span>
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#D4A853]/40"></div>
          </div>

          <p className="text-[#1A1A1A]/35 font-roboto-slab text-sm tracking-[0.2em] uppercase font-medium">
            {book.subtitle}
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto"
        >
          {/* 3D Book - No container background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-[550px]"
          >
            <Canvas
              camera={{ position: [0, 0.3, 6.5], fov: 38 }}
              dpr={[1, 2]}
              gl={{
                antialias: true,
                alpha: true,
                preserveDrawingBuffer: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.1,
              }}
              style={{ background: "transparent" }}
            >
              <Suspense
                fallback={
                  <mesh>
                    <boxGeometry args={[2.4, 3.2, 0.2]} />
                    <meshStandardMaterial color="#E8DDD0" />
                  </mesh>
                }
              >
                <Scene />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Book Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-7"
          >
            <div className="w-20 h-[3px] bg-gradient-to-r from-[#D4A853] to-transparent rounded-full"></div>

            <div className="space-y-5">
              <p className="text-[#1A1A1A]/75 font-roboto text-lg leading-relaxed">
                {book.description}
              </p>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#D4A853]/10">
                <p className="text-[#1A1A1A]/55 font-roboto text-base leading-relaxed italic">
                  "{book.description2}"
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {book.themes.map((theme, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-white/90 text-[#C8963E] text-xs font-roboto-slab font-bold tracking-wider uppercase border border-[#D4A853]/25 rounded-full shadow-sm cursor-default"
                >
                  {theme}
                </motion.span>
              ))}
            </div>

            {book.purchaseLinks && (
              <div className="pt-4">
                {book.purchaseLinks.map((link, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4A853] to-[#C8963E] text-white font-roboto-slab font-bold hover:from-[#E8C55A] hover:to-[#D4A853] transition-all duration-300 text-sm tracking-[0.15em] uppercase shadow-xl shadow-[#D4A853]/25 rounded-full"
                  >
                    Buy on {link.name}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
