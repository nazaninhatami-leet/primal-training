export default function Gym({}) {
  return (
    <div className="bg-primary h-[31.6rem] flex ">
      <div className="w-2/3">
        <img
          src="https://appeal-rice-stuff.figma.site/_assets/v10/fb55682ef99b9f87de5e06be83a9d2924b27ee89.png?w=1536"
          alt=""
        />
      </div>
      <div className="w-1/3 px-5 py-8 flex flex-col justify-between">
        <h1 className="text-[2.9rem] word-spacing-[7px] tracking-tight leading-10 font-bold w-[80%]">
          DYNAMIC OPEN GYM
        </h1>
        <p className="text-[18px] leading-[1.4rem]">
          At Primal Training, we strip away the fluff and focus on the
          fundamentals. Our expert coaches guide you through intense, functional
          workouts designed to build raw strength, resilience, and a body
          capable of anything.
        </p>
      </div>
    </div>
  );
}
