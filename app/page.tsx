import Link from "next/link";
import { HeroObject } from "@/components/hero-object";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
import { HighlightText } from "@/components/highlight-text";
import { clientProjects, featuredProject, independentProjects } from "@/lib/projects";

const heroOptions = [
  "I design products people actually want to use.",
  "I make complicated products easier to use.",
  "I move between the sharp idea and the shipped thing. Usually, the difficult bit is in the middle."
];

const heroSubtextOptions = [
  "Different problem, same instinct: make the complicated part easier to use.",
  "I work on products with a lot going on, then remove just enough of it.",
  "I take complicated systems from first flow to working product. The handoff is usually to me."
];

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="home-hero section-pad">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow accent">Designer / builder · 2025—26</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>{heroOptions[0]}</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="hero-foot">
                <p>
                  {heroSubtextOptions[0]}
                </p>
                <Link className="line-link" href="#projects">
                  Explore the projects <span>↘</span>
                </Link>
              </div>
            </Reveal>
          </div>
          <HeroObject />
        </section>

        <section className="work-section section-pad" id="projects">
          <div className="section-intro">
            <p className="eyebrow">Selected projects</p>
            <h2>
              A few things
              <br />
              <i>made with intent.</i>
            </h2>
          </div>

          <Reveal>
            <Link className="featured-project" href={`/projects/${featuredProject.slug}`} data-cursor="view">
              <ScrollImage className={`placeholder featured-image ${featuredProject.color}`} label={featuredProject.imageLabel} src={featuredProject.imageSrc} />
              <div className="project-caption featured-caption">
                <div>
                  <p className="project-number">01 / Featured project</p>
                  <h3>{featuredProject.name}</h3>
                </div>
                <div className="project-summary">
                  <p>{featuredProject.description}</p>
                  <ProjectTags tags={featuredProject.tags} />
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </Link>
          </Reveal>

          <WorkCategory
            eyebrow="Client projects"
            intro="The things people brought me in to make slightly less difficult."
            projects={clientProjects}
            startNumber={2}
          />
          <WorkCategory
            eyebrow="Independent projects"
            intro="The things I kept working on after nobody asked me to."
            projects={independentProjects}
            startNumber={4}
          />
        </section>

        <section className="about-section section-pad section-rule" id="about">
          <div className="section-intro">
            <p className="eyebrow">A little context</p>
            <h2>
              More than
              <br />
              <i>just pixels.</i>
            </h2>
          </div>
          <Reveal className="about-copy">
            <p className="about-lead">
              I&apos;m a <HighlightText>designer who also builds</HighlightText> the things I design.
              The distinction is useful on paper. Less so in practice.
            </p>
            <p>
              I&apos;ve worked across food, fintech, security, and safety monitoring — different
              subjects, <HighlightText>same recurring problem</HighlightText>: too much going on, not
              enough clarity. I take a
              product from problem and flow to UI, prototype, implementation, and the occasional
              bug that explains the original decision. Based in Kerala, often in Bangalore.
            </p>
            <Link className="line-link" href="#contact">
              Say hello <span>↘</span>
            </Link>
          </Reveal>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="site-header section-pad">
      <Link className="wordmark" href="/">
        <span className="wordmark-mark">R</span>
        <span>Rishi Maddela</span>
      </Link>
      <nav>
        <Link href="#projects">Projects</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}

function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <p className="eyebrow accent">Have a good problem?</p>
      <h2>
        Let&apos;s make something
        <br />
        <i><HighlightText>worth opening.</HighlightText></i>
      </h2>
      <a className="email-link" href="mailto:hello@rishimaddela.com">
        hello@rishimaddela.com <span>↗</span>
      </a>
      <div className="contact-foot">
        <p>For good problems, bad problems, and the occasional problem in disguise.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="mailto:hello@rishimaddela.com">Email ↗</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer section-pad">
      <span>© 2025 Rishi Maddela</span>
      <span>Still under consideration.</span>
    </footer>
  );
}

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

function WorkCategory({
  eyebrow,
  intro,
  projects,
  startNumber
}: {
  eyebrow: string;
  intro: string;
  projects: typeof clientProjects;
  startNumber: number;
}) {
  return (
    <section className="work-category">
      <div className="work-category-heading">
        <p className="eyebrow">{eyebrow}</p>
        <p>{intro}</p>
      </div>
      <div className="project-grid category-grid">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index % 2 ? 0.08 : 0}>
            <Link className={`project-card ${index === 1 ? "offset" : ""}`} href={`/projects/${project.slug}`} data-cursor="view">
              <ScrollImage className={`placeholder ${project.color}`} label={project.imageLabel} src={project.imageSrc} />
              <div className="project-caption card-caption">
                <div>
                  <p className="project-number">{String(startNumber + index).padStart(2, "0")}</p>
                  <h3>{project.name}</h3>
                </div>
                <p className="card-description">{project.description}</p>
                <ProjectTags tags={project.tags} />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
