import { notFound } from "next/navigation";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ScrollImage } from "@/components/scroll-image";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const nextProject = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];

  return (
    <div className="site-shell">
      <header className="site-header section-pad">
        <Link className="wordmark" href="/">
          <span className="wordmark-mark">R</span>
          <span>Rishi Maddela</span>
        </Link>
        <Link className="back-link" href="/#projects">Back to projects <span>↖</span></Link>
      </header>
      <main className="case-study">
        <section className="case-hero section-pad">
          <Reveal>
            <p className="eyebrow accent">{project.kicker}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>{project.name}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="case-intro">{project.description}</p>
          </Reveal>
          <ScrollImage className={`placeholder case-hero-image ${project.color}`} label={project.imageLabel} src={project.imageSrc} />
        </section>

        {project.additionalImages?.length ? (
          <section className="case-gallery section-pad" aria-label={`${project.name} screens`}>
            {project.additionalImages.map((imageSrc) => (
              <ScrollImage key={imageSrc} className={`placeholder gallery-image ${project.color}`} label={project.imageLabel} src={imageSrc} />
            ))}
          </section>
        ) : null}

        <section className="case-section section-pad">
          <div className="case-label">
            <p className="eyebrow">01 / The brief</p>
          </div>
          <Reveal className="case-copy">
            <p className="case-lead">{project.brief}</p>
            <p>{project.briefDetail}</p>
          </Reveal>
        </section>

        <section className="case-section process-section section-pad">
          <div className="case-label">
            <p className="eyebrow">02 / The process</p>
          </div>
          <Reveal className="case-copy">
            <p className="case-lead">The work got better once the system got simpler.</p>
            <p>{project.process}</p>
          </Reveal>
        </section>

        <section className="case-section feature-section section-pad">
          <div className="case-label">
            <p className="eyebrow">03 / The details</p>
          </div>
          <Reveal className="case-copy">
            <p className="case-lead">{project.detailLead}</p>
            <p>{project.detail}</p>
          </Reveal>
        </section>

        <section className="outcome-section section-pad">
          <p className="eyebrow accent">04 / The outcome</p>
          <Reveal>
            <h2>{project.outcome}</h2>
          </Reveal>
          <div className="outcome-bottom">
            <p>{project.outcomeDetail}</p>
            <a className="button-link" href={project.githubUrl} target="_blank" rel="noreferrer">
              View on GitHub <span>↗</span>
            </a>
          </div>
        </section>

        <section className="next-project section-pad">
          <p className="eyebrow">Next project</p>
          <Link href={`/projects/${nextProject.slug}`}>
            <h2>{nextProject.name} <span>↗</span></h2>
          </Link>
        </section>
      </main>
      <footer className="site-footer section-pad">
        <span>© 2025 Rishi Maddela</span>
        <Link href="/#contact">Start a conversation ↗</Link>
      </footer>
    </div>
  );
}
