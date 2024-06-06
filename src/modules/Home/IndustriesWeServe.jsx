import React from "react";
import { MemoizedPrimaryButton } from "@/SDK/Buttons/PrimaryButton";
import { MemoizedCustomTitle } from "../GenericComponents/CustomTitle";
import { scrollToFooter } from "@/utils/scrollToFooter";

const IndustriesWeServe = () => {
  return (
    <div className="mx-auto mt-16  sm:mt-36">
      <MemoizedCustomTitle title={"Industries We Serve"} />

      <div className="flex flex-col md:flex-row mt-4 sm:mt-10 md:justify-between">
        <div className="md:w-1/2  h-96 shadow bg-white rounded-3xl"></div>

        <div className="md:w-1/2  my-6 sm:my-12  mx-4 sm:ml-16 sm:mr-12">
          <h2 className="mb-6 text-2xl font-bold text-accent-black">
            Tailored Solutions, Addressing the Unique Needs of Every Industry
          </h2>

          <p className="mb-6  text-sm sm:text-base font-normal text-accent-black">
            We are aware of the particular difficulties faced by every sector.
            Become one of the many business titans who rely on us to provide
            outstanding digital solutions. For this reason, we provide
            customized solutions based on the demands of your industry. Whether
            you are in finance, retail, or manufacturing, we have you covered.
          </p>

          <MemoizedPrimaryButton onClick={scrollToFooter} />
        </div>
      </div>
    </div>
  );
};

export const MemoizedIndustriesWeServe = React.memo(IndustriesWeServe);
