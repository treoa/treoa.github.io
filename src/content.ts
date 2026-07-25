/**
 * Every piece of copy on the site lives here.
 *
 * is-a.dev rejects sites that are "simple 'Hello, world!' or simply copied
 * template websites with minimal changes" (.github/PULL_REQUEST_TEMPLATE.md).
 * Replace every TODO below before opening the registration PR.
 */

export const site = {
    domain: "treo.is-a.dev",
    title: "TODO — Anuar Suleimenov",
    description: "TODO — one sentence describing what you build. Used for SEO and link previews."
};

export const hero = {
    // Rendered as a per-word mask reveal, so keep it short; 4-8 words reads best.
    headline: ["TODO", "your", "headline", "here"],
    // The italic serif word inside the headline, matched by string.
    emphasis: "your",
    role: "TODO — your role",
    location: "TODO — city, country"
};

export const about = {
    heading: "TODO — section heading",
    body: [
        "TODO — first paragraph. Two or three sentences on what you work on and why.",
        "TODO — second paragraph. What you are building right now, or what you want to be hired for."
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

export const projects: Project[] = [
    {
        index: "01",
        title: "TODO — project name",
        blurb: "TODO — one line on what it does and what problem it solves.",
        tags: ["TODO", "TODO"],
        year: "TODO",
        href: "https://github.com/treoa"
    },
    {
        index: "02",
        title: "TODO — project name",
        blurb: "TODO — one line on what it does and what problem it solves.",
        tags: ["TODO", "TODO"],
        year: "TODO",
        href: "https://github.com/treoa"
    },
    {
        index: "03",
        title: "TODO — project name",
        blurb: "TODO — one line on what it does and what problem it solves.",
        tags: ["TODO", "TODO"],
        year: "TODO",
        href: "https://github.com/treoa"
    },
    {
        index: "04",
        title: "TODO — project name",
        blurb: "TODO — one line on what it does and what problem it solves.",
        tags: ["TODO", "TODO"],
        year: "TODO",
        href: "https://github.com/treoa"
    }
];

export const links = [
    { label: "GitHub", href: "https://github.com/treoa" },
    { label: "Email", href: "mailto:suleymenov.anuar.01@gmail.com" },
    { label: "TODO", href: "#" }
];
