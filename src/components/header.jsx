import { Link } from 'react-router';
import logo from '../../src/assets/logo.svg';

const Header = () => {
  return (
    <div className="bg-primary h-20 sticky top-0 flex justify-between items-center px-6 border-b border-black z-1">
      <span className="flex items-center">
        <span>
          <img className="w-[44px] h-[25px]" src={logo} alt="PrimalTraining" />
        </span>
        <span className="px-1 text-[20px] font-bold tracking-tight">
          PrimalTraining
        </span>
      </span>
      <span className="flex gap-x-15 text-[15px] tracking-[-0.5px]">
        <span>
          <Link
            className="hover:text-gray-800"
            to="/"
          >
            HOME
          </Link>
        </span>
        <span>
          <Link
            className="hover:text-gray-800"
            to="http://localhost:5173/about/"
          >
            ABOUT
          </Link>
        </span>
        <span>
          <Link
            className="bg-secondary hover:bg-black hover:text-amber-50 py-2.5 px-4 rounded-lg"
            to="http://localhost:5173/reserve/"
          >
            RESERVE &nbsp; YOUR &nbsp; SPOT
          </Link>
        </span>
      </span>
    </div>
  );
};
export default Header;
