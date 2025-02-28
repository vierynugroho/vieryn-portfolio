import CurrentTimeLineExp, {
  calculateDuration
} from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProcessWork from '../content/ProcessWork';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col w-full gap-6">
        <TitleSectionPageContainer title="About me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-400">
            A web developer and IT enthusiast with over +
            {calculateDuration('2022-01-01', false)} years of experience as a
            Web Developer (PHP Developer, Laravel, and MERN Stack Developer)
            with satisfying results. Also experienced as a Tech Lead in a
            full-stack web project for the final program of Kampus Merdeka Batch
            6 at Binar Academy and as a Backend Developer in Kampus Merdeka
            Batch 7 at Binar Academy. Additionally, I have experience as a
            teaching assistant and practicum instructor for programming courses,
            covering full-stack and back-end development. Several projects have
            been successfully completed, including a campus library system, a
            flight ticket booking system, a stock management REST API, and many
            more. Feel free to check out my project section or visit my GitHub
            profile for more details. Proficient in web development technologies
            such as MERN (MongoDB, Express, React, Node) and experienced in
            Next.js, Nest.js, and Laravel.
          </p>

          <p className="text-base text-gray-400">
            I have a solid experience in web, mobile, and desktop Frontend
            development, using frameworks and technologies such as "React,
            Next.js, Vue, Laravel, and Nest". I also have skills in Backend
            development with "Node", Express and MongoDB. UX design with "Figma"
            always following the best practices of prototyping and coding, clean
            architecture, "SOLID" principles, GitFlow, and agile methodologies.
          </p>

          <p className="text-base text-gray-400">
            In addition to my regular work, I also work on my own projects,
            creating useful software or products from design and development to
            deployment in AWS that contribute and help to solve problems or try
            to solve them or give inspiration to the user connecting the AI to
            an API and using the "Actions" of OpenAI or others, to give commands
            and interact with the API and, finally, provide a result to the
            user.
          </p>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white md:text-2xl text-start">
            Skills
          </h2>

          <p className="text-base text-gray-400">
            A look at all the programming languages, libraries, and tools I've
            {calculateDuration('2021-10-20', false)} ago. I have tried a few
            programming languages and technology stack, both Backend and
            Frontend.
          </p>

          <p className="text-base text-gray-400">
            Event though the scope of web development is wide, I was very
            interested and focused on Backend development.
          </p>

          <div className="flex flex-col items-start gap-3 mt-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className="mb-5 font-bold tracking-tight text-white text-1xl md:text-1xl text-start">
                  {title}
                </h3>

                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>
        </AnimationContainer>

        <ProcessWork />
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
