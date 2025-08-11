import Vision from './vision';
import Header from '../home-page/header';
import AboutTitle from './aboutTitle';
import Gym from './gym';
import Reconnect from './reconnect';

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutTitle />
      <Vision />
      <Gym />
      <Reconnect />
      <div className="bg-amber-200 h-[48rem]"></div>
    </>
  );
};
export default AboutPage;
