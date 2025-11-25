import React from "react";
import pLogo from "./assets/vajra_banner.png";

const PrivacyPolicy = () => {
  return (
    <div className="w-full">
      {/* Full-Width Banner Image */}
      <div
        className="w-screen h-60 sm:h-72 md:h-80 lg:h-[500px] bg-contain sm:bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${pLogo})`,
        }}
      ></div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-10 px-6 md:px-12">
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Privacy Policy: We collect information from you when you register on our site or fill out a form.
          You may be asked to enter your name, e-mail address, and phone number. You may, however, visit
          our site anonymously. Any information we collect is used to personalize your experience and improve
          our website and customer service.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          1. Information We Collect
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          We collect personal information such as your name, email, phone number, location, and property preferences
          when you register, fill out an inquiry form, or request a callback.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          2. How We Use Your Information
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Your data is used to share project-related information, schedule site visits, provide pricing details, and
          keep you updated on new launches, offers, or changes related to the real estate projects we represent.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          3. Data Protection
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          We implement appropriate security measures to protect your personal data from unauthorized access,
          misuse, or disclosure. Your data is stored on secure servers and only accessible to authorized personnel.
        </p>

         <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          4. Cookies & Tracking
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Our website may use cookies to improve your browsing experience and track general usage patterns.
          You may disable cookies via your browser settings if you prefer not to be tracked.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          5. Changes to Privacy Policy
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          We may revise this policy from time to time. Updated versions will be published on this page with the latest
          effective date.
        </p>

        
      </div>
    </div>
  );
};

export default PrivacyPolicy;
