import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import CurrentFavTech from '../content/CurrentFavTech';
import CurrentLearning from '../content/CurrentLearning';
import CurrentTimeLineExp, {
  calculateDuration
} from '../content/CurrentTimeLineExp';
import FavProjects from '../content/FavProjects';
import Hero from '../content/Hero';
import AnimationContainer from '../utils/AnimationContainer';
import { skills } from '../utils/mySkills';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';

const HomeSection = () => {
  return (
    <SectionContainer>
      <Hero />

      <CurrentFavTech />
      <CurrentLearning />

      <div className="flex flex-col items-start w-full">
        <AboutMe />

        <CurrentTimeLineExp />

        <FavProjects />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white md:text-2xl text-start">
            Skills
          </h2>

          <p className="text-base text-gray-400">
            A look at all the programming languages, libraries, and tools I've
            worked with, I started programming about +{' '}
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

        <ContactMe />
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
