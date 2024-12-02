import React from "react";

const Footer = () => {
  return (
      <footer className="w-full bg-[#180101] py-8 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-4">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul>
              <li><a href="#Footer" className="hover:underline">About</a></li>
              <li><a href="#Footer" className="hover:underline">Services</a></li>
              <li><a href="#Footer" className="hover:underline">Works</a></li>
              <li><a href="#Footer" className="hover:underline">Career</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-2">Help</h3>
            <ul>
              <li><a href="#Footer" className="hover:underline">Customer Support</a></li>
              <li><a href="#Footer" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#Footer" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul>
              <li><a href="#Footer" className="hover:underline">Free eBooks</a></li>
              <li><a href="#Footer" className="hover:underline">Development Tutorial</a></li>
              <li><a href="#Footer" className="hover:underline">How-to Blog</a></li>
              <li><a href="#Footer" className="hover:underline">Career</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <ul className="flex space-x-4 ">
              <li><a href="#Footer" className="hover:underline">Twitter</a></li>
              <li><a href="#Footer" className="hover:underline">Facebook</a></li>
              <li><a href="#Footer" className="hover:underline">Instagram</a></li>
              <li><a href="#Footer" className="hover:underline">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-4">&copy; 2024, All Rights Reserved By Redlit</p>
      </footer>
  );
};

export default Footer;
