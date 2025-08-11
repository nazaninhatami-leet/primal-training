import Vision from './vision';
import Header from '../home-page/header';
import AboutTitle from './aboutTitle';
import Gym from './gym';

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutTitle />
      <Vision />
      <Gym />
      <div className="bg-black h-[48rem]"></div>
    </>
  );
};
export default AboutPage;
