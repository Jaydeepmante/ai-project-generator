/**
 * FloatingOrb.jsx — React Three Fiber floating AI orb.
 *
 * • Central glowing sphere with purple emissive material
 * • Gentle Float bob + slow self-rotation via useFrame
 * • Bloom post-processing glow (EffectComposer)
 * • Framer Motion parallax: orb moves slower than foreground on scroll
 * • Responsive: smaller on mobile via viewport-aware scale
 * • Canvas is absolute inset-0, pointer-events-none, z-0
 */

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Inner sphere mesh ─────────────────────────────────────── */
function OrbMesh() {
    const outerRef = useRef();
    const innerRef = useRef();
    const { viewport } = useThree();

    /* Scale orb relative to viewport width — smaller on narrow screens */
    const scale = Math.min(1, viewport.width / 8);

    useFrame((state) => {
        const t = state.clock.elapsedTime;

        /* Slow y-axis rotation */
        if (outerRef.current) {
            outerRef.current.rotation.y += 0.003;
            /* Subtle tilt wobble */
            outerRef.current.rotation.x = Math.sin(t * 0.18) * 0.08;
        }

        /* Inner shell counter-rotates slightly for energy ring feel */
        if (innerRef.current) {
            innerRef.current.rotation.y -= 0.001;
            innerRef.current.rotation.z = Math.cos(t * 0.22) * 0.05;
        }
    });

    return (
        /* Float wraps everything in a gentle bob animation */
        <Float
            speed={1.4}          /* bob cycle speed */
            rotationIntensity={0.25} /* subtle tilt during float */
            floatIntensity={0.9} /* vertical amplitude */
        >
            {/* ── Core sphere — emissive purple ── */}
            <mesh ref={outerRef} scale={scale}>
                <sphereGeometry args={[1.35, 64, 64]} />
                <meshStandardMaterial
                    color="#c084fc"        /* base purple */
                    emissive="#a855f7"     /* inner glow colour */
                    emissiveIntensity={0.9}
                    roughness={0.12}
                    metalness={0.45}
                />
            </mesh>

            {/* ── Outer translucent shell — energy field ── */}
            <mesh ref={innerRef} scale={scale}>
                <sphereGeometry args={[1.55, 32, 32]} />
                <meshStandardMaterial
                    color="#7c3aed"
                    emissive="#6d28d9"
                    emissiveIntensity={0.25}
                    transparent
                    opacity={0.12}
                    roughness={1}
                    depthWrite={false}
                />
            </mesh>

            {/* ── Outermost corona glow layer ── */}
            <mesh scale={scale}>
                <sphereGeometry args={[1.85, 24, 24]} />
                <meshStandardMaterial
                    color="#a855f7"
                    emissive="#a855f7"
                    emissiveIntensity={0.08}
                    transparent
                    opacity={0.06}
                    roughness={1}
                    depthWrite={false}
                />
            </mesh>
        </Float>
    );
}

/* ─── Scene lights ──────────────────────────────────────────── */
function Lights() {
    return (
        <>
            {/* Soft ambient fill */}
            <ambientLight intensity={0.35} />
            {/* Primary purple key light — front-top */}
            <pointLight position={[4, 5, 5]} intensity={2.2} color="#c084fc" />
            {/* Indigo fill — back-left */}
            <pointLight position={[-5, -4, 3]} intensity={1.0} color="#6366f1" />
            {/* Faint warm rim — right */}
            <pointLight position={[6, -2, -3]} intensity={0.5} color="#e879f9" />
        </>
    );
}

/* ─── FloatingOrb — exported component ─────────────────────── */
export default function FloatingOrb() {
    /* Framer Motion scroll-parallax: orb moves at ~30% speed of page scroll */
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -90]); /* px offset */

    return (
        /**
         * Wrapper div:
         *  • absolute inset-0 → fills the hero section
         *  • pointer-events-none → never blocks clicks/input
         *  • z-0 → behind all hero text and UI
         *  • motion.div y-parallax → slower scroll than foreground
         */
        <motion.div
            style={{ y }}
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden
        >
            <Suspense fallback={null}>
                <Canvas
                    camera={{ position: [0, 0, 5.5], fov: 42 }}
                    /* alpha: transparent background — CSS gradient shows through */
                    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                    style={{
                        width: "100%",
                        height: "100%",
                        background: "transparent",
                    }}
                    /* Pixel ratio cap — performance guard on high-DPI screens */
                    dpr={[1, 1.5]}
                >
                    <Lights />
                    <OrbMesh />

                    {/* Post-processing: Bloom makes the emissive material glow */}
                    <EffectComposer>
                        <Bloom
                            luminanceThreshold={0.18} /* only bright emissive areas bloom */
                            luminanceSmoothing={0.9}
                            intensity={1.6}           /* glow strength */
                            radius={0.75}             /* spread radius */
                        />
                    </EffectComposer>
                </Canvas>
            </Suspense>
        </motion.div>
    );
}
