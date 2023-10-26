import React from "react";
import { categories } from "../data/data.js";

const Category = () => {
  return (
    <div className="m-auto max-w-[1640px] px-4 py-12">
      <h1 className="text-center text-4xl font-bold text-orange-600">
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 gap-6 py-6 md:grid-cols-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg bg-gray-100 p-4"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
