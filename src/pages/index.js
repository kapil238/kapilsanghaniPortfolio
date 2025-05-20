import { FollowPointer } from "@/components/ui/following-pointer";
import HeroDark from "../pages/HeroDark";
import AboutMe from "./AboutMe";
import ContactSection from "./ContactSection";
import Projects from "./projects";
import SkillsSection from "./SkillsSection";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <main>
      <FollowPointer title="You">
        <BackToTopButton />
        <HeroDark />
        <AboutMe />
        <SkillsSection />
        <Projects />
        <ContactSection />
      </FollowPointer>
    </main>
  );
}
