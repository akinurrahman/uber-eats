import React, { useState } from "react";
import { data } from "../data/data";
const Menu = () => {
  const [foods, setFoods] = useState(data);

  // Filter Data by Type
   const filterType =(category)=>{
    setFoods(
      data.filter((item)=>{
        return item.category === category
      })
    )
   }

  // Filter Data by Price
   const filterPrice =(price)=>{
    setFoods(
      data.filter((item)=>{
        return item.price === price
      })
    )
   }
  return (
    <div className="m-auto max-w-[1640px] px-4 py-12">
      <h1 className="text-center text-4xl font-bold text-orange-600 ">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col justify-between lg:flex-row ">
        {/* Filter Type */}
        <div className="mb-2">
          <p className="font-bold   text-gray-700">Filter Type</p>
          <div className="flex flex-wrap justify-between  space-y-2 sm:justify-start sm:space-x-4 lg:space-x-4">
            <button onClick={()=>setFoods(data)} className="my-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button onClick={()=>filterType('burger')} className="my-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Burgers
            </button>
            <button onClick={()=>filterType('pizza')} className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button onClick={()=>filterType('salad')} className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Salads
            </button>
            <button onClick={()=>filterType('chicken')} className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold   text-gray-700">Filter Price</p>
          <div className="flex flex-wrap space-x-4  space-y-2  lg:space-x-4">
            <button onClick={()=>filterPrice('$')} className="mt-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button onClick={()=>filterPrice('$$')} className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button onClick={()=>filterPrice('$$$')} className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button onClick={()=>filterPrice('$$$$')} className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display Menu */}
      <div className="grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4">
        {foods.map((item) => {
          return (
            <div key={item.id} className="border rounded-lg shadow-lg hover:scale-105 duration-300">
              <img src={item.image} alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-lg ">{item.price}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
