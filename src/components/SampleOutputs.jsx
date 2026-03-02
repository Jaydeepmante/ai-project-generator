/**
 * SampleOutputs.jsx — "See What JRI AI Builds For You" section.
 * 3 static example project cards with tech stack + features.
 */
import { motion } from "framer-motion";
import { Layers, Zap, ExternalLink } from "lucide-react";

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
};

const SAMPLE_PROJECTS = [
    {
        title: "Book Lovers Social App",
        emoji: "📚",
        gradient: "from-violet-600/15 via-purple-600/10 to-indigo-600/15",
        border: "border-violet-500/25",
        glow: "group-hover:shadow-violet-500/20",
        stack: ["React", "Firebase", "Tailwind CSS"],
        features: ["AI book recommendations", "User profiles & reading lists", "Community feed & reviews", "Genre-based discovery"],
        arch: "SPA → Firebase Auth → Firestore → Gemini API",
    },
    {
        title: "Farmers Marketplace App",
        emoji: "🌾",
        gradient: "from-fuchsia-600/15 via-violet-600/10 to-purple-600/15",
        border: "border-fuchsia-500/25",
        glow: "group-hover:shadow-fuchsia-500/20",
        stack: ["Next.js", "Node.js", "MongoDB"],
        features: ["UPI/Razorpay payments", "Crop listings with images", "Buyer–seller live chat", "Price trend analytics"],
        arch: "Next.js SSR → Express API → MongoDB Atlas → Cloudinary",
    },
    {
        title: "College Notes AI Chatbot",
        emoji: "🎓",
        gradient: "from-indigo-600/15 via-blue-600/10 to-violet-600/15",
        border: "border-indigo-500/25",
        glow: "group-hover:shadow-indigo-500/20",
        stack: ["Python", "Streamlit", "Gemini API"],
        features: ["Upload PDF/DOCX notes", "AI summarisation & Q&A", "Flashcard generator", "Subject-wise chatrooms"],
        arch: "Streamlit UI → LangChain → Gemini Pro → ChromaDB",
    },
];

export default function SampleOutputs() {
    return (
        <section className="relative py-24 px-6 bg-[#0a0a0f] overflow-hidden">

            {/* Subtle bg glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-700/10 blur-[120px]" />
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
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-medium mb-5 shadow-lg">
                        <Zap size={11} className="text-fuchsia-400" />
                        Real Blueprint Samples
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                        See What{" "}
                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                            JRI AI
                        </span>{" "}
                        Builds For You
                    </h2>
                    <p className="text-white/40 text-base max-w-xl mx-auto">
                        One sentence in → complete project architecture out.
                        Here are three real examples instantly generated.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {SAMPLE_PROJECTS.map((proj, i) => (
                        <motion.div
                            key={proj.title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            whileHover={{ scale: 1.025, y: -4 }}
                            transition={{ type: "spring", stiffness: 280, damping: 22 }}
                            className={`group relative rounded-2xl border ${proj.border} bg-gradient-to-br ${proj.gradient} p-6 shadow-xl ${proj.glow} hover:shadow-2xl transition-shadow duration-300 overflow-hidden`}
                        >
                            {/* Corner shine */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full" />

                            {/* Emoji + title */}
                            <div className="flex items-start gap-3 mb-4">
                                <span className="text-2xl">{proj.emoji}</span>
                                <div>
                                    <h3 className="text-base font-bold text-white leading-snug">{proj.title}</h3>
                                    {/* Architecture line */}
                                    <p className="text-[10px] font-mono text-white/25 mt-1 leading-relaxed">{proj.arch}</p>
                                </div>
                            </div>

                            {/* Tech stack pills */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {proj.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/7 border border-white/10 text-white/60"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="border-t border-white/6 mb-4" />

                            {/* Feature list */}
                            <div className="flex items-center gap-1.5 mb-2">
                                <Layers size={11} className="text-fuchsia-400" />
                                <p className="text-[10px] uppercase tracking-widest text-white/25 font-semibold">Features</p>
                            </div>
                            <ul className="space-y-1.5">
                                {proj.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2 text-xs text-white/55">
                                        <Zap size={10} className="text-violet-400 flex-shrink-0 mt-0.5" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* Hover CTA */}
                            <div className="mt-5 flex items-center gap-1 text-[11px] font-medium text-white/25 group-hover:text-violet-400 transition-colors duration-200">
                                <ExternalLink size={11} />
                                Generate this full blueprint
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
