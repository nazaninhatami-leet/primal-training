import logo from '../../src/assets/logo.svg';

const Header = () => {
  return (
    <div className="bg-primary h-20 sticky top-0 flex justify-between items-center px-6 border-b border-black">
      <span className="flex items-center">
        <span>
          <img className="w-[44px] h-[25px]" src={logo} alt="PrimalTraining" />
        </span>
        <span className="px-1 text-[20px] font-bold tracking-tight">
          PrimalTraining
        </span>
      </span>
      <span className="flex gap-x-15 tracking-[-1px]">
        <span>
          <a className="hover:text-gray-800" href="http://localhost:5173/home/">
            HOME
          </a>
        </span>
        <span>
          <a
            className="hover:text-gray-800"
            href="http://localhost:5173/about/"
          >
            ABOUT
          </a>
        </span>
        <span>
          <a
            className="bg-secondary hover:bg-black hover:text-amber-50 py-2.5 px-4 rounded-lg"
            href="http://localhost:5173/about/"
          >
            RESERVE &nbsp; YOUR &nbsp; SPOT
          </a>
        </span>
      </span>
    </div>
  );
};
export default Header;
