import React from 'react'
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { FaArrowsAlt } from "react-icons/fa";

function Vacation({item}) {
const {popular,image,title} = item;
    console.log(item)

  return (
    
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-4 w-[28vw] m-8">
    <div className="relative">
      <img
        className="w-full h-56 object-cover"
        src={image}
        alt="Property"
      />
      <div className="absolute top-2 left-2 text-blue-700 bg-white hover:bg-blue-700 hover:text-white py-1 px-3 rounded-full text-md font-semibold cursor-pointer">
        For Rent
      </div>
      <div className="absolute top-2 right-2 bg-white rounded-full p-2">
        <i className="cursor-pointer">
          <CiHeart className="text-xl" />
        </i>
      </div>
      <div className="absolute top-20 left-0 right-0 flex justify-between items-center p-2">
        <i className=" text-white cursor-pointer">
          <FaChevronCircleLeft className="text-5xl opacity-[0.5]" />
        </i>
        <i className=" text-white cursor-pointer">
          <FaChevronCircleRight className="text-5xl opacity-[0.5]" />
        </i>
      </div>
    </div>
    <span className={`${popular ? "":"hidden"}bg-blue-700 rounded-e-md  relative bottom-4 text-white text-md font-semibold px-8 py-1 cursor-pointer`}>
      Popular
    </span>
    <div className="px-4">
      <div className="flex items-center">
        <i className="text-slate-500">
          <CiLocationOn className="text-xl text-orange-800 mr-2" />
        </i>
        <p>3605 Parker Rd.</p>
      </div>
      <div className="text-gray-800 text-xl mt-2 font-semibold">
        {title}
      </div>
      <div className="flex justify-evenly items-center border-dashed pb-4 border-b-2  text-gray-600 mt-2">
        <div className="flex flex-col border-r-2 pr-4 border-dashed">
          <i><RiCommunityLine className="text-2xl"/></i>
          <span className="text-lg">3 Room</span>
        </div>
        <div className="flex flex-col border-r-2 pr-4 border-dashed">
          <i><IoBedOutline className="text-2xl"/></i>
          <span className="text-lg">3 Room</span>
        </div>
        <div className="flex flex-col border-r-2 pr-4 border-dashed">
          <i><MdOutlineBathtub className="text-2xl"/></i>
          <span className="text-lg">3 Room</span>
        </div>
        <div className="flex flex-col pr-4 ">
          <i><FaArrowsAlt className="text-2xl"/></i>
          <span className="text-lg">3 Room</span>
        </div>
      </div>
      <div className="flex items-center justify-between my-6">
        <div className="text-xl flex font-bold text-blue-500">$5,256<p className="text-slate-500">/month</p></div>
        <div className="hover:bg-blue-700 text-blue-700 border-2 border-blue-700 rounded-full px-4 py-2 font-semibold cursor-pointer">
          Read More
        </div>
      </div>
    </div>
  </div>
  )
}

export default Vacation
