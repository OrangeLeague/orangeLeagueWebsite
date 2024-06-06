import { MemoizedTechnologiesCard } from "@/SDK/cards/TechnologiesCard";
import imageUrls from "@/constants/imageUrls";
import { MemoizedCustomLayOut } from "@/modules/GenericComponents/CustomLayOut";
import { MemoizedOurExpertise } from "@/modules/Home/OurExpertise";
import { MemoizedWelcomeSection } from "@/modules/Home/WelcomSection";
import Head from "next/head";
import React from "react";

const techData = [
  {
    id: 1,
    icon: "/images/technologies/ReactIcon.svg",
    title: "React JS",
    frameWorkd: "Front-End",
    desc: `We specialize in harnessing the power of React JS to build dynamic and interactive web applications.`,
  },
  {
    id: 2,
    icon: "/images/technologies/ExpressIcon.svg",
    title: "Express JS",
    frameWorkd: "Back-End",
    desc: `With our expertise in Express.js, we build robust and scalable server-side applications for your needs.`,
  },
  {
    id: 3,
    icon: "/images/technologies/MongoIcon.svg",
    title: "MongoDB",
    frameWorkd: "Database",
    desc: `Harnessing MongoDB, we create flexible, high-performance databases for modern applications.`,
  },
  {
    id: 4,
    icon: "/images/technologies/NodeIcon.svg",
    title: "Node JS",
    frameWorkd: "Back-End",
    desc: `Our Node.js solutions deliver efficient, scalable server-side applications, ensuring high performance and rapid development.`,
  },
  {
    id: 5,
    icon: "/images/technologies/AwsIcon.svg",
    title: "AWS",
    frameWorkd: "Cloud",
    desc: `We leverage AWS to provide secure, scalable cloud solutions tailored to your needs.`,
  },
  {
    id: 6,
    icon: "/images/technologies/GCPIcon.svg",
    title: "GCP",
    frameWorkd: "Cloud",
    desc: `Using GCP, we offer reliable, scalable cloud services for modern enterprises, enhancing agility and optimizing performance.`,
  },
  {
    id: 7,
    icon: "/images/technologies/DockerIcon.svg",
    title: "Docker",
    frameWorkd: "Cloud",
    desc: `Our Docker expertise ensures efficient, consistent, and scalable deployment of applications, simplifying development workflows and enhancing environment management.`,
  },
  {
    id: 8,
    icon: "/images/technologies/PostmanIcon.svg",
    title: "Postman",
    frameWorkd: "API Testing",
    desc: `We utilize Postman to streamline API development and testing for seamless integrations, ensuring robust and efficient workflows.`,
  },
  {
    id: 9,
    icon: "/images/technologies/ionicIcon.svg",
    title: "Ionic",
    frameWorkd: "Mobile Development",
    desc: `We build cross-platform mobile apps with Ionic, ensuring seamless performance on any device and delivering a consistent user experience.`,
  },
  {
    id: 10,
    icon: "/images/technologies/PostgressIcon.svg",
    title: "PostgreSQL",
    frameWorkd: "Database",
    desc: `Our PostgreSQL solutions ensure reliable, high-performance relational database management.`,
  },
  {
    id: 11,
    icon: "/images/technologies/OracleIcon.svg",
    title: "Oracle DB",
    frameWorkd: "Database",
    desc: `We provide robust, secure database solutions using OracleDB for enterprise-grade applications.`,
  },
  {
    id: 12,
    icon: "/images/technologies/ReactnativeIcon.svg",
    title: "React Native",
    frameWorkd: "Mobile Development",
    desc: `Using React Native, we develop cross-platform mobile apps with a native look and feel.`,
  },
  {
    id: 13,
    icon: "/images/technologies/AngularIcon.svg",
    title: "Angular",
    frameWorkd: "Front-End",
    desc: `Our Angular expertise enables the creation of powerful, dynamic web applications, providing robust performance and a responsive user experience.`,
  },
  {
    id: 14,
    icon: "/images/technologies/NextIcon.svg",
    title: "Next JS",
    frameWorkd: "Front-End",
    desc: `With Next.js, build fast, SEO-friendly web applications featuring server-side rendering. Enhance performance and user experience with efficient routing and static site generation.`,
  },
  {
    id: 15,
    icon: "/images/technologies/SvelteIcon.svg",
    title: "Svelte",
    frameWorkd: "Front-End",
    desc: `Harnessing Svelte, we create highly efficient, fast web applications with a lean footprint, ensuring optimal performance and seamless user interactions.`,
  },
];

export default function Technologies() {
  return (
    <>
      <Head>
        <title>Technologies We Use - Orange LVT</title>
        <meta
          name="description"
          content="Explore the technologies Orange LVT specializes in, including React JS, Express, MongoDB, Node.js, AWS, GCP, Docker, Postman, Next.js, and more. Top technology company utilizing cutting-edge tech for software development."
        />
        <meta
          name="keywords"
          content="technologies, React JS, Express, MongoDB, Node.js, AWS, GCP, Docker, Postman, Next.js, technology company, software development, tech solutions, digital innovation"
        />
        <meta name="url" content="https://www.orangeleague.in/technologies" />
        <meta name="lang" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.orangeleague.in/technologies" />
        <link rel="icon" href={imageUrls.companyLogo} />
      </Head>

      <MemoizedCustomLayOut>
        <div className="mx-2 sm:max-w-6xl lg:mx-auto font-almarai  !important px-2 pt-44  md:pt-52">
          <MemoizedWelcomeSection
            title={
              "Navigate the Digital Landscape with Leading Tech-driven Solutions"
            }
            paragraph={`Our technology experts are at the forefront of innovation, leveraging AI, IoT, and blockchain to create transformative solutions. Join us in embracing the future and revolutionizing the way you do business in the digital age.`}
          />
          <div className="sm:pt-16">
            <MemoizedOurExpertise
              title="Technologies That  We Are Expert In"
              // style={{ marginTop: "10rem" }}
            />
          </div>
          <div className="mx-auto  sm:mx-12 flex flex-col justify-center my-2">
            <div className="mt-7 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {techData.map((data) => {
                return (
                  <React.Fragment key={data.id}>
                    <MemoizedTechnologiesCard data={data} />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </MemoizedCustomLayOut>
    </>
  );
}
