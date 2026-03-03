import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Zap, Mail, Lock, ArrowRight, Eye, EyeOff, AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
        } catch (err) {
            console.error("Signup error:", err);
            // Translate common Firebase errors
            if (err.code === "auth/email-already-in-use") {
                setError("This email is already in use.");
            } else if (err.code === "auth/weak-password") {
                setError("Password is too weak.");
            } else if (err.code === "auth/invalid-email") {
                setError("Invalid email address.");
            } else {
                setError("Failed to create account. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
            <Navbar />

            {/* Background glows */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-fuchsia-700/18 blur-[130px]" />
                <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[100px]" />
                <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
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
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center shadow-xl shadow-fuchsia-500/40">
                            <Zap size={22} className="text-white" fill="white" />
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-extrabold text-white mb-2">Create New Account</h1>
                        <p className="text-white/40 text-sm">Start building with AI — easy and secure.</p>
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
                                        required
                                        className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/20 focus:outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-white/50 uppercase tracking-wide">Password</label>
                                <div className="relative">
                                    <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                                    <input
                                        type={showPass ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Min. 6 characters"
                                        required
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

                            {/* Error Message */}
                            {error && (
                                <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                                    <AlertCircle size={14} className="shrink-0" />
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className={`group flex items-center justify-center gap-2 h-11 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 transition-all duration-300 mt-1 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {loading ? "Creating Account..." : "Create Account"}
                                {!loading && <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />}
                            </button>

                            <p className="text-center text-xs text-white/25">
                                By signing up you agree to our{" "}
                                <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors">Terms</a>
                                {" "}and{" "}
                                <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors">Privacy Policy</a>.
                            </p>
                        </form>

                        <p className="text-center text-xs text-white/30 mt-4">
                            Already have an account?{" "}
                            <Link to="/login" className="text-violet-400 hover:text-violet-300 transition-colors font-medium">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
