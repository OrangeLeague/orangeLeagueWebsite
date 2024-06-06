import React from "react";
import Link from "next/link";
import imageUrls from "@/constants/imageUrls";
import { MemoizedContactFrom } from "./ContactFrom";

const Footer = () => {
  return (
    <div className="font-almarai" >
      <div className=" !important  max-w-7xl mx-auto">
        <MemoizedContactFrom />
      </div>

      <footer className="bg-accent-black pt-6 mb-0 text-accent-white ">
        <div className=" bg-accent-black pt-2 w-full  max-w-7xl mx-auto">
          <div className="relative  w-11/12 mx-auto mt-12 text-accent-white">
            <div className="flex flex-col gap-8  sm:flex-row justify-between">
              <div className="flex w-full sm:w-1/2 flex-row justify-between sm:justify-start sm:flex-col">
              <img
          src={imageUrls.companyLogoWithTitle}
          alt="Orange League logo" 
          className=" cursor-pointer w-28 sm:w-52 "
        />

                <div className="flex gap-x-4  sm:ml-14 sm:mt-3">
                  <img src={imageUrls.linkedin} alt="linkedin" />

                  <img src={imageUrls.twitter} alt="twitter" />

                  <img src={imageUrls.discord} alt="discord" />

                  <img src={imageUrls.instagram} alt="instagram" />
                </div>
              </div>

              <div className="flex w-full sm:w-1/2 justify-between">
                <FooterSection title="Product">
                  <p>RoadMap</p>
                  <p>Services</p>
                  <p>Blog</p>
                </FooterSection>

                <FooterSection title="Company">
                  <p>Who we are</p>
                  <p>Careers</p>
                  <p>Contact us</p>
                  <p>Report</p>
                </FooterSection>

                <FooterSection title="Resources">
                  <p>Security</p>
                  <p>Terms</p>
                  <p>SiteMap</p>
                  <p>Privacy</p>
                </FooterSection>
              </div>
            </div>
            <div className="mt-10 mx-auto flex text-sm font-normal sm:text-base py-2 font-almarai  justify-between  border-t border-accent-white">
              <div className="flex">
                <p className="mr-10">Privacy Policy</p>
                <p>Terms of Conditions</p>
              </div>

              <p>Orange LVT Enterprises. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FooterSection = ({ title, children }) => {
  return (
    <div className="flex text-sm sm:text-base font-normal flex-col gap-y-4">
      <h1 className="text-primary-orange text-base sm:text-xl font-bold">{title}</h1>
      {children}
    </div>
  );
};

export const MemoizedFooter = React.memo(Footer);
