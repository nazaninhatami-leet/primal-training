import { Guided } from './guided';
import Dynamic from './dynamic';
import Img1 from './img1';

const Section2 = () => {
  return (
    <div className="bg-primary h-126 border-b border-black grid grid-cols-3">
      <Guided />
      <Dynamic />
      <Img1 />
    </div>
  );
};
export default Section2;
