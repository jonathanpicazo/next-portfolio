import React from "react";
import { Layout, Header, PageCard, SEO } from "~/components";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact"
        description="Feel free to send a message to get in contact."
      />
      <section className="mx-auto max-w-[1000px]">
        <Header title="Contact Me" />
        <PageCard>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-dracula-pink"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full rounded-lg bg-dracula-dark p-2.5 text-sm text-dracula-light focus:border-dracula-purple-500 focus:ring-dracula-purple-500"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-dracula-pink"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full rounded-lg bg-dracula-dark p-2.5 text-sm text-dracula-light focus:border-dracula-purple-500 focus:ring-dracula-purple-500"
                  placeholder="Email address"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-dracula-pink"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                name="message"
                className="block w-full rounded-lg bg-dracula-dark p-2.5 text-sm text-dracula-light  focus:border-dracula-purple-500 focus:ring-dracula-purple-500"
                placeholder="Write your message here"
              />
            </div>
            <button
              type="submit"
              className="sm:w-auto w-full rounded-lg bg-dracula-purple-500 px-5 py-2.5 text-center text-sm font-medium text-dracula-darker-900 hover:bg-dracula-purple-600 focus:outline-none focus:ring-4 focus:ring-dracula-blue-300"
            >
              Submit
            </button>
          </form>
        </PageCard>
      </section>
    </>
  );
};

export default Contact;
