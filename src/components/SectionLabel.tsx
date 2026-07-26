import { Reveal } from "./Reveal";

/** Numbered section marker, matching the monospace metadata rails elsewhere. */
export function SectionLabel({ n, title }: { n: string; title: string }) {
    return (
        <Reveal>
            <div className="flex items-baseline gap-4 font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase md:text-xs">
                <span className="text-accent">{n}</span>
                <span>{title}</span>
                <span className="h-px flex-1 bg-line" />
            </div>
        </Reveal>
    );
}
