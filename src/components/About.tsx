import { about } from "@/content";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function About() {
    return (
        <section id="about" className="gutter relative z-10 py-20 md:py-32">
            <SectionLabel n="02" title={about.heading} />

            <div className="mt-8 grid gap-6 md:mt-14 md:grid-cols-[1fr_1.6fr] md:gap-16">
                <div />
                <div className="space-y-6">
                    {about.body.map((paragraph, i) => (
                        <Reveal key={i} delay={i * 0.08}>
                            <p className="text-[clamp(1.05rem,2.4vw,1.5rem)] leading-relaxed text-pretty">
                                {paragraph}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
