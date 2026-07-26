"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero, site } from "@/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
    const reduced = useReducedMotion();

    return (
        <section className="gutter relative z-10 flex min-h-svh flex-col justify-between pt-6 pb-8 md:pt-10 md:pb-12">
            <motion.div
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-between font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase md:text-xs"
            >
                <span>{site.domain}</span>
                <span className="text-right">{hero.location}</span>
            </motion.div>

            <h1 className="py-10 text-[clamp(3rem,13vw,10rem)] leading-[0.88] font-medium tracking-[-0.045em] md:py-0">
                {hero.headline.map((word, i) => (
                    // Each word clips its own reveal, so it slides up from a hard edge.
                    <span
                        key={`${word}-${i}`}
                        className="mr-[0.2em] inline-block overflow-hidden pb-[0.09em] align-bottom"
                    >
                        <motion.span
                            className={
                                word === hero.emphasis ? "inline-block font-serif text-accent italic" : "inline-block"
                            }
                            initial={reduced ? false : { y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 0.15 + i * 0.07, ease: EASE }}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </h1>

            <motion.div
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
                className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between"
            >
                <p className="max-w-md text-base text-pretty text-muted md:text-lg">{hero.role}</p>

                {/* min-h-11 keeps this at Apple's 44px minimum tap target. */}
                <a
                    href="#index"
                    className="group inline-flex min-h-11 shrink-0 items-center gap-3 font-mono text-xs tracking-[0.16em] uppercase transition-colors hover:text-accent"
                >
                    {hero.cta}
                    <span className="inline-block transition-transform duration-500 group-hover:translate-y-1">
                        &#8595;
                    </span>
                </a>
            </motion.div>
        </section>
    );
}
