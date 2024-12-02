import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#180101] text-white flex flex-col items-center">
      {/* Contact Section */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 p-8">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Got a project in mind?</h2>
          <h1 className="text-4xl font-bold text-red-500">Reserve a Call</h1>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-red-500">✔</span>
              <span className="ml-3">An in-depth session to understand your needs</span>
            </li>
            <li className="flex items-center">
              <span className="text-red-500">✔</span>
              <span className="ml-3">Learn which plan is right for your team</span>
            </li>
            <li className="flex items-center">
              <span className="text-red-500">✔</span>
              <span className="ml-3">Get onboarding help</span>
            </li>
          </ul>
          <p>
            <a href="#Contact" className="text-red-500 underline">
              Technical support or some query? Contact support →
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-red-700 p-6 rounded-lg shadow-lg space-y-6">
          <h2 className="text-xl font-bold">Tell us about yourself.</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded bg-gray-700 text-white outline-none"
              required
            />
            <input
              type="email"
              placeholder="Work Email"
              className="w-full p-3 rounded bg-gray-700 text-white outline-none"
              required
            />
            <select
              className="w-full p-3 rounded bg-gray-700 text-white outline-none"
              required
            >
              <option value="" disabled selected>
                Company Size
              </option>
              <option value="1-20">1-20</option>
              <option value="21-50">21-50</option>
              <option value="51-100">51-100</option>
              <option value="100+">100+</option>
            </select>
            <textarea
              placeholder="How can we help?"
              className="w-full p-3 rounded bg-gray-700 text-white outline-none"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 rounded bg-red-500 text-white font-bold hover:bg-red-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full bg-red-700 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg">Be the first to know about insights, technologies, and innovations.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md p-3 mt-4 rounded bg-gray-700 text-white outline-none"
          />
          <button className="p-3 mt-4 bg-red-500 rounded text-white hover:bg-red-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
