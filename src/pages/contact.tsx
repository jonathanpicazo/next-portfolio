import React from "react";
import { Layout } from "~/components";

const Contact = () => {
  return (
    <Layout>
      <main>
        <section>
          <form>
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
                  className="bg-dracula-darker-900  text-dracula-light text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                  className="bg-dracula-darker-900 text-dracula-light text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                rows={4}
                className="block p-2.5 w-full text-sm text-dracula-light bg-dracula-darker-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
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
