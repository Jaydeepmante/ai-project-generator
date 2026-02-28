import { ArrowRight, PlayCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    }),
};

const stats = [
    { value: "50K+", label: "active users" },
    { value: "99.9%", label: "uptime SLA" },
    { value: "4.9★", label: "avg rating" },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f] px-6 pt-24 pb-16">
            {/* Background glow blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-violet-700/20 blur-[120px]" />
                <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[100px]" />
                <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[100px]" />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
                aria-hidden
            />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
                {/* Pill badge */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-8 shadow-lg shadow-violet-500/10"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                    Introducing LumiAI 2.0 — now with real-time insights
                    <ArrowRight size={12} />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.1}
                    className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
                >
                    Build faster with{" "}
                    <span className="relative">
                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                            AI-powered
                        </span>
                    </span>{" "}
                    workflows
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                    className="text-base sm:text-lg lg:text-xl text-white/50 max-w-2xl leading-relaxed mb-10"
                >
                    LumiAI automates your repetitive tasks, surfaces intelligent insights,
                    and integrates with the tools you already love — so your team can
                    focus on what actually matters.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-16"
                >
                    <a
                        href="#signup"
                        className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300"
                    >
                        Start for free
                        <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform duration-200"
                        />
                    </a>
                    <a
                        href="#demo"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200"
                    >
                        <PlayCircle size={18} className="text-violet-400" />
                        Watch demo
                    </a>
                </motion.div>

                {/* Social proof */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.4}
                    className="flex flex-wrap justify-center items-center gap-6 mb-16"
                >
                    {/* Avatars */}
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2.5">
                            {["bg-violet-500", "bg-indigo-500", "bg-fuchsia-500", "bg-blue-500", "bg-emerald-500"].map(
                                (color, i) => (
                                    <div
                                        key={i}
                                        className={`w-8 h-8 rounded-full ${color} border-2 border-[#0a0a0f] flex items-center justify-center text-white text-xs font-bold`}
                                    >
                                        {["J", "A", "M", "S", "K"][i]}
                                    </div>
                                )
                            )}
                        </div>
                        <div className="text-left">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} fill="#f59e0b" className="text-amber-400" />
                                ))}
                            </div>
                            <p className="text-xs text-white/40 mt-0.5">Loved by 50,000+ teams</p>
                        </div>
                    </div>

                    <div className="w-px h-8 bg-white/10 hidden sm:block" />

                    {/* Stats */}
                    <div className="flex items-center gap-6">
                        {stats.map(({ value, label }) => (
                            <div key={label} className="text-center">
                                <p className="text-lg font-bold text-white">{value}</p>
                                <p className="text-xs text-white/40">{label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Hero screenshot / dashboard mockup */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.5}
                    className="relative w-full max-w-5xl"
                >
                    {/* Glow behind card */}
                    <div className="absolute inset-0 -bottom-10 rounded-2xl bg-gradient-to-b from-violet-600/20 to-indigo-600/5 blur-2xl scale-95" />

                    <div className="relative rounded-2xl border border-white/10 bg-[#111118] shadow-2xl shadow-black/60 overflow-hidden">
                        {/* Fake browser bar */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            </div>
                            <div className="flex-1 mx-4 h-6 rounded-md bg-white/5 flex items-center px-3">
                                <span className="text-xs text-white/20">app.lumiai.io/dashboard</span>
                            </div>
                        </div>

                        {/* Dashboard UI mockup */}
                        <div className="grid grid-cols-12 gap-0 h-64 sm:h-80">
                            {/* Left sidebar */}
                            <div className="col-span-2 border-r border-white/5 p-3 flex flex-col gap-3">
                                <div className="w-full h-3 rounded bg-violet-500/30" />
                                {["bg-white/5", "bg-white/5", "bg-violet-500/20", "bg-white/5", "bg-white/5"].map(
                                    (bg, i) => (
                                        <div key={i} className={`w-full h-8 rounded-lg ${bg}`} />
                                    )
                                )}
                            </div>

                            {/* Main content */}
                            <div className="col-span-10 p-5 flex flex-col gap-4">
                                {/* Top row */}
                                <div className="flex gap-3">
                                    {[
                                        { label: "Total Revenue", w: "col-span-4", h: "h-16", color: "from-violet-500/20 to-indigo-500/10" },
                                        { label: "Active Users", w: "col-span-4", h: "h-16", color: "from-indigo-500/20 to-fuchsia-500/10" },
                                        { label: "Conversion", w: "col-span-4", h: "h-16", color: "from-fuchsia-500/20 to-violet-500/10" },
                                    ].map(({ label, color }) => (
                                        <div
                                            key={label}
                                            className={`flex-1 h-16 rounded-xl bg-gradient-to-br ${color} border border-white/5 flex flex-col justify-between p-3`}
                                        >
                                            <div className="w-12 h-2 rounded bg-white/20" />
                                            <div className="w-16 h-4 rounded bg-white/30" />
                                        </div>
                                    ))}
                                </div>

                                {/* Chart row */}
                                <div className="flex gap-3 flex-1">
                                    <div className="flex-[2] rounded-xl border border-white/5 bg-white/[0.02] p-3 flex flex-col gap-2">
                                        <div className="w-20 h-2 rounded bg-white/15" />
                                        <div className="flex-1 flex items-end gap-1">
                                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 rounded-sm bg-gradient-to-t from-violet-500/60 to-violet-500/20"
                                                    style={{ height: `${h}%` }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.02] p-3 flex flex-col gap-2">
                                        <div className="w-14 h-2 rounded bg-white/15" />
                                        <div className="flex-1 flex flex-col gap-2 justify-center">
                                            {[70, 45, 85, 60].map((w, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <div className="w-4 h-4 rounded bg-white/10 flex-shrink-0" />
                                                    <div
                                                        className="h-2 rounded bg-white/10"
                                                        style={{ width: `${w}%` }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gradient fade at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#111118] to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
