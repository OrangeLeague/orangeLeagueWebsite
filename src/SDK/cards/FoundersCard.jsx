import React from "react";

const FounderCard = ({ imageUrl, name, position, experience }) => {
  return (  
    <div className="flex flex-col justify-between bg-accent-white shadow-md rounded-3xl">
      <div>
        <img
          src={imageUrl}
          alt={name}
          className="rounded-lg  bg-cover"
        />
      </div>
      <div className="p-6 flex  flex-col gap-y-2">
        <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
        <p className="text-sm md:text-base text-accent-purple font-normal">
          {position}
        </p>
        <p className="text-sm md:text-base font-normal">{experience}</p>
      </div>
    </div>
  );
};

export const MemoizedFounderCard = React.memo(FounderCard);
