import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../Context";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={` bottom-0 left-0 w-full py-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
      } z-10`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-center">
          <div className="text-center md:text-center">
            <p className="text-lg font-bold mb-2">Contact Us</p>
            <div className="mb-2">
              <p className="flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <span
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  shadyjosephabadeer2003@gmail.com
                </span>
              </p>
            </div>
            <div className="mb-2">
              <p className="flex items-center justify-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                <span
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-900"
                  }`}
                >
                  Egypt, Cairo
                </span>
              </p>
            </div>
          </div>

          <div>
            <p className="text-lg font-bold mb-2">GET IN TOUCH</p>
            <div className="mb-1">
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-900"}`}
              >
                About us
              </p>
            </div>
            <div className="mb-1">
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-900"}`}
              >
                Privacy Policy
              </p>
            </div>
            <div className="mb-1">
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-900"}`}
              >
                Terms and Conditions
              </p>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold mb-2">Social Media</p>
            <div className="mb-1">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-${
                  isDarkMode ? "white" : "gray-900"
                } hover:text-gray-450`}
              >
                <FontAwesomeIcon icon={faInstagram} className="me-2" />
                Instagram
              </a>
            </div>
            <div className="mb-1">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-${
                  isDarkMode ? "white" : "gray-900"
                } hover:text-gray-450`}
              >
                <FontAwesomeIcon icon={faFacebook} className="me-2" />
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 opacity-75">
          <p className="text-sm text-gray-600">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
