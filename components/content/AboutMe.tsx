import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">
        I am a passionate and versatile developer with over +
        {calculateDuration('2021-01-01', false)} of JavaScript experience and a
        constant interest in learning new technologies. I am currently learning
        the path to be a DevOps and master tools or practices such as "Linux,
        AWS, CI/CD, dan Docker" to perform cost optimized, reliable and secure
        full software delivery and maintenance.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
