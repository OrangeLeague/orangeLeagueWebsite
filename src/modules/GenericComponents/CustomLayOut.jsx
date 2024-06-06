import React from "react";

const CustomLayOut = ({ children }) => {
  return (
    <div
      className=" bg-fixed mb-32 bg-no-repeat bg-100-auto sm:bg-70-auto"
      style={{
        backgroundImage: `url(/images/map.svg)`,
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};

export const MemoizedCustomLayOut = React.memo(CustomLayOut);
