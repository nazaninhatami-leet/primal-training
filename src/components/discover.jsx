import Img from './img';

const Discover = () => {
  return (
    <div
      className="bg-primary h-auto grid grid-cols-[33.33%_66.66%]"
      style={{ fontFamily: "'Anek Tamil', sans-serif" }}
    >
      <div className="grid grid-rows-[24%_19%_19%_19%_19%]">
        <div className="grid items-center pl-5 border-b border-black">
          <h1 className="text-[2.85rem] font-bold leading-[2.6rem] tracking-tight">
            DISCOVER YOUR POTENTIAL
          </h1>
        </div>
        <div className="flex flex-col justify-center pl-5 border-b border-black">
          <h1 className="text-2xl font-bold">EXPERT COACHING</h1>
          <p className="text-[18px]">
            Trainers who are passionate about your progress.
          </p>
        </div>
        <div className="flex flex-col justify-center pl-5 border-b border-black">
          <h1 className="text-2xl font-bold">RESULTS-DRIVEN PROGRAMS</h1>
          <p className="text-[18px]">
            Workouts that deliver tangible, measurable results.
          </p>
        </div>
        <div className="flex flex-col justify-center pl-5 border-b border-black">
          <h1 className="text-2xl font-bold">A SUPPORTIVE TRIBE</h1>
          <p className="text-[18px]">
            A community that pushes you to be your best.
          </p>
        </div>
        <div className="flex flex-col justify-center pl-5">
          <button
            className="hover:bg-black hover:text-amber-50 py-2 px-5 rounded-lg text-[17px] w-fit"
            style={{ wordSpacing: '0.2rem' }}
          >
            VIEW CLASSES
          </button>
        </div>
      </div>
      <div>
        <Img
          img={
            'https://appeal-rice-stuff.figma.site/_assets/v10/c695b3171f8fc21be9574c7eeb04e5365a7dd496.png'
          }
          alt={'trainer 2'}
        />
      </div>
    </div>
  );
};
export default Discover;
