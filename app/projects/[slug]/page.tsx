import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectReveal from "@/components/ProjectReveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.overview
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <Header />
      <main className="pt-28">
        <section className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} py-20`}>
          <div className="mesh absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
            <Link
              href="/#projects"
              className="focus-ring mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white"
            >
              <ArrowLeft size={15} /> Back to projects
            </Link>
            <h1 className="font-display text-4xl font-semibold text-white drop-shadow sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-white/90">{project.overview}</p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/25"
              >
                Visit Live Site <ExternalLink size={14} />
              </a>
            )}
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <ProjectReveal>
            <div className="mb-10 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface-2/60 px-3 py-1.5 font-mono text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Block title="Problem" text={project.problem} />
              <Block title="Solution" text={project.solution} />
            </div>

            <div className="mt-10">
              <h2 className="mb-4 font-display text-xl font-semibold">Key Features</h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="glass rounded-xl p-4 text-sm leading-relaxed text-muted">
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Block title="Challenges" text={project.challenges} />
              <Block title="Results" text={project.results} />
            </div>
          </ProjectReveal>

          {related.length > 0 && (
            <div className="mt-20 border-t border-border pt-12">
              <h2 className="mb-6 font-display text-xl font-semibold">Related Projects</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/projects/${r.slug}`}
                    className="focus-ring glass block rounded-2xl p-5 transition-transform hover:-translate-y-1"
                  >
                    <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                    <p className="mt-1.5 text-sm text-muted">{r.overview}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2 className="mb-2 font-display text-lg font-semibold">{title}</h2>
      <p className="text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}
