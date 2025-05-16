import HeroDark from '../pages/HeroDark';
import AboutMe from './AboutMe';
import ContactSection from './ContactSection';
import Projects from './projects';
import SkillsSection from './SkillsSection';

export default function Home() {
  return (
    <main>
      <HeroDark />
      <AboutMe />
      <SkillsSection />
      <Projects />
      <ContactSection />
    </main>
  );
}
