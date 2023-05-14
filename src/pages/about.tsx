import { Header, PageCard, Layout } from "~/components";
import Image from "next/image";
import {
  MdEmail,
  MdPhone,
  MdCalendarViewMonth,
  MdLocationPin,
} from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
const ICON_SIZE = 23;
const personalInfo: { label: string; value: string; icon: any }[] = [
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
          <div className="flex flex-col md:flex-row gap-x-5">
            {/* Left Image */}
            <div className="w-full desktop:basis-1/3 flex items-center justify-center">
              <Image
                className="rounded-md"
                src="/images/pfp.jpeg"
                alt="green"
                width={500}
                height={500}
                loading="eager"
              />
            </div>
            <div className="w-full desktop:basis-2/3">
              {/* Right Content*/}
              <p>
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
                <h4 className="font-bold mb-4 text-lg">Personal Info</h4>
                {/* Social Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
                  {personalInfo.map((el) => (
                    <div className="flex" key={`about-icon-${el.label}`}>
                      <div className="bg-dracula-dark rounded-md flex items-center justify-center p-2 mr-2">
                        {el.icon}
                      </div>
                      <div>
                        <p className="capitalize text-dracula-dark-700 text-sm">
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
        </PageCard>
      </Layout>
    </>
  );
};

export default About;
