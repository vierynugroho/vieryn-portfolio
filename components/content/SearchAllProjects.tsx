'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '99',
    title: 'E-Rapor Kurikulum Merdeka',
    des: "E-Rapor Kurikulum Merdeka is a web-based e-rapor system built with Next.js to support the assessment process of early childhood education (PAUD) students under the Kurikulum Merdeka framework. This application enables teachers to record, manage, and evaluate children's development efficiently.",
    category: 'typescript - NextJS - backend - api - frontend - postgreSQL',
    repo: 'https://github.com/vierynugroho/e-Rapor-Kurikulum-Merdeka',
    link: 'https://e-rapor-kurikulum-merdeka.vercel.app/'
  },
  {
    id: '1',
    title: 'Backend - Flight Ticketing',
    des: 'Backend API for flight ticket booking system. Provides flight search, ticket reservation, payment, and passenger and airline data management features.',
    category:
      'javascript - expressJS - backend - api - expressJS - payment gateway - postgreSQL',
    repo: 'https://github.com/vierynugroho/airfly-backend',
    link: 'https://github.com/vierynugroho/airfly-backend'
  },
  {
    id: '2',
    title: 'Backend - Simple Banking System',
    des: 'Simple API backend for banking systems that supports account management, transactions, and user balance recording with optimal security.',
    category: 'javascript - expressJS - api - backend',
    repo: 'https://github.com/vierynugroho/banking-system',
    link: 'https://github.com/vierynugroho/banking-systeme'
  },
  {
    id: '3',
    title: 'Classic Cryptography',
    des: 'NPM package for encryption and decryption using Caesar Cipher algorithm and exhaustive key search method. Useful for data security education and experimentation.',
    category:
      'javascript - npm - package - caesar cipher - exhaustive key search',
    repo: 'https://github.com/vierynugroho/classic-criptography',
    link: 'https://www.npmjs.com/package/classic-cryptography'
  },
  {
    id: '4',
    title: 'Puzzle Games',
    des: 'A collection of interactive web-based puzzle games. Offering a variety of logic and strategy challenges with engaging gameplay.',
    category: 'javascript - html - css',
    repo: 'https://github.com/vierynugroho/multimedia-puzzle-games',
    link: 'https://sigma-puzzle.vercel.app/'
  },
  {
    id: '5',
    title: 'Base RESTful API',
    des: 'Basic RESTful API template with authentication, CRUD, and API documentation features using Swagger. Suitable as a boilerplate for Node.js based backend development.',
    category: 'typescript - auth - nestJS - backend',
    repo: 'https://github.com/vierynugroho/nest-rest',
    link: 'https://github.com/vierynugroho/nest-rest'
  },
  {
    id: '6',
    title: 'Backend PPDB Online',
    des: 'Backend API for the online New Student Admissions (PPDB) system. Built with ExpressJS and provides registration, selection, and student data verification features.',
    category: 'javascript - expressJS - google drive api - api - backend',
    repo: 'https://github.com/vierynugroho/Be-ppdb_online_update',
    link: 'https://github.com/vierynugroho/Be-ppdb_online_update'
  },
  {
    id: '7',
    title: 'GIS - temporary housing location',
    des: 'Leaflet-based GIS application for mapping temporary housing locations. Allows users to view location information, coordinate points, and details of facilities around the area.',
    category: 'typescript - react - leaflet',
    repo: 'https://github.com/vierynugroho/geography-information-system-lanang-6B',
    link: 'https://geography-information-system-lanang-6-b.vercel.app/'
  },
  {
    id: '8',
    title: 'Backend - internet service provider',
    des: 'Backend API - Decision Support System using the AHP (analytical hierarchy process) method in a case study of calculating job priorities in internet network services',
    category: 'decision support system - nodeJS - expressJS - postgreSQL - AHP',
    repo: 'https://github.com/vierynugroho/SPK-internet-service-provider',
    link: 'https://team-a-spk-internet-service-provider.vercel.app'
  },
  {
    id: '9',
    title: 'Edge Detection',
    des: 'Image processing project using Python to detect object edges in images. Using algorithms like Canny, Sobel, or Laplacian for more accurate image analysis.',
    category: 'python - cnn - canny',
    repo: 'https://github.com/vierynugroho/edge-detection',
    link: 'https://github.com/vierynugroho/edge-detection'
  },
  {
    id: '10',
    title: 'Face Recognition',
    des: 'Python based facial recognition system using OpenCV and machine learning. Can be used for authentication, individual identification, or real-time face detection.',
    category: 'python',
    repo: 'https://github.com/vierynugroho/face_recognition',
    link: 'https://github.com/vierynugroho/face_recognition'
  },
  {
    id: '11',
    title: 'Backend - Stock Management',
    des: 'Backend API for inventory management using ExpressJS. Provides product CRUD features, inventory management, and tracking of incoming and outgoing goods.',
    category: 'javascript - nodeJS - express - postgreSQL - backend - api',
    repo: 'https://github.com/vierynugroho/restapi-stock-management',
    link: 'https://github.com/vierynugroho/restapi-stock-management'
  },
  {
    id: '12',
    title: 'Teacher Performance Assessment',
    des: 'Web Application for Teacher Performance Assessment based on 360 degree analysis assessment at IGRA Blitar City',
    category: 'php - bootstrap - mySQL',
    repo: 'https://github.com/vierynugroho/PKG_IGRAKOTABLITAR',
    link: 'https://github.com/vierynugroho/PKG_IGRAKOTABLITAR'
  },
  {
    id: '13',
    title: 'Personal Notes App',
    des: 'Personal notes website based on single page application with reactJS',
    category: 'javascript - react - SPA',
    repo: 'https://github.com/vierynugroho/SPA-ReactJS_personal-notes-app',
    link: 'https://github.com/vierynugroho/SPA-ReactJS_personal-notes-app'
  },
  {
    id: '14',
    title: 'Simple E-Commerce',
    des: 'Brute Force ALgorithm Implementation',
    category: 'javascript - html - css',
    repo: 'https://github.com/vierynugroho/E-Commerce-Brute-Force',
    link: 'https://github.com/vierynugroho/E-Commerce-Brute-Force'
  },
  {
    id: '15',
    title: 'e-perpus - Online Library',
    des: 'E - Perpus is a website built with the aim of facilitating library administration in managing book borrower data, preventing race conditions, etc.',
    category: 'Laravel - PHP - mySQL - bootstrap',
    repo: 'https://github.com/vierynugroho/E-Perpus-UAS-Project',
    link: 'https://github.com/vierynugroho/E-Perpus-UAS-Project'
  },
  {
    id: '16',
    title: 'Certainty Factor for Data Validation',
    des: 'Validation of marriage data using the concept of certainty factor based on the website',
    category: 'PHP - Certainty Factor - AI',
    repo: 'https://github.com/vierynugroho/Validasi-Data-KUA_Certainty-Factor',
    link: 'https://github.com/vierynugroho/Validasi-Data-KUA_Certainty-Factor'
  },
  {
    id: '17',
    title: 'Laravel Ecommerce',
    des: 'An e-commerce website that provides complete features such as product catalogs, shopping carts, order management, and user authentication.',
    category: 'laravel - php - vue - mysql - bootstrap - payment gateway',
    repo: 'https://github.com/vierynugroho/vstore-laravel',
    link: 'https://github.com/vierynugroho/vstore-laravel'
  },
  {
    id: '18',
    title: 'VArchiver - Simple File Manager',
    des: 'simple shell based file manager',
    category: 'shell',
    repo: 'https://github.com/vierynugroho/UAS-praktikum_SistemOperasi',
    link: 'https://github.com/vierynugroho/UAS-praktikum_SistemOperasi'
  },
  {
    id: '19',
    title: 'Office Tutorial',
    des: 'office tutorials: microsoft office training and tutorial website',
    category: 'php - mySQL - bootstrap - css',
    repo: 'https://github.com/vierynugroho/officetutorials/tree/main/officetutorial',
    link: 'https://github.com/vierynugroho/officetutorials/tree/main/officetutorial'
  }
];

const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter((project) =>
    project.category.includes(projectSearch.toLowerCase())
  );

  return (
    <>
      <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
        <div className="w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease">
          <div className="grid place-items-center h-full w-12 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none rounded text-sm text-white bg-black px-2 group-hover:border-gray-500 transition-all ease"
            type="text"
            id="search"
            placeholder="Languages, frameworks, libraries, etc..."
            onChange={(e) => setProjectSearch(e.target.value)}
          />
        </div>
      </AnimationContainer>

      <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
        {resultSearch.map(({ id, title, des, category, repo, link }) => (
          <CardProject
            key={id}
            title={title}
            des={des}
            category={category}
            repo={repo}
            link={link}
          />
        ))}
      </article>
    </>
  );
};

export default SearchAllProjects;
