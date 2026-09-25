export type Project = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  tags: string[];
  imageLabel: string;
  imageSrc?: string;
  additionalImages?: string[];
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
  githubUrl: string;
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rishipr-ui"
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rishipr-ui"
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rishipr-ui"
  },
  {
    slug: "safeflow",
    name: "SafeFlow",
    kicker: "04 / Self-directed project",
    description: "A safety monitoring concept that makes the important signal easier to act on when everything else is noisy.",
    tags: ["Product design", "Safety", "Prototype"],
    imageLabel: "[ SafeFlow interface ]",
    imageSrc: "/images/safeflow.png",
    color: "project-red",
    featured: true,
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rishipr-ui"
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rishipr-ui"
  },
  {
    slug: "github-pr-risk-analysis",
    name: "GitHub PR risk analysis automation",
    kicker: "06 / Automation",
    description: "An automated pull request risk analysis pipeline that evaluates structural risk signals across open PRs, generates AI-assisted technical insights, and delivers executive-level reports via Email and Slack.",
    tags: ["Automation", "Product design", "AI"],
    imageLabel: "[ GitHub PR risk analysis dashboard ]",
    imageSrc: "/images/github-pr-risk.png",
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
    liveUrl: "https://github.com",
    githubUrl: "https://github.com/rishipr-ui"
  },
  {
    slug: "agrowatch",
    name: "AgroWatch",
    kicker: "07 / SIH 2025",
    description: "A farm biosecurity monitoring platform for poultry and pig farms, built to support compliance and early disease-risk tracking.",
    tags: ["React", "TypeScript", "Supabase", "TailwindCSS", "SIH 2025"],
    imageLabel: "[ AgroWatch platform ]",
    imageSrc: "/images/agrowatch.png",
    additionalImages: ["/images/agrowatch2.png"],
    color: "project-violet",
    brief: "Farm teams needed a clearer way to monitor biosecurity conditions across sheds and operations.",
    briefDetail: "AgroWatch brings farm profiles, shed monitoring, and operational data into one secure dashboard so risks can be identified earlier and tracked more consistently.",
    process: "The platform combines a practical monitoring workflow with a full-stack data model designed around real farm operations.",
    processLabels: ["[ Farm profiles ]", "[ Shed monitoring ]", "[ Risk tracking ]"],
    processColors: ["project-neutral", "project-neutral", "project-neutral"],
    detailLead: "Biosecurity is easier to act on when the data is together.",
    detail: "Secure authentication and real-time Supabase data management give teams a dependable view of farm conditions, compliance activity, and emerging risks.",
    detailLabels: ["[ Monitoring dashboard ]", "[ Farm operations ]"],
    detailColors: ["project-neutral", "project-neutral"],
    outcome: "Earlier visibility into livestock biosecurity risks.",
    outcomeDetail: "Built for SIH 2025 as a digital monitoring system supporting poultry and pig farms.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rishipr-ui"
  },
  {
    slug: "arbiticker",
    name: "ARBITICKER",
    kicker: "08 / Agentic AI",
    description: "An agentic AI stock decision engine that stages a courtroom-style debate between Bull, Bear, and Quant agents before producing a verdict.",
    tags: ["Python", "FastAPI", "Vite", "Groq", "DeepSeek", "yfinance"],
    imageLabel: "[ ARBITICKER stock dashboard ]",
    imageSrc: "/images/arbiticker1.png",
    additionalImages: ["/images/arbiticker2.png"],
    color: "project-amber",
    brief: "Stock analysis needed to show opposing perspectives instead of hiding every assumption behind one recommendation.",
    briefDetail: "ARBITICKER makes the reasoning visible by asking Bull, Bear, and Quant agents to debate market data before a deterministic engine issues a BUY, HOLD, or SELL verdict.",
    process: "The system separates agent-generated perspectives from the final rules-based decision, making the analysis both more expressive and easier to inspect.",
    processLabels: ["[ Multi-agent debate ]", "[ Quantitative signals ]", "[ Verdict engine ]"],
    processColors: ["project-neutral", "project-neutral", "project-neutral"],
    detailLead: "Different opinions, one accountable decision.",
    detail: "A FastAPI backend exposes stock analysis, profiles, and watchlists while the Vite dashboard lets users investigate tickers and manage AI-assisted investment workflows.",
    detailLabels: ["[ Agent analysis ]", "[ Watchlist dashboard ]"],
    detailColors: ["project-neutral", "project-neutral"],
    outcome: "A more transparent path from market data to investment verdict.",
    outcomeDetail: "The engine combines Groq and DeepSeek perspectives with yfinance data and deterministic quantitative thresholds.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rishipr-ui"
  },
  {
    slug: "vortiq-x",
    name: "VortiqX",
    kicker: "09 / Security tooling",
    description: "An AI-powered security vulnerability scanner for identifying web misconfigurations, SSL issues, and common application vulnerabilities.",
    tags: ["Python", "Flask", "OpenAI API", "OWASP ZAP", "2025"],
    imageLabel: "[ VortiqX security scan ]",
    imageSrc: "/images/vortiq-X.png",
    color: "project-violet",
    brief: "Website security reports are more useful when they explain both the risk and what to do next.",
    briefDetail: "VortiqX scans URLs for security misconfigurations, SSL issues, and common web vulnerabilities, then organizes the findings into a readable risk report.",
    process: "The platform combines automated checks with AI-assisted explanations so technical findings are easier to understand and act on.",
    processLabels: ["[ Security headers ]", "[ Vulnerability checks ]", "[ AI remediation ]"],
    processColors: ["project-neutral", "project-neutral", "project-neutral"],
    detailLead: "A scan should end with a next step.",
    detail: "HTTP security header validation, directory traversal testing, XSS protection checks, and OWASP ZAP integration provide the technical signals while OpenAI adds contextual explanations and remediation guidance.",
    detailLabels: ["[ Scan results ]", "[ Risk reporting ]"],
    detailColors: ["project-neutral", "project-neutral"],
    outcome: "Clearer security feedback from a single URL scan.",
    outcomeDetail: "A responsive Flask-based security platform designed for real-time vulnerability scanning and categorized reporting.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rishipr-ui"
  }
];

export const featuredProject = projects.find((project) => project.featured) ?? projects[0];
export const clientProjects = projects.filter((project) => ["pharma", "diagnostic-center"].includes(project.slug));
export const designProjects = projects.filter((project) => [
  "unbiased",
  "velar-ai"
].includes(project.slug));
export const actualProjects = projects.filter((project) => [
  "arbiticker",
  "safeflow",
  "github-pr-risk-analysis",
  "agrowatch",
  "vortiq-x"
].includes(project.slug));
