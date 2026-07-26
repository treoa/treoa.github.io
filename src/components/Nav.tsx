"use client";

import { motion } from "motion/react";
import { nav, site } from "@/content";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Two rounded bars rotated off-axis. Inline so the mark ships with no icon dependency. */
function Mark() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden className="shrink-0">
            <g transform="rotate(-35 12 12)">
                <rect x="4" y="3" width="6" height="18" rx="3" fill="currentColor" />
                <rect x="13" y="7" width="6" height="14" rx="3" fill="currentColor" />
            </g>
        </svg>
    );
}

function DotGrid() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
            {[2, 8].map((cy) => [2, 8].map((cx) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.4" fill="#fff" />))}
        </svg>
    );
}

export function Nav() {
    return (
        <motion.header
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: EASE }}
            // pointer-events-none lets clicks fall through the bar itself; each
            // child re-enables them, so the hero stays interactive underneath.
            className="gutter pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between py-4 md:py-6"
        >
            <div className="pointer-events-auto flex items-center gap-2 md:gap-3">
                <a href="#top" className="flex items-center gap-2" aria-label={site.brand}>
                    <Mark />
                    <span className="hidden text-sm font-medium tracking-[-0.01em] md:inline">{site.brand}</span>
                </a>

                <a
                    href="#index"
                    className="flex h-8 items-center gap-1.5 rounded-full bg-ink pr-3 pl-1 text-paper md:h-9"
                >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-paper text-ink md:h-7 md:w-7">
                        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </span>
                    <span className="text-[11px]">Menu</span>
                </a>

                <div className="hidden items-center gap-3 rounded-full bg-haze px-4 py-2 md:flex">
                    {nav.tags.map((tag) => (
                        <span key={tag} className="text-[11px] text-dim">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="pointer-events-auto flex items-center">
                <div className="flex items-center gap-2 rounded-full bg-haze py-1 pr-1 pl-1 md:pr-4">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink md:h-8 md:w-8">
                        <DotGrid />
                    </span>
                    <span className="hidden text-[11px] text-dim md:inline">{nav.right}</span>
                </div>
            </div>
        </motion.header>
    );
}
