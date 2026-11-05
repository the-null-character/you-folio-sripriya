import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import FloatingBlogPreview from "@/components/ui/FloatingBlogPreview";

export default function Page() {
  return (
    <>
      <FloatingBlogPreview />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Blog />
      <Contact />
    </>
  );
}
