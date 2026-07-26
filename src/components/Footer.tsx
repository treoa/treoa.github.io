import { links, site } from "@/content";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Footer() {
    return (
        <footer id="contact" className="gutter relative z-10 pt-20 pb-10 md:pt-32 md:pb-14">
            <SectionLabel n="03" title="Contact" />

            <Reveal>
                <nav className="mt-8 flex flex-col md:mt-12">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            className="rule flex min-h-16 items-center justify-between py-5 text-[clamp(1.5rem,5vw,2.5rem)] font-medium tracking-[-0.03em] transition-colors hover:text-accent"
                        >
                            {link.label}
                            <span className="font-mono text-xs text-muted">&#8599;</span>
                        </a>
                    ))}
                </nav>
            </Reveal>

            <div className="mt-12 flex flex-col gap-2 font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase md:flex-row md:justify-between md:text-xs">
                <span>{site.domain}</span>
                <span>{site.footnote}</span>
            </div>
        </footer>
    );
}
