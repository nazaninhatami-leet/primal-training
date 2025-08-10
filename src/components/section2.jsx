// import img1 from '../assets/'
import Img1 from './img1';

const Section2 = () => {
  return (
    <div className="bg-primary h-126 border-b border-black grid grid-cols-3">
      <div className="bg-amber-600">1</div>
      <div className="bg-amber-700 border-l border-black">2</div>
        <Img1 />
        {/* <img
          className="object-cover h-full w-full"
          src="https://appeal-rice-stuff.figma.site/_assets/v10/4b3ae65ece4bb9cc6a2f518907d80df4631625fe.png"
          alt=""
        /> */}
    </div>
  );
};
export default Section2;
