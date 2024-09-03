'use client';

import { motion } from 'framer-motion';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1
  }
};

const AllLearningTechs = () => {
  return (
    <>
      <motion.p
        className="text-base text-center lg:text-start mb-2.5 text-gray-400"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Currently learning
      </motion.p>

      <motion.ul
        className="flex justify-center items-center flex-wrap gap-3.5 text-[#444]"
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 grayscale hover:grayscale-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="32px"
              height="32px"
              baseProfile="basic"
            >
              <title>Nest</title>
              <path
                fill="#f50057"
                d="M24.5,32.88c0,0-0.01-0.04-0.02-0.12C24.5,32.84,24.5,32.88,24.5,32.88z"
              />
              <path
                fill="#f50057"
                d="M27.375,8.625c0,0-0.375-1.375,0.125-2.5s0.5-1.875-0.5-3c2-0.125,2.75,1.25,2.75,1.25l0.025,0.159 c0.118,0.766-0.278,1.494-0.946,1.888C28.219,6.781,27.563,7.437,27.375,8.625z"
              />
              <path
                fill="#f50057"
                d="M41.63,36.24c0.02-0.21,0.34-3.04-0.38-4.36c-1.5,4.24-3,8.12-7.37,10.87 c0.62-1.25,1.62-3.25,2.62-6.25c-3,4-9,8-13.5,8.25c3.04-1.68,4.75-3.84,5.5-5.25c0,0-1.75,0.5-3.88,0.75 c2.88-1.75,4.88-4.87,3.88-9.75c-2,6.25-4.75,8.25-8.38,8.62c-3.62,0.38-6.87-1.5-6.87-1.5l1.25-0.12c0,0-3.25-2.5-2.12-5.75 c0.05-0.16,0.11-0.31,0.18-0.45c0.82-1.82,3.61-0.9,3.32,1.07v0.01c0,0,0.87,2.37,3.24,1.74c0.76-1.24,1.26-2.5,1.26-2.5l0.37,1.63 c0,0,1.75-0.75,1.75-2.13c1.5,0.57,1.88,1.28,1.97,1.59c-0.26-1.4-2.52-11.03-14.49-10.89l-2.09,1.94 c-0.14,0.13-0.36,0.02-0.34-0.16L7.71,22l0.14-0.14c-0.04,0.01-0.09,0-0.13,0L7.71,22l-0.82,0.76c-0.14,0.13-0.36,0.02-0.34-0.16 l0.1-1.02c-1.74-0.74-1.9-2.7-1.9-2.7S2.58,18.27,3.5,15.5C4,14,5.2,13.85,5.71,13.97c0.65,0.15,1.32,0.16,1.94-0.09 c0.9-0.36,2.05-1.05,2.85-2.38C12,9,14.25,8,19.12,8c6.45,0,9.05,1.98,9.35,2.22c-0.18-0.21-1.27-1.66,1.03-3.84 c2.27-2.16,1.86-2.67,1.77-2.75c0.34,0.1,4.75,1.6,5.23,7.37c0.5,6-6.5,7.25-6.5,7.25s9,1.75,9.12-6.75 c1.76,1,5.38,4.75,5.88,12.88C45.49,32.26,41.84,36.03,41.63,36.24z"
              />
              <path
                fill="#f50057"
                d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"
              />
              <path
                fill="#f50057"
                d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"
              />
            </svg>
          </div>
        </motion.li>

        {/* <motion.li style={{ opacity: 1, transform: 'none' }} variants={animation}>
          <div className='transition duration-200 text-gray hover:text-[#ff4081]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px">
              <title>GraphQL</title>
              <path fill='currentColor' d="M24.5,45.161L7,34.82V14.18L24.5,3.839L42,14.18V34.82L24.5,45.161z M9,33.68l15.5,9.159L40,33.68 V15.32L24.5,6.161L9,15.32V33.68z" /><circle cx="24.5" cy="5.5" r="3.5" fill='currentColor' /><circle cx="24.5" cy="43.5" r="3.5" fill='currentColor' /><circle cx="8.5" cy="33.5" r="3.5" fill='currentColor' /><circle cx="40.5" cy="33.5" r="3.5" fill='currentColor' /><circle cx="8.5" cy="15.5" r="3.5" fill='currentColor' /><circle cx="40.5" cy="15.5" r="3.5" fill='currentColor' /><path fill='currentColor' d="M42.72,35H6.28L24.5,2.978L42.72,35z M9.72,33H39.28L24.5,7.022L9.72,33z" /></svg>
          </div>
        </motion.li> */}

        {/* docker */}
        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[#066da5]">
            <svg
              viewBox="0 0 24 18"
              width="32px"
              height="32px"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              fill="currentColor"
            >
              <title>Docker</title>
              <g>
                <path
                  d="M23.505 6.609c-0.54 -0.375 -1.779 -0.516 -2.747 -0.328 -0.112 -0.938 -0.63 -1.758 -1.531 -2.484l-0.518 -0.375 -0.36 0.539c-0.45 0.703 -0.675 1.688 -0.608 2.625 0.022 0.328 0.135 0.914 0.473 1.43 -0.315 0.188 -0.968 0.422 -1.824 0.422H0.108l-0.045 0.188c-0.158 0.937 -0.158 3.867 1.689 6.117 1.396 1.711 3.468 2.578 6.192 2.578 5.9 0 10.268 -2.836 12.317 -7.968 0.811 0.023 2.545 0 3.423 -1.758 0.022 -0.047 0.068 -0.141 0.225 -0.492l0.09 -0.188 -0.495 -0.305ZM13.124 0h-2.477v2.344h2.477V0Zm0 2.812h-2.477v2.344h2.477v-2.344Zm-2.927 0h-2.477v2.344h2.477v-2.344Zm-2.927 0H4.792v2.344h2.477v-2.344ZM4.342 5.625H1.865v2.344H4.342v-2.344Zm2.927 0H4.792v2.344h2.477v-2.344Zm2.927 0h-2.477v2.344h2.477v-2.344Zm2.927 0h-2.477v2.344h2.477v-2.344Zm2.927 0H13.574v2.344h2.477v-2.344Z"
                  fillRule="nonzero"
                />
              </g>
            </svg>
          </div>
        </motion.li>

        {/* socket io */}
        <motion.li
          style={{ opacity: 1, transform: 'none' }}
          variants={animation}
        >
          <div className="transition duration-200 hover:text-[#FFF]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              viewBox="0 0 65 70"
              fill="currentColor"
              preserveAspectRatio="xMidYMid"
            >
              <title>Socket.IO</title>
              <path d="M63.988 31.295c-.174-10.7-6.14-21.118-15.37-26.604C41.346.162 32.16-1.057 23.886 1.033 11.433 4.168 1.505 15.446.243 28.3-1.325 40.44 4.815 53.066 15.308 59.292c10.276 6.444 24.253 6.183 34.3-.6 9.057-5.878 14.674-16.6 14.37-27.388zM33.77 59.25c-14.543 1.437-28.607-10.885-29-25.472-1.1-11.843 6.705-23.556 17.852-27.475C38.254.033 57.456 11.615 59.067 28.38c2.526 15.064-10.014 30.4-25.297 30.87zM24.2 30.38l21.03-17.2-11.364 17.243c-3.222 0-6.444 0-9.666-.044zm5.913 3.18l9.666.044-21.03 17.243L30.113 33.56z" />
            </svg>
          </div>
        </motion.li>
      </motion.ul>
    </>
  );
};

export default AllLearningTechs;
