"use client";

import dynamic from "next/dynamic";

// Dynamically import client-side components
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});
import { FloatingNav } from "@/components/ui/FloatingNavbar";
const Profiles = dynamic(() => import("@/components/Profiles"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Resume = dynamic(() => import("@/components/Resume"), { ssr: false });
import { navItems } from "@/data";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Profiles />
        <RecentProjects />
        <Skills />
        <Clients />
        <Experience />
        <Resume />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
