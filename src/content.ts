/**
 * Every piece of copy on the site lives here. Nothing else needs editing.
 *
 * is-a.dev rejects sites that are "simple 'Hello, world!' or simply copied
 * template websites with minimal changes" (.github/PULL_REQUEST_TEMPLATE.md),
 * so replace each REPLACE marker with your own words before submitting.
 */

export const site = {
    domain: "treo.is-a.dev",
    brand: "REPLACE — your name",
    title: "REPLACE — your name",
    description: "REPLACE — one sentence on what you build. Used for search results and link previews."
};

export const nav = {
    // Two short labels in the pill beside the logo. Hidden below 768px.
    tags: ["REPLACE", "REPLACE"],
    // Label on the right-hand pill. Hidden below 768px.
    right: "REPLACE"
};

export const hero = {
    // Small line above the heading.
    eyebrow: "REPLACE — a short positioning line",
    // Rendered on two lines exactly as written.
    headline: ["REPLACE — first line,", "second line."],
    actions: [
        { label: "REPLACE", href: "#index", primary: true },
        { label: "REPLACE", href: "#about", primary: false }
    ],
    // Three pills on the right of the hero footer.
    pills: ["REPLACE", "REPLACE", "REPLACE"],
    /**
     * Optional. Drop a file at public/hero.mp4 and set this to "/hero.mp4".
     * Leave null and the animated fallback is used instead. Self-host it; do
     * not hotlink someone else's CDN, it can be revoked without warning.
     */
    video: null as string | null
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

export const links = [
    { label: "GitHub", href: "https://github.com/treoa" },
    { label: "Email", href: "mailto:suleymenov.anuar.01@gmail.com" }
];
