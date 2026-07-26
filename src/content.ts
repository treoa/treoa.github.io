/**
 * Every piece of copy on the site lives here.
 *
 * Project blurbs were written from the repositories themselves (READMEs, file
 * trees, and config files), not from assumption. Anything that could not be
 * confirmed from source was left out rather than guessed at: the KOHTD entry
 * describes what the code does and does not expand the acronym, because no
 * file in that repo states it.
 */

export const site = {
    domain: "treo.is-a.dev",
    brand: "Anuar Suleimenov",
    title: "Anuar Suleimenov",
    description:
        "Applied machine learning for vision and language: face benchmarks, handwriting recognition, retrieval, and multi-agent systems."
};

export const nav = {
    // Two short labels in the pill beside the logo. Hidden below 768px.
    tags: ["Computer vision", "Applied ML"],
    // Label on the right-hand pill. Hidden below 768px.
    right: "Research & engineering"
};

export const menu = [
    { label: "Selected work", href: "#index" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "GitHub", href: "https://github.com/treoa" }
];

export const hero = {
    eyebrow: "Machine learning engineer",
    // Rendered on two lines exactly as written.
    headline: ["Applied machine learning", "for vision and language."],
    actions: [
        { label: "Selected work", href: "#index", primary: true },
        { label: "About", href: "#about", primary: false }
    ],
    pills: ["Computer vision", "Retrieval", "Multi-agent"],
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
        "I build machine learning systems and probe how they behave on data that is not clean: face recognition benchmarks split across demographic groups, handwritten pages that need restoring before they can be read, and clinical text where being confidently wrong is the failure mode that matters. Most of it is Python.",
        "Lately that has meant retrieval over official medical protocols using open-weight models only, and orchestration layers that split a single task across several cooperating agents. Everything listed here is personal and research work, published openly and run non-commercially."
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
        title: "Datasaur",
        blurb: "Maps free-text patient symptoms to ranked ICD-10 diagnoses. Hybrid BM25 and FAISS retrieval over Kazakhstan clinical protocols, running on GPT-OSS with no external inference APIs.",
        tags: ["Retrieval", "LLM"],
        year: "2026",
        href: "https://github.com/treoa/qazcode-datasaur"
    },
    {
        index: "02",
        title: "Browsing Agent",
        blurb: "Web research split across executive, research, analysis, and critique agents sharing a single message manager.",
        tags: ["Multi-agent", "Python"],
        year: "2025",
        href: "https://github.com/treoa/custom_browsing_agent"
    },
    {
        index: "03",
        title: "RFW Analysis",
        blurb: "Analysis over a face benchmark partitioned into Asian, Indian, African, and Caucasian subsets, with gender prediction and plotting to surface where models behave unevenly.",
        tags: ["Computer vision", "Fairness"],
        year: "2025",
        href: "https://github.com/treoa/bupt_rfw_analysis"
    },
    {
        index: "04",
        title: "KOHTD",
        blurb: "Handwritten text recognition over greyscale page crops, comparing two architectures with an image restoration stage in front of them.",
        tags: ["Handwriting", "Deep learning"],
        year: "2022",
        href: "https://github.com/treoa/kohtd-hwr"
    },
    {
        index: "05",
        title: "Midjourney Augmentation",
        blurb: "Drives Midjourney's imagine and describe calls through Discord to generate face image variations for dataset augmentation.",
        tags: ["Automation", "Datasets"],
        year: "2024",
        href: "https://github.com/treoa/midjourney_augmentation"
    }
];

export const links = [
    { label: "GitHub", href: "https://github.com/treoa" },
    { label: "Email", href: "mailto:suleymenov.anuar.01@gmail.com" }
];
