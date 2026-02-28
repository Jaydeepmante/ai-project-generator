import { Link } from "react-router-dom";
import { LayoutDashboard, Sparkles, FolderOpen, Settings, LogOut, Zap, Clock, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

const sidebarLinks = [
    { icon: LayoutDashboard, label: "Overview", active: true },
    { icon: FolderOpen, label: "My Projects", active: false },
    { icon: Sparkles, label: "AI Generator", active: false },
    { icon: Settings, label: "Settings", active: false },
];

const placeholderProjects = [
    { name: "E-Commerce Platform", stack: "Next.js + Prisma", time: "2 hours ago", color: "from-violet-500/20 to-indigo-500/10" },
    { name: "SaaS Dashboard", stack: "React + FastAPI", time: "Yesterday", color: "from-fuchsia-500/20 to-violet-500/10" },
    { name: "Real-Time Chat App", stack: "SvelteKit + Socket.io", time: "3 days ago", color: "from-indigo-500/20 to-fuchsia-500/10" },
];

const statCards = [
    { label: "Projects Generated", value: "—", sub: "Auth coming soon" },
    { label: "API Calls Used", value: "—", sub: "Auth coming soon" },
    { label: "Plan", value: "Free", sub: "Upgrade available" },
];

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
            <Navbar />

            {/* Background glows */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
                <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-violet-700/12 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
            </div>

            {/* Grid overlay */}
            <div
                className="pointer-events-none fixed inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
                aria-hidden
            />

            <div className="flex flex-1 pt-16">
                {/* Sidebar – hidden on mobile */}
                <aside className="hidden lg:flex flex-col w-60 xl:w-64 shrink-0 border-r border-white/5 bg-[#0a0a0f]/80 backdrop-blur-sm px-4 py-8 gap-1">
                    <p className="text-[10px] uppercase tracking-widest text-white/25 font-medium px-3 mb-3">Navigation</p>
                    {sidebarLinks.map(({ icon: Icon, label, active }) => (
                        <button
                            key={label}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${active
                                    ? "bg-violet-500/15 text-violet-300 border border-violet-500/20"
                                    : "text-white/45 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <Icon size={16} />
                            {label}
                        </button>
                    ))}

                    <div className="mt-auto">
                        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/30 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 w-full">
                            <LogOut size={16} />
                            Log out
                        </button>
                    </div>
                </aside>

                {/* Main content */}
                <main className="flex-1 overflow-auto relative z-10">
                    <div className="max-w-5xl mx-auto px-6 lg:px-10 py-10">
                        {/* Page header */}
                        <div className="mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-300/80 text-[11px] font-medium mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                                Authentication coming soon
                            </div>
                            <h1 className="text-3xl font-extrabold text-white mb-2">Your Dashboard</h1>
                            <p className="text-white/40 text-sm">Manage your AI-generated projects and blueprints in one place.</p>
                        </div>

                        {/* Stat cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                            {statCards.map(({ label, value, sub }) => (
                                <div
                                    key={label}
                                    className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-5 shadow-xl shadow-violet-950/30"
                                >
                                    <p className="text-xs text-white/35 mb-1">{label}</p>
                                    <p className="text-2xl font-bold text-white mb-1">{value}</p>
                                    <p className="text-[11px] text-white/25">{sub}</p>
                                </div>
                            ))}
                        </div>

                        {/* Recent projects */}
                        <div className="mb-10">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-base font-semibold text-white">Recent Projects</h2>
                                <span className="text-xs text-white/25">Placeholder data</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                {placeholderProjects.map(({ name, stack, time, color }) => (
                                    <div
                                        key={name}
                                        className={`flex items-center justify-between bg-gradient-to-r ${color} border border-white/5 rounded-xl px-5 py-4 group hover:border-violet-500/25 transition-all duration-200`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                                <Zap size={15} className="text-violet-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-white">{name}</p>
                                                <p className="text-xs text-white/35">{stack}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1.5 text-white/25 text-xs">
                                                <Clock size={11} />
                                                {time}
                                            </div>
                                            <button className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-all duration-200">
                                                View <ArrowRight size={11} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Coming soon banner */}
                        <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl text-center">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/25 flex items-center justify-center mx-auto mb-4">
                                <Sparkles size={20} className="text-violet-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Full Dashboard Coming Soon</h3>
                            <p className="text-white/40 text-sm max-w-sm mx-auto mb-5">
                                Firebase authentication, saved projects, team workspaces, and AI API integration are on the way.
                            </p>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 transition-all duration-300"
                            >
                                <Sparkles size={14} />
                                Try the Generator
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
