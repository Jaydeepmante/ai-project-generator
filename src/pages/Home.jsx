/**
 * Home.jsx — Full JRI AI landing page.
 *
 * Section scroll order:
 *   1.  Navbar
 *   2.  Hero              — headline, subheadline, trust badges
 *   3.  Generator         — input + Generate + result card  (primary CTA)
 *   4.  SampleOutputs     — 3 static example blueprints
 *   5.  HowItWorks        — 3-step process
 *   6.  Testimonials      — 3 student reviews + trust badges  [NEW]
 *   7.  FeaturesSection   — 6 feature cards                   [NEW]
 *   8.  DemoSection       — before/after mockup + video stub   [NEW]
 *   9.  FinalCTA          — full-width purple gradient CTA     [NEW]
 *   10. Footer
 */
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Generator from "../components/Generator";
import SampleOutputs from "../components/SampleOutputs";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FeaturesSection from "../components/FeaturesSection";
import DemoSection from "../components/DemoSection";

/* ─── Thin section divider ─────────────────────────────────── */
function Divider() {
    return (
        <div className="relative h-px w-full max-w-5xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        </div>
    );
}

/* ─── Final CTA — full-width purple gradient section ─────── */
function FinalCTA() {
    return (
        <section className="relative py-28 px-6 overflow-hidden">
            {/* Full-width purple gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-[#0d0820] to-indigo-950" />

            {/* Glow overlays */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-violet-600/20 blur-[130px]" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-fuchsia-600/15 blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-indigo-600/15 blur-[100px]" />
            </div>

            {/* Grid overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
                aria-hidden
            />

            <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 max-w-2xl mx-auto text-center"
            >
                {/* Gemini badge */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                    <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/50 text-xs font-medium backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        Powered by Google Gemini
                    </div>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                    Start Generating Free —{" "}
                    <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                        No Card Needed
                    </span>
                </h2>

                <p className="text-white/50 text-base mb-10 leading-relaxed">
                    Unlimited ideas today. Save your projects with a free signup.
                    Built for students, hackathons &amp; portfolios — by JRI.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <motion.a
                        href="#generator"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(168,85,247,0.55)" }}
                        whileTap={{ scale: 0.97 }}
                        className="group flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-2xl shadow-violet-600/40 transition-colors duration-300"
                    >
                        <Sparkles size={17} />
                        Get Started — It's Free
                        <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </motion.a>

                    <div className="flex items-center gap-3 text-sm text-white/40">
                        <Link to="/login" className="hover:text-white/70 hover:text-purple-300 transition-colors duration-200 font-medium">
                            Login
                        </Link>
                        <span className="text-white/20">·</span>
                        <Link to="/signup" className="hover:text-white/70 hover:text-purple-300 transition-colors duration-200 font-medium">
                            Sign Up Free
                        </Link>
                    </div>
                </div>

                <p className="text-white/20 text-xs">
                    No signup required to try. Create an account to save your blueprints (coming soon).
                </p>
            </motion.div>
        </section>
    );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            <Navbar />

            {/* 1. Hero */}
            <Hero />

            {/* 2. Generator — primary CTA, flows directly below hero */}
            <Generator />

            <Divider />

            {/* 3. Sample Outputs */}
            <SampleOutputs />

            <Divider />

            {/* 4. How It Works */}
            <HowItWorks />

            <Divider />

            {/* 5. Testimonials — social proof */}
            <Testimonials />

            <Divider />

            {/* 6. Feature cards */}
            <FeaturesSection />

            <Divider />

            {/* 7. Demo / before-after mockup */}
            <DemoSection />

            <Divider />

            {/* 8. Final CTA — full-width purple gradient */}
            <FinalCTA />

            {/* Footer */}
            <footer className="py-6 px-6 border-t border-white/5 bg-[#0a0a0f]">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20">
                    <p>© 2026 JRI AI — Built for students &amp; developers.</p>
                    <div className="flex items-center gap-5">
                        <Link to="/" className="hover:text-white/50 transition-colors">Home</Link>
                        <Link to="/#features" className="hover:text-white/50 transition-colors">Features</Link>
                        <Link to="/login" className="hover:text-white/50 transition-colors">Login</Link>
                        <Link to="/signup" className="hover:text-white/50 transition-colors">Sign Up</Link>
                        <Link to="/dashboard" className="hover:text-white/50 transition-colors">Dashboard</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
