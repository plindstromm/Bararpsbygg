import { useState } from "react";
import Cookies from "js-cookie";
import "./styles.scss"; // Import the SCSS file

const CookieBanner = () => {
  const [isAccepted, setIsAccepted] = useState(
    Cookies.get("cookieConsent") !== undefined
  );

  const handleCookieConsent = (consent: string) => {
    Cookies.set("cookieConsent", consent, { expires: 365 });
    setIsAccepted(true);
  };

  if (isAccepted) return null; // Hide banner if consent is given

  return (
    <div className="cookie-banner">
      <strong className="cookie-title">Cookie Settings</strong>
      <p className="cookie-text">
        We use cookies to enhance your experience and analyze site traffic.
      </p>
      <div className="cookie-buttons">
        <button onClick={() => handleCookieConsent("true")} className="accept">
          Accept
        </button>
        <button onClick={() => handleCookieConsent("false")} className="reject">
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
