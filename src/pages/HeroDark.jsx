import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import Sidebar from '@/components/Sidebar';
import StatsCard from '@/components/StatsCard';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#0f172a] text-white min-h-screen">
      <Header />

      <div
        id="home"
        className="relative bg-[#0f172a] text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-10 pb-32 md:pb-10"
      >
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#0f172a] border-t border-gray-700 z-50">
          <Sidebar />
        </div>
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex flex-col lg:flex-row gap-10 md:gap-10 gap-y-10 max-w-7xl w-full items-center justify-between mt-10 md:mt-0">
          <div className="w-full md:w-auto justify-center flex items-center max-w-md md:max-w-md md:pl-12">
            <ProfileCard />
          </div>
          <div data-aos="fade-down" className="flex-1 w-full max-w-md">
            <div className="gap-5 flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-cyan-300">
                <p className="text-cyan-400 text-md font-bold mt-4 text-left">{`<>`}</p>
                <div className="min-h-[60px]">
                  <Typewriter
                    words={['Developer']}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={200}
                    deleteSpeed={200}
                    delaySpeed={1000}
                  />
                </div>
                <p className="text-cyan-400 text-md font-bold mt-4 text-left">{`</>`}</p>
              </h1>

              <h2 className="mt-4 text-2xl md:text-3xl font-semibold break-words">
                Hey, I'm <span className="text-cyan-400">Kapil Sanghani</span>,<br />
                Full-Stack Developer
              </h2>

              <p className="mt-4 text-gray-400 max-w-md">
                I help businesses grow by crafting amazing web experiences. If you're
                looking for a developer who gets stuff done—let's talk!
              </p>

              <button
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="mt-6 bg-cyan-500 text-black px-6 py-2 rounded-full hover:bg-cyan-400 transition w-full sm:w-auto"
              >
                Let’s Talk 💬
              </button>

            </div>
          </div>

          <div className="w-full md:w-auto max-w-xs md:max-w-sm justify-center flex items-center">
            <StatsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
