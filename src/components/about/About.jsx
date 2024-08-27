import Image from "next/image";
import AboutImage from "/public/images/Group 14.png";
import Vector1 from "/public/images/Vector (12).png";
import Vector2 from "/public/images/Vector (13).png";
import Vector3 from "/public/images/Vector (14).png";
const About = () => {
  return (
    <div className="text-white mt-[120px] md:px-0 px-5">
      <div className="flex items-center flex-col text-center">
        <h1 className="text-5xl font-bold">About</h1>
        <p className="text-lg my-[38px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor
          <span className="md:block">
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud
          </span>
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure
          <span className="md:block">
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </span>
          Excepteur sint occaecat cupidatat non proident
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-[108px] gap-16">
        <div className="flex flex-col  items-center ">
          <Image src={AboutImage} alt="loading...?" />
          <h3 className="mt-[18px] text-lg font-bold">Full Name</h3>
          <h4 className="mt-[3px] text-lg">Mohammed Ashik</h4>
        </div>
        <div className="flex flex-col items-center ">
          <Image src={AboutImage} alt="loading...?" />
          <h3 className="mt-[18px] text-lg font-bold">Email Address</h3>
          <h4 className="mt-[3px] text-lg">ashikalahi546@gmail.com</h4>
        </div>
        <div className="flex flex-col items-center ">
          <Image src={AboutImage} alt="loading...?" />
          <h3 className="mt-[18px] text-lg font-bold">Twitter</h3>
          <h4 className="mt-[3px] text-lg">ashikalahi546@gmail.com</h4>
        </div>
        <div className="flex flex-col items-center ">
          <Image src={AboutImage} alt="loading...?" />
          <h3 className="mt-[18px] text-lg font-bold">Phone</h3>
          <h4 className="mt-[3px] text-lg">01305839415</h4>
        </div>
      </div>

      <div>
        <h1 className="text-center text-5xl font-bold mt-[120px] mb-[102px]">
          What i do
        </h1>
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2  gap-[60px]">
          <div className="bg-[#212121] px-[50px] py-[35px] rounded">
            <Image src={Vector1} alt="loading" />
            <h2 className="md:text-4xl text-2xl  text-[#535353] font-medium pt-[30px]">
              Software
              <span className="block">Development</span>
            </h2>
          </div>
          <div className='relative'>
            <div className="bg-[#212121] px-[50px] py-[35px] rounded">
              <Image src={Vector2} alt="loading" />
              <h2 className="md:text-4xl  text-2xl text-[#535353] font-medium pt-[30px]">
                Web
                <span className="block">Development</span>
              </h2>
            </div>
            <div className="h-[5px] w-full bg-[#27AE60] absolute bottom-0"></div>
          </div>
          <div className="bg-[#212121] px-[50px] py-[35px] rounded">
            <Image src={Vector3} alt="loading" />
            <h2 className="md:text-4xl text-2xl  text-[#535353] font-medium pt-[30px]">
              Web
              <span className="block">Design</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
