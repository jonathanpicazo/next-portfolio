import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

import { SocialList, SEO } from "~/components";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-desktop px-10">
      <SEO
        title="Jonathan Picazo"
        description="Welcome to my personal website/portfolio!"
      />

      <div className="home lg:h-[80vh] xl:h-[71vh] flex h-screen w-full items-center justify-center md:h-[90vh]">
        <div className="w-full">
          <section className="flex flex-col items-center justify-center">
            <div className="my-5 flex flex-col">
              <Image
                className="mb-5 rounded-full"
                src="/images/pfp.jpeg"
                alt="green"
                width={250}
                height={250}
                loading="eager"
              />
            </div>
            <h1 className="text-body mb-5 text-2xl font-bold text-dracula-green md:text-4xl">
              Jonathan Picazo
            </h1>
            <div className="text-large mb-4 text-dracula-yellow md:text-xl">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Software Engineer",
                    "Dracula Enjoyer",
                    "Builder",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <SocialList className="mb-7 mt-4" />
            <motion.div
              /**
               * Setting the initial keyframe to "null" will use
               * the current value to allow for interruptable keyframes.
               */
              whileHover={{ scale: [null, 1.3, 1.2] }}
              transition={{ duration: 0.3 }}
            >
              <a
                className="my-2 flex items-center gap-x-5 rounded-3xl border border-dracula-purple bg-dracula-darker p-5 hover:opacity-75"
                role="button"
                href="/picazo_cv.pdf"
                download="CV_Jonathan_Picazo.pdf"
              >
                <FaDownload className="text-dracula-purple" />
                <span className="text-dracula-purple">Download CV</span>
              </a>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
