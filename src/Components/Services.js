import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#180101] text-white text-center">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h3 className="text-3xl font-bold mb-2">What We Offer</h3>
        {/* Sub-heading */}
        <p className="text-sm font-light border border-gray-400 rounded-full inline-block px-4 py-1 mb-10">
          Our experts will help you in the following fields
        </p>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Development Card */}
          <div className="relative bg-red-900 bg-opacity-80 p-6 rounded-lg shadow-lg">
            {/* Watermark */}
            <span className="absolute top-4 left-4 text-6xl text-red-700 opacity-20 font-bold">01</span>
            {/* Content */}
            <h4 className="text-xl font-bold mb-6 relative">Development</h4>
            <ul className="space-y-2">
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">UI/UX</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">DevOps</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Web Design</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Frontend Development</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Backend Development</li>
            </ul>
          </div>
          {/* MSP Card */}
          <div className="relative bg-red-900 bg-opacity-80 p-6 rounded-lg shadow-lg">
            {/* Watermark */}
            <span className="absolute top-4 left-4 text-6xl text-red-700 opacity-20 font-bold">02</span>
            {/* Content */}
            <h4 className="text-xl font-bold mb-6 relative">MSP</h4>
            <ul className="space-y-2">
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Infrastructure Management</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Managed Monitoring</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Business Continuity</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Managed Cyber</li>
            </ul>
          </div>
          {/* Cloud Card */}
          <div className="relative bg-red-900 bg-opacity-80 p-6 rounded-lg shadow-lg">
            {/* Watermark */}
            <span className="absolute top-4 left-4 text-6xl text-red-700 opacity-20 font-bold">03</span>
            {/* Content */}
            <h4 className="text-xl font-bold mb-6 relative">Cloud</h4>
            <ul className="space-y-2">
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">AWS</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Azure</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Multi-Cloud</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">SRE Strategy</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Serverless</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Hybrid Strategy</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Containerization</li>
            </ul>
          </div>
          {/* Cyber Card */}
          <div className="relative bg-red-900 bg-opacity-80 p-6 rounded-lg shadow-lg">
            {/* Watermark */}
            <span className="absolute top-4 left-4 text-6xl text-red-700 opacity-20 font-bold">04</span>
            {/* Content */}
            <h4 className="text-xl font-bold mb-6 relative">Cyber</h4>
            <ul className="space-y-2">
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Cyber Audit</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Cyber Governance</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Security as a Service</li>
              <li className="border border-gray-400 rounded px-3 py-1 inline-block">Penetration Testing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-red-700 mt-12 py-8">
        <h3 className="text-2xl font-semibold mb-6">Our Superpowers</h3>
        <div className="flex justify-center items-center gap-16">
          {/* Partner Logos as Inline SVG */}
          {/* DigitalOcean */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 256 256"
          >
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(8,8)">
                <path d="M16,3c-7.169,0 -13,5.832 -13,13h5c0,-4.418 3.582,-8 8,-8c4.418,0 8,3.582 8,8c0,4.418 -3.582,8 -8,8v5c7.169,0 13,-5.832 13,-13c0,-7.168 -5.831,-13 -13,-13zM16,24v-6h-6v6zM10,24h-4v4h4zM6,24v-3h-3v3z"></path>
              </g>
            </g>
          </svg>
          {/* Azure */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 256 256"
          >
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(5.33333,5.33333)">
                <path d="M46,40l-16.683,-29.148l-6.509,13.108l11.459,13.28l-21.267,2.415zM13.092,18.182l-11.092,18.714l9.442,-0.949l16.591,-30.269z"></path>
              </g>
            </g>
          </svg>

          {/* GitHub */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 256 256"
          >
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(8.53333,8.53333)">
                <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
              </g>
            </g>
          </svg>

          {/* Google Cloud */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 256 256"
          >
            <defs>
              <linearGradient
                id="color-1_fpGM2cINbbu4_gr1"
                x1="46.95"
                y1="23.75"
                x2="24.45"
                y2="25.25"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="1" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient
                id="color-2_fpGM2cINbbu4_gr2"
                x1="24.835"
                y1="9.608"
                x2="18.428"
                y2="19.289"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="0.523" stopColor="#ffffff" />
                <stop offset="0.712" stopColor="#ffffff" />
                <stop offset="0.846" stopColor="#ffffff" />
                <stop offset="0.954" stopColor="#ffffff" />
                <stop offset="1" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient
                id="color-3_fpGM2cINbbu4_gr3"
                x1="31.305"
                y1="40.347"
                x2="8.555"
                y2="30.222"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="0.486" stopColor="#ffffff" />
                <stop offset="0.661" stopColor="#ffffff" />
                <stop offset="0.786" stopColor="#ffffff" />
                <stop offset="0.887" stopColor="#ffffff" />
                <stop offset="0.972" stopColor="#ffffff" />
                <stop offset="1" stopColor="#ffffff" />
              </linearGradient>
              <linearGradient
                id="color-4_fpGM2cINbbu4_gr4"
                x1="17.16"
                y1="28.692"
                x2="7.285"
                y2="19.067"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="0.482" stopColor="#ffffff" />
                <stop offset="0.655" stopColor="#ffffff" />
                <stop offset="0.779" stopColor="#ffffff" />
                <stop offset="0.879" stopColor="#ffffff" />
                <stop offset="0.964" stopColor="#ffffff" />
                <stop offset="1" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(5.33333,5.33333)">
                <path
                  d="M38.193,18.359c-0.771,-2.753 -2.319,-5.177 -4.397,-7.03l-4.598,4.598c1.677,1.365 2.808,3.374 3.014,5.648v1.508c0.026,0 0.05,-0.008 0.076,-0.008c2.322,0 4.212,1.89 4.212,4.212c0,2.322 -1.89,4.213 -4.212,4.213c-0.026,0 -0.05,-0.007 -0.076,-0.008v0.008h-6.666h-1.546v6.5h8.212v-0.004c0.026,0 0.05,0.004 0.076,0.004c5.907,0 10.712,-4.806 10.712,-10.712c0,-3.725 -1.914,-7.009 -4.807,-8.929z"
                  fill="url(#color-1_fpGM2cINbbu4_gr1)"
                />
                <path
                  d="M19.56,25.59l4.72,-4.72c-0.004,-0.005 -0.008,-0.009 -0.011,-0.013l-4.717,4.717c0.002,0.005 0.005,0.01 0.008,0.016z"
                  fill="#ffffff"
                  opacity="0.5"
                />
                <path
                  d="M24,7.576c-8.133,0 -14.75,6.617 -14.75,14.75c0,0.233 0.024,0.46 0.035,0.69h6.5c-0.019,-0.228 -0.035,-0.457 -0.035,-0.69c0,-4.549 3.701,-8.25 8.25,-8.25c1.969,0 3.778,0.696 5.198,1.851l4.598,-4.598c-2.608,-2.326 -6.035,-3.753 -9.796,-3.753z"
                  fill="url(#color-2_fpGM2cINbbu4_gr2)"
                />
                <path
                  d="M15.712,31.5v0c-0.001,0 -0.001,0 -0.002,0c-0.611,0 -1.188,-0.137 -1.712,-0.373l-4.71,4.71c1.793,1.351 4.013,2.163 6.422,2.163c0.001,0 0.001,0 0.002,0v0h8.288v-6.5z"
                  fill="#ffffff"
                  opacity="0.5"
                />
                <path
                  d="M11.5,27.29c0,-2.32 1.89,-4.21 4.21,-4.21c1.703,0 3.178,1.023 3.841,2.494l4.717,-4.717c-1.961,-2.602 -5.065,-4.277 -8.559,-4.277c-5.899,0 -10.709,4.8 -10.709,10.71c0,3.491 1.691,6.59 4.288,8.547l4.71,-4.71c-1.468,-0.658 -2.498,-2.128 -2.498,-3.837z"
                  fill="url(#color-4_fpGM2cINbbu4_gr4)"
                />
              </g>
            </g>
          </svg>

          {/* Linode */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 256 256"
          >
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(5.12,5.12)">
                <path d="M16.5,0l-11.40625,3.59375l8.3125,5.09375l12.09375,-4.59375l-8.3125,-4c-0.19922,-0.10156 -0.48828,-0.09375 -0.6875,-0.09375zM4.09375,5.40625l2.5,12.09375c0,0.19922 0.20703,0.39453 0.40625,0.59375l7.3125,5.71875l-2,-13.40625zM26.40625,5.90625l-12,4.5l2,13.28125l10,-5.1875c0.30078,-0.10156 0.5,-0.50781 0.5,-0.90625zM38.3125,17.5625c-0.17578,0 -0.35156,0.02344 -0.5,0.125l-5.71875,3.625l6.59375,4.09375l6.125,-4.40625l-6,-3.3125c-0.14844,-0.10156 -0.32422,-0.125 -0.5,-0.125zM7.40625,20.90625l2.09375,10.59375c0,0.19922 0.11328,0.39844 0.3125,0.5l6.59375,6.1875l-1.59375,-11.375zM27,20.90625l-10,5.6875l1.40625,11.59375l8.59375,-5.78125c0.30078,-0.19922 0.50781,-0.50781 0.40625,-0.90625zM46,22.59375l-0.1875,0.21875c-0.10156,0.10156 -0.11719,0.1875 -0.21875,0.1875l-6.09375,4.1875l-0.3125,6.40625v0.40625l5.5,-4.3125c0.19922,-0.19922 0.30469,-0.39453 0.40625,-0.59375zM30,22.75c-0.1875,0 -0.39453,0.05469 -0.59375,0.15625l-0.21875,0.09375l0.3125,8.5c0,0.19922 0.00781,0.48828 -0.09375,0.6875l7.1875,-5.28125l-6.09375,-4c-0.14844,-0.10156 -0.3125,-0.15625 -0.5,-0.15625zM37.6875,28.5l-8,5.59375l0.21875,6.90625v0.5l7,-5.5c0.19922,-0.19922 0.40625,-0.38672 0.40625,-0.6875zM10.40625,34.6875l1.5,8c0,0.19922 0.08203,0.30078 0.28125,0.5l6,6.3125l-0.1875,-0.40625l-1.3125,-8.28125zM27.8125,34.8125l-9,5.78125l1.1875,8.3125l0.09375,0.59375l7.5,-6c0.30078,-0.19922 0.40625,-0.51172 0.40625,-0.8125z" />
              </g>
            </g>
          </svg>

          {/* Cloudflare */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 256 256"
          >
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(5.12,5.12)">
                <path d="M38,10.8125l-0.90625,3.78125l-1.90625,-3.40625v1.71875c2.89844,2.30078 4.92578,5.78906 5.125,9.6875c0.69922,-0.19922 1.30078,-0.1875 2,-0.1875c1.375,0 2.66797,0.29688 3.8125,0.875l-1.03125,-0.59375l3.8125,-0.875l-3.8125,-0.90625l3.40625,-1.90625h-3.8125l2.8125,-2.6875l-3.6875,1.09375l2,-3.3125l-3.3125,2l1.09375,-3.6875l-2.6875,2.78125l0.09375,-3.875l-2,3.28125zM27,11c-5,0 -9.41406,2.99219 -11.3125,7.59375c-0.69922,-0.39844 -1.6875,-0.6875 -2.6875,-0.6875c-3.19922,0 -5.90625,2.60547 -5.90625,5.90625v0.5c-3.89844,0.30078 -7.09375,3.67969 -7.09375,7.78125c0,0.80078 0.11328,1.51953 0.3125,2.21875c0.10156,0.39844 0.5,0.6875 1,0.6875h47c0.39844,0 0.67578,-0.19531 0.875,-0.59375c0.5,-1.10156 0.8125,-2.20703 0.8125,-3.40625c0,-4.19922 -3.48828,-7.59375 -7.6875,-7.59375c-0.80078,0 -1.51172,0.08203 -2.3125,0.28125l4.90625,6.625l-5.5,-4.5l-17.40625,3.78125l15.09375,-4.90625l-8.59375,-3.1875l10.6875,1.8125v-0.125c0,-6.69922 -5.48828,-12.1875 -12.1875,-12.1875zM46.78125,23.65625c0.43359,0.27344 0.84375,0.58594 1.21875,0.9375h0.5z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Services;
