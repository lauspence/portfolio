import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js
          &amp; Tailwind CSS.
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
