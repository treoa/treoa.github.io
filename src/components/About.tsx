import { about } from "@/content";
import { Reveal } from "./Reveal";

export function About() {
    return (
        <section id="about" className="relative z-10 px-6 py-24 md:px-12 md:py-36">
            <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
                <Reveal>
                    <h2 className="text-xs tracking-[0.18em] text-muted uppercase">{about.heading}</h2>
                </Reveal>

                <div className="space-y-6">
                    {about.body.map((paragraph, i) => (
                        <Reveal key={i} delay={i * 0.08}>
                            <p className="text-[clamp(1.1rem,2.2vw,1.6rem)] leading-relaxed text-balance">
                                {paragraph}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
