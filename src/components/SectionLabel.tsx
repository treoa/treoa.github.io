"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Numbered section marker. The hairline draws across as the section arrives,
 * which is what signals a new block has started.
 */
export function SectionLabel({ n, title }: { n: string; title: string }) {
    const reduced = useReducedMotion();

    return (
        <motion.div
            initial="rest"
            whileInView="live"
            viewport={{ once: true, margin: "-15% 0px" }}
            className="flex items-baseline gap-4 text-[11px] tracking-[0.14em] text-dim uppercase"
        >
            <motion.span
                variants={{ rest: { opacity: reduced ? 1 : 0 }, live: { opacity: 1 } }}
                transition={{ duration: 0.5 }}
                className="text-ink"
            >
                {n}
            </motion.span>

            <motion.span
                variants={{ rest: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 8 }, live: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
                {title}
            </motion.span>

            <motion.span
                className="h-px flex-1 origin-left bg-edge"
                variants={{ rest: { scaleX: reduced ? 1 : 0 }, live: { scaleX: 1 } }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
        </motion.div>
    );
}
