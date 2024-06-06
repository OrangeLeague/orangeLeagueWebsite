import imageUrls from "@/constants/imageUrls";
import Head from "next/head";
import React from "react";

const industries = () => {
  return (
    <>
      <Head>
   
          <title>Industries We Serve - Orange LVT</title>
          <meta
            name="description"
            content="Explore the industries Orange LVT serves. Whether you're in healthcare, finance, or e-commerce, we can help you turn your ideas into reality. Top technology company providing digital solutions for various industries."
          />
          <meta
            name="keywords"
            content="industries, healthcare, finance, e-commerce, digital transformation, technology solutions, tech company, software development, digital innovation"
          />
        <meta name="url" content="https://www.orangeleague.in/industries" />
        <meta name="lang" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.orangeleague.in/industries" />
        <link rel="icon" href={imageUrls.companyLogo} />
      </Head>
    </>
  );
};

export default industries;
