import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Droplet className="w-8 h-8 text-blood-red" fill="#E63946" />
              <span className="text-2xl font-bold text-white">LifeFlow</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting donors, recipients, hospitals, and blood banks in real-time with our advanced blood management system.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blood-red transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blood-red transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blood-red transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blood-red transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blood-red transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-blood-red transition-colors duration-200">Donate Blood</Link>
              </li>
              <li>
                <Link to="/find-blood" className="text-gray-300 hover:text-blood-red transition-colors duration-200">Find Blood</Link>
              </li>
              <li>
                <Link to="/blood-banks" className="text-gray-300 hover:text-blood-red transition-colors duration-200">Blood Banks</Link>
              </li>
              <li>
                <Link to="/requests" className="text-gray-300 hover:text-blood-red transition-colors duration-200">Blood Requests</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-blood-red transition-colors duration-200">Community</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-blood-red transition-colors duration-200">Donor Guidelines</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blood-red transition-colors duration-200">Blood Types Info</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blood-red transition-colors duration-200">Health Tips</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blood-red transition-colors duration-200">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blood-red transition-colors duration-200">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blood-red transition-colors duration-200">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blood-red mt-0.5" />
                <span className="text-gray-300">123 Medical Center Dr, Healthcare City, HC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blood-red" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blood-red" />
                <span className="text-gray-300">contact@lifeflow.com</span>
              </li>
              <li className="mt-4">
                <a href="#" className="inline-flex items-center space-x-2 px-4 py-2 rounded-md bg-blood-red text-white hover:bg-blood-dark transition-colors duration-200">
                  <Heart className="w-4 h-4" />
                  <span>Emergency Hotline</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} LifeFlow Blood Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;