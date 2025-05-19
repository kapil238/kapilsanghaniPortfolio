import HeroDark from '../pages/HeroDark';
import AboutMe from './AboutMe';
import ContactSection from './ContactSection';
import Projects from './projects';
import SkillsSection from './SkillsSection';
import BackToTopButton from '@/components/BackToTopButton';

export default function Home() {
  return (
    <main>
      <BackToTopButton />
      <HeroDark />
      <AboutMe />
      <SkillsSection />
      <Projects />
      <ContactSection />
    </main>
  );
}
