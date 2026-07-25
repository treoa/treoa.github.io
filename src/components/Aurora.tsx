"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { useEffect } from "react";

/**
 * Two slow-drifting colour washes behind the page. The larger one tracks the
 * pointer through motion values, so it never triggers a React re-render.
 */
export function Aurora() {
    const reduced = useReducedMotion();
    const px = useMotionValue(0.5);
    const py = useMotionValue(0.25);

    const x = useSpring(px, { stiffness: 40, damping: 20 });
    const y = useSpring(py, { stiffness: 40, damping: 20 });

    // Offset by half the blob width so it centres on the cursor rather than
    // hanging off its bottom-right.
    const left = useTransform(x, (v) => `calc(${v * 100}% - 35vmax)`);
    const top = useTransform(y, (v) => `calc(${v * 100}% - 35vmax)`);

    useEffect(() => {
        if (reduced) return;

        const onMove = (e: PointerEvent) => {
            px.set(e.clientX / window.innerWidth);
            py.set(e.clientY / window.innerHeight);
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, [px, py, reduced]);

    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <motion.div
                className="absolute h-[70vmax] w-[70vmax] rounded-full blur-[120px]"
                style={{
                    background: "radial-gradient(circle, rgba(255,77,46,0.18) 0%, transparent 65%)",
                    left,
                    top
                }}
            />
            <motion.div
                className="absolute -right-[20vmax] bottom-[-25vmax] h-[60vmax] w-[60vmax] rounded-full blur-[140px]"
                style={{ background: "radial-gradient(circle, rgba(90,110,255,0.14) 0%, transparent 65%)" }}
                animate={reduced ? undefined : { x: [0, -60, 0], y: [0, 40, 0] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}
