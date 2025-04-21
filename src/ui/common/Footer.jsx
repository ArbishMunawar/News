import React from "react";

const Footer = () => {
  return (
    <footer className="bg-rose-900 text-white py-10">
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div>
          <h4 className="text-2xl font-semibold mb-2">My News</h4>
          <p className="text-gray-300 text-sm max-w-sm">
            Stay updated with the latest news from around the world. Trusted sources, real-time updates, and stories that matter.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="font-semibold text-lg mb-2">Quick Links</h5>
          <a href="/" className="hover:underline text-gray-300 text-sm">Home</a>
          <a href="/Category" className="hover:underline text-gray-300 text-sm">Categories</a>
          <a href="/about" className="hover:underline text-gray-300 text-sm">About Us</a>
          <a href="/contact" className="hover:underline text-gray-300 text-sm">Contact</a>
        </div>

        <div>
          <h5 className="font-semibold text-lg mb-2">Get in Touch</h5>
          <p className="text-gray-300 text-sm">Email: support@mynews.com</p>
          <p className="text-gray-300 text-sm">Phone: +1 (123) 456-7890</p>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} My News. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
