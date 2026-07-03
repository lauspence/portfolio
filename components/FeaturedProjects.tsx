import { ExternalLink } from "lucide-react";
import { featuredProjects } from "@/lib/data";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="border-b border-border/60 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-accent">03 · Projects</p>
        <h2 className="mt-2 text-3xl font-semibold text-foreground">
          Selected work
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          Production platforms I&rsquo;ve designed, built, or contributed to
          across fintech, agri-tech, health, and real estate.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-xl border border-border bg-surface p-6 transition hover:border-accent/40"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition hover:opacity-80"
                  >
                    {link.label}
                    <ExternalLink size={13} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
