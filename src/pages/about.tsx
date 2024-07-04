import React from 'react';
import groq from 'groq';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Header, PageCard, SEO, SubHeader } from '~/components';
import { personalInfo } from '~/data';
import { client } from '~/sanity-client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { urlFor } from '~/lib/utils';

import 'swiper/css/bundle';

export async function getStaticProps() {
  const aboutData = await client.fetch(
    groq`*[_type == "about" && _id == "about"][0] {
      personalImages[]{
        ...,
        "url": asset->url
      },
      aboutText
    }`
  );

  return {
    props: {
      aboutText: aboutData.aboutText,
      personalImages: aboutData.personalImages,
    },
  };
}

type Props = {
  aboutText: string[];
  personalImages: { url: string; alt?: string }[];
};

export default function About({ aboutText, personalImages }: Props) {
  return (
    <>
      <SEO title="About" description={aboutText.join(' ')} />
      <Header title="About" />
      <PageCard>
        <div className="flex flex-col-reverse gap-5 md:flex-row">
          <div className="mx-auto mt-4 w-full max-w-[400px] md:max-w-[350px]">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              className="mx-auto"
              style={
                { '--swiper-navigation-size': '25px' } as React.CSSProperties
              }
            >
              {personalImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative aspect-[9/16] h-full w-full">
                    <Image
                      src={urlFor(image.url).url() || ''}
                      alt={image.alt || 'Personal Image'}
                      priority
                      fill
                      className="h-auto w-auto rounded-md object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="desktop:basis-2/3 w-full">
            {/* Right Content */}
            <div className="mb-4">
              {aboutText.map((par, index) => (
                <p className="mb-2" key={`about-me-message-${index}`}>
                  {par}
                </p>
              ))}
            </div>
            {/* Personal Info */}
            <div className="mb-3 md:mb-5">
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

            <div>
              <SubHeader className="mb-2.5">Hobbies</SubHeader>
              <div className="flex flex-col [&>*]:align-middle [&>*]:first-letter:mr-2 [&>*]:first-letter:text-lg">
                <span>
                  🏃‍♂️ Running: Staying fit and clearing my mind with regular jogs
                  and marathon training.
                </span>
                <span>
                  ☕️ Cafe Hopping: Exploring new cafes and enjoying unique
                  coffee blends.
                </span>
                <span>
                  🎮 Video Games: Unwinding with competitive and story-driven
                  games.
                </span>
                <span>
                  📚 Reading About New Tech: Keeping up with the latest
                  technology trends and advancements.
                </span>
                <span>
                  📺 Binge-watching Shows: Relaxing with series on Netflix and
                  Hulu (usually sitcoms).
                </span>
              </div>
            </div>
          </div>
        </div>
      </PageCard>
    </>
  );
}
