import React from 'react';

const Blog = () => {
  return (
    <div className="py-20 bg-[#180101] text-white text-center">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h3 className="text-sm text-White-500 tracking-wide uppercase">Read Our Blog</h3>
        <h2 className="text-2xl text-White-900 font-bold">
          Read daily news about startup companies
        </h2>
      </div>

      {/* Blog Post Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row border border-red-500 rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="md:w-1/3">
            <img
              src="https://image.freepik.com/free-photo/frustrated-business-woman-in-front-of-computer-at-office-desk_13339-230095.jpg" // Replace with actual image URL
              alt="Blog Post"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Blog Content Section */}
          <div className="md:w-2/3 p-6">
            <h3 className="text-xl font-semibold text-left text-white-800 mb-2">
              Not Another Framework
            </h3>
            <p className="text-white-600 mb-4 text-left">
              We bought all the Remix goodies over to React Router and made improvements in the process.Now it's time to bring those improved APIs back over to Remix where they started! 
            </p>
            <a
              href="#Hero"
              className="text-red-500 flex items-center font-medium hover:underline"
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Read More Button */}
      <div className="text-center">
        <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;
