import React from "react";
import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineGridView } from "react-icons/md";
import { MdAddCard } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";


function Mid() {
  return (
    <div className="relative bg-slate-100 h-[90vh] flex flex-col  items-center overflow-hidden">
      <img
        className="absolute top-64 inset-0 bg-no-repeat bg-cover z-0"
        style={{
            width: "300px",
            height: "400px",
          backgroundImage:
            'url("https://pix-placewise.vercel.app/assets/img/primary-hero-img-2.jpg")',
        }}
      />
        <img
        className="absolute top-48 left-52  bg-no-repeat bg-cover z-0 w-36 h-36"
        style={{
          backgroundImage:
            'url("https://pix-placewise.vercel.app/assets/img/primary-hero-el-3.png")',
        }}
      />
          <img
        className="absolute bottom-4 left-80  bg-no-repeat bg-contain z-0 w-28 h-28"
        style={{
          backgroundImage:
            'url("https://pix-placewise.vercel.app/assets/img/primary-hero-el-7.png")',
        }}
      />
          <img
        className="absolute top-12 right-96 bg-no-repeat bg-contain z-0 w-28 h-28"
        style={{
          backgroundImage:
            'url("https://pix-placewise.vercel.app/assets/img/primary-hero-el-4.png")',
        }}
      />
      
      <img
        className="absolute end-2 top-0 bg-right-top bg-no-repeat bg-cover z-0"
        style={{
            width: "300px",
            height: "400px",
          backgroundImage:
            'url("https://pix-placewise.vercel.app/assets/img/primary-hero-img-1.jpg")',
        }}
      />

      <div className="flex flex-col gap-4 relative z-10 font-bold p-2 text-5xl mt-20 text-slate-700 justify-center items-center">
        <div className="mx-4">Easy Way to Find a Perfect </div>
        <div>Property</div>
      </div>
      <div className="flex text-2xl gap-2 text-slate-500 m-12 flex-col justify-center items-center">
        <p>Explore vast property listings by category with our</p>
        <p>user-friendly search. find your perfect match</p>
      </div>
      <div className="flex-col flex w-5/6 relative z-10 rounded-md p-6 gap-4 bg-white shadow-md text-slate-900">
        <div className="flex gap-4 justify-evenly items-center">
          <div className="flex justify-center items-center gap-4 bg-slate-200 rounded-full p-2 px-4 text-slate-700 font-medium">
            <FaHome className="text-xl" />
            <p>For Rent</p>
            <RiArrowDropDownLine className="text-3xl" />
          </div>
          <div className="flex justify-center items-center gap-4 bg-slate-200 rounded-full p-2 px-4 text-slate-700 font-medium">
            <FaLocationDot className="text-xl" />
            <p>Location</p>
            <RiArrowDropDownLine className="text-3xl" />
          </div>
          <div className="flex justify-center items-center gap-4 bg-slate-200 rounded-full p-2 px-4 text-slate-700 font-medium">
            <MdOutlineGridView className="text-xl" />
            <p>Property Type</p>
            <RiArrowDropDownLine className="text-3xl" />
          </div>
          <div className="flex justify-center items-center gap-4 bg-slate-200 rounded-full p-2 px-4 text-slate-700 font-medium">
            <MdAddCard className="text-xl" />
            <p>Price</p>
            <input className="w-24" type="range" />
          </div>
          <div className="bg-blue-500 rounded-3xl w-16 flex justify-center items-center p-4">
          <button>
            <CiSearch className="text-xl text-white"/>
          </button>
        </div>
        </div>
      
      </div>
    </div>
  );
}

export default Mid;
