"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { menu, nav, site } from "@/content";

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
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        window.addEventListener("keydown", onKey);
        // Freeze the page behind the panel so scrolling cannot leak through.
        document.body.style.overflow = open ? "hidden" : "";

        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
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

                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="menu-panel"
                        className="flex h-8 items-center gap-1.5 rounded-full bg-ink pr-3 pl-1 text-paper transition-opacity hover:opacity-85 md:h-9"
                    >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-paper text-ink md:h-7 md:w-7">
                            <motion.svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                aria-hidden
                                animate={{ rotate: open ? 45 : 0 }}
                                transition={{ duration: 0.4, ease: EASE }}
                            >
                                <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </motion.svg>
                        </span>
                        <span className="text-[11px]">{open ? "Close" : "Menu"}</span>
                    </button>

                    <div className="hidden items-center gap-3 rounded-full bg-haze px-4 py-2 md:flex">
                        {nav.tags.map((tag) => (
                            <span key={tag} className="text-[11px] text-dim">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <a
                    href="https://github.com/treoa"
                    target="_blank"
                    rel="noreferrer"
                    className="pointer-events-auto flex items-center gap-2 rounded-full bg-haze p-1 transition-colors hover:bg-edge md:pr-4"
                >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink md:h-8 md:w-8">
                        <DotGrid />
                    </span>
                    <span className="hidden text-[11px] text-dim md:inline">{nav.right}</span>
                </a>
            </motion.header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id="menu-panel"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="fixed inset-0 z-40 bg-paper"
                    >
                        <nav className="gutter flex h-full flex-col justify-center">
                            {menu.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noreferrer"
                                    onClick={() => setOpen(false)}
                                    initial={{ y: 24, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, delay: 0.08 + i * 0.06, ease: EASE }}
                                    className="flex min-h-16 items-center justify-between border-b border-edge py-4 text-[clamp(2rem,9vw,4.5rem)] leading-none font-light tracking-[-0.03em] transition-colors hover:text-dim"
                                >
                                    {item.label}
                                    <span className="text-[11px] text-dim">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
