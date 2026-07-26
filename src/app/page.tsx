import { Nav } from "@/components/Nav";
import { Stage } from "@/components/Stage";
import { Index } from "@/components/Index";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Nav />
            <main>
                <Stage />
                <Index />
                <About />
            </main>
            <Footer />
        </>
    );
}
