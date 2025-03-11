import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/motorcycle-right.jpeg"
              alt="MotoMate123 Logo"
              width={160}
              height={45}
            />
            <p className="mt-4">
              Empowering motorcycle dealerships with precision valuation tools.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: info@motomate123.com</li>
              <li>Phone: (888) 123-4567</li>
              <li>
                Address: 123 MotoMate Way,
                <br />
                Powersports City, USA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 MotoMate123. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
