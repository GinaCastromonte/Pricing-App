import React from "react";
import { useState } from "react";
import pricingData from "../data/pricingData";

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <div className="min-h-screen bg-[hsl(240,78%,98%)] flex flex-col items-center justify-center p-4">
      <div className="min-h-screen flex flex-col items-center justify-center p-4 pricing-background">
        <h1 className="text-4xl font-bold text-[#6E728E] mb-10">Our Pricing</h1>

        {/* Toggle Switch Container */}
        <div className="flex items-center gap-4 mb-12">
          <span
            className={`text-[hsl(234,14%,74%)] ${
              !isAnnual ? "text-[hsl(232,13%,33%)]" : ""
            }`}
          >
            Annually
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 rounded-full bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)] hover:opacity-80 transition-opacity"
          >
            <div
              className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                isAnnual ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-[hsl(234,14%,74%)] ${
              isAnnual ? "text-[hsl(232,13%,33%)]" : ""
            }`}
          >
            Monthly
          </span>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-6">
          {pricingData.map((plan, index) => {
            const isHighlighted = index === 1;
            return (
              <div
                key={index}
                className={`rounded-lg shadow-lg p-8 w-80 flex flex-col items-center ${
                  isHighlighted
                    ? "bg-gradient-to-r from-[hsl(236,72%,79%)] to-[hsl(237,63%,64%)]"
                    : "bg-white"
                }`}
              >
                <h2
                  className={`text-2xl font-bold mb-10 ${
                    isHighlighted ? "text-white" : "text-[hsl(232,13%,33%)]"
                  }`}
                >
                  {plan.title}
                </h2>
                <p
                  className={`text-4xl font-bold mb-10 ${
                    isHighlighted ? "text-white" : "text-[hsl(232,13%,33%)]"
                  }`}
                >
                  {plan.price}
                </p>
                <ul
                  className={`mb-10 space-y-4 w-full text-center  ${
                    isHighlighted ? "text-white" : "text-[hsl(234,14%,74%)]"
                  }`}
                >
                  <li className="border-b border-t pb-4 border-current/50">
                    {plan.storage}
                  </li>
                  <li className="border-b pb-4 border-current/50">
                    {plan.users}
                  </li>
                  <li className="border-b pb-4 border-current/50">
                    {plan.send}
                  </li>
                </ul>
                <button
                  className={`py-2 px-6 rounded-full transition ${
                    isHighlighted
                      ? "bg-white text-[hsl(237,63%,64%)] hover:bg-gray-200"
                      : "bg-[hsl(237,63%,64%)] text-white hover:bg-[hsl(237,63%,54%)]"
                  }`}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bottom-background"></div>
    </div>
  );
};

export default PricingTable;
