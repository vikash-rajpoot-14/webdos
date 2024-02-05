import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHourglassStart } from "react-icons/fa";
import Vacation from "./Vacation";
const vacation = [{
    id:1,
    title:"Regal North Hills - 4150 Main at North Hills St, Raleight",
    image:"https://pix-placewise.vercel.app/assets/img/featured-img-2.jpg",
    popular: true,
},{
    id:2,
    title:" Spring Lane Cinemas - 1351 Plaza Blvd, Sanford, NC 27330",
    image:"https://pix-placewise.vercel.app/assets/img/featured-img-2.jpg",
    popular: false,
},{
    id:3,
    title:"RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536 ",
    image:"https://pix-placewise.vercel.app/assets/img/featured-img-3.jpg",
    popular: true,
},{
    id:4,
    title:"Costco Wholesale - 1021 Oak Forest Ln, Myrtle Beach, SC ",
    image:"https://pix-placewise.vercel.app/assets/img/featured-img-4.jpg",
    popular: true,
},{
    id:5,
    title:"Dollar General - 5416 Rock Quarry Rd, Raleigh, NC 27610",
    image:"https://pix-placewise.vercel.app/assets/img/featured-img-5.jpg",
    popular: false,
},{
    id:6,
    title:"Best Buy - 6280 Capital Blvd, Raleigh, NC 27616 ",
    image:"https://pix-placewise.vercel.app/assets/img/featured-img-6.jpg",
    popular: false,
}]
function Properties() {
  return (
    <div className="pt-28 bg-blue-100">
      <div className="flex justify-center mb-4">
        <div className="flex justify-center bg-white p-1 rounded-full gap-2 items-center">
          <div className="bg-blue-700 rounded-full p-2">
            <FaArrowRightLong className="text-2xl" />
          </div>
          <p className="text-xl font-bold text-blue-900 px-2">Properties</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-16">
        <h1 className="text-5xl text-slate-700 font-bold mb-8">
          Featured Listed Property
        </h1>
        <p className="mt text-slate-500 text-xl">
          Real estate can be bought, sold, leased or rented, and can be valuable
          investment property.
        </p>
        <p className="text-slate-500 text-xl">
          The value of real estate can be...
        </p>
      </div>
      <div className="flex justify-around items-center pb-16">
        <div className="flex justify-evenly items-center gap-4">
          <div className="bg-blue-700 rounded-full px-4">
            <h1 className="text-white p-2 text-xl">New York</h1>
          </div>
          <div className="bg-blue-200 font-semibold rounded-full px-4">
            <h1 className="text-blue-700 p-2 text-xl">Mumbai</h1>
          </div>
          <div className="bg-blue-200 font-semibold rounded-full px-4">
            <h1 className="text-blue-700 p-2 text-xl">Paris</h1>
          </div>
          <div className="bg-blue-200 font-semibold rounded-full px-4">
            <h1 className="text-blue-700 p-2 text-xl">London</h1>
          </div>
        </div>
        <div className="bg-blue-200 group hover:bg-blue-700 cursor-pointer font-semibold flex justify-center items-center rounded-full px-4 border-2 border-blue-700">
          <h1 className="text-blue-700 p-2 text-xl hover:text-white">
            View All
          </h1>
          <div>
            <FaArrowRightLong className="text-blue-700 group-hover:text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {vacation.map((item) => (
          <Vacation key={item.id} item={item} />
        ))}
      </div>
       <div className="flex items-center m-8 justify-center pb-28">
        <div className="flex items-center gap-4 text-white bg-blue-700 px-4 p-2 rounded-full text-lg font-semibold "><FaHourglassStart/>Show More</div>
       </div>
    </div>
  );
}

export default Properties;
