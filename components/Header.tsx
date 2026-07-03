import Link from "next/link";
import { profile } from "@/lib/data";
import MobileNav from "@/components/MobileNav";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <MobileNav links={NAV_LINKS} />
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-tight text-foreground"
          >
            lawrence<span className="text-accent">.dev</span>
          </Link>
        </div>

        <div className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition hover:text-foreground"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition hover:text-foreground"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="#contact"
            className="hidden rounded-full border border-accent/40 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent-soft sm:block"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
