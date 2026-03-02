import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { LayoutDashboard, Sparkles, FolderOpen, Settings, LogOut, Zap, Clock, ArrowRight, Eye, Edit, Download, Trash2, Plus } from "lucide-react";
import Navbar from "../components/Navbar";

const sidebarLinks = [
    { icon: LayoutDashboard, label: "Overview", active: true },
    { icon: FolderOpen, label: "My Projects", active: false },
    { icon: Sparkles, label: "AI Generator", active: false },
    { icon: Settings, label: "Settings", active: false },
];

const placeholderProjects = [
    { id: "1", name: "E-Commerce Platform", stack: "Next.js + Prisma", time: "2 hours ago", color: "from-violet-500/20 to-indigo-500/10" },
    { id: "2", name: "SaaS Dashboard", stack: "React + FastAPI", time: "Yesterday", color: "from-fuchsia-500/20 to-violet-500/10" },
    { id: "3", name: "Real-Time Chat App", stack: "SvelteKit + Socket.io", time: "3 days ago", color: "from-indigo-500/20 to-fuchsia-500/10" },
];

const statCards = [
    { label: "Projects Generated", value: placeholderProjects.length.toString(), sub: "Last project 2 hours ago" },
    { label: "API Calls Used", value: "—", sub: "Auth coming soon" },
    { label: "Plan", value: "Free", sub: "Upgrade available" },
];

export default function Dashboard() {
    const navigate = useNavigate();

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
                        <button
                            onClick={() => {
                                localStorage.removeItem("isAuthenticated");
                                navigate("/login");
                            }}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/30 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 w-full"
                        >
                            <LogOut size={16} />
                            Log out
                        </button>
                    </div>
                </aside>

                {/* Main content */}
                <main className="flex-1 overflow-auto relative z-10">
                    <div className="max-w-5xl mx-auto px-6 lg:px-10 py-10">
                        {/* Page header */}
                        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-extrabold text-white mb-2">Your Dashboard</h1>
                                <p className="text-white/40 text-sm">Manage your AI-generated projects and blueprints in one place.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 shadow-lg shadow-violet-600/20 transition-all duration-200"
                                >
                                    <Plus size={16} />
                                    New Project
                                </Link>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem("isAuthenticated");
                                        navigate("/login");
                                    }}
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-red-400 bg-red-400/10 hover:bg-red-400/20 border border-red-500/20 transition-all duration-200"
                                >
                                    <LogOut size={16} />
                                    Log Out
                                </button>
                            </div>
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
                            </div>

                            {placeholderProjects.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-16 px-4 bg-white/[0.02] border border-white/5 rounded-2xl text-center">
                                    <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center mb-4">
                                        <FolderOpen size={24} className="text-violet-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">No projects yet</h3>
                                    <p className="text-sm text-white/40 mb-6 max-w-sm">
                                        You haven't generated any projects yet. Go back to the homepage and create your first AI-generated blueprint!
                                    </p>
                                    <Link
                                        to="/"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-violet-600 hover:bg-violet-500 transition-colors"
                                    >
                                        <Sparkles size={16} />
                                        Generate Now
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    {placeholderProjects.map(({ id, name, stack, time, color }) => (
                                        <div
                                            key={id}
                                            className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r ${color} border border-white/5 rounded-xl px-5 py-4 group hover:border-violet-500/25 transition-all duration-200`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                                    <Zap size={16} className="text-violet-400" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-white">{name}</p>
                                                    <div className="flex items-center gap-3 mt-1">
                                                        <span className="text-xs text-white/40">{stack}</span>
                                                        <span className="w-1 h-1 rounded-full bg-white/10" />
                                                        <span className="flex items-center gap-1 text-white/30 text-xs">
                                                            <Clock size={10} />
                                                            {time}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                                                <Link
                                                    to={`/dashboard/projects/${id}`}
                                                    className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-violet-500/20 hover:text-violet-300 transition-colors tooltip-trigger"
                                                    title="View"
                                                >
                                                    <Eye size={14} />
                                                </Link>
                                                <Link
                                                    to="/"
                                                    className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-blue-500/20 hover:text-blue-300 transition-colors tooltip-trigger"
                                                    title="Edit"
                                                >
                                                    <Edit size={14} />
                                                </Link>
                                                <button
                                                    onClick={() => alert("Export functionality coming soon!")}
                                                    className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-green-500/20 hover:text-green-300 transition-colors tooltip-trigger"
                                                    title="Export"
                                                >
                                                    <Download size={14} />
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        if (window.confirm("Are you sure you want to delete this project?")) {
                                                            alert("Project deleted (placeholder)");
                                                        }
                                                    }}
                                                    className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-red-500/20 hover:text-red-400 transition-colors tooltip-trigger"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
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
