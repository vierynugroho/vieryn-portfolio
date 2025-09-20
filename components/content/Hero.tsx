'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

        <h2 className="flex items-center gap-2 mx-auto mb-8 text-gray-200 text-1xl lg:text-1xl lg:mx-0 lg:justify-start">
          <span className="relative min-w-[80px] h-[24px] inline-block text-left">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 w-full font-semibold"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          Developer
        </h2>
        <div className="flex flex-row items-center gap-4 lg:items-start mb-4">
          <a
            href="https://drive.google.com/drive/folders/1f1TBrdYjTWhYcreHDA0HHVst0QS3urY9?usp=sharing"
            target="_blank"
            download="Viery_Nugroho_CV.pdf"
            className="flex items-center gap-2 px-4 py-2 font-bold transition bg-white rounded-lg text-dark hover:bg-slate-200"
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
          <a
            href="https://linkedin.com/in/vierynugroho"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 font-bold transition bg-blue-600 rounded-lg text-white hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-5 h-5"
            >
              <circle cx="12" cy="8" r="4" stroke="currentColor" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h3m-1.5-1.5v3"
              />
            </svg>
            Connect
          </a>
        </div>
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
