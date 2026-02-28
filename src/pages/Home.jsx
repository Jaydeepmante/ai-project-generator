import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Generator from "../components/Generator";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            <Navbar />
            <Hero />
            <Generator />
        </div>
    );
}
