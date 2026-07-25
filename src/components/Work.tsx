"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { projects, type Project } from "@/content";
import { Reveal } from "./Reveal";

export function Work() {
    return (
        <section id="work" className="relative z-10 px-6 py-24 md:px-12 md:py-36">
            <Reveal>
                <p className="mb-12 text-xs tracking-[0.18em] text-muted uppercase">Selected work</p>
            </Reveal>

            <ul className="rule">
                {projects.map((project, i) => (
                    <Reveal key={project.index} delay={i * 0.06}>
                        <Row project={project} />
                    </Reveal>
                ))}
            </ul>
        </section>
    );
}

function Row({ project }: { project: Project }) {
    const reduced = useReducedMotion();
    const [hovered, setHovered] = useState(false);

    return (
        <li className="rule">
            <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                onFocus={() => setHovered(true)}
                onBlur={() => setHovered(false)}
                className="relative block overflow-hidden px-2 py-8 md:py-10"
            >
                {/* Wipes in from the left on hover, sitting under the text. */}
                <motion.span
                    aria-hidden
                    className="absolute inset-0 origin-left bg-ink-soft"
                    initial={false}
                    animate={{ scaleX: hovered && !reduced ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />

                <div className="relative flex flex-col gap-4 md:flex-row md:items-baseline md:gap-10">
                    <span className="font-mono text-xs text-muted">{project.index}</span>

                    <motion.h2
                        className="flex-1 text-[clamp(1.6rem,4.5vw,3rem)] leading-tight font-medium tracking-[-0.03em]"
                        animate={{ x: hovered && !reduced ? 12 : 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {project.title}
                    </motion.h2>

                    <p className="max-w-xs text-sm text-balance text-muted">{project.blurb}</p>

                    <div className="flex shrink-0 items-center gap-3">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-line px-3 py-1 text-[0.7rem] tracking-wide text-muted"
                            >
                                {tag}
                            </span>
                        ))}
                        <span className="font-mono text-xs text-muted">{project.year}</span>
                    </div>
                </div>
            </a>
        </li>
    );
}
