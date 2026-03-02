import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Edit, Download, Terminal, Layers, CheckCircle2, Server, Database } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ProjectDetail() {
    const { id } = useParams();

    // Placeholder data for the specific project
    const project = {
        id,
        name: `Generated Project #${id}`,
        description: "A complete boilerplate generated based on your specifications. Includes authentication, database integration, and pre-configured styling.",
        createdAt: "Oct 24, 2023",
        status: "Ready",
        stack: [
            { name: "React", icon: Layers },
            { name: "Node.js", icon: Server },
            { name: "PostgreSQL", icon: Database },
            { name: "Tailwind CSS", icon: Layers }
        ],
        features: [
            "JWT Authentication pre-configured",
            "RESTful API structure",
            "Responsive layout system",
            "Database schemas generated",
            "Environment variables setup"
        ]
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
            <Navbar />

            {/* Background glows */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-700/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[100px]" />
            </div>

            <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10 relative z-10 pt-24">
                {/* Back Link */}
                <Link
                    to="/dashboard"
                    className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft size={16} />
                    Back to Dashboard
                </Link>

                {/* Header section */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <h1 className="text-3xl font-extrabold text-white">{project.name}</h1>
                            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                                {project.status}
                            </span>
                        </div>
                        <p className="text-white/40 max-w-2xl text-sm leading-relaxed mb-4">
                            {project.description}
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-white/30">Created: {project.createdAt}</span>
                            <span className="w-1 h-1 rounded-full bg-white/10" />
                            <span className="text-xs text-white/30">ID: {project.id}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <Link
                            to="/"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
                        >
                            <Edit size={16} />
                            Edit Prompt
                        </Link>
                        <button
                            onClick={() => alert("Export modal coming soon")}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-violet-600 text-white hover:bg-violet-500 shadow-lg shadow-violet-500/20 transition-all"
                        >
                            <Download size={16} />
                            Export Code
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Stack */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                            <h3 className="text-sm font-semibold text-white mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/70">
                                            <Icon size={12} className="text-violet-400" />
                                            {tech.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                            <h3 className="text-sm font-semibold text-white mb-4">Included Features</h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                                        <span className="text-sm text-white/70">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Code Preview */}
                    <div className="lg:col-span-2">
                        <div className="bg-[#0f0f16] border border-white/5 rounded-2xl overflow-hidden h-full min-h-[400px] flex flex-col">
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-black/40">
                                <div className="flex items-center gap-2">
                                    <Terminal size={14} className="text-white/40" />
                                    <span className="text-xs font-mono text-white/40">src/index.js</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                </div>
                            </div>

                            {/* Code Content */}
                            <div className="p-4 overflow-auto flex-1">
                                <pre className="text-sm font-mono text-white/70 leading-relaxed">
                                    <code>{`import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Main Router
app.use('/api/v1', routes);

// Initialize App
const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(\`Server running on port \${PORT}\`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

start();`}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
