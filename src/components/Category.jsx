import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
// https://pix-placewise.vercel.app/assets/img/category-section-el.png
function Category() {
  return (
    <div className="mt-0">
      <img
        className="relative top-12 left-12  bg-no-repeat bg-contain z-0 w-44 h-44"
        style={{
          backgroundImage:
            'url("https://pix-placewise.vercel.app/assets/img/category-section-el.png")',
        }}
      />
      <div className="flex justify-center mb-4">
        <div className="flex justify-center bg-blue-100 p-1 rounded-full gap-2 items-center">
          <div className="bg-blue-500 rounded-full p-2">
            <FaArrowRightLong className="text-2xl" />
          </div>
          <p className="text-xl font-bold text-blue-900 px-2">Category</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-16">
        <h1 className="text-5xl text-slate-700 font-bold mb-8">
          Choose Our Category
        </h1>
        <p className="mt text-slate-500 text-xl">
          Real estate can be bought, sold, leased or rented, and can be valuable
          investment property.
        </p>
        <p className="text-slate-500 text-xl">
          The value of real estate can be...
        </p>
      </div>
    </div>
  );
}

export default Category;
