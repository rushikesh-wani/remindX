import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-200">
          Privacy Policy
        </h1>
        <p className="text-gray-300 text-lg mb-4">
          Your privacy is important to us. Here's how we handle your data:
        </p>
        <ul className="text-left text-gray-400 space-y-2">
          <li>🔒 We do not sell or share your personal information.</li>
          <li>
            🔒 Your email and reminders are encrypted and stored securely.
          </li>
          <li>
            🔒 We use cookies to enhance your experience, but you can opt out.
          </li>
          <li>
            🔒 You can request data deletion anytime by contacting support.
          </li>
        </ul>
        <p className="text-gray-400 mt-6">
          For further details, reach out at{" "}
          <a href="mailto:support@remindx.com" className="text-blue-400">
            support@remindx.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
