/**
 * HowItWorks.jsx — "From Idea to Blueprint in 3 Steps" section.
 * 3 horizontal step cards with purple icons + subtle animations.
 */
import { motion } from "framer-motion";
import { PencilLine, Cpu, Download, ArrowRight } from "lucide-react";

const sectionVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const stepVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
    }),
};

const STEPS = [
    {
        icon: PencilLine,
        number: "01",
        title: "Describe Your Idea",
        description:
            "Type a single sentence — a startup concept, student project, or hackathon idea. No technical knowledge required.",
        color: "from-violet-500/20 to-indigo-500/10",
        border: "border-violet-500/25",
        iconColor: "text-violet-400",
        iconBg: "bg-violet-500/10",
        glow: "hover:shadow-violet-500/15",
    },
    {
        icon: Cpu,
        number: "02",
        title: "AI Architects It",
        description:
            "JRI AI generates the full tech stack, features list, system architecture, step-by-step build plan, and a starter code outline — in seconds.",
        color: "from-fuchsia-500/20 to-violet-500/10",
        border: "border-fuchsia-500/25",
        iconColor: "text-fuchsia-400",
        iconBg: "bg-fuchsia-500/10",
        glow: "hover:shadow-fuchsia-500/15",
        featured: true,
    },
    {
        icon: Download,
        number: "03",
        title: "Export & Build",
        description:
            "Copy the blueprint, export to markdown, or push a starter repo to GitHub. Firebase save + GitHub integration coming soon.",
        color: "from-indigo-500/20 to-fuchsia-500/10",
        border: "border-indigo-500/25",
        iconColor: "text-indigo-400",
        iconBg: "bg-indigo-500/10",
        glow: "hover:shadow-indigo-500/15",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative py-24 px-6 bg-[#0a0a0f] overflow-hidden">

            {/* Subtle bottom-centre glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-indigo-700/10 blur-[110px]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">

                {/* Section header */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        Simple Process
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                        From Idea to Blueprint{" "}
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                            in 3 Steps
                        </span>
                    </h2>
                    <p className="text-white/40 text-base max-w-lg mx-auto">
                        No setup. No account needed. Just describe — and JRI AI does the rest.
                    </p>
                </motion.div>

                {/* Steps — horizontal desktop, stacked mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">

                    {/* Connector line — desktop only */}
                    <div className="hidden md:block absolute top-[3.25rem] left-[calc(33%+1rem)] right-[calc(33%+1rem)] h-px bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-indigo-500/30 z-0" />

                    {STEPS.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.number}
                                custom={i}
                                variants={stepVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                whileHover={{ scale: 1.03, y: -3 }}
                                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                                className={`relative z-10 rounded-2xl border ${step.border} bg-gradient-to-br ${step.color} p-6 shadow-xl hover:shadow-2xl ${step.glow} transition-shadow duration-300 ${step.featured ? "ring-1 ring-fuchsia-500/20" : ""}`}
                            >
                                {/* Step number + icon row */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className={`w-11 h-11 rounded-xl ${step.iconBg} border border-white/10 flex items-center justify-center shadow-lg`}>
                                        <Icon size={20} className={step.iconColor} />
                                    </div>
                                    <span className="text-3xl font-black text-white/8 select-none">{step.number}</span>
                                </div>

                                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-white/45 leading-relaxed">{step.description}</p>

                                {/* Arrow for non-last steps — mobile only */}
                                {i < STEPS.length - 1 && (
                                    <div className="flex justify-center mt-4 md:hidden">
                                        <ArrowRight size={16} className="text-white/20 rotate-90" />
                                    </div>
                                )}

                                {/* "Coming soon" badge for step 3 */}
                                {i === 2 && (
                                    <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/30 font-medium">
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        GitHub export coming soon
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
