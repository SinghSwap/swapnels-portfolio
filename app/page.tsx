import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { ProductThinking } from "@/components/sections/product-thinking";
import { CaseStudies } from "@/components/sections/case-studies";
import { Writing } from "@/components/sections/writing";
import { Journey } from "@/components/sections/journey";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ProductThinking />
      <CaseStudies />
      <Writing />
      <Journey />
      <Contact />
      <Footer />
    </>
  );
}
