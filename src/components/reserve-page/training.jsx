import { Link } from 'react-router';

const Training = () => {
  return (
    <div
      className="bg-secondary h-[30rem] border-b border-black grid justify-center items-center"
      style={{ fontFamily: "'Anek Tamil', sans-serif" }}
    >
      <div className="items-center text-center flex flex-col">
        <h1 className="font-bold text-[3.55rem] tracking-tight">
          PRIMAL PERSONAL TRAINING
        </h1>
        <h6 className="text-[19px] w-[60%]">
          Receive personalized guidance and tailored programs designed to unlock
          your individual primal potential. Our expert coaches will guide you
          every step of the way.
        </h6>
        <button className="bg-primary text-gray-900 hover:bg-black hover:text-amber-50 font-medium px-4 py-2 w-fit rounded-md mt-1 [word-spacing:0.3rem]">
          <Link to="reserve/">RESERVE YOUR SPOT</Link>
        </button>
      </div>
    </div>
  );
};
export default Training;
