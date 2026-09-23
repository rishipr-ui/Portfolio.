export type Project = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  tags: string[];
  imageLabel: string;
  imageSrc?: string;
  color: string;
  featured?: boolean;
  brief: string;
  briefDetail: string;
  process: string;
  processLabels: string[];
  processColors: string[];
  detailLead: string;
  detail: string;
  detailLabels: string[];
  detailColors: string[];
  outcome: string;
  outcomeDetail: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    slug: "pharma",
    name: "Pharma website",
    kicker: "01 / Featured project",
    description: "A healthcare site that turns a long list of services into a next step a person can actually find.",
    tags: ["Web design", "Healthcare", "2025"],
    imageLabel: "[ Pharma website screenshot ]",
    imageSrc: "/images/pharma-hero.png",
    color: "project-red",
    featured: true,
    brief: "A healthcare business needed a clearer digital front door.",
    briefDetail: "There were plenty of services to explain, and none of them benefited from being buried under a heroic amount of copy.",
    process: "The work focused on content structure, stronger wayfinding, and a visual system that knows when to stop talking.",
    processLabels: ["[ Sitemap / content structure ]", "[ Type + layout exploration ]", "[ Responsive direction ]"],
    processColors: ["project-neutral", "project-neutral", "project-neutral"],
    detailLead: "Clarity did most of the heavy lifting.",
    detail: "The useful action is easier to find when the interface is not competing with itself.",
    detailLabels: ["[ Homepage detail ]", "[ Service detail ]"],
    detailColors: ["project-neutral", "project-neutral"],
    outcome: "A calmer route to the information people came for.",
    outcomeDetail: "Placeholder case-study copy for now — swap in the final outcomes, metrics, and project screenshots when the assets are ready.",
    liveUrl: "https://example.com"
  },
  {
    slug: "unbiased",
    name: "Unbiased",
    kicker: "02 / Product design",
    description: "A resume analyzer that turns opaque scoring into feedback you can do something with.",
    tags: ["Product design", "AI"],
    imageLabel: "[ Unbiased interface ]",
    imageSrc: "/images/unbiased-dashboard.png",
    color: "project-violet",
    brief: "Resume feedback can feel like a black box, particularly when you are already unsure about the resume.",
    briefDetail: "Unbiased needed to explain its analysis clearly without turning the experience into another assessment to worry about.",
    process: "Pixel art gives the product a little personality. The feedback itself stays clear, scannable, and suitably unromantic.",
    processLabels: ["[ Pixel-art language ]", "[ Feedback states ]", "[ Interaction prototype ]"],
    processColors: ["project-neutral", "project-neutral", "project-neutral"],
    detailLead: "Useful, with a point of view.",
    detail: "The interface makes an opaque process easier to understand without pretending resumes are thrilling.",
    detailLabels: ["[ Analysis view ]", "[ Recommendation detail ]"],
    detailColors: ["project-neutral", "project-neutral"],
    outcome: "A clearer answer at a slightly stressful moment.",
    outcomeDetail: "Placeholder case-study copy for now — add the real product story, launch details, and live URL when available.",
    liveUrl: "https://example.com"
  },
  {
    slug: "velar-ai",
    name: "Velar AI",
    kicker: "03 / Interface system",
    description: "A dense AI dashboard that makes the important signal easier to find than the settings menu.",
    tags: ["SaaS", "UI system"],
    imageLabel: "[ Velar AI dashboard ]",
    imageSrc: "/images/velar-ai.png",
    color: "project-amber",
    brief: "A data-dense platform needed a steadier way to communicate what was happening.",
    briefDetail: "The product had plenty of capability. The interface needed to make that capability easier to find and harder to misread.",
    process: "The system is built around clear states, compact data views, and enough contrast to keep the important parts visible.",
    processLabels: ["[ Information architecture ]", "[ Component system ]", "[ Data view studies ]"],
    processColors: ["project-neutral", "project-neutral", "project-neutral"],
    detailLead: "The complexity can stay under the hood.",
    detail: "Advanced workflows have room to exist without making the everyday path feel like a cockpit.",
    detailLabels: ["[ Overview screen ]", "[ Detail state ]"],
    detailColors: ["project-neutral", "project-neutral"],
    outcome: "A dashboard that knows what deserves attention.",
    outcomeDetail: "Placeholder case-study copy for now — replace with the shipped product story and live URL.",
    liveUrl: "https://example.com"
  },
  {
    slug: "safeflow",
    name: "SafeFlow",
    kicker: "04 / Self-directed project",
    description: "A safety monitoring concept that makes the important signal easier to act on when everything else is noisy.",
    tags: ["Product design", "Safety", "Prototype"],
    imageLabel: "[ SafeFlow interface ]",
    color: "project-red",
    brief: "Safety teams needed a clearer way to see what required attention now.",
    briefDetail: "SafeFlow explores how alerts, context, and next steps can sit together without turning a serious workflow into another dashboard to decode.",
    process: "The direction focuses on hierarchy, calm states, and the smallest useful action at each moment.",
    processLabels: ["[ Alert hierarchy ]", "[ Monitoring flow ]", "[ Response states ]"],
    processColors: ["project-neutral", "project-neutral", "project-neutral"],
    detailLead: "Urgency works better with context.",
    detail: "The interface gives important events enough room to be understood before they become another notification to dismiss.",
    detailLabels: ["[ Monitoring view ]", "[ Incident detail ]"],
    detailColors: ["project-neutral", "project-neutral"],
    outcome: "A calmer interface for situations that are not calm.",
    outcomeDetail: "Self-directed case-study copy for now — replace with the shipped prototype, repository, or live product when available.",
    liveUrl: "https://example.com"
  },
  {
    slug: "diagnostic-center",
    name: "Diagnostic center",
    kicker: "05 / Web design",
    description: "A diagnostic site that turns booking, services, and results into one less thing to decode.",
    tags: ["Web design", "Healthcare"],
    imageLabel: "[ Diagnostic center website ]",
    imageSrc: "/images/diagnostic-center.png",
    color: "project-violet",
    brief: "Booking a diagnostic test should not require users to decode the website first.",
    briefDetail: "The direction helps patients understand services, book with confidence, and find results without a scavenger hunt.",
    process: "Clear service grouping, direct language, and a calmer visual system reduce the number of decisions at each step.",
    processLabels: ["[ Service architecture ]", "[ Mobile-first wireframe ]", "[ Booking journey ]"],
    processColors: ["project-neutral", "project-neutral", "project-neutral"],
    detailLead: "Necessary does not have to feel bureaucratic.",
    detail: "Practical information gets room to breathe, while the actions patients came to take stay in plain sight.",
    detailLabels: ["[ Service overview ]", "[ Booking flow ]"],
    detailColors: ["project-neutral", "project-neutral"],
    outcome: "A simpler path through a necessary task.",
    outcomeDetail: "Placeholder case-study copy for now — add the real project details and client URL when the assets are ready.",
    liveUrl: "https://example.com"
  },
  {
    slug: "github-pr-risk-analysis",
    name: "GitHub PR risk analysis automation",
    kicker: "06 / Automation",
    description: "An automated pull request risk analysis pipeline that evaluates structural risk signals across open PRs, generates AI-assisted technical insights, and delivers executive-level reports via Email and Slack.",
    tags: ["Automation", "Product design", "AI"],
    imageLabel: "[ GitHub PR risk analysis dashboard ]",
    color: "project-amber",
    brief: "Engineering teams needed a faster way to understand the risk hiding in an active pull request queue.",
    briefDetail: "The concept brings structural signals, AI-assisted technical analysis, and executive communication into one repeatable workflow.",
    process: "The pipeline turns repository data into a clear risk summary, then routes the right level of detail to technical and leadership audiences.",
    processLabels: ["[ PR signal model ]", "[ AI insight flow ]", "[ Email + Slack reporting ]"],
    processColors: ["project-neutral", "project-neutral", "project-neutral"],
    detailLead: "Risk is more useful when it arrives with context.",
    detail: "Instead of another raw status feed, the system highlights what changed, why it matters, and who needs to know.",
    detailLabels: ["[ Risk summary ]", "[ Executive report ]"],
    detailColors: ["project-neutral", "project-neutral"],
    outcome: "A clearer operating picture for every open pull request.",
    outcomeDetail: "Case-study copy for now — add the production workflow, measurable impact, and repository link when the project is ready to publish.",
    liveUrl: "https://github.com"
  }
];

export const featuredProject = projects.find((project) => project.featured) ?? projects[0];
export const clientProjects = projects.filter((project) => ["pharma", "diagnostic-center"].includes(project.slug));
export const independentProjects = projects.filter((project) => ["unbiased", "velar-ai", "safeflow", "github-pr-risk-analysis"].includes(project.slug));
