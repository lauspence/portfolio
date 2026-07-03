import { openSourceProjects, profile } from "@/lib/data";
import { GithubIcon } from "@/components/icons";

export default function OpenSourceProjects() {
  return (
    <section className="border-b border-border/60 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-accent">04 · Open Source</p>
            <h2 className="mt-2 text-3xl font-semibold text-foreground">
              From GitHub
            </h2>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent"
          >
            <GithubIcon size={16} />
            @lauspence
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {openSourceProjects.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-border bg-surface p-5 transition hover:border-accent/40"
            >
              <span className="font-mono text-sm font-medium text-foreground group-hover:text-accent">
                {repo.name}
              </span>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">
                {repo.description}
              </p>
              <span className="mt-4 text-xs text-muted">{repo.language}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
