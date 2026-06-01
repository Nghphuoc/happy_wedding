import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import Events from "@/components/Events";
import Dresscode from "@/components/Dresscode";
import Gallery from "@/components/Gallery";
import BridalParty from "@/components/BridalParty";
import Footer from "@/components/Footer";
import FloatingInvitation from "@/components/FloatingInvitation";


export default function WeddingPage() {
    return (
        <div className="font-sans text-[#333] bg-[#fbf9f4] min-h-screen scroll-smooth">
            <Navbar />
            <Hero />
            <Countdown />
            <Story />
            <Events />
            <Gallery />
            <BridalParty />
            <Dresscode />
            <Footer />
            <FloatingInvitation />
        </div>
    );
}
