import React, { useState } from "react";
import { MemoizedSecondaryButton } from "@/SDK/Buttons/SecondaryButton";
import { useRouter } from "next/router";
 
const ExpertiseCard = ({ title, description, imageUrl }) => {   
  const navigate = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="px-4 md:px-5 border bg-accent-white border-accent-white  shadow tech-card rounded-2xl py-9 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex mb-2 justify-between">
        <p className="text-accent-black font-bold text-lg md:text-xl">
          {title}
        </p>
        <img src={imageUrl} alt={title} className="sm:w-10 w-8 h-8  sm:h-10" />
      </div>

      <p className="mb-3 text-sm sm:text-base font-normal text-accent-grey">
        {description}
      </p>

      <MemoizedSecondaryButton
        buttonText="Learn More"
        onClick={() => {
          navigate.push("/services");
        }}
        isHovered={isHovered}
        isFullWidth={true}
      />
    </div>
  );
};

export const MemoizedExpertiseCard = React.memo(ExpertiseCard);
