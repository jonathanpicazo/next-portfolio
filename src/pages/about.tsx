import { ReactElement } from "react";
import { Header, PageCard, Layout, TechStack, SEO } from "~/components";
import Image from "next/image";
import {
  MdEmail,
  MdPhone,
  MdCalendarViewMonth,
  MdLocationPin,
} from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";

const ICON_SIZE = 23;
const personalInfo: { label: string; value: string; icon: ReactElement }[] = [
  {
    label: "phone",
    value: "+1 (909)-784-8797",
    icon: <FiSmartphone className="fill-dracula-green" size={ICON_SIZE} />,
  },
  {
    label: "location",
    value: "Pomona, CA, USA",
    icon: <MdLocationPin className="fill-dracula-red" size={ICON_SIZE} />,
  },
  {
    label: "email",
    value: "jonathanpicazo@outlook.com",
    icon: <MdEmail className="fill-dracula-cyan" size={ICON_SIZE} />,
  },
  {
    label: "birthday",
    value: "February 27, 1999",
    icon: (
      <MdCalendarViewMonth className="fill-dracula-orange" size={ICON_SIZE} />
    ),
  },
];

const SubHeader = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h4 className={`text-lg font-bold text-dracula-green ${className}`}>
      {title}
    </h4>
  );
};

const aboutText = [
  "Hello! I'm a software developer passionate about creating dynamic and engaging online experiences. With a strong foundation in front-end development and a keen eye for design, I strive to bring ideas to life through clean, efficient code.",
  "Throughout my education and personal projects, I have gained proficiency in HTML, CSS, and JavaScript. I enjoy the process of transforming wireframes and mockups into fully functional websites that not only look great but also provide a seamless user experience. I am also familiar with popular front-end frameworks and libraries like React, NextJS and Tailwind, which enable me to build interactive and responsive web applications.",
  "As a lifelong learner, I am constantly expanding my skill set and staying up-to-date with the latest trends and technologies in web development. I am enthusiastic about tackling new challenges and collaborating with experienced developers to enhance my knowledge and contribute to impactful projects.",
];

const About = () => {
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
              <SubHeader className="mb-4" title="Personal Info" />
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
                      <p className="text-dracula-purple">{el.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <SubHeader className="mb-1" title="Tech Stack" />
          <TechStack />
        </div>
      </PageCard>
    </>
  );
};

export default About;
