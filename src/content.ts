/**
 * Every piece of copy on the site lives here. Nothing else needs editing.
 *
 * is-a.dev rejects sites that are "simple 'Hello, world!' or simply copied
 * template websites with minimal changes" (.github/PULL_REQUEST_TEMPLATE.md),
 * so replace each REPLACE marker with your own words before submitting.
 */

export const site = {
    domain: "treo.is-a.dev",
    title: "REPLACE — your name",
    description: "REPLACE — one sentence on what you build. Used for search results and link previews.",
    footnote: "REPLACE — e.g. Built with Next.js"
};

export const hero = {
    // Rendered as a per-word mask reveal, so keep it short. 3-5 words reads best.
    headline: ["REPLACE", "your", "headline"],
    // Whichever headline word matches this string is set in italic serif.
    emphasis: "your",
    role: "REPLACE — a sentence or two on what you do and what you want to be contacted about.",
    location: "REPLACE — city",
    cta: "Index"
};

export const about = {
    heading: "About",
    body: [
        "REPLACE — first paragraph. What you work on, and why it interests you.",
        "REPLACE — second paragraph. What you are building now, or what you are looking for."
    ]
};

export type Project = {
    index: string;
    title: string;
    blurb: string;
    tags: string[];
    year: string;
    href: string;
};

/** Add or remove entries freely; the list renders whatever length it is. */
export const projects: Project[] = [
    {
        index: "01",
        title: "REPLACE — name",
        blurb: "REPLACE — one line on what it does and the problem it solves.",
        tags: ["REPLACE"],
        year: "2026",
        href: "#"
    },
    {
        index: "02",
        title: "REPLACE — name",
        blurb: "REPLACE — one line on what it does and the problem it solves.",
        tags: ["REPLACE"],
        year: "2026",
        href: "#"
    },
    {
        index: "03",
        title: "REPLACE — name",
        blurb: "REPLACE — one line on what it does and the problem it solves.",
        tags: ["REPLACE"],
        year: "2026",
        href: "#"
    }
];

/** Scrolling strip between the hero and the index. Short words work best. */
export const marquee = ["REPLACE", "your", "keywords", "here"];

export const links = [
    { label: "GitHub", href: "https://github.com/treoa" },
    { label: "Email", href: "mailto:suleymenov.anuar.01@gmail.com" }
];
