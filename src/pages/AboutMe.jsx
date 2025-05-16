'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function AboutMe() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let ctx;

    const animate = async () => {
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Animate heading
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
          y: -50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });

        // Animate text block
        gsap.from(textRef.current, {
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
          },
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
        });

        // Animate image
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          },
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
        });

        // Animate background movement
        gsap.to(bgRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          backgroundPositionX: '50%',
          ease: 'none',
        });
      }, sectionRef);
    };

    animate();

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#0f172a] text-white py-5 px-6 md:px-16 overflow-hidden"
    >
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0">
        <defs>
          <clipPath id="clip-another2" clipPathUnits="objectBoundingBox">
            <path d="M0.1145 0.139138L0.235656 0.0147291C0.244771 0.0053695 0.257945 0 0.271794 0H0.5H0.96C0.982091 0 1 0.016076 1 0.0359066V0.964093C1 0.983924 0.982091 1 0.96 1H0.04C0.0179086 1 0 0.983924 0 0.964093V0.5V0.265845C0 0.255659 0.00428628 0.24585 0.0120005 0.238381L0.1145 0.139138Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        ref={bgRef}
        className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/abstract-memphis-pattern-backdrop-wallpaper-with-halftone-dots-design_1017-43997.jpg')] bg-cover opacity-10 pointer-events-none"
      />

      <div className="flex flex-col items-center mb-8">
        <div className="w-6 h-6 rounded-full border-2 border-cyan-400 flex items-center justify-center">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
        </div>
        <div className="w-[2px] h-16 mt-1 flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full h-[2px] bg-gray-300 my-[3px] rounded-full" />
          ))}
        </div>
        <div
          ref={headingRef}
          className="relative inline-block border-2 border-cyan-400 px-6 py-2 rounded-[30px_0_30px_0]"
        >
          <h2 className="text-2xl font-semibold text-white">About Me</h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 justify-center relative z-10">
        <div
          ref={textRef}
          className="bg-gray-900 rounded-xl p-6 md:w-1/2 w-full text-sm font-mono leading-relaxed text-gray-300 shadow-lg"
        >
          <p className="text-cyan-400 text-base font-bold mb-2">{`<h2>`}Hello!{`</h2>`}</p>
          <p className="text-cyan-400 text-base font-bold mt-4">{`<p>`}</p>
          <p className="mb-2">
            My name is Kapil Sanghani and I specialize in web development using{' '}
            <span className="text-cyan-400">
              HTML, CSS, JS, Tailwind, React, Next, Node, Express
            </span>{' '}
            and <span className="text-cyan-400">MongoDB</span>.
          </p>
          <p className="mb-2">
            I am a highly motivated individual and eternal optimist dedicated to writing clean,
            robust code while constantly learning and improving.
          </p>
          <p className="mb-2">
            When I’m not coding, I enjoy{' '}
            <span className="text-cyan-400 underline">writing blogs</span>, reading, or working on
            hands-on art projects like{' '}
            <span className="text-cyan-400 underline">photography</span>.
          </p>
          <p>I love to challenge my perspectives and grow through new experiences.</p>
          <p className="text-cyan-400 text-base font-bold mt-4">{`</p>`}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 w-full md:w-1/2 max-w-md">
          <figure style={{ clipPath: 'url(#clip-another2)' }} ref={imageRef}>
            <Image
              src="/images/about.jpg"
              alt="about image 2"
              width={400}
              height={520}
              className="transition-all duration-300 aspect-[4/5] object-cover hover:scale-105 w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
