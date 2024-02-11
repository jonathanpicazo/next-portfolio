import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { useMobile } from '~/hooks';
import { SocialList, SEO } from '~/components';
import Lottie from 'lottie-react';
import purpleLaptop from '../../public/lottie/purpleLaptop.json';
import { client } from '~/sanity-client';
import groq from 'groq';

export async function getStaticProps() {
  try {
    const data = await client.fetch(
      groq`*[_type == "home"]{_id, "resumeFile": resumeFile.asset->url}`
    );
    const resumeFile = data[0].resumeFile;
    return { props: { resumeFile } };
  } catch (error) {
    console.error('Error while fetching static props', error);
    return { props: { data: undefined } };
  }
}

type HomeProps = {
  resumeFile: string;
};
export default function Home({ resumeFile }: HomeProps) {
  const isMobile = useMobile();
  return (
    <div className="max-w-desktop mx-auto w-full md:px-10">
      <SEO
        title="Jonathan Picazo"
        description="Welcome to my personal website/portfolio!"
      />

      <div className="home flex h-screen w-full items-center justify-center md:h-[90vh] lg:h-[80vh] xl:h-[71vh]">
        <div className="w-full">
          <section className="flex flex-col items-center justify-center">
            <div className="mb-[-20px] md:mb-[-40px]">
              <Lottie animationData={purpleLaptop} />
            </div>
            <h1 className="text-body text-dracula-green mb-5 text-2xl font-bold  md:text-4xl">
              Jonathan Picazo
            </h1>
            <div className="text-large text-dracula-yellow mb-4 md:text-xl">
              <Typewriter
                options={{
                  strings: [
                    'Web Developer',
                    'Software Engineer',
                    'Dracula Enjoyer',
                    'Builder',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <SocialList className="mb-7 mt-4" />
            {resumeFile && (
              <motion.div
                /**
                 * Setting the initial keyframe to "null" will use
                 * the current value to allow for interruptable keyframes.
                 */
                whileHover={!isMobile ? { scale: [null, 1.3, 1.2] } : undefined}
                transition={{ duration: 0.3 }}
              >
                <a
                  className="border-dracula-purple bg-dracula-darker my-2 flex items-center gap-x-5 rounded-3xl border p-5 hover:opacity-75"
                  role="button"
                  href={resumeFile}
                  download="Jonathan_Picazo_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload className="text-dracula-purple" />
                  <span className="text-dracula-purple">Download CV</span>
                </a>
              </motion.div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
