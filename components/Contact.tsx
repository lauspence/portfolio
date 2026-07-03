import { Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm text-accent">06 · Contact</p>
        <h2 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
          Let&rsquo;s build something
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Open to new opportunities, freelance projects, and collaborations.
          Reach out directly — I usually reply within a day.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent/50 hover:text-accent"
          >
            <Phone size={16} />
            {profile.phone}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition hover:text-accent"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition hover:text-accent"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
