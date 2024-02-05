import React from "react";
import { MdApartment } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { BsBuildingFillAdd } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import { FaHotel } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

function Card() {
  return (
    <div className="flex flex-wrap justify-evenly items-center mb-24">
      <div className="group rounded-2xl border-2 w-[20vw]  shadow-sm mb-8 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">
        <div className="flex justify-start items-center px-8 my-8">
          <MdApartment className="text-6xl text-blue-800 group-hover:text-white" />
        </div>
        <h1 className="text-2xl font-semibold text-slate-800 p-8 group-hover:text-white">
          Apartments
        </h1>
        <p className="px-8 mb-8 text-lg text-slate-500 group-hover:text-white">
          An apartment is a self-contained housing unit that
        </p>
        <div className="flex justify-center rounded-b-lg bg-blue-100 group-hover:bg-blue-900 items-center gap-2 p-8">
          <p className="text-blue-800 font-semibold group-hover:text-white">
            Read More
          </p>
          <FaArrowRight className="text-blue-800 group-hover:text-white" />
        </div>
      </div>
      <div className="group rounded-2xl border-2 w-[20vw] shadow-sm mb-8 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">
        <div className="flex justify-start items-center px-8 my-8">
          <BiSolidBuildingHouse className="text-6xl text-green-800 group-hover:text-white" />
        </div>
        <h1 className="text-2xl font-semibold text-slate-800 p-8 group-hover:text-white">
          House
        </h1>
        <p className="px-8 mb-8 text-lg text-slate-500 group-hover:text-white">
          An house is a standalone building that is designed for
        </p>
        <div className="flex justify-center rounded-b-lg bg-blue-100 group-hover:bg-blue-900 items-center gap-2 p-8">
          <p className="text-blue-800 font-semibold group-hover:text-white">
            Read More
          </p>
          <FaArrowRight className="text-blue-800 group-hover:text-white" />
        </div>
      </div>

      <div className="group rounded-2xl border-2 w-[20vw] shadow-sm mb-8 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">
        <div className="flex justify-start items-center px-8 my-8">
          <FaHouseChimneyUser className="text-6xl text-orange-800 group-hover:text-white" />
        </div>
        <h1 className="text-2xl font-semibold text-slate-800 p-8 group-hover:text-white">
          Family
        </h1>
        <p className="px-8 mb-8 text-lg text-slate-500 group-hover:text-white">
          An family house is a type of residental building that is
        </p>
        <div className="flex justify-center rounded-b-lg bg-blue-100 group-hover:bg-blue-900 items-center gap-2 p-8">
          <p className="text-blue-800 font-semibold group-hover:text-white">
            Read More
          </p>
          <FaArrowRight className="text-blue-800 group-hover:text-white" />
        </div>
      </div>

      <div className="group rounded-2xl border-2 w-[20vw] shadow-sm mb-8 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">
        <div className="flex justify-start items-center px-8 my-8">
          <BsBuildingFillAdd className="text-6xl text-blue-800 group-hover:text-white" />
        </div>
        <h1 className="text-2xl font-semibold text-slate-800 p-8 group-hover:text-white">
          Residential
        </h1>
        <p className="px-8 mb-8 text-lg text-slate-500 group-hover:text-white">
          Residental refers to buildings or areas that are designed
        </p>
        <div className="flex justify-center rounded-b-lg bg-blue-100 group-hover:bg-blue-900 items-center gap-2 p-8">
          <p className="text-blue-800 font-semibold group-hover:text-white">
            Read More
          </p>
          <FaArrowRight className="text-blue-800 group-hover:text-white" />
        </div>
      </div>

      <div className="group rounded-2xl border-2 w-[20vw] shadow-sm mb-8 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">
        <div className="flex justify-start items-center px-8 my-8">
          <FaIndustry className="text-6xl text-blue-800 group-hover:text-white" />
        </div>
        <h1 className="text-2xl font-semibold text-slate-800 p-8 group-hover:text-white">
          Industrial
        </h1>
        <p className="px-8 mb-8 text-lg text-slate-500 group-hover:text-white">
          There is no such thing as an "Industrial home". Industrial
        </p>
        <div className="flex justify-center rounded-b-lg bg-blue-100 group-hover:bg-blue-900 items-center gap-2 p-8">
          <p className="text-blue-800 font-semibold group-hover:text-white">
            Read More
          </p>
          <FaArrowRight className="text-blue-800 group-hover:text-white" />
        </div>
      </div>

      <div className="group rounded-2xl border-2 w-[20vw] shadow-sm mb-8 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">
        <div className="flex justify-start items-center px-8 my-8">
          <RiCommunityFill className="text-6xl text-orange-800 group-hover:text-white" />
        </div>
        <h1 className="text-2xl font-semibold text-slate-800 p-8 group-hover:text-white">
          Commercial
        </h1>
        <p className="px-8 mb-8 text-lg text-slate-500 group-hover:text-white">
          Commercial refers to activities, building or areas
        </p>
        <div className="flex justify-center rounded-b-lg bg-blue-100 group-hover:bg-blue-900 items-center gap-2 p-8">
          <p className="text-blue-800 font-semibold group-hover:text-white">
            Read More
          </p>
          <FaArrowRight className="text-blue-800 group-hover:text-white" />
        </div>
      </div>

      <div className="group rounded-2xl border-2 w-[20vw] shadow-sm mb-8 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out">
        <div className="flex justify-start items-center px-8 my-8">
          <FaHotel className="text-6xl text-green-800 group-hover:text-white" />
        </div>
        <h1 className="text-2xl font-semibold text-slate-800 p-8 group-hover:text-white">
          Villas
        </h1>
        <p className="pr-4 pl-8 mb-8 text-lg text-slate-500 group-hover:text-white">
          A villa is a type of large, luxurious house that is typically
        </p>
        <div className="flex justify-center rounded-b-lg bg-blue-100 group-hover:bg-blue-900 items-center gap-2 p-8">
          <p className="text-blue-800 font-semibold group-hover:text-white">
            Read More
          </p>
          <FaArrowRight className="text-blue-800 group-hover:text-white" />
        </div>
      </div>

      <div className="group flex flex-col p-4 justify-center items-center rounded-full bg-green-200 border-2  shadow-sm mb-8 hover:bg-green-800 hover:text-white transition-all duration-300 ease-in-out">
        <div className="font-semibold text-5xl p-4 ">25+</div>
        <div className="text-xl text-slate-700 mt-2 group-hover:text-white px-4">Explore Properties and</div>
        <div className="text-xl text-slate-700 mb-2 group-hover:text-white px-4">Invest with Confidence</div>
        <div className="bg-white rounded-full p-4 m-2 group-hover:bg-orange-300">
          <MdArrowOutward className="text-3xl group-hover:text-white-800"/>
        </div>
      </div>
    </div>
  );
}

export default Card;
