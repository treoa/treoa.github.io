"use client";

import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity, useReducedMotion } from "motion/react";
import { useRef } from "react";

/**
 * Strip of text that always drifts left, speeds up with scroll velocity, and
 * flips direction when you scroll up.
 *
 * Driven by scroll rather than hover, so it behaves identically on touch.
 */
export function Marquee({ items }: { items: string[] }) {
    const reduced = useReducedMotion();
    const baseX = useMotionValue(0);

    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smooth = useSpring(scrollVelocity, { damping: 50, stiffness: 300 });
    const factor = useTransform(smooth, [-1200, 0, 1200], [-4, 1, 4], { clamp: false });

    // Repeated four times below, so one copy is 25% of the track.
    const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
    const direction = useRef(1);

    useAnimationFrame((_, delta) => {
        if (reduced) return;

        const f = factor.get();
        if (f < 0) direction.current = -1;
        else if (f > 0) direction.current = 1;

        // 2.4%/s baseline drift, scaled by how hard the user is scrolling.
        baseX.set(baseX.get() + direction.current * 2.4 * (delta / 1000) * Math.abs(f));
    });

    return (
        <div aria-hidden className="rule relative z-10 flex overflow-hidden py-5 select-none md:py-7">
            <motion.div className="flex whitespace-nowrap" style={{ x }}>
                {[0, 1, 2, 3].map((copy) => (
                    <span key={copy} className="flex shrink-0">
                        {items.map((item, i) => (
                            <span
                                key={`${copy}-${i}`}
                                className="flex items-center text-[clamp(1.1rem,3.5vw,2rem)] tracking-[-0.02em]"
                            >
                                <span className="px-4 md:px-7">{item}</span>
                                <span className="text-accent">&#9679;</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

/** Wraps v into [min, max) so the track loops seamlessly. */
function wrap(min: number, max: number, v: number) {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
}
