import React from "react";
import { Layout } from "~/components";

const Contact = () => {
  return (
    <Layout>
      <main>
        <section className="max-w-[1000px] mx-auto">
          <form name="contact" method="POST" data-netlify="true">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-dracula-light"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-dracula-darker-900  text-dracula-light text-sm rounded-lg focus:ring-dracula-purple-500 focus:border-dracula-purple-500 block w-full p-2.5"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-dracula-light"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-dracula-darker-900 text-dracula-light text-sm rounded-lg focus:ring-dracula-purple-500 focus:border-dracula-purple-500 block w-full p-2.5"
                  placeholder="Email address"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-dracula-light"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-dracula-light bg-dracula-darker-900 rounded-lg  focus:ring-dracula-purple-500 focus:border-dracula-purple-500"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-dracula-darker-900 bg-dracula-purple-500 hover:bg-dracula-purple-600 focus:ring-4 focus:outline-none focus:ring-dracula-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
