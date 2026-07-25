"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin progress bar pinned to the top of the viewport. */
export function ScrollRail() {
    const { scrollYProgress } = useScroll();

    // Spring keeps the bar from jittering on trackpad momentum scrolling.
    const width = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <motion.div
            aria-hidden
            style={{ scaleX: width }}
            className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-accent"
        />
    );
}
