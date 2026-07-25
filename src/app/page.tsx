import { Aurora } from "@/components/Aurora";
import { ScrollRail } from "@/components/ScrollRail";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <>
            <ScrollRail />
            <Aurora />
            <main>
                <Hero />
                <Work />
                <About />
            </main>
            <Footer />
        </>
    );
}
