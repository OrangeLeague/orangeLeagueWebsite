import React from "react";

const ServicesCard = ({ card, index }) => {
  return (
    <div className="lg:mx-auto    mx-4 sm:max-w-11/12 lg:max-w-7xl lg:mt-2 lg:mb-6 bg-accent-white ">
      <div className="order border-accent-white shadow-equal rounded-3xl">
        <div
          key={index}
          className={`flex flex-col lg:flex-row px-2 lg:px-4 py-4 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div
            className={`w-full lg:w-3/5  ${
              index % 2 === 1 ? "lg:pr-8" : "lg:pl-8"
            }`}
          >
            <div className="block lg:hidden flex justify-center">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full max-w-lg"
              />
            </div>
            <div className="lg:x-4 lg:mx-auto pl-2  sm:mt-8 sm:pl-6 pt-4 sm:pt-auto">
              <h4 className="text-lg  lg:text-xl font-bold text-orange-500 mb-2">
                {card.title}
              </h4>
              <p className="text-sm lg:text-base font-normal text-black mb-4">
                {card.description}
              </p>
              <div className="flex flex-wrap mt-2 lg:mt-4">
                {card.tools.map((item, index) => (
                  <div key={index} className="flex items-center my-2 mx-1">
                    <p className="text-[#F15D27] bg-[#FEF2EE] font-medium text-xs lg:text-sm px-4 py-2 rounded-lg whitespace-nowrap">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`w-full lg:w-1/2 lg:pr-auto ${
              index % 2 === 1 ? "lg:pl-8" : "lg:ml-8"
            }`}
          >
            <div className="hidden lg:block mr-6">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MemoizedServicesCard = React.memo(ServicesCard);
