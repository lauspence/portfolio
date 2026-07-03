import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border/60 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-accent">05 · Skills</p>
        <h2 className="mt-2 text-3xl font-semibold text-foreground">
          Technical toolbox
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                {group.category}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
