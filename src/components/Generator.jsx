/**
 * Generator.jsx — with Framer Motion 3D tilt on input card,
 * animated result card (scale + fade from below), staggered feature list.
 */
import { useState, useRef } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    useSpring,
    AnimatePresence,
} from "framer-motion";
import { Sparkles, Loader2, ArrowRight, Code2, Layers, Zap } from "lucide-react";

/* ─── Sample AI "responses" ─────────────────────────────── */
const sampleOutputs = [
    {
        title: "Full-Stack E-Commerce Platform",
        stack: ["Next.js 14", "Prisma ORM", "Stripe Payments", "PostgreSQL", "Tailwind CSS"],
        description:
            "A modern e-commerce platform with server-side rendering, real-time inventory management, and a seamless checkout experience powered by Stripe.",
        features: ["Product catalog with filters", "Cart & wishlist management", "Order tracking dashboard", "Admin analytics panel"],
    },
    {
        title: "AI-Powered SaaS Dashboard",
        stack: ["React", "FastAPI", "OpenAI API", "Redis Cache", "Docker"],
        description:
            "An intelligent SaaS dashboard that leverages AI to surface insights, automate reports, and predict user behaviour with 94% accuracy.",
        features: ["Natural language query interface", "Predictive analytics charts", "Role-based access control", "Webhook integrations"],
    },
    {
        title: "Real-Time Collaboration Tool",
        stack: ["SvelteKit", "Socket.io", "MongoDB", "AWS S3", "Cloudflare"],
        description:
            "A collaborative workspace where teams can co-edit documents, share files, and communicate in real-time with end-to-end encryption.",
        features: ["Live cursor presence", "Conflict-free document merging", "File versioning & history", "Video conferencing embed"],
    },
];

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/* ─── 3D tilt hook ─────────────────────────────────────── */
function useTilt(strength = 12) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [strength, -strength]), { stiffness: 200, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-strength, strength]), { stiffness: 200, damping: 20 });

    const handleMouseMove = (e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave };
}

/* ─── Main component ─────────────────────────────────── */
export default function Generator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const tilt = useTilt(6); // subtle tilt — 6°

    const handleGenerate = async () => {
        if (!input.trim()) { setError("Please enter a project idea first."); return; }
        setError("");
        setResult(null);
        setLoading(true);
        await new Promise((res) => setTimeout(res, 1800));
        const base = pick(sampleOutputs);
        setResult({ ...base, title: input.trim().length > 3 ? input.trim() : base.title });
        setLoading(false);
    };

    const handleKey = (e) => { if (e.key === "Enter" && !loading) handleGenerate(); };

    /* Stagger variants for result card rows */
    const cardContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
    };
    const cardRow = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section
            className="relative py-28 px-6 bg-[#0a0a0f] overflow-hidden"
            id="generator"
        >
            {/* Background decorations */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-violet-700/15 blur-[130px]" />
                <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[110px]" />
                <div className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[110px]" />
            </div>
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
                aria-hidden
            />

            {/* ── Section enter animation ────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-medium mb-6 shadow-lg shadow-fuchsia-500/10"
                >
                    <Sparkles size={12} className="animate-pulse" />
                    AI Project Generator
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4"
                >
                    Describe your idea,{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                        we'll architect it
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.22 }}
                    className="text-white/45 text-base sm:text-lg max-w-xl mb-12 leading-relaxed"
                >
                    Enter any project concept and our AI will generate a complete technical
                    blueprint — stack, features, and architecture — in seconds.
                </motion.p>

                {/* ── Input card with 3D tilt ────────────────── */}
                <motion.div
                    ref={tilt.ref}
                    onMouseMove={tilt.handleMouseMove}
                    onMouseLeave={tilt.handleMouseLeave}
                    style={{
                        rotateX: tilt.rotateX,
                        rotateY: tilt.rotateY,
                        perspective: 800,
                        transformStyle: "preserve-3d",
                    }}
                    whileHover={{ boxShadow: "0 0 50px rgba(139,92,246,0.25)" }}
                    transition={{ duration: 0.2 }}
                    className="w-full rounded-2xl"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="w-full flex flex-col sm:flex-row items-stretch gap-3 mb-4">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => { setInput(e.target.value); setError(""); }}
                                onKeyDown={handleKey}
                                placeholder="e.g. A social platform for book lovers with recommendations…"
                                className="w-full h-14 px-5 pr-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"
                            />
                        </div>
                        <motion.button
                            onClick={handleGenerate}
                            disabled={loading}
                            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(168,85,247,0.5)" }}
                            whileTap={{ scale: 0.96 }}
                            className="group flex items-center justify-center gap-2 h-14 px-7 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-xl shadow-violet-500/30 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300 whitespace-nowrap"
                        >
                            {loading ? (
                                <Loader2 size={18} className="animate-spin" />
                            ) : (
                                <>
                                    <Sparkles size={16} />
                                    Generate
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                                </>
                            )}
                        </motion.button>
                    </div>
                </motion.div>

                {/* Validation error */}
                <AnimatePresence>
                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            className="text-red-400/80 text-xs mb-4"
                        >
                            {error}
                        </motion.p>
                    )}
                </AnimatePresence>

                {/* Loading skeleton */}
                <AnimatePresence>
                    {loading && (
                        <motion.div
                            key="skeleton"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.35 }}
                            className="w-full mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-6 animate-pulse space-y-4"
                        >
                            <div className="h-5 w-2/5 rounded-lg bg-white/10" />
                            <div className="h-3 w-full rounded-lg bg-white/7" />
                            <div className="h-3 w-4/5 rounded-lg bg-white/7" />
                            <div className="flex gap-2 flex-wrap mt-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-6 w-20 rounded-full bg-white/8" />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── Result card — scale + fade from below ───── */}
                <AnimatePresence>
                    {result && !loading && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.93, y: 32 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 16 }}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full mt-6 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-[#111120] via-[#0f0f1c] to-[#0a0a14] shadow-2xl shadow-violet-900/30 overflow-hidden text-left"
                        >
                            {/* Card header */}
                            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                </div>
                                <div className="flex items-center gap-2 ml-2">
                                    <Sparkles size={13} className="text-violet-400" />
                                    <span className="text-xs text-white/40 font-medium">AI Generated Blueprint</span>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="ml-auto px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-[10px] font-semibold uppercase tracking-wide"
                                >
                                    Ready
                                </motion.div>
                            </div>

                            {/* Staggered card body */}
                            <motion.div
                                variants={cardContainer}
                                initial="hidden"
                                animate="visible"
                                className="p-6 space-y-6"
                            >
                                {/* Project title */}
                                <motion.div variants={cardRow}>
                                    <p className="text-[11px] uppercase tracking-widest text-white/30 font-medium mb-1">Project</p>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">{result.title}</h3>
                                </motion.div>

                                {/* Description */}
                                <motion.div variants={cardRow}>
                                    <p className="text-[11px] uppercase tracking-widest text-white/30 font-medium mb-2">Overview</p>
                                    <p className="text-white/65 text-sm leading-relaxed">{result.description}</p>
                                </motion.div>

                                {/* Tech stack */}
                                <motion.div variants={cardRow}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Layers size={13} className="text-fuchsia-400" />
                                        <p className="text-[11px] uppercase tracking-widest text-white/30 font-medium">Recommended Stack</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {result.stack.map((tech, i) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.3 + i * 0.07 }}
                                                className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 border border-violet-500/20 text-violet-300"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Features */}
                                <motion.div variants={cardRow}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Code2 size={13} className="text-indigo-400" />
                                        <p className="text-[11px] uppercase tracking-widest text-white/30 font-medium">Key Features</p>
                                    </div>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {result.features.map((feat, i) => (
                                            <motion.li
                                                key={feat}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.45 + i * 0.08 }}
                                                className="flex items-start gap-2.5 text-sm text-white/60"
                                            >
                                                <Zap size={13} className="text-fuchsia-400 flex-shrink-0 mt-0.5" />
                                                {feat}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* CTA row */}
                                <motion.div
                                    variants={cardRow}
                                    className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-white/5"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(139,92,246,0.45)" }}
                                        whileTap={{ scale: 0.97 }}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/25 transition-colors duration-300"
                                    >
                                        <Sparkles size={14} />
                                        Start Building
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => { setResult(null); setInput(""); }}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-white/60 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200"
                                    >
                                        Try Another Idea
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
