import { Link } from 'react-router';

const Join = () => {
  return (
    <div
      className="bg-primary h-[30rem] border-b border-black grid justify-center items-center"
      style={{ fontFamily: "'Anek Tamil', sans-serif" }}
    >
      <div className="items-center text-center">
        <h6 className="text-[19px]">WHAT WE BELIEVE IN</h6>
        <h1 className="font-bold text-[3.55rem] tracking-tight">
          JOIN THE PRIMAL TRIBE TODAY!
        </h1>
        <button className="bg-secondary text-gray-900 hover:bg-black hover:text-amber-50 font-medium px-4 py-2 w-fit rounded-md mt-1 [word-spacing:0.3rem]">
          <Link to="reserve/">RESERVE YOUR SPOT</Link>
        </button>
      </div>
    </div>
  );
};
export default Join;
