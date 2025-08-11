import { Link } from 'react-router';

const Classes = () => {
  return (
    <div className="h-127 bg-primary grid grid-cols-3 border-b border-black">
      <div className="grid content-between p-8 border-r border-black">
        <div className="text-[2.8rem] font-bold leading-10">STRENGTH</div>
        <div>
          <p className="border-b border-black leading-11 text-[1.3rem] mb-5">
            Weekdays at 6AM
          </p>
          <p className="border-b border-black leading-11 text-[1.3rem] mb-5">
            Weekends and Holidays at 8AM
          </p>
          <p className="text-[1.2rem] leading-[1.6rem]">
            Build a foundation of raw power with our comprehensive weightlifting
            and strength training programs.
          </p>
          <div>
            <Link
              className="bg-secondary hover:bg-black hover:text-amber-50 grid text-center py-2.5 px-5 mt-22 rounded-lg"
              to="http://localhost:5173/reserve/"
            >
              RESERVE &nbsp; YOUR &nbsp; SPOT
            </Link>
          </div>
        </div>
      </div>
      <div className="grid content-between p-8 border-r border-black">
        <div className="text-[2.8rem] font-bold leading-10">CONDITIONING</div>
        <div>
          <p className="border-b border-black leading-11 text-[1.3rem] mb-5">
            Weekdays at 8AM
          </p>
          <p className="border-b border-black leading-11 text-[1.3rem] mb-5">
            Weekends and Holidays at 10AM
          </p>
          <p className="text-[1.2rem] leading-[1.6rem]">
            Push your limits with high-intensity workouts that challenge your
            cardiovascular endurance and build functional fitness.
          </p>
          <div>
            <Link
              className="bg-secondary hover:bg-black hover:text-amber-50 grid text-center py-2.5 px-5 mt-22 rounded-lg"
              to="http://localhost:5173/reserve/"
            >
              RESERVE &nbsp; YOUR &nbsp; SPOT
            </Link>
          </div>
        </div>
      </div>
      <div className="grid content-between p-8">
        <div className="text-[2.8rem] font-bold leading-10">
          COMMUNITY CLASSES
        </div>
        <div>
          <p className="border-b border-black leading-11 text-[1.3rem] mb-5">
            Every day on the hour
          </p>
          <p className="text-[1.2rem] leading-[1.6rem]">
            Experience the power of collective effort with our custom Workout of
            the Day. Push your limits alongside like-minded individuals.
          </p>
          <div>
            <Link
              className="bg-secondary hover:bg-black hover:text-amber-50 grid text-center py-2.5 px-5 mt-22 rounded-lg"
              to="http://localhost:5173/reserve/"
            >
              RESERVE &nbsp; YOUR &nbsp; SPOT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Classes;
