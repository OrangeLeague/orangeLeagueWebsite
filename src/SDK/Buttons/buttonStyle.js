import styled, { keyframes } from "styled-components";

const hue = keyframes`
  0% {
    background-position:0% 50% /* Start color */
  }
  50% {
    background-position:100% 50% /* Start color */
  }
  100% {
    background-position:0% 50% /* Start color */
  }
  
`;

export const AnimatedGradientButton = styled.button`
  font-weight: ${({ buttonText }) =>
    buttonText !== "Submit" ? "bold" : "normal"};
  font-size: ${({ buttonText }) =>
    buttonText !== "Submit" ? "1rem" : "0.875rem"};
  color: white;
  border-radius: 0.375rem;

  &:hover {
    background: linear-gradient(to right, #ffd60c, #f15d27, #ffd60c);
    background-size: 200% 100%;
    animation: ${hue} 3s infinite; 
    font-feature-settings: "kern";
  }
`;
