import Guided from './guided';
import Dynamic from './dynamic';
import Img from './img';

const Section2 = () => {
  return (
    <div className="bg-primary h-126 border-b border-black grid grid-cols-3">
      <Guided />
      <Dynamic />
      <div className="bg-black">
        <Img
          img={
            'https://appeal-rice-stuff.figma.site/_assets/v10/4b3ae65ece4bb9cc6a2f518907d80df4631625fe.png'
          }
          alt={'trainer 2'}
        />
      </div>
    </div>
  );
};
export default Section2;
