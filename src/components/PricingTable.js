
import React from "react";
import pricingData from "../data/pricingData";

const PricingTable = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Our Pricing</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 w-80 flex flex-col items-center"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
            <p className="text-4xl font-bold mb-4">{plan.price}</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>{plan.storage}</li>
              <li>{plan.users}</li>
              <li>{plan.send}</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
