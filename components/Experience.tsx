import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border/60 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-accent">02 · Experience</p>
        <h2 className="mt-2 text-3xl font-semibold text-foreground">
          Where I&rsquo;ve worked
        </h2>

        <div className="mt-12 space-y-10">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.role}`}
              className="grid gap-2 border-l-2 border-border pl-6 md:grid-cols-4 md:gap-6"
            >
              <div className="md:col-span-1">
                <p className="text-sm text-muted">{job.period}</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {job.role}
                  <span className="text-muted"> · {job.company}</span>
                </h3>
                {job.location && (
                  <p className="text-sm text-muted">{job.location}</p>
                )}
                <ul className="mt-3 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
