import { links, site } from "@/content";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Footer() {
    return (
        <footer id="contact" className="gutter relative z-10 pt-20 pb-10 md:pt-32 md:pb-14">
            <SectionLabel n="03" title="Contact" />

            <Reveal>
                <nav className="mt-8 flex flex-col border-t border-edge md:mt-12">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="flex min-h-16 items-center justify-between border-b border-edge py-5 text-[clamp(1.5rem,5vw,2.5rem)] font-light tracking-[-0.03em] transition-colors hover:text-dim"
                        >
                            {link.label}
                            <span className="text-[11px] text-dim">&#8599;</span>
                        </a>
                    ))}
                </nav>
            </Reveal>

            <div className="mt-12 flex flex-col gap-2 text-[11px] tracking-[0.14em] text-dim uppercase md:flex-row md:justify-between">
                <span>{site.domain}</span>
                <span>{site.brand}</span>
            </div>
        </footer>
    );
}
