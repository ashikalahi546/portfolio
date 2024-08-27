import React from "react";

const Touch = () => {
  return (
    <div className=" mt-[120px] lg:w-[753px] mx-auto md:px-0 px-5">
      <h1 className="text-white text-center text-5xl font-bold mb-[82px]">
        Get in touch
      </h1>
      <div className="grid sm:grid-cols-2 gap-x-[37px] gap-y-[47px]">
        <input
          type="text"
          placeholder="Name"
          className="outline-none bg-transparent border-b border-[#C4C4C4] text-sm font-bold text-white placeholder:[#4F4F4F]  pb-2.5"
        />
        <input
          type="text"
          placeholder="Last name"
          className="outline-none bg-transparent border-b border-[#C4C4C4] text-sm font-bold text-white placeholder:[#4F4F4F] pb-2.5 "
        />
        <input
          type="email"
          placeholder="Email"
          className="outline-none bg-transparent border-b border-[#C4C4C4] text-sm font-bold text-white placeholder:[#4F4F4F]  pb-2.5"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="outline-none bg-transparent border-b border-[#C4C4C4] text-sm font-bold text-white placeholder:[#4F4F4F]  pb-2.5"
        />
        <textarea
          className="sm:col-span-2 py-2.5 px-3 h-[109px] outline-none bg-transparent border border-[#C4C4C4] text-sm font-bold text-white placeholder:[#4F4F4F] resize-none "
          name=""
          id=""
          placeholder="Message"
        ></textarea>
      </div>
      <div className="flex justify-center mt-[29px]">
        <button className="bg-[#27AE60] text-white hover:bg-transparent hover:border border-[F2F2F2] w-[143px] h-[42px] outline-none text-sm font-medium duration-100">
          Submit now
        </button>
      </div>
    </div>
  );
};

export default Touch;
