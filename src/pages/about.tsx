import React from "react";
import Image from "next/image";
import { Header, PageCard, TechStackIcon, SEO, SubHeader } from "~/components";
import { techStackArr, techStackDictionary, personalInfo } from "~/data";

const aboutText = [
  "Hello! I'm a software developer passionate about creating dynamic and engaging online experiences. With a strong foundation in front-end development and a keen eye for design, I strive to bring ideas to life through clean, efficient code.",
  "Throughout my education and personal projects, I have gained proficiency in HTML, CSS, and JavaScript. I enjoy the process of transforming wireframes and mockups into fully functional websites that not only look great but also provide a seamless user experience. I am also familiar with popular front-end frameworks and libraries like React, NextJS and Tailwind, which enable me to build interactive and responsive web applications.",
  "As a lifelong learner, I am constantly expanding my skill set and staying up-to-date with the latest trends and technologies in web development. I am enthusiastic about tackling new challenges and collaborating with experienced developers to enhance my knowledge and contribute to impactful projects.",
];

export default function About() {
  return (
    <>
      <SEO title="About" description={aboutText.join(" ")} />
      <Header title="About" />
      <PageCard>
        <div className="flex flex-col gap-x-5 md:flex-row">
          {/* Left Image */}
          <div className="mb-3 flex w-full items-center justify-center md:mb-0 md:basis-1/3 md:justify-start">
            <Image
              className="h-full w-full rounded-md object-cover"
              src="/images/aboutme.jpg"
              alt="green"
              width={500}
              height={500}
              loading="eager"
            />
          </div>
          <div className="desktop:basis-2/3 w-full">
            {/* Right Content*/}
            <div className="mb-4">
              {aboutText.map((par, index) => (
                <p className="mb-2" key={`about-me-message-${index}`}>
                  {par}
                </p>
              ))}
            </div>
            {/* Personal Info */}
            <div>
              <SubHeader className="mb-4">Personal Info</SubHeader>
              {/* Social Grid */}
              <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2">
                {personalInfo.map((el) => (
                  <div className="flex" key={`about-icon-${el.label}`}>
                    <div className="mr-2 flex items-center justify-center rounded-md bg-dracula-dark p-2">
                      {el.icon}
                    </div>
                    <div>
                      <p className="text-sm capitalize text-dracula-dark-700">
                        {el.label}
                      </p>
                      <p className="text-dracula-yellow">{el.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <SubHeader className="mb-2">Tech Stack</SubHeader>
          {/* Tech Stack */}
          <section className="flex flex-col gap-y-4">
            {techStackArr.map((el) => (
              <div key={`tech-stack-arr-${el.label}`}>
                <p className="mb-3 text-base text-dracula-purple">{el.label}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-3">
                  {el.items.map((key) => {
                    const item = techStackDictionary[key];
                    return (
                      <TechStackIcon
                        key={`tech-stack-list-${item.label}`}
                        item={item}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
        </div>
      </PageCard>
    </>
  );
}
