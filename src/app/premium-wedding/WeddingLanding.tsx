/* eslint-disable @next/next/no-img-element */
import {
    CalendarDays,
    Diamond,
    Flower2,
    Heart,
    ScrollText,
    UserRoundCheck,
} from "lucide-react";
import couple from "@/assets/Main.jpg";
import background from "@/assets/behind.jpg";
import Image from "next/image";
const images = {
    coffee: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMb4rp0nQm4nPi2WXMO4CBD6L3ABzW_g7dUD6MoGb6PUMXzhtV2KXUVDZym9EbRn82gJWohrDK80GD5iTQimkLnZNDf9L3aqcoSTzfFWeS5W-JQQN5bxtR7OhUaXCTPafHlZbO9-MwM-wQSMOY0E1MVSa_nDNRrwPKwrmgvbBNZ4KrSBaUXQ9zPnsO9UAfw3VQEfftggOIF38CTRI5qGAhK75RoSPaMriCTuXs33pxWfcxBnjrAuXVxQ",
    ring: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSsMt3pBHMsx05_IvuVk89kQYNCv5YBArZScoORT6v9CCv2gUhlVwrA7qf0wkActQ2t0fyAiCRRsRhoYKHbb8U2p2Ivemvq4HmhU5f0lN-dziPhJ7m1bom8C39VX7yDtaFao8SDK86EeM8b1_oj6BzdDhAf-0gTnnsqIWOMe2UZe90k4ixRR_Sk4fFAaXs6mdg2LgNm7wcUIoWrUr0E1sTF7a0IQEL67gZH0NXsDBcZqAww9MkOHqong",
    field: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcfdyMDxuYXrzEDfnpjK85YK2NoiwK5J1qmQp9nQOvQEHOH-1CPkRvYw1X4lgxJb6QinlOJKF1mkkY96DBPmVyjTZBzBQZoujV0Uo3JKOJ-ptwJAG1cqAOCub8fbz9fJ_nF7Kw8UHXvClOFB4w9jcWy-d8D3um7lhIpss9nXf25bQ9zWkExV5ZTh3nEubPZ3UUK9twK2LUORA__YWWYLb97aSBjTKQuLznauGn97XPcgR2KKB28gNCNg",
    hands: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgxDDxnXRD7CulkZFrkpcwRspM6Yoiojw6wAoWL-6Ptz3WYYprRg0jEuIB4_JTECu71RPR7pmBRtyT9GFK8fn-L9mD8xBUeqOUUNKE5bvd1WLJNCI-M15mzr9DX5oj138y8hgkvLnihW9qB356WmSS3shYJux_7LuzerN9lx6N0GODw55j7WRVSUDJDCJdL8uMU3Vxd1oOPRbxhM2FdXJyOyixRimDsWvJDQioJLRLqBOs3q3QhvxdSg",
    portrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFYi6Wq2jfqZV51faCeWxkSsAQim_KAXtMeCsMDAdDcfapHv7tk7AAUUJI2k6nKAQ6WuWJUCD0uA97fB2AcrzpSPanwULDqsiNEk6HOfgK1Rnz1uqDPJHWxSdNajhot2_gltmVA-5v9b_T1VJC9vKY9LH1R1Bkdp7vkBgzaIX0_J6qoPOIANvX1Leu-rydl2oRK2XKLf5BrUGD9DZnlhHvAORUqygPqNNWSw0KZPizkoUeC0Hp9kVeWA",
    stationery: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqtrYp_G9pVQTCLvDfrUcNdGe2A0sMdf9ET6sUVg-sXeLw5RHs_fd4XKHA2dR2JbFe8hyKUfCX1SktA6RE-6pO3XagqSbgnont52-lM35jwQwTCu_DcYyEmhFU3EYERY4tQwF7UGFPMjlayg5-sxa-QI8A2UoS5qh9qq7gmmiNzOMdxXHunmGxpDESI6g2meXfMrlujp7Uu4BnUUayZ6dqs5sbGGgN0rsA0iixmXQ2n6x6K-BSzZLb9w",
} as const;

const navItems = [
    ["Our Story", "#story"],
    ["Moments", "#gallery"],
    ["RSVP", "#rsvp"],
    ["Guestbook", "#footer"],
] as const;

const primaryButton =
    "inline-flex min-h-11 items-center justify-center border border-[#721527] bg-[#721527] px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#510014] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dca54c]";

export default function WeddingLanding() {
    return (
        <div className="min-h-screen overflow-x-clip bg-[#fbf9f4] font-sans text-[#1b1c19] antialiased">
            <Header />
            <main className="pb-24 pt-24 md:pb-0 md:pt-28">
                <Hero />
                <Journey />
                <Gallery />
                <RsvpCallout />
            </main>
            <MobileDock />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dca54c]/25 bg-[#fbf9f4]/90 shadow-sm backdrop-blur-xl">
            <nav className="mx-auto hidden h-20 max-w-7xl items-center justify-between px-6 md:flex lg:px-10" aria-label="Main navigation">
                <a href="#home" className="font-serif text-3xl italic text-[#721527]">An &amp; Linh</a>
                <div className="flex items-center gap-6 lg:gap-9">
                    {navItems.map(([label, href]) => <a key={label} href={href} className="border-b border-transparent pb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#564243] transition hover:border-[#dca54c] hover:text-[#721527]">{label}</a>)}
                </div>
                <a href="#rsvp" className={primaryButton}>Save the date</a>
            </nav>
            <div className="flex h-16 items-center justify-center md:hidden"><a href="#home" className="font-serif text-3xl italic text-[#721527]">An &amp; Linh</a></div>
        </header>
    );
}

function Hero() {
    return (
        <section id="home" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-20 sm:px-8 md:grid-cols-2 md:gap-12 md:px-8 md:pb-24 lg:min-h-[calc(100svh-7rem)] lg:px-10">
            <div className="order-2 text-center md:order-1 md:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a671d]">Join us in celebrating</p>
                <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.12] text-[#721527] sm:text-5xl lg:text-6xl">The Wedding Celebration of An &amp; Linh</h1>
                <Divider icon={<Flower2 size={18} />} align="left" />
                <p className="mx-auto max-w-xl text-base leading-8 text-[#564243] md:mx-0 lg:text-lg">A beautiful journey of love, elegantly unfolding. We invite you to share in our joy as we begin our forever.</p>
                <div className="mt-7 flex justify-center gap-2 sm:gap-3 md:justify-start">
                    {[['45', 'Days'], ['12', 'Hrs'], ['30', 'Min']].map(([value, label]) => <div key={label} className="grid h-20 w-20 place-content-center border border-[#dca54c] bg-white text-center shadow-[0_4px_20px_rgba(33,38,29,.06)] sm:h-24 sm:w-24"><strong className="font-serif text-2xl text-[#721527] sm:text-3xl">{value}</strong><span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#564243]">{label}</span></div>)}
                </div>
            </div>
            <div className="relative order-1 h-[430px] w-full sm:h-[520px] md:order-2 md:h-[600px]">
                <figure className="absolute right-0 top-0 h-4/5 w-3/4 rotate-2 border border-[#dca54c] bg-white p-2 shadow-lg"><Image alt="Bride holding tulips" className="h-full w-full object-cover grayscale opacity-90" src={background} /></figure>
                <figure className="absolute bottom-0 left-0 z-10 h-2/3 w-2/3 -rotate-3 border border-[#dca54c] bg-white p-2 shadow-xl"><Image alt="Vinh and Linh in wedding attire" className="min-h-full w-full object-cover" src={couple} /></figure>
            </div>
        </section>
    );
}

function Journey() {
    const milestones = [
        { date: "Autumn 2018", title: "The First Hello", text: "A chance encounter in a small coffee shop in Hanoi started it all.", image: images.coffee, alt: "Coffee cups on a rustic table" },
        { date: "Spring 2023", title: "The Proposal", text: "Underneath the cherry blossoms, a question was asked and a resounding yes was given.", image: images.ring, alt: "Vintage engagement ring on cherry blossoms" },
    ];
    return (
        <section id="story" className="bg-[#f0eee9] px-5 py-20 sm:px-8 md:py-24 lg:px-10">
            <div className="mx-auto max-w-5xl text-center">
                <h2 className="font-serif text-4xl font-semibold text-[#721527] md:text-5xl">Our Journey</h2>
                <Divider icon={<Diamond size={14} />} />
                <p className="mx-auto mb-12 max-w-2xl leading-7 text-[#564243]">From a serendipitous meeting to a lifetime promise, explore the chapters of our story.</p>
                <div className="relative mx-auto max-w-3xl before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-[#dca54c]/45 md:before:left-1/2">
                    {milestones.map((item, index) => <article key={item.title} className={`relative mb-12 grid grid-cols-[2rem_1fr] gap-4 text-left last:mb-0 md:grid-cols-[1fr_4rem_1fr] md:gap-5 ${index % 2 ? "md:[&>*:last-child]:col-start-1 md:[&>*:last-child]:row-start-1" : ""}`}>
                        <span className="relative z-10 mt-5 h-4 w-4 justify-self-center rounded-full border border-[#dca54c] bg-[#dca54c] md:col-start-2 md:row-start-1" />
                        <div className={`md:pt-1 ${index % 2 === 0 ? "md:text-right" : "md:col-start-3"}`}><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9a671d]">{item.date}</p><h3 className="mt-2 font-serif text-2xl font-semibold text-[#721527]">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#564243]">{item.text}</p></div>
                        <figure className={`col-start-2 mt-3 h-48 overflow-hidden border border-[#dca54c] bg-white p-1 shadow-sm md:col-start-3 md:row-start-1 md:mt-0 ${index % 2 ? "md:col-start-1" : ""}`}><img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-cover" /></figure>
                    </article>)}
                </div>
                <a href="#gallery" className="mt-14 inline-flex min-h-11 items-center border border-[#721527] px-7 text-xs font-semibold uppercase tracking-[0.12em] text-[#721527] transition hover:bg-[#721527] hover:text-white">View our moments</a>
            </div>
        </section>
    );
}

function Gallery() {
    const gallery = [
        [images.field, "An and Linh walking through a field", "md:col-span-2 md:row-span-2"],
        [images.hands, "Wedding rings and intertwined hands", ""],
        [images.portrait, "Joyful bridal portrait", "md:row-span-2"],
        [images.stationery, "Wedding stationery with a wax seal", ""],
    ] as const;
    return (
        <section id="gallery" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">
            <div className="mb-10 text-center"><h2 className="font-serif text-4xl font-semibold text-[#721527] md:text-5xl">Captured Moments</h2><Divider icon={<Heart size={15} />} /></div>
            <div className="grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[210px]">
                {gallery.map(([src, alt, span]) => <figure key={src} className={`overflow-hidden border border-[#dca54c] bg-white p-1 shadow-[0_4px_20px_rgba(33,38,29,.06)] ${span}`}><img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-[1.025]" /></figure>)}
            </div>
        </section>
    );
}

function RsvpCallout() {
    return (
        <section id="rsvp" className="bg-[#721527] px-5 py-16 text-center text-white sm:px-8 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f6bc61]">04 · 10 · 2026</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">We would be honored to celebrate with you</h2>
            <a href="mailto:hello@example.com?subject=An%20%26%20Linh%20Wedding%20RSVP" className="mt-8 inline-flex min-h-12 items-center justify-center border border-[#dca54c] bg-[#fbf9f4] px-8 text-xs font-semibold uppercase tracking-[0.12em] text-[#721527] transition hover:bg-[#f6bc61]"><UserRoundCheck size={17} className="mr-2" />RSVP now</a>
        </section>
    );
}

function MobileDock() {
    const items = [
        [Heart, "Story", "#story"],
        [CalendarDays, "Moments", "#gallery"],
        [UserRoundCheck, "RSVP", "#rsvp"],
        [ScrollText, "Wishes", "#footer"],
    ] as const;
    return <nav className="fixed inset-x-3 bottom-3 z-50 grid h-16 grid-cols-4 rounded-xl border border-[#dca54c]/40 bg-[#fbf9f4]/90 px-2 shadow-[0_-4px_20px_rgba(33,38,29,.08)] backdrop-blur-xl md:hidden" aria-label="Mobile navigation">{items.map(([Icon, label, href]) => <a key={label} href={href} className="flex min-w-0 flex-col items-center justify-center gap-1 text-[#564243] transition active:bg-[#fdc266]/20 active:text-[#721527]"><Icon size={19} /><span className="text-[10px] font-semibold uppercase">{label}</span></a>)}</nav>;
}

function Footer() {
    return <footer id="footer" className="flex flex-col items-center border-t border-[#dca54c]/20 bg-[#f0eee9] px-5 py-16 pb-28 text-center md:pb-16"><div className="font-serif text-4xl italic text-[#721527]">An &amp; Linh</div><div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-[#564243]"><a href="#story" className="hover:text-[#721527]">Our Story</a><a href="#rsvp" className="hover:text-[#721527]">Contact Us</a><a href="#gallery" className="hover:text-[#721527]">Gallery</a></div><p className="mt-5 text-sm text-[#805600]">© 2026 An &amp; Linh. Crafted with love.</p></footer>;
}

function Divider({ icon, align = "center" }: { icon: React.ReactNode; align?: "left" | "center" }) {
    return <div className={`flex items-center py-6 text-[#dca54c] ${align === "left" ? "justify-center md:justify-start" : "justify-center"}`}><span className="h-px w-16 bg-[#dca54c]/50 sm:w-24" /><span className="mx-4">{icon}</span><span className="h-px w-16 bg-[#dca54c]/50 sm:w-24" /></div>;
}
