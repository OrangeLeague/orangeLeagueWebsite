import React from "react";
import { MemoizedPrimaryButton } from "../Buttons/PrimaryButton";
import { useRouter } from "next/router";

const TechnologiesCard = ({ data }) => {
  const navigate = useRouter()
  return (
    <div className="sm:w-auto w-full bg-accent-white border border-accent-white shadow-lg rounded-3xl relative overflow-hidden tech-card h-full">
      <div className="flex justify-center h-auto md:h-2/5">
        <img
          src={data.icon}
          alt={data.title}
          className={`w-56 md:w-72 object-contain`}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="px-5">
          <p className="text-accent-black font-bold md:text-2xl text-base mb-2">
            {data.title}
          </p>
          <p className="text-accent-purple md:text-base text-sm font-bold mb-4">
            {data.frameWorkd}
          </p>
          <p className="text-sm md:text-base font-normal">{data.desc}</p>
        </div>
        <div className="mx-2">
          <div className="flex justify-center primary-button  mt-2 mb-2 md:mb-auto ">
            <MemoizedPrimaryButton
              buttonText="View Case Studies"
              onClick={() => {
                navigate("/services");
              }}
             
              style={{
                fontWeight: "400",
                fontSize: "16px",
                width: "100%",
                // marginTop:"10px",
                // marginBottom:'-38px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MemoizedTechnologiesCard = React.memo(TechnologiesCard);
