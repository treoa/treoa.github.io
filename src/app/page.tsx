import { Backdrop } from "@/components/Backdrop";
import { ScrollRail } from "@/components/ScrollRail";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Index } from "@/components/Index";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { marquee } from "@/content";

export default function Home() {
    return (
        <>
            <ScrollRail />
            <Backdrop />
            <main>
                <Hero />
                <Marquee items={marquee} />
                <Index />
                <About />
            </main>
            <Footer />
        </>
    );
}
