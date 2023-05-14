import { ReactElement } from "react";
import { Header, PageCard, Layout, TechStack } from "~/components";
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

const SubHeader = ({ title }: { title: string }) => {
  return <h4></h4>;
};

const About = () => {
  return (
    <>
      <Layout>
        <Header title="About" />
        <PageCard>
          <div className="flex flex-col gap-x-5 md:flex-row">
            {/* Left Image */}
            <div className="mb-3 flex w-full items-center justify-center md:mb-0 md:basis-1/3 md:justify-start">
              <Image
                className="rounded-md"
                src="/images/pfp.jpeg"
                alt="green"
                width={500}
                height={500}
                loading="eager"
              />
            </div>
            <div className="desktop:basis-2/3 w-full">
              {/* Right Content*/}
              <p className="mb-4">
                {`I'm a Software Developer from Pomona, California, working primarily
            in web development for e-commerce. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum`}
              </p>
              {/* Personal Info */}
              <div>
                <h4 className="mb-4 text-lg font-bold">Personal Info</h4>
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
            <h4 className="mb-1 text-lg font-bold">Tech Stack</h4>
            <TechStack />
          </div>
        </PageCard>
      </Layout>
    </>
  );
};

export default About;
