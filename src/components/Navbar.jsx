import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, ChevronDown, Sparkles } from "lucide-react";

const navLinks = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/#features" },
    {
        label: "Pricing",
        to: "/#pricing",
        tooltip: "Free now — Pro plan coming soon 🚀",
    },
    { label: "Dashboard", to: "/dashboard" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [pricingTip, setPricingTip] = useState(false);
    const tipRef = useRef(null);
    const location = useLocation();

    /* Scroll detection */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* Close pricing tooltip on outside click */
    useEffect(() => {
        const handler = (e) => {
            if (tipRef.current && !tipRef.current.contains(e.target)) {
                setPricingTip(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const isActive = (to) =>
        to === "/" ? location.pathname === "/" : location.pathname === to;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
                : "bg-transparent"
                }`}
        >
            {/* Max width container for horizontal centering */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/55 transition-all duration-300">
                                <Zap size={18} className="text-white" fill="white" />
                            </div>
                            <span className="text-white font-bold text-lg md:text-xl tracking-tight">
                                JRI <span className="text-violet-400 group-hover:text-violet-300 transition-colors duration-200">AI</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links - Centered */}
                    <nav className="hidden md:flex items-center gap-2 lg:gap-4">
                        {navLinks.map((link) => {
                            const active = isActive(link.to);

                            if (link.tooltip) {
                                return (
                                    <div key={link.label} className="relative" ref={tipRef}>
                                        <button
                                            onClick={() => setPricingTip((v) => !v)}
                                            className={`flex items-center gap-1 px-4 py-2 text-sm lg:text-base font-medium transition-all duration-200 ${active
                                                ? "text-violet-300"
                                                : "text-white/60 hover:text-white"
                                                }`}
                                        >
                                            {link.label}
                                            <ChevronDown
                                                size={14}
                                                className={`transition-transform duration-200 ${pricingTip ? "rotate-180" : ""}`}
                                            />
                                        </button>

                                        {/* Tooltip dropdown */}
                                        {pricingTip && (
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 px-4 py-3 rounded-xl bg-[#111120] border border-violet-500/25 shadow-2xl shadow-violet-900/40 text-xs text-white/60 leading-relaxed z-50 text-center">
                                                <div className="flex items-center justify-center gap-1.5 mb-1">
                                                    <Sparkles size={11} className="text-violet-400" />
                                                    <span className="font-semibold text-violet-300">Free Forever</span>
                                                </div>
                                                {link.tooltip}
                                                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#111120] border-l border-t border-violet-500/25 rotate-45" />
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.label}
                                    to={link.to}
                                    className={`px-4 py-2 text-sm lg:text-base font-medium transition-all duration-200 ${active
                                        ? "text-violet-300"
                                        : "text-white/60 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-6">
                        <Link
                            to="/login"
                            className="text-sm lg:text-base font-medium text-white/60 hover:text-white transition-colors duration-200"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className="flex items-center gap-2 px-5 py-2.5 text-sm lg:text-base font-bold text-white rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/50 transition-all duration-200"
                        >
                            <Sparkles size={15} className="text-violet-200" />
                            Get started free
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white/70 hover:text-white transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="md:hidden bg-[#0a0a0f]/98 backdrop-blur-xl border-t border-white/5 px-6 pb-8 pt-4">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.to}
                                onClick={() => setMenuOpen(false)}
                                className={`flex items-center justify-between px-4 py-3 text-base rounded-xl transition-all duration-200 ${isActive(link.to)
                                    ? "text-violet-300 bg-violet-500/10"
                                    : "text-white/70 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {link.label}
                                {link.tooltip && (
                                    <span className="text-[10px] text-violet-400 font-medium">{link.tooltip}</span>
                                )}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex flex-col gap-3 mt-6">
                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-3.5 text-base text-center font-medium text-white/80 border border-white/10 rounded-xl hover:bg-white/5 transition-all"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center gap-2 px-4 py-3.5 text-base font-bold text-white rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/25 transition-all"
                        >
                            <Sparkles size={15} />
                            Get started free
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
