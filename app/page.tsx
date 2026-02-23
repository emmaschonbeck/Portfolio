import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <About />
      <ContactForm />
    </div>
  );
}
