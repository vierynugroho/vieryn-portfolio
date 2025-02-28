import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">
        A web developer and IT enthusiast with over +
        {calculateDuration('2022-01-01', false)} years of experience as a Web
        Developer (PHP Developer, Laravel, and MERN Stack Developer) with
        satisfying results. Also experienced as a Tech Lead in a full-stack web
        project for the final program of Kampus Merdeka Batch 6 at Binar Academy
        and as a Backend Developer in Kampus Merdeka Batch 7 at Binar Academy.
        Additionally, I have experience as a teaching assistant and practicum
        instructor for programming courses, covering full-stack and back-end
        development. Several projects have been successfully completed,
        including a campus library system, a flight ticket booking system, a
        stock management REST API, and many more. Feel free to check out my
        project section or visit my GitHub profile for more details. Proficient
        in web development technologies such as MERN (MongoDB, Express, React,
        Node) and experienced in Next.js, Nest.js, and Laravel.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
