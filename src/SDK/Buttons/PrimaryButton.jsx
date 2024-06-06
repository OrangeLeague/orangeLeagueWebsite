import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CircularProgress } from "@mui/material";
import { AnimatedGradientButton } from "./buttonStyle";

const PrimaryButton = ({
  onClick,
  buttonText,
  buttonIcon,
  isFullWidth = false,
  loading = false,
}) => {
  return (
    <AnimatedGradientButton
      onClick={onClick}
      buttonText={buttonText}
      className={`m-1 bg-primary-orange font-almarai font-bold  text-white rounded-lg  ${
        isFullWidth ? "w-full" : ""
      }`}
    >
      {loading ? (
        <CircularProgress color="success" sx={{ padding: "4px" }} />
      ) : (
        <div className="relative flex justify-center gap-x-2 items-center mx-6 my-3 z-10">
          <p>{buttonText || `Connect Us`}</p>
          {buttonIcon || (
            <ArrowForwardIcon
              style={{ color: "white", width: "1.2rem", height: "1.2rem" }}
            />
          )}
        </div>
      )}
    </AnimatedGradientButton>
  );
};

export const MemoizedPrimaryButton = React.memo(PrimaryButton);
