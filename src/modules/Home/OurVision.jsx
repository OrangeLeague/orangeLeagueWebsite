import React from "react";
import { MemoizedCustomTitle } from "../GenericComponents/CustomTitle";
import imageUrls from "@/constants/imageUrls";
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

const OurVision = () => {
  return (
    <div
      className="relative font-almarai w-full bg-no-repeat bg-center bg-cover mt-16 sm:mt-36 py-12 px-2 h-[100%] md:h-[100vh]"
      style={{
        backgroundImage: `url(${imageUrls.vision})`,
      }}
    >
      <div className="flex flex-col max-w-7xl mx-auto  h-full justify-center items-center">
        <div className="">
          <MemoizedCustomTitle title={`Our Vision`} />
        </div>
        
        <h1 className="my-2 md:my-6 mx-auto text-center text-xl sm:text-5xl font-bold sm:w-2/3 bg-gradient-to-r from-[#FD8EA6] to-[#B28EFD] bg-clip-text text-transparent">
        
        </h1>
        <AnimatedGradientText>
        <div  className="my-2 md:my-6 mx-auto text-center text-2xl sm:text-5xl font-bold sm:w-2/3 lg:leading-[3.5rem]">
        Empowering Innovation in Product Development with Excellence
        </div>
      </AnimatedGradientText>
        <p className=" mx-4 sm:mx-auto text-center font-light text-accent-white text-sm sm:text-base sm:w-2/3 my-2  md:my-6">
          At the forefront of innovation, we envision developing products that
          redefine industries, enrich lives, and inspire lasting change, fueled
          by creativity, expertise, and a relentless pursuit of excellence.
        </p>
      </div>
    </div>
  );
};

export const MemoizedOurVision = React.memo(OurVision);
