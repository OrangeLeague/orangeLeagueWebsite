import React from "react";

const CustomTitle = ({ title }) => {
  return (
    <p className="font-bold text-accent-purple text-base sm:text-xl text-center">{title}</p>
  );
};

export const MemoizedCustomTitle = React.memo(CustomTitle);
