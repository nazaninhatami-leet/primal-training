import Vision from './vision';
import Header from '../home-page/header';
import AboutTitle from './aboutTitle';
import Gym from './gym';
import Reconnect from './reconnect';
import Join from './join';
import Footer from '../home-page/footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutTitle />
      <Vision />
      <Gym />
      <Reconnect />
      <Join />
      <Footer />
      {/* <div className="bg-amber-200 h-[48rem]"></div> */}
    </>
  );
};
export default AboutPage;
