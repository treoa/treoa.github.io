import { links, site } from "@/content";
import { Reveal } from "./Reveal";

export function Footer() {
    return (
        <footer className="relative z-10 rule px-6 py-16 md:px-12 md:py-20">
            <Reveal>
                <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                    <nav className="flex flex-wrap gap-x-8 gap-y-3">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel="noreferrer"
                                className="group relative text-lg"
                            >
                                {link.label}
                                {/* Underline grows from the left on hover. */}
                                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
                            </a>
                        ))}
                    </nav>

                    <p className="text-xs tracking-[0.18em] text-muted uppercase">{site.domain}</p>
                </div>
            </Reveal>
        </footer>
    );
}
