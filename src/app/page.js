"use client";
import Info from "./Pages/Homepage/Info";
import SkillsStrip from "./Pages/Homepage/SkillsStrip";
import Projects from "./Pages/Homepage/Projects";
import Contact from "./Pages/Homepage/Contact";
import Expertise from "./Pages/Homepage/Expertise";

export default function Home() {
  return (
    <>
      <Info />
      <SkillsStrip />
      <Expertise />
      <Projects />
      <Contact />
    </>
  );
}
