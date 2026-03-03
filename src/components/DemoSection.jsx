/**
 * DemoSection.jsx — "Watch Innovexa AI in Action" section.
 * Static before/after placeholder showing input → output flow.
 * Real video embed can replace this later.
 */
import { motion } from "framer-motion";
import { Play, Sparkles, ArrowRight, Layers, Zap, Code2 } from "lucide-react";

const sectionVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function DemoSection() {
    return (
        <section className="relative py-24 px-6 bg-[#0a0a0f] overflow-hidden" id="demo">

            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-violet-700/10 blur-[130px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">

                {/* Section header */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-5">
                        <Play size={11} className="text-violet-400" fill="currentColor" />
                        See It In Action
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                        Watch{" "}
                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                            Innovexa AI
                        </span>{" "}
                        in Action
                    </h2>
                    <p className="text-white/40 text-base max-w-lg mx-auto">
                        One sentence to a full project blueprint. Here's exactly what you'll get.
                    </p>
                </motion.div>

                {/* Before → After mockup card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97, y: 24 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-[#111120] to-[#0d0d18] shadow-2xl shadow-violet-900/25 overflow-hidden"
                >
                    {/* Fake browser bar */}
                    <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5 bg-white/[0.02]">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/60" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                            <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        </div>
                        <div className="flex-1 mx-4 h-6 rounded-md bg-white/5 flex items-center px-3">
                            <span className="text-xs text-white/20">app.innovexa.ai — generator</span>
                        </div>
                        <span className="text-[10px] text-violet-400/60 font-medium hidden sm:block">LIVE PREVIEW</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">

                        {/* LEFT — Input side */}
                        <div className="p-6 flex flex-col gap-4">
                            <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold">Your Idea</p>
                            <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/70 font-mono leading-relaxed">
                                "A marketplace app for college students to buy and sell used books, with UPI payments and a chat system."
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(139,92,246,0.4)" }}
                                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold shadow-lg cursor-pointer"
                            >
                                <Sparkles size={15} />
                                Generate Blueprint →
                            </motion.div>
                            <div className="flex items-center gap-2 text-[11px] text-white/25">
                                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                                AI processing… ~2 seconds
                            </div>
                        </div>

                        {/* RIGHT — Output side */}
                        <div className="p-6 flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold">Innovexa AI Blueprint</p>
                                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-[10px] font-semibold">Ready</span>
                            </div>

                            {/* Project name */}
                            <p className="text-base font-bold text-white">College Book Marketplace</p>

                            {/* Stack pills */}
                            <div className="flex flex-wrap gap-1.5">
                                {["React", "Node.js", "MongoDB", "Socket.io", "Razorpay"].map(t => (
                                    <span key={t} className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-violet-500/10 border border-violet-500/20 text-violet-300">{t}</span>
                                ))}
                            </div>

                            {/* Feature list */}
                            <div>
                                <div className="flex items-center gap-1.5 mb-2">
                                    <Layers size={11} className="text-fuchsia-400" />
                                    <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold">Key Features</p>
                                </div>
                                <ul className="space-y-1.5">
                                    {["Book listing with photos & pricing", "UPI / Razorpay payment integration", "Buyer–seller real-time chat", "Bookmarking & watchlist"].map(f => (
                                        <li key={f} className="flex items-start gap-2 text-xs text-white/55">
                                            <Zap size={10} className="text-violet-400 flex-shrink-0 mt-0.5" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Arch line */}
                            <div className="flex items-center gap-1.5">
                                <Code2 size={11} className="text-indigo-400" />
                                <p className="text-[10px] font-mono text-white/20 leading-relaxed">React → Express API → MongoDB Atlas → Cloudinary</p>
                            </div>
                        </div>
                    </div>

                    {/* Video placeholder strip at bottom */}
                    <div className="border-t border-white/5 px-6 py-4 bg-white/[0.015] flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                                <Play size={14} className="text-violet-400 ml-0.5" fill="currentColor" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-white/60">Full walkthrough video</p>
                                <p className="text-[10px] text-white/25">Short demo video coming soon — see how easy it is to generate a full project blueprint!</p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] text-white/30 font-medium whitespace-nowrap">
                            Coming soon
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
