import { MemoizedExpertiseCard } from "@/SDK/cards/ExpertiseCard";
import imageUrls from "@/constants/imageUrls";
import { MemoizedCustomLayOut } from "@/modules/GenericComponents/CustomLayOut";
import { MemoizedIndustriesWeServe } from "@/modules/Home/IndustriesWeServe";
import { MemoizedOurExpertise } from "@/modules/Home/OurExpertise";
import { MemoizedOurTeam } from "@/modules/Home/OurTeam";
import { MemoizedOurVision } from "@/modules/Home/OurVision";
import { MemoizedWelcomeSection } from "@/modules/Home/WelcomSection";
import Head from "next/head";

import React from "react";

const expertiseData = [
  {
    id: 1,
    title: `User Experience Design`,
    description: `Crafting seamless digital experiences tailored to your users' needs,
    ensuring intuitive navigation and captivating interfaces that drive
    engagement and satisfaction.`,
    imageUrl: imageUrls.ux,
  },
  {
    id: 2,
    title: `Front-end Development`,
    description: `Transforming designs into responsive, pixel-perfect websites and applications with cutting-edge front-end technologies, ensuring optimal performance and user interaction.`,
    imageUrl: imageUrls.frontend,
  },
  {
    id: 3,
    title: `Backend Development`,
    description: `Empowering your digital infrastructure with robust backend solutions, ensuring scalability, security, and seamless integration to support your application's functionality and performance.`,
    imageUrl: imageUrls.backend,
  },
  {
    id: 4,
    title: `Mobile Development`,
    description: `Building native and cross-platform mobile applications that deliver exceptional user experiences, leveraging the latest technologies to meet your business objectives.`,
    imageUrl: imageUrls.mobile,
  },
  {
    id: 5,
    title: `QA Testing`,
    description: `Ensuring your digital products meet quality standards through rigorous testing, guaranteeing functionality, reliability, and user satisfaction for optimal performance.`,
    imageUrl: imageUrls.qa,
  },
  {
    id: 6,
    title: `Deployment`,
    description: `Streamlining the deployment process to seamlessly launch your digital solutions, ensuring smooth transitions and efficient implementation for maximum impact.`,
    imageUrl: imageUrls.deployment,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>
           Orange LVT - Your Digital Transformation Partner
        </title>
        <meta
          name="description"
          content=" Orange League Venture Technology helps enterprises turn their ideas into successful products. Contact us today to learn more about how we can help you build a successful MVP. Leading technology company specializing in digital transformation solutions."
        />
        <meta
          name="keywords"
          content=" Orange League Venture Technology, League Venture Technology,Orange LVT, LVT, digital transformation, MVP development, technology company, software development, product development, digital innovation, tech solutions"
        />
        <meta name="url" content="https://www.orangeleague.in/" />
        <meta name="lang" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.orangeleague.in/" />
        <link rel="icon" href={imageUrls.companyLogo} />
      </Head>

      <MemoizedCustomLayOut>
        <div className=" mx-2 sm:max-w-6xl md:mx-10  lg:mx-auto font-almarai !important px-2 pt-44 md:pt-52 ">
          <MemoizedWelcomeSection
            title={
              <p>
                Welcome to Orange League <br /> Your Digital Transformation
                Partner
              </p>
            }
            paragraph={` We're here to help you thrive in the digital landscape. With our expertise and dedication, we'll collaborate closely with you to develop tailored solutions that drive results.`}
            imageUrls={imageUrls}
          />
          <MemoizedOurExpertise
            text={
              <p>
                Our Dynamic Suite of Services <b /> Engineered for Innovation
              </p>
            }
          />
          <div className="mx-auto w-auto lg:max-w-7xl flex  justify-center my-2">
            <div className=" sm:mt-14 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {expertiseData.map((data) => {
                return (
                  <React.Fragment key={data.id}>
                    <MemoizedExpertiseCard
                      title={data.title}
                      description={data.description}
                      imageUrl={data.imageUrl}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          {/* <MemoizedIndustriesWeServe /> */}
          <MemoizedOurTeam />
        </div>
        <MemoizedOurVision />
      </MemoizedCustomLayOut>
    </>
  );
}
