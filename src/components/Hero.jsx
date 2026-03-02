/**
 * Hero.jsx — Simplified hero for the new landing page structure.
 * Headline, subheadline, trust badges, glow BG.
 * The Generator input sits directly below this as the primary CTA.
 */
import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    }),
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function Hero() {
    return (
        <section className="relative min-h-[75vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f] px-6 pt-28 pb-0">

            {/* ── Background glows ─────────────────────────────── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-violet-700/20 blur-[130px]" />
                <div className="absolute top-1/2 -left-40 w-[450px] h-[450px] rounded-full bg-indigo-600/12 blur-[100px]" />
                <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] rounded-full bg-fuchsia-600/10 blur-[100px]" />

                {/* Floating orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-600/8 blur-[80px]"
                    animate={{ y: [0, -20, 0], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-fuchsia-600/8 blur-[70px]"
                    animate={{ y: [0, -16, 0], opacity: [0.12, 0.22, 0.12] }}
                    transition={{ duration: 11, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Grid overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
                aria-hidden
            />

            {/* ── Content ──────────────────────────────────────── */}
            <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center"
            >
                {/* Badge */}
                <motion.div
                    variants={fadeUp}
                    custom={0}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-7 shadow-lg shadow-violet-500/10"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                    JRI AI 2.0 — Powered by Google Gemini
                    <Sparkles size={11} />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={fadeUp}
                    custom={0.1}
                    className="text-4xl sm:text-5xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.08] mb-6"
                >
                    Turn Any Idea Into a{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                        Full Project Blueprint
                    </span>
                    {" "}in Seconds
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    variants={fadeUp}
                    custom={0.2}
                    className="text-base sm:text-lg lg:text-xl text-white/50 max-w-2xl leading-relaxed mb-9"
                >
                    Describe any concept → get tech stack, features, architecture, steps{" "}
                    &amp; starter code — perfect for{" "}
                    <span className="text-violet-300/80">students</span>,{" "}
                    <span className="text-fuchsia-300/80">hackathons</span> &amp;{" "}
                    <span className="text-indigo-300/80">portfolios</span>.
                </motion.p>

                {/* Trust badges row */}
                <motion.div
                    variants={fadeUp}
                    custom={0.3}
                    className="flex flex-wrap items-center justify-center gap-4 mb-2"
                >
                    {/* Gemini badge */}
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-medium">
                        <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-blue-400" />
                            <span className="w-2 h-2 rounded-full bg-red-400" />
                            <span className="w-2 h-2 rounded-full bg-yellow-400" />
                            <span className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                        Powered by Google Gemini
                    </div>

                    <div className="w-px h-4 bg-white/10 hidden sm:block" />

                    {/* User count badge */}
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-medium">
                        <Zap size={11} className="text-violet-400" />
                        Used by 500+ students &amp; devs
                    </div>

                    <div className="w-px h-4 bg-white/10 hidden sm:block" />

                    {/* Free badge */}
                    <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Free — No Card Needed
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
