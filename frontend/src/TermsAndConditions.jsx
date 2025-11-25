import React from "react";
import tLogo from "./assets/vajra_banner.png";

const TermsAndConditions = () => {
  return (
    <div className="w-full">
      {/* Fully Responsive Banner Image */}
      <div
        className="w-screen h-60 sm:h-72 md:h-80 lg:h-[500px] bg-contain sm:bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${tLogo})`,
        }}
      ></div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-10 px-6 md:px-12">
        
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Welcome to our real estate project information platform. These Terms and Conditions govern
          your use of this website and the services we offer through our channel partner network.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          1. Acceptance of Terms
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          By accessing this website or filling out any form, you agree to comply with and be bound by
          these terms. If you disagree with any part of these terms, please do not use our site.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          2. Services Provided
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          We offer marketing and information services for real estate projects promoted by authorized
          channel partners. This includes details about ongoing projects, pricing, site visits,
          offers, and booking assistance.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          3. User Responsibilities
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          You agree to provide accurate contact and inquiry information. Misuse of the website or submitting
          false data may result in blocked access or denied services.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          4. Pricing and Availability
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Prices and availability of properties are subject to change without notice. Final confirmation
          will be provided by the developer or their authorized representatives.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          5. Limitation of Liability
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          We are not liable for any direct or indirect losses incurred due to developer decisions, project
          delays, legal clearances, or third-party actions. This site is informational and not an offer
          to sell.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          6. Changes to Terms
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          We reserve the right to update or revise these terms without prior notice. Continued use of
          this website following changes constitutes your agreement to the revised terms.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
