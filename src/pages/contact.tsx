import React from 'react';
import Lottie from 'lottie-react';
import { Header, PageCard, SEO, Button } from '~/components';
import contact from '../../public/lottie/contact.json';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Feel free to send a message to get in contact."
      />
      <section className="">
        <Header title="Contact Me" />
        <PageCard className="flex flex-col md:flex-row-reverse md:gap-16">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="flex w-full flex-col rounded-lg border border-dracula-dark p-4 shadow-xl"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-dracula-pink"
                >
                  <span className="mb-1.5 block">Name</span>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-lg bg-dracula-dark p-2.5 text-sm text-dracula-light focus:border-dracula-purple-500 focus:ring-dracula-purple-500"
                    placeholder="Name"
                    required
                  />
                </label>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-dracula-pink"
                >
                  <span className="mb-1.5 block">Email address</span>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full rounded-lg bg-dracula-dark p-2.5 text-sm text-dracula-light focus:border-dracula-purple-500 focus:ring-dracula-purple-500"
                    placeholder="Email address"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-dracula-pink"
              >
                <span className="mb-1.5 block">Your message</span>

                <textarea
                  id="message"
                  rows={6}
                  name="message"
                  className="block w-full rounded-lg bg-dracula-dark p-2.5 text-sm text-dracula-light  focus:border-dracula-purple-500 focus:ring-dracula-purple-500"
                  placeholder="Write your message here"
                />
              </label>
            </div>
            <Button type="submit">Submit</Button>
          </form>
          <div className="mr-auto flex flex-col justify-between rounded-lg border border-dracula-dark p-8 shadow-xl">
            <Lottie className="max-w-[360px]" animationData={contact} />
            <div className="flex flex-col">
              <span>
                Email:{' '}
                <a
                  href="mailto:jonathanpicazo@outlook.com"
                  className="text-dracula hover:text-dracula-purple-600"
                >
                  jonathanpicazo@outlook.com
                </a>
              </span>
              <span>
                Phone:{' '}
                <a
                  href="mailto:jonathanpicazo@outlook.com"
                  className="text-dracula hover:text-dracula-purple-600"
                >
                  (909)-784-8797
                </a>
              </span>
            </div>
          </div>
        </PageCard>
      </section>
    </>
  );
}
