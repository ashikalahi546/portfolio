import Image from "next/image";
import Banner from "/public/images/hero.png";

function Hero() {
  return (
    <div className="mt-[112px] flex items-center justify-between">
      <div className="text-white">
        <h1 className="text-5xl font-bold leading-tight">
          Hi, I am
          <span className="block"> Ashik</span>
        </h1>
        <h4 className="text-lg font-medium text-[#828282] mt-[9px ]">
          Frontend Developer
        </h4>
        <div className="mt-[35px] flex gap-x-[18px]">
          <button className="bg-[#27AE60] hover:bg-transparent hover:border border-[F2F2F2] w-[143px] h-[42px] outline-none text-sm font-medium duration-100">
            Download CV
          </button>
          <button className="bg-transparent hover:bg-[#27AE60] hover:border-none  border border-[F2F2F2] w-[143px] h-[42px] text-sm font-medium outline-none duration-100">
            Learn More
          </button>
        </div>
      </div>
      <Image src={Banner} alt="loading...?"/>
    </div>
  );
}

export default Hero;
