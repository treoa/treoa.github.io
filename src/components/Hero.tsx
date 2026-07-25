"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero, site } from "@/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
    const reduced = useReducedMotion();

    return (
        <section className="relative z-10 flex min-h-svh flex-col justify-between px-6 pt-8 pb-10 md:px-12 md:pb-14">
            <motion.div
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-between text-xs tracking-[0.18em] text-muted uppercase"
            >
                <span>{site.domain}</span>
                <span>{hero.location}</span>
            </motion.div>

            <h1 className="max-w-[16ch] text-[clamp(2.75rem,11vw,9rem)] leading-[0.92] font-medium tracking-[-0.04em]">
                {hero.headline.map((word, i) => (
                    // Each word gets its own clipping mask so it slides up from behind a hard edge.
                    <span key={`${word}-${i}`} className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                        <motion.span
                            className={
                                word === hero.emphasis
                                    ? "inline-block font-serif text-accent italic"
                                    : "inline-block"
                            }
                            initial={reduced ? false : { y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 0.15 + i * 0.08, ease: EASE }}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </h1>

            <motion.div
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
                className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
                <p className="max-w-sm text-balance text-muted">{hero.role}</p>
                <a
                    href="#work"
                    className="group inline-flex items-center gap-3 text-sm tracking-[0.14em] uppercase transition-colors hover:text-accent"
                >
                    Selected work
                    <span className="inline-block transition-transform duration-500 group-hover:translate-y-1">
                        &#8595;
                    </span>
                </a>
            </motion.div>
        </section>
    );
}
