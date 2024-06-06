import React, { useEffect, useRef } from "react";

const ContactFrom = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    document.body.appendChild(script);

    script.onload = () => {
      if (formRef.current) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "46145117",
          formId: "210acd63-d188-42c2-b9e3-83428d4d08e5",
          target: "#hubspotForm",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="lg:mx-auto mx-4 w-11/12  lg:w-11/12 lg:mt-2 lg:mb-6 my-8 order border-accent-white  rounded-2xl ">
      <div className="">
        <div className="flex justify-between sm:p-10 px-6 ">
          <div className="w-full lg:w-1/2 ">
            <div className="text-2xl mb-6 font-bold text-center md:text-left hidden lg:block ">
              Let's Collaborate, <br /> Connect with Us Today
            </div>
            <div className="text-2xl font-bold text-center md:text-left block lg:hidden mb-4">
              Let's Collaborate, Connect with Us Today
            </div>
            <div id="hubspotForm" ref={formRef}></div>
            <div className="absolute w-4/5 sm:w-3/4 bg-white h-[6rem] sm:h-15 mt-[-90px] sm:mt-[-45px]"></div>
          </div>
          <div className="hidden lg:block lg:w-1/2 ">
            <img
              src="/images/Contact.svg"
              alt="Image"
              className="w-full max-w-md ml-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MemoizedContactFrom = React.memo(ContactFrom);
