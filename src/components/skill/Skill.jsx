"use client";
import CountUp from "react-countup";
const Skill = () => {
  return (
    <div className="mt-[120px] text-white">
      <h1 className="text-center text-5xl font-bold">Skill </h1>
      <div className="bg-[#212121] w-full py-[58px]  rounded mt-[73px]">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-16  ">
          <div className="  flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-[#4F4F4F] leading-[94px] flex ">
              <CountUp end={100} /> <span>%</span>
            </h1>

            <h3 className="text-[#27AE60] text-2xl font-bold">HTML</h3>
          </div>
          <div className="  flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-[#4F4F4F] leading-[94px] flex ">
              <CountUp end={95} /> <span>%</span>
            </h1>

            <h3 className="text-[#27AE60] text-2xl font-bold">CSS</h3>
          </div>
          <div className="  flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-[#4F4F4F] leading-[94px] flex ">
              <CountUp end={85} /> <span>%</span>
            </h1>

            <h3 className="text-[#27AE60] text-2xl font-bold">JAVASCRIPTS</h3>
          </div>
          <div className="  flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-[#4F4F4F] leading-[94px] flex ">
              <CountUp end={90} /> <span>%</span>
            </h1>

            <h3 className="text-[#27AE60] text-2xl font-bold">REACT</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
