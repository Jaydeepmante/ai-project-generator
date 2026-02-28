import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/#features" },
    { label: "Pricing", to: "/#pricing" },
    { label: "Dashboard", to: "/dashboard" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (to) => location.pathname === to;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow duration-300">
                            <Zap size={16} className="text-white" fill="white" />
                        </div>
                        <span className="text-white font-bold text-lg tracking-tight">
                            JRI <span className="text-violet-400">AI</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.to}
                                className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${isActive(link.to)
                                    ? "text-violet-300 bg-violet-500/10"
                                    : "text-white/60 hover:text-white hover:bg-white/5 hover:text-purple-300"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            to="/login"
                            className="px-4 py-2 text-sm text-white/70 hover:text-purple-300 transition-colors duration-200"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-200"
                        >
                            Get started free
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white/70 hover:text-white transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/5 px-6 pb-6 pt-3">
                    <nav className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.to}
                                onClick={() => setMenuOpen(false)}
                                className={`px-3 py-2.5 text-sm rounded-lg transition-all duration-200 ${isActive(link.to)
                                    ? "text-violet-300 bg-violet-500/10"
                                    : "text-white/60 hover:text-white hover:bg-white/5 hover:text-purple-300"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex flex-col gap-2 mt-4">
                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2.5 text-sm text-center text-white/70 hover:text-purple-300 border border-white/10 rounded-lg transition-colors duration-200"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2.5 text-sm font-semibold text-center text-white rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:to-indigo-500 transition-all duration-200"
                        >
                            Get started free
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
