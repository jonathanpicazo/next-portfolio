import React from "react";
import { Layout, Header, PageCard } from "~/components";

const Contact = () => {
  return (
    <Layout>
      <main>
        <section className="mx-auto max-w-[1000px]">
          <Header title="Contact Me" />
          <PageCard>
            <form name="contact" method="POST" data-netlify="true">
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-dracula-light"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block  w-full rounded-lg bg-dracula-dark p-2.5 text-sm text-dracula-light focus:border-dracula-purple-500 focus:ring-dracula-purple-500"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-dracula-light"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg bg-dracula-dark p-2.5 text-sm text-dracula-light focus:border-dracula-purple-500 focus:ring-dracula-purple-500"
                    placeholder="Email address"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-dracula-light"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block w-full rounded-lg bg-dracula-dark p-2.5 text-sm text-dracula-light  focus:border-dracula-purple-500 focus:ring-dracula-purple-500"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-dracula-purple-500 px-5 py-2.5 text-center text-sm font-medium text-dracula-darker-900 hover:bg-dracula-purple-600 focus:outline-none focus:ring-4 focus:ring-dracula-blue-300 sm:w-auto"
              >
                Submit
              </button>
            </form>
          </PageCard>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
