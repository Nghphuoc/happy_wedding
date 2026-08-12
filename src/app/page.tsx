import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import Events from "@/components/Events";
import WeddingLocations from "@/components/WeddingLocations";
import Gallery from "@/components/Gallery";
import FloatingInvitation from "@/components/FloatingInvitation";
import QuestionGamme from "@/components/QuestionGamme";


export default function WeddingPage() {
    return (
        <div className="font-sans text-[#333] bg-[#fbf9f4] min-h-screen scroll-smooth">
            <Hero />
            <Countdown />
            <Story />
            <Events />
            <Gallery />
            <WeddingLocations />
            <FloatingInvitation />
            <QuestionGamme />
        </div>
    );
}
