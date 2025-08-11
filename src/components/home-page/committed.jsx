import { Link } from 'react-router';
import img from '../../assets/fa185f92457c01f4c2ab992f16dab02624634ed7.png';

const Committed = () => {
  return (
    <div className="h-127 w-full bg-primary flex">
      <img className="h-full" src={img} alt="for the committed" />
      <div className="flex flex-col justify-between p-5 w-1/3">
        <div className="font-[700] text-[2.8rem] leading-[0.9]">
          FOR THE COMMITTED
        </div>
        <div className="mb-7">
          <div className="text-[18px] leading-[1.3]">
            Train like an athlete with top-tier equipment and expert
            programming. Whether you're building muscle or breaking PRs, we help
            you push past limits.
          </div>
          <button className="hover:bg-black hover:text-amber-50 px-5 py-3 rounded-lg my-5 text-[14px]">
            <Link to="http://localhost:5173/about/">ABOUT US</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Committed;
