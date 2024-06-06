import React, { useEffect, useState } from "react";
import { MemoizedPrimaryButton } from "@/SDK/Buttons/PrimaryButton";
import { scrollToFooter } from "@/utils/scrollToFooter";
import styled from "styled-components";
import { keyframes } from "styled-components";

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;

const AnimatedGradientText = styled.h1`
  background-image: -webkit-linear-gradient(180deg, #fed175, #fd8ea6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 5s infinite linear;
  font-feature-settings: "kern";
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  &.gradient-1 {
    background-image: linear-gradient(90deg, #fed175, #fd8ea6);
  }
  &.gradient-2 {
    background-image: linear-gradient(90deg, #fd8ea6, #b28efd);
  }
  &.gradient-3 {
    background-image: linear-gradient(90deg, #b28efd, #62ff48);
  }
  &.gradient-4 {
    background-image: linear-gradient(90deg, #62ff48, #fec082);
  }
  &.gradient-5 {
    background-image: linear-gradient(90deg, #b28efd, #fec082);
  }
`;

const WelcomeSection = ({ title, paragraph, imageUrls }) => {
  return (
    <div className="text-center mx-auto">
      <AnimatedGradientText>
        <div  className="mb-5 pb-2  mx-auto text-center text-[1.65rem] md:text-3xl lg:text-6xl lg:leading-[4.5rem] font-bold md:max-w-5xl">
          {title}
        </div>
      </AnimatedGradientText>

      <p className=" mb-12 mx-auto text-center font-normal  text-sm sm:text-base max-w-sm md:max-w-lg lg:w-3/5 lg:max-w-4xl">
        {paragraph}
      </p>

      <MemoizedPrimaryButton onClick={scrollToFooter} />
      {imageUrls ? (
        <img
          className="mx-auto mt-16 sm:mt-36"
          src={imageUrls.laptop4x}
          width={"80%"}
          alt="laptop"
        />
      ) : null}
    </div>
  );
};

export const MemoizedWelcomeSection = React.memo(WelcomeSection);
