import React from "react";
import { Header, PageCard, SEO } from "~/components";
import { Button } from "~/components";

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
            <Button type="submit">Submit</Button>
          </form>
        </PageCard>
      </section>
    </>
  );
};

export default Contact;
