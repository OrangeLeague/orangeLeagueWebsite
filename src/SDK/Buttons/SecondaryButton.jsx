import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AnimatedGradientButton } from "./buttonStyle";

const SecondaryButton = ({ onClick }) => {
  return (
    <AnimatedGradientButton
      onClick={onClick}
      className={`m-1 bg-primary-orange  font-normal px-4 py-2 text-white rounded-lg secondary`}
    >
      <span className="font-normal learn">Learn More</span>
      <span className="arrow-icon">
        <ArrowForwardIcon
          style={{  color: "white", width: "1.2rem", height: "1.2rem", opacity: 1 }}
        />
      </span>
    </AnimatedGradientButton>
  );
};

export const MemoizedSecondaryButton = React.memo(SecondaryButton);
