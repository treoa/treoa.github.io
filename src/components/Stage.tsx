"use client";

import { motion } from "motion/react";
import { hero } from "@/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Slides up from y with the shared easing; delays match the spec's cascade. */
const rise = (delay: number, y = 16) => ({
    initial: { y, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay, ease: EASE }
});

export function Stage() {
    return (
        <section id="top" className="relative flex min-h-svh flex-col justify-between overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.8, ease: EASE }}
                // 80% inset on mobile so the media reads as a framed panel; full
                // bleed from 768px, per the layout spec.
                className="absolute inset-0 z-0 flex items-center justify-center"
            >
                <div className="relative h-[80%] w-[80%] overflow-hidden md:h-full md:w-full">
                    {hero.video ? (
                        <video
                            className="h-full w-full object-cover"
                            src={hero.video}
                            autoPlay
                            muted
                            playsInline
                            loop
                        />
                    ) : (
                        <div className="grid-paper relative h-full w-full">
                            <div className="sweep absolute inset-[-25%]" />
                        </div>
                    )}
                </div>
            </motion.div>

            <div />

            <motion.div
                {...rise(0.5, 20)}
                className="fade-up gutter relative z-30 flex flex-col gap-8 pt-24 pb-8 md:flex-row md:items-end md:justify-between md:pb-12"
            >
                <div className="max-w-3xl">
                    <motion.div {...rise(0.6)} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-ink" />
                        <span className="text-[13px] text-dim">{hero.eyebrow}</span>
                    </motion.div>

                    <motion.h1
                        {...rise(0.8, 20)}
                        className="mt-4 text-[clamp(2rem,8vw,4.5rem)] leading-none font-light tracking-[-0.03em] md:text-[clamp(2.5rem,5.5vw,4.5rem)]"
                    >
                        {hero.headline.map((line) => (
                            <span key={line} className="block">
                                {line}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.div {...rise(1)} className="mt-7 flex flex-wrap gap-3">
                        {hero.actions.map((action) => (
                            <a
                                key={action.label}
                                href={action.href}
                                className={
                                    action.primary
                                        ? "inline-flex min-h-11 items-center rounded-full bg-ink px-6 text-[13px] text-paper transition-opacity hover:opacity-80"
                                        : "inline-flex min-h-11 items-center rounded-full border border-edge-strong px-6 text-[13px] transition-colors hover:bg-haze"
                                }
                            >
                                {action.label}
                            </a>
                        ))}
                    </motion.div>
                </div>

                <motion.div {...rise(1.1)} className="flex flex-wrap gap-2">
                    {hero.pills.map((pill) => (
                        <span
                            key={pill}
                            className="rounded-full border border-edge bg-paper px-3 py-1.5 text-[11px] text-dim"
                        >
                            {pill}
                        </span>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
