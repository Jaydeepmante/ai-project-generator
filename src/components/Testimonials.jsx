/**
 * Testimonials.jsx — "What Students & Devs Are Saying" section.
 * 3 avatar-initial cards + stat counter + trust badges.
 */
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const sectionVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
    }),
};

const TESTIMONIALS = [
    {
        quote: "Helped me win my college hackathon in Nagpur! I generated a full stack breakdown in 20 seconds — the judges were impressed.",
        name: "Ajay M.",
        role: "Computer Engineering Student, Nagpur",
        initials: "AJ",
        avatarColor: "from-violet-500 to-indigo-600",
        stars: 5,
    },
    {
        quote: "Finally got a solid project idea for my portfolio that actually sounds professional. Thanks JRI AI — my LinkedIn project section has never looked better!",
        name: "Priya S.",
        role: "3rd Year IT Student",
        initials: "PS",
        avatarColor: "from-fuchsia-500 to-violet-600",
        stars: 5,
    },
    {
        quote: "Super fast blueprints, perfect for quick college assignments and mini-projects. It even gave me the tech stack I had no idea about!",
        name: "Rohan K.",
        role: "Final Year CS Student",
        initials: "RK",
        avatarColor: "from-indigo-500 to-blue-600",
        stars: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="relative py-24 px-6 bg-[#0a0a0f] overflow-hidden" id="testimonials">

            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-violet-700/10 blur-[130px]" />
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
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-5">
                        <Star size={11} className="text-amber-400" fill="#f59e0b" />
                        Real Student Reviews
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                        What{" "}
                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                            Students & Devs
                        </span>{" "}
                        Are Saying
                    </h2>
                    <p className="text-white/40 text-base max-w-lg mx-auto">
                        JRI AI was built for students and early builders. Here's what they think.
                    </p>
                </motion.div>

                {/* Testimonial cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={t.name}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            whileHover={{ scale: 1.025, y: -4 }}
                            transition={{ type: "spring", stiffness: 280, damping: 22 }}
                            className="relative rounded-2xl border border-violet-500/20 bg-gradient-to-br from-[#111120] to-[#0d0d18] p-6 shadow-xl hover:shadow-violet-500/15 hover:border-violet-500/35 hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Quote icon */}
                            <Quote size={20} className="text-violet-500/40 mb-4" />

                            {/* Stars */}
                            <div className="flex items-center gap-0.5 mb-3">
                                {[...Array(t.stars)].map((_, si) => (
                                    <Star key={si} size={12} className="text-amber-400" fill="#f59e0b" />
                                ))}
                            </div>

                            {/* Quote text */}
                            <p className="text-white/65 text-sm leading-relaxed mb-5">
                                "{t.quote}"
                            </p>

                            {/* Author row */}
                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                                {/* Avatar with initials */}
                                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold shadow-md flex-shrink-0`}>
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">{t.name}</p>
                                    <p className="text-[11px] text-white/35">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom trust row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    {/* Stat counter */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-medium">
                        <span className="text-violet-400 font-bold">500+</span>
                        ideas generated in beta
                    </div>

                    <div className="w-px h-4 bg-white/10 hidden sm:block" />

                    {/* Gemini badge */}
                    <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        Powered by Google Gemini
                    </div>

                    <div className="w-px h-4 bg-white/10 hidden sm:block" />

                    {/* India badge */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-medium">
                        🇮🇳 Built for Indian Students & Devs
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
