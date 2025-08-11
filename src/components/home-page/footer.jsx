import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div
      className="bg-primary flex flex-col justify-between h-120 px-5 py-7"
      style={{ fontFamily: "'Anek Tamil', sans-serif" }}
    >
      <div className="flex justify-between">
        <div>
          <img
            className="w-[14.5rem] h-[8.5rem]"
            src={logo}
            alt="PrimalTraining"
          />
        </div>
        <div className="text-[3.3rem] font-bold tracking-tighter leading-12">
          PrimalTraining
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">
          <h1 className="text-[20px] pb-2.5">CONTACT</h1>
          <div className="font-bold leading-[1.2rem]">
            <span className=" text-[14px]">Email:</span>
            <span className=" text-[14px]">hello@figma.com</span>
          </div>
          <div className="font-bold leading-[1.2rem]">
            <span className=" text-[14px]">Phone:</span>
            <span className=" text-[14px]">(203) 555-5555</span>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[20px] pb-2.5">OPENING HOURS</h1>
          <div className="flex gap-[4rem]">
            <div className="flex flex-col font-bold text-[14px]">
              <span>MON - FRI</span>
              <span>SATURDAYS</span>
              <span>SUNDAYS</span>
              <span>HOLIDAYS</span>
            </div>
            <div className="flex flex-col font-bold text-[14px]">
              <span>5:00 - 23:00</span>
              <span>8:00 - 16:00</span>
              <span>8:00 - 13:00</span>
              <span>8:00 - 16:00</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold font-[arial] text-[20px] pb-3">SOCIAL</h1>
          <div className="flex flex-col font-bold leading-[1.2rem] mr-5 text-[14px]  underline">
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.x.com/">X</a>
            <a href="https://www.linkedin.com/">LinkedIn</a>
            <a href="https://www.spotify.com/">Spotify</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
