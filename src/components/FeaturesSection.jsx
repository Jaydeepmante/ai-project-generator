/**
 * FeaturesSection.jsx — "Why Innovexa AI Stands Out" section.
 * 6 feature cards in a responsive grid. Uses lucide-react icons only.
 */
import { motion } from "framer-motion";
import {
    Mic2,
    RefreshCw,
    TrendingUp,
    Github,
    FolderOpen,
    Trophy,
} from "lucide-react";

const sectionVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
    }),
};

const FEATURES = [
    {
        icon: Mic2,
        title: "Multimodal Input",
        description: "Type, speak, or sketch your idea. Text, voice, and image input supported (voice & sketch coming soon).",
        gradient: "from-violet-600/15 to-indigo-600/10",
        border: "border-violet-500/25",
        iconColor: "text-violet-400",
        iconBg: "bg-violet-500/10",
        glow: "hover:shadow-violet-500/15",
        badge: null,
    },
    {
        icon: RefreshCw,
        title: "Auto-Refine Blueprint",
        description: "Not happy with the result? Click 'Refine' and Innovexa AI instantly improves the output with better context.",
        gradient: "from-fuchsia-600/15 to-violet-600/10",
        border: "border-fuchsia-500/25",
        iconColor: "text-fuchsia-400",
        iconBg: "bg-fuchsia-500/10",
        glow: "hover:shadow-fuchsia-500/15",
        badge: null,
    },
    {
        icon: TrendingUp,
        title: "Job-Market Fit Score",
        description: "Every blueprint gets an employability boost score so you know which skills make you hireable.",
        gradient: "from-indigo-600/15 to-blue-600/10",
        border: "border-indigo-500/25",
        iconColor: "text-indigo-400",
        iconBg: "bg-indigo-500/10",
        glow: "hover:shadow-indigo-500/15",
        badge: "85% avg boost",
        badgeColor: "bg-emerald-500/15 border-emerald-500/25 text-emerald-400",
        progress: 85,
    },
    {
        icon: Github,
        title: "One-Click Export",
        description: "Export your blueprint as a markdown file, copy to clipboard, or push a starter repo directly to GitHub or Replit.",
        gradient: "from-violet-600/15 to-fuchsia-600/10",
        border: "border-violet-500/25",
        iconColor: "text-violet-400",
        iconBg: "bg-violet-500/10",
        glow: "hover:shadow-violet-500/15",
        badge: "Coming soon",
        badgeColor: "bg-white/5 border-white/10 text-white/35",
    },
    {
        icon: FolderOpen,
        title: "Saved Projects & Dashboard",
        description: "Sign up free and organise all your generated blueprints in a personal dashboard. Never lose an idea again.",
        gradient: "from-purple-600/15 to-violet-600/10",
        border: "border-purple-500/25",
        iconColor: "text-purple-400",
        iconBg: "bg-purple-500/10",
        glow: "hover:shadow-purple-500/15",
        badge: "Coming soon",
        badgeColor: "bg-white/5 border-white/10 text-white/35",
    },
    {
        icon: Trophy,
        title: "Gamified Badges",
        description: "Earn XP and unlock badges for every blueprint you generate. Share achievements on LinkedIn to stand out.",
        gradient: "from-amber-600/12 to-fuchsia-600/10",
        border: "border-amber-500/20",
        iconColor: "text-amber-400",
        iconBg: "bg-amber-500/10",
        glow: "hover:shadow-amber-500/10",
        badge: "Coming soon",
        badgeColor: "bg-white/5 border-white/10 text-white/35",
    },
];

export default function FeaturesSection() {
    return (
        <section className="relative py-24 px-6 bg-[#0a0a0f] overflow-hidden" id="features">

            {/* Side glows */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute top-1/3 -left-40 w-[500px] h-[400px] rounded-full bg-violet-700/8 blur-[110px]" />
                <div className="absolute top-1/3 -right-40 w-[500px] h-[400px] rounded-full bg-indigo-700/8 blur-[110px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Section header */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-medium mb-5">
                        <Trophy size={11} className="text-amber-400" />
                        Feature Set
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                        Why{" "}
                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                            Innovexa AI
                        </span>{" "}
                        Stands Out
                    </h2>
                    <p className="text-white/40 text-base max-w-lg mx-auto">
                        Purpose-built for students & developers — not just another AI wrapper.
                    </p>
                </motion.div>

                {/* 6-card grid: 1 col mobile → 2 col md → 3 col lg */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {FEATURES.map((feat, i) => {
                        const Icon = feat.icon;
                        return (
                            <motion.div
                                key={feat.title}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                whileHover={{ scale: 1.025, y: -4 }}
                                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                                className={`relative rounded-2xl border ${feat.border} bg-gradient-to-br ${feat.gradient} p-6 shadow-xl hover:shadow-2xl ${feat.glow} transition-all duration-300 overflow-hidden`}
                            >
                                {/* Corner shimmer */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full" />

                                {/* Icon */}
                                <div className={`w-11 h-11 rounded-xl ${feat.iconBg} border border-white/10 flex items-center justify-center mb-4 shadow-md`}>
                                    <Icon size={20} className={feat.iconColor} />
                                </div>

                                {/* Title + badge */}
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="text-base font-bold text-white leading-snug">{feat.title}</h3>
                                    {feat.badge && (
                                        <span className={`flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${feat.badgeColor}`}>
                                            {feat.badge}
                                        </span>
                                    )}
                                </div>

                                <p className="text-sm text-white/45 leading-relaxed mb-4">{feat.description}</p>

                                {/* Progress bar for "Job-Market Fit Score" card */}
                                {feat.progress && (
                                    <div className="mt-auto">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-[10px] text-white/30">Employability boost</span>
                                            <span className="text-[10px] text-emerald-400 font-semibold">{feat.progress}%</span>
                                        </div>
                                        <div className="w-full h-1.5 rounded-full bg-white/8 overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400"
                                                initial={{ width: "0%" }}
                                                whileInView={{ width: `${feat.progress}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
                                            />
                                        </div>
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
