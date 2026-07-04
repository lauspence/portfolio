import { ArrowRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
              <MapPin size={12} />
              {profile.location} · Available for select projects
            </div>

            <h1 className="mt-6 max-w-3xl font-mono text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-accent">{profile.role}</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent/50 hover:text-accent"
              >
                Get in Touch
              </a>
              <a
                href="/Lawrence-Marete-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent/50 hover:text-accent"
              >
                Download CV
                <Download size={16} />
              </a>
            </div>
          </div>

          <div className="hidden items-center justify-center md:flex">
            {profile.image ? (
              <Image
                src={profile.image}
                alt={profile.name}
                width={360}
                height={360}
                className="rounded-full object-cover ring-1 ring-border/40 shadow-2xl"
                priority
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
