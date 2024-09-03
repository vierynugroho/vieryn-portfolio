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
            I am a passionate and versatile developer with over +
            {calculateDuration('2022-01-01', false)} of JavaScript experience
            and a constant interest in learning new technologies. I am currently
            learning MERN Stack Web Development and DevOps. Not only that, I
            also study the tools used in developing application or websites such
            as "Linux, Docker, CI/CD" to perform cost optimized, reliable and
            secure full software delivery and maintenance
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
            interested and focused on Frontend development.
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

        {/* <AnimationContainer customClassName='w-full flex flex-col gap-5'>

          <h2 className='mb-2 text-2xl font-bold tracking-tight text-white md:text-2xl text-start'>Interests & Goals</h2>

          <p className='text-base text-gray-400'>
            I am interested in learning Backend with other language like Java, Go or with Python. I also want to know how to make a video game with Unity or other and I am very interested in being a content creator whether programming or something else.
          </p>

          <p className='text-base text-gray-400'>
            For now I'm learning how to make applications with real time communication such as a chat using Socket.IO, I'm also starting to learn the way to be Devops using Docker, Kubernetes, AWS or others.
          </p>

          <p className='text-base text-gray-400'>
            I am also interested in learning other things besides programming such as 3D design with Blender and video editing with Davinci Resolve (these last two I would take as a hobby).
          </p>

        </AnimationContainer> */}
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
