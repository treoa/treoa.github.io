"use client";

import { motion, useReducedMotion } from "motion/react";
import { projects, type Project } from "@/content";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Index() {
    return (
        <section id="index" className="gutter relative z-10 py-20 md:py-32">
            <SectionLabel n="01" title="Index" />

            <ul className="rule mt-8 md:mt-12">
                {projects.map((project, i) => (
                    <Reveal key={project.index} delay={i * 0.05}>
                        <Row project={project} />
                    </Reveal>
                ))}
            </ul>
        </section>
    );
}

function Row({ project }: { project: Project }) {
    const reduced = useReducedMotion();

    return (
        <li className="rule">
            <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden py-7 md:py-9"
            >
                {/* Hover wipe. Scales from nothing on desktop; touch devices never
                    trigger :hover, so the row simply stays flat there. */}
                <span className="absolute inset-0 origin-left scale-x-0 bg-ink-soft transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

                <div className="relative flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
                    <div className="flex items-baseline gap-4 md:gap-8">
                        <span className="font-mono text-xs text-accent">{project.index}</span>
                        <motion.h3
                            className="text-[clamp(1.5rem,5.5vw,2.75rem)] leading-tight font-medium tracking-[-0.03em] md:flex-1"
                            whileHover={reduced ? undefined : { x: 10 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {project.title}
                        </motion.h3>
                    </div>

                    <p className="max-w-sm text-sm text-pretty text-muted md:ml-auto">{project.blurb}</p>

                    <div className="flex shrink-0 flex-wrap items-center gap-2 md:gap-3">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-muted"
                            >
                                {tag}
                            </span>
                        ))}
                        <span className="font-mono text-[0.65rem] text-muted">{project.year}</span>
                    </div>
                </div>
            </a>
        </li>
    );
}
