import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export default function Profile() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section id="profile" className="border-b border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-start gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10 text-3xl font-semibold text-accent">
            {initials}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground">{profile.name}</h2>
            <p className="text-sm text-accent">{profile.role}</p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{profile.summary}</p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-border px-4 py-2 text-sm hover:bg-surface"
              >
                Email
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-accent/50 hover:text-accent"
              >
                <LinkedinIcon />
                LinkedIn
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-accent/50 hover:text-accent"
              >
                <GithubIcon />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
