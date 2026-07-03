import { profile, education, certifications } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-b border-border/60 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-accent">01 · About</p>
        <h2 className="mt-2 text-3xl font-semibold text-foreground">
          Background
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-3">
          <p className="leading-relaxed text-muted md:col-span-2">
            {profile.summary}
          </p>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Education
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {education.school}
              </p>
              <p className="text-sm text-muted">{education.degree}</p>
              <p className="text-xs text-muted">{education.period}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Certifications
              </p>
              <ul className="mt-2 space-y-1.5">
                {certifications.map((cert) => (
                  <li key={cert} className="text-sm text-muted">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
