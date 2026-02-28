import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Login() {
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Auth coming soon
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
            <Navbar />

            {/* Background glows */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-violet-700/20 blur-[130px]" />
                <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
                <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full bg-fuchsia-600/10 blur-[100px]" />
            </div>

            {/* Grid overlay */}
            <div
                className="pointer-events-none fixed inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
                aria-hidden
            />

            <main className="flex-1 flex items-center justify-center px-6 py-28">
                <div className="relative z-10 w-full max-w-md">
                    {/* Logo mark */}
                    <div className="flex justify-center mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-violet-500/40">
                            <Zap size={22} className="text-white" fill="white" />
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-extrabold text-white mb-2">Login to Your Account</h1>
                        <p className="text-white/40 text-sm">Welcome back — enter your credentials to continue.</p>
                    </div>

                    {/* Card */}
                    <div className="bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl shadow-violet-950/50">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-white/50 uppercase tracking-wide">Email</label>
                                <div className="relative">
                                    <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-1.5">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-medium text-white/50 uppercase tracking-wide">Password</label>
                                    <a href="#" className="text-xs text-violet-400 hover:text-violet-300 transition-colors">Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                                    <input
                                        type={showPass ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full h-11 pl-10 pr-11 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPass(!showPass)}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                                    >
                                        {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                                    </button>
                                </div>
                            </div>

                            {/* Coming soon notice */}
                            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-violet-500/8 border border-violet-500/20 text-violet-300/70 text-xs">
                                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse flex-shrink-0" />
                                Authentication & saved projects coming soon…
                            </div>

                            <button
                                type="submit"
                                className="group flex items-center justify-center gap-2 h-11 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 mt-1"
                            >
                                Sign in
                                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                            </button>
                        </form>

                        <p className="text-center text-xs text-white/30 mt-6">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-violet-400 hover:text-violet-300 transition-colors font-medium">
                                Create one free
                            </Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
