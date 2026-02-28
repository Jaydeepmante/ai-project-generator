import { useState } from "react";
import { Sparkles, Loader2, ArrowRight, Code2, Layers, Zap } from "lucide-react";

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

export default function Generator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleGenerate = async () => {
        if (!input.trim()) {
            setError("Please enter a project idea first.");
            return;
        }
        setError("");
        setResult(null);
        setLoading(true);

        // Simulate AI generation delay
        await new Promise((res) => setTimeout(res, 1800));

        const base = pick(sampleOutputs);
        setResult({ ...base, title: input.trim().length > 3 ? input.trim() : base.title });
        setLoading(false);
    };

    const handleKey = (e) => {
        if (e.key === "Enter" && !loading) handleGenerate();
    };

    return (
        <section className="relative py-28 px-6 bg-[#0a0a0f] overflow-hidden" id="generator">
            {/* Background decorations */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-violet-700/15 blur-[130px]" />
                <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-fuchsia-600/10 blur-[110px]" />
                <div className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[110px]" />
            </div>

            {/* Subtle grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
                aria-hidden
            />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-medium mb-6 shadow-lg shadow-fuchsia-500/10">
                    <Sparkles size={12} className="animate-pulse" />
                    AI Project Generator
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
                    Describe your idea,{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                        we'll architect it
                    </span>
                </h2>
                <p className="text-white/45 text-base sm:text-lg max-w-xl mb-12 leading-relaxed">
                    Enter any project concept and our AI will generate a complete technical blueprint — stack, features, and architecture — in seconds.
                </p>

                {/* Input area */}
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
                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className="group flex items-center justify-center gap-2 h-14 px-7 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap"
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
                    </button>
                </div>

                {/* Validation error */}
                {error && (
                    <p className="text-red-400/80 text-xs mb-4">{error}</p>
                )}

                {/* Loading skeleton */}
                {loading && (
                    <div className="w-full mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-6 animate-pulse space-y-4">
                        <div className="h-5 w-2/5 rounded-lg bg-white/10" />
                        <div className="h-3 w-full rounded-lg bg-white/7" />
                        <div className="h-3 w-4/5 rounded-lg bg-white/7" />
                        <div className="flex gap-2 flex-wrap mt-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-6 w-20 rounded-full bg-white/8" />
                            ))}
                        </div>
                    </div>
                )}

                {/* Result card */}
                {result && !loading && (
                    <div className="w-full mt-6 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-[#111120] via-[#0f0f1c] to-[#0a0a14] shadow-2xl shadow-violet-900/30 overflow-hidden text-left">
                        {/* Card header bar */}
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
                            <div className="ml-auto px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-[10px] font-semibold uppercase tracking-wide">
                                Ready
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Project title */}
                            <div>
                                <p className="text-[11px] uppercase tracking-widest text-white/30 font-medium mb-1">Project</p>
                                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">{result.title}</h3>
                            </div>

                            {/* Description */}
                            <div>
                                <p className="text-[11px] uppercase tracking-widest text-white/30 font-medium mb-2">Overview</p>
                                <p className="text-white/65 text-sm leading-relaxed">{result.description}</p>
                            </div>

                            {/* Tech stack */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Layers size={13} className="text-fuchsia-400" />
                                    <p className="text-[11px] uppercase tracking-widest text-white/30 font-medium">Recommended Stack</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {result.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 border border-violet-500/20 text-violet-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Code2 size={13} className="text-indigo-400" />
                                    <p className="text-[11px] uppercase tracking-widest text-white/30 font-medium">Key Features</p>
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {result.features.map((feat) => (
                                        <li key={feat} className="flex items-start gap-2.5 text-sm text-white/60">
                                            <Zap size={13} className="text-fuchsia-400 flex-shrink-0 mt-0.5" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA row */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-white/5">
                                <button className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300">
                                    <Sparkles size={14} />
                                    Start Building
                                </button>
                                <button
                                    onClick={() => { setResult(null); setInput(""); }}
                                    className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-white/60 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200"
                                >
                                    Try Another Idea
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
