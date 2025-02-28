'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';

const Hero = () => {
  const roles = ['Backend', 'Fullstack', 'JavaScript'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col-reverse items-center justify-between w-full lg:flex-row">
      <AnimationContainer customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <h1 className="mx-auto mb-3 text-3xl font-bold tracking-tight text-center text-white lg:text-5xl lg:text-start lg:mx-0">
          Viery Nugroho
        </h1>

        <h2 className="flex items-center gap-2 mx-auto mb-8 text-gray-200 text-1xl lg:text-1xl lg:mx-0">
          <span className="font-semibold">{roles[index]}</span>Developer
        </h2>
        <a
          href="https://drive.google.com/uc?export=download&id=13WwHm_Sg2pqFiY-zkYAJVxHPvTzJ2iMA"
          download="Viery_Nugroho_CV.pdf"
          className="flex items-center gap-2 px-4 py-2 my-2 text-dark bg-white rounded-lg hover:bg-slate-200 transition font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h2.5V4a.75.75 0 011.5 0v5.25h2.5a.75.75 0 01.53 1.28l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5A.75.75 0 015 10zm-2 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 110 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          Download CV
        </a>
      </AnimationContainer>

      <AnimationContainer customClassName="w-[80px] sm:w-[176px] relative mb-6 lg:mb-0">
        <Image
          alt="Viery Nugroho"
          height={176}
          width={176}
          src="/vieryn.png"
          sizes="30vw"
          priority
          className="rounded-[8px] filter grayscale hover:grayscale-0 transition ease"
        />
      </AnimationContainer>
    </div>
  );
};

export default Hero;
