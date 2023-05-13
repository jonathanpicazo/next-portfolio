import { Header, PageCard } from "~/components";
import Image from "next/image";

const About = () => {
  return (
    <>
      <main>
        <Header title="About" />
        <PageCard>
          <div className="flex flex-col md:flex-row gap-x-5">
            <div className="w-full desktop:basis-1/3 flex items-center justify-center">
              <Image
                className="rounded-md mb-5"
                src="/images/pfp.jpeg"
                alt="green"
                width={500}
                height={500}
                loading="eager"
              />
            </div>
            <div className="w-full desktop:basis-2/3">
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
            </div>
          </div>
        </PageCard>
      </main>
    </>
  );
};

export default About;
