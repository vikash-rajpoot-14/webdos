import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaMailBulk } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { FaBell } from "react-icons/fa";

function Dropdown() {
  return (
    <div className="relative">
      <div className="flex m-2 justify-around items-center border-b-2 p-2">
        <div>
          <img
            src="https://pix-placewise.vercel.app/assets/img/logo.png"
            alt="placewise"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="flex border-r-2 px-2 justify-center items-center">
            <div className="bg-blue-500 m-2 p-2 rounded-full">
              <IoIosCall />
            </div>
            <div>
              <p>Free Call</p>
              <p>(406) 555-0120</p>
            </div>
          </div>
          <div className="flex justify-center border-r-2 px-2 items-center">
            <div className="bg-green-500 p-2 mx-2 rounded-full">
              <FaMailBulk />
            </div>
            <div>
              <p>Online Support</p>
              <p>mail@example.com</p>
            </div>
          </div>
          <div className="flex justify-center px-2 items-center">
            <div className="bg-yellow-500 m-2 p-2 rounded-full">
              <FaLocationPin />
            </div>
            <div>
              <p>Online Location</p>
              <p>3605 Parker Rd.</p>
            </div>
          </div>
        </div>
        <div>
          <button
            className="bg-blue-500 rounded-full p-4 text-white text-lg"
            type="button"
          >
            submit Property
          </button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-around items-center border-b-2">
          <div className="flex justify-around items-center  m-2 gap-4">
            <div className="flex relative z-20 flex-col group">
              <label
                className="flex justify-center items-center"
                htmlFor="cars"
              >
                Home
                <RiArrowDropDownLine className="text-3xl" />
              </label>
              <div className="hidden absolute top-12 right-0 group-hover:flex  flex-col">
                <p className="bg-white px-2 border-b-2 w-28" value="Real Esate">Real Esate</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Property Listing">Property Listing</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Car Rental">Car Rental</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Hotel Booking">Hotel Booking</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Tour Booking">Tour Booking</p>
              </div>
            </div>
            <div className="flex z-20 relative flex-col group">
              <label
                className="flex justify-center items-center"
                htmlFor="cars"
              >
                Listing
                <RiArrowDropDownLine className="text-3xl" />
              </label>
              <div className="hidden absolute top-12 right-0 group-hover:flex flex-col">
                <p className="bg-white px-2 border-b-2 w-28" value="Property List">Property List</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Property List">Property List(Grid)</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Property Map">Property Map</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Cab Listing">Cab Listing</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Cab Listing">Cab Listing(Grid)</p>
              </div>
            </div>
            <div className="flex z-20 relative flex-col group">
              <label
                className="flex justify-center items-center"
                htmlFor="cars"
              >
                Pages
                <RiArrowDropDownLine className="text-3xl" />
              </label>
              <div className="hidden absolute right-0 top-12 group-hover:flex flex-col">
                <p className="bg-white px-2 border-b-2 w-28" value="About us">About Us</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Add Property">Add Property</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Property detail 1">Property detail 1</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Property detail 2">Property detail 2</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Cab Listing Detail">Cab Listing Detail</p>
              </div>
            </div>
            <div className="flex z-20 relative flex-col group">
              <label
                className="flex justify-center items-center"
                htmlFor="cars"
                >
                DashBoard
                <RiArrowDropDownLine className="text-3xl" />
              </label>
              <div className="hidden absolute right-0 top-12 group-hover:flex flex-col">
                <p className=" px-2 bg-white border-b-2 w-28" value="User DashBoard">User DashBoard</p>
              </div>
            </div>
            <div className="flex z-20 relative flex-col group">
              <label
                className="flex justify-center items-center"
                htmlFor="cars"
                >
                . . .
              </label>
              <div className="hidden absolute top-12 group-hover:flex flex-col">
                <p className="bg-white px-2 border-b-2 w-28" value="Blog">Blog</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Blog Details">Blog Details</p>
                <p className="bg-white px-2 border-b-2 w-28" value="saab">Saab</p>
                <p className="bg-white px-2 border-b-2 w-28" value="FAQ">FAQ</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Contact Us">Contact Us</p>
                <p className="bg-white px-2 border-b-2 w-28" value="Signin">Signin</p>

              </div>
            </div>
        </div>
          <div className="flex justify-center items-center">
            <div className="flex bg-slate-200 justify-center items-cente p-2 rounded-full gap-2 bg-white0">
            <CiGlobe className="text-xl"/>
            <CiDollar className="text-xl"/>
            <RiArrowDropDownLine className="text-xl"/>
            </div>
            <div className="bg-slate-200 flex mx-2 justify-center items-cente p-2 rounded-full gap-2 bg-white0">
            <FaBell/>
            </div>
            <div className="">
                <img className="w-8 h-8 rounded-full" src="https://imgs.search.brave.com/ZjfySqt-iGh-rCol08W2H64csOEU0uGh89LP4b0Cmio/rs:fit:500:0:0/g:ce/aHR0cDovL3d3dy53/aGF0c2FwcGltYWdl/cy5pbi93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wOS9jdXRl/LWdpcmwtd2FsbHBh/cGVyLWZvci1wcm9m/aWxlLXBpY3R1cmUu/anBn" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
