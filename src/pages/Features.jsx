import { motion } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import FeaturesSection from "../components/FeaturesSection";
import { Link } from "react-router-dom";

export default function Features() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-20">
                {/* Features Hero */}
                <section className="relative px-6 mb-20 overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-violet-600/10 blur-[130px]" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-6">
                                <Sparkles size={12} className="text-violet-400" />
                                Advanced Capabilities
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                                Why <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Innovexa AI</span> Stands Out
                            </h1>
                            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
                                Beyond simple generation — we provide a complete architectural blueprint
                                for your next big idea, optimized for current industry standards.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* The existing features grid */}
                <FeaturesSection />

                {/* Bottom CTA */}
                <section className="px-6 mt-10">
                    <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-violet-900/20 to-indigo-900/20 border border-white/5 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Ready to build something iconic?</h2>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm bg-violet-600 hover:bg-violet-500 shadow-xl shadow-violet-600/20 transition-all duration-300"
                        >
                            Go to Generator
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="py-6 px-6 border-t border-white/5 bg-[#0a0a0f]">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20">
                    <p>© 2026 Innovexa AI — Built for developers.</p>
                </div>
            </footer>
        </div>
    );
}
