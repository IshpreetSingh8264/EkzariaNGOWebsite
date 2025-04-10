import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Ekzaria</h3>
          <p className="text-[#BDBDBD]">
            Making the world a better place through donations and support.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-[#BDBDBD]">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Donate</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <address className="not-italic text-[#BDBDBD]">
            <p>123 Charity Street</p>
            <p>New York, NY 10001</p>
            <p>info@donationhub.org</p>
            <p>(555) 123-4567</p>
          </address>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#424242] text-center text-[#BDBDBD]">
        <p>&copy; {new Date().getFullYear()} DonationHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
