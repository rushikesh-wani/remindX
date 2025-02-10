import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-200">
          Terms & Conditions
        </h1>
        <p className="text-gray-300 text-lg mb-4">
          Welcome to RemindX! By using our service, you agree to abide by the
          following terms and conditions.
        </p>
        <ul className="text-left text-gray-400 space-y-2">
          <li>✅ You must be at least 13 years old to use RemindX.</li>
          <li>✅ Do not misuse the service for spam or illegal activities.</li>
          <li>
            ✅ We may update our terms from time to time, so please check back.
          </li>
          <li>✅ Your data is securely handled as per our Privacy Policy.</li>
        </ul>
        <p className="text-gray-400 mt-6">
          If you have any questions, contact us at{" "}
          <a href="mailto:support@remindx.com" className="text-blue-400">
            support@remindx.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
