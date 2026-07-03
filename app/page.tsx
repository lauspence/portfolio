import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import OpenSourceProjects from "@/components/OpenSourceProjects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <About />
      <Experience />
      <FeaturedProjects />
      <OpenSourceProjects />
      <Skills />
      <Contact />
    </>
  );
}
