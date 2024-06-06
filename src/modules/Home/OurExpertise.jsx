import React from "react";
import { MemoizedCustomTitle } from "../GenericComponents/CustomTitle";

const OurExpertise = ({ title = "Our Expertise", text, style }) => {
  return (
    <div
      className="mx-auto flex flex-col justify-center  mb-7 mt-12 sm:mt-16"
      style={style}
    >
      {title && <MemoizedCustomTitle title={title} />}
      {text ? (
        <div className="md:max-w-4xl mt-4 mx-auto text-center text-2xl md:text-xl sm:text-3xl lg:text-5xl lg:leading-[3.5rem] font-bold style">
          {text}
        </div>
      ) : null}
    </div>
  );
};

export const MemoizedOurExpertise = React.memo(OurExpertise);
