"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Dot matrix with a soft spotlight punched through it.
 *
 * On a mouse the spotlight tracks the pointer. Touch devices have no pointer,
 * so it drifts on its own instead of sitting frozen in the corner.
 */
export function Backdrop() {
    const reduced = useReducedMotion();
    const [hasPointer, setHasPointer] = useState(false);

    const px = useMotionValue(0.5);
    const py = useMotionValue(0.3);
    const x = useSpring(px, { stiffness: 45, damping: 22 });
    const y = useSpring(py, { stiffness: 45, damping: 22 });

    const left = useTransform(x, (v) => `calc(${v * 100}% - 45vmax)`);
    const top = useTransform(y, (v) => `calc(${v * 100}% - 45vmax)`);

    useEffect(() => {
        const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
        setHasPointer(fine.matches);

        const onChange = (e: MediaQueryListEvent) => setHasPointer(e.matches);
        fine.addEventListener("change", onChange);
        return () => fine.removeEventListener("change", onChange);
    }, []);

    useEffect(() => {
        if (!hasPointer || reduced) return;

        const onMove = (e: PointerEvent) => {
            px.set(e.clientX / window.innerWidth);
            py.set(e.clientY / window.innerHeight);
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
    }, [hasPointer, px, py, reduced]);

    return (
        <>
            <div aria-hidden className="matrix" />
            <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <motion.div
                    className="absolute h-[90vmax] w-[90vmax] rounded-full blur-[100px]"
                    style={{
                        background: "radial-gradient(circle, rgba(255,77,46,0.16) 0%, transparent 62%)",
                        left: hasPointer ? left : "-15vmax",
                        top: hasPointer ? top : "-25vmax"
                    }}
                    animate={hasPointer || reduced ? undefined : { x: ["0vw", "55vw", "0vw"], y: ["0vh", "30vh", "0vh"] }}
                    transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </>
    );
}
