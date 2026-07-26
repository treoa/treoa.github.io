import { projects } from "@/content";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Index() {
    return (
        <section id="index" className="gutter relative z-10 py-20 md:py-32">
            <SectionLabel n="01" title="Selected work" />

            <ul className="mt-8 border-t border-edge md:mt-12">
                {projects.map((project, i) => (
                    <Reveal key={project.index} delay={i * 0.05}>
                        <li className="border-b border-edge">
                            <a
                                href={project.href}
                                target={project.href.startsWith("http") ? "_blank" : undefined}
                                rel="noreferrer"
                                className="group flex flex-col gap-3 py-7 transition-colors hover:bg-haze md:flex-row md:items-baseline md:gap-8 md:px-3"
                            >
                                <div className="flex items-baseline gap-4 md:gap-8">
                                    <span className="text-[11px] text-dim">{project.index}</span>
                                    <h3 className="text-[clamp(1.4rem,5vw,2.25rem)] leading-tight font-light tracking-[-0.03em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="max-w-sm text-sm text-pretty text-dim md:ml-auto">{project.blurb}</p>

                                <div className="flex shrink-0 flex-wrap items-center gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-edge px-3 py-1 text-[11px] text-dim"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    <span className="text-[11px] text-dim">{project.year}</span>
                                </div>
                            </a>
                        </li>
                    </Reveal>
                ))}
            </ul>
        </section>
    );
}
