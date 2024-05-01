import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-center">
          <div className="text-center md:text-left"> 
            <p className="text-lg font-bold mb-2">Contact Us</p>
            <div className="mb-2">
              <p className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                shadyjosephabadeer2003@gmail.com
              </p>
            </div>
            <div>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                Egypt, Cairo
              </p>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold mb-2">GET IN TOUCH</p>
            <div className="mb-1">
              <p>About us</p>
            </div>
            <div className="mb-1">
              <p>Privacy Policy</p>
            </div>
            <div className="mb-1">
              <p>Terms and Conditions</p>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold mb-2">Social Media</p>
            <div className="mb-1">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faInstagram} className="me-2" />
                Instagram
              </a>
            </div>
            <div className="mb-1">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={faFacebook} className="me-2" />
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 opacity-50">
          <p className="text-sm">&copy; 2024 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
