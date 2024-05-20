import React from 'react'
import Footer from "../Components/Footer.js"
import "../Css/Privacypolicy.css";
const Privacy_policy = () => {
  return (
    <div>
      <div className="privacypolicy-main-container">
        <div className="privacypolicy">
          <h1>Privacy Policy-Activelisteners.in:</h1>
          <p>Last updated: May 16, 2024</p>
          <hr></hr>

          <div className="privacypolicy">
            <h2>1 .Information We Collect</h2>
            <ul className="privacypolicy-ul">
              <p>We use your information to:</p>
              <li>
                {" "}
                Personal Data: When you use our services, we may ask for
                information like your email address, name, and phone number.
              </li>
              <li>
                Usage Data: We automatically collect data about how you use our
                website, such as your IP address, browser type, and pages
                visited
              </li>
            </ul>
          </div>
          <div className="privacypolicy">
            <h2>2. How We Use Your Data</h2>
            <p>We collect information:</p>
            <ul className="privacypolicy-ul">
              <li>Provide and maintain our services</li>
              <li>
                Indirectly: Through cookies and tracking technologies. Manage
                your account
              </li>
              <li> Communicate with you</li>
              <li> Improve our services</li>
              <li>
                Send you updates and promotional offers (if you agree to receive
                them)
              </li>
            </ul>
          </div>
          <div className="privacypolicy">
            <h2>3 . Sharing Your Information</h2>
            <p>We may share your data with:</p>
            <ul className="privacypolicy-ul">
              <li> Service providers who help us run our services</li>
              <li> Affiliates within our corporate group</li>
              <li>Other users if you interact with them on our site</li>
              <li>
                Third parties if we are involved in a business transaction like
                a merger or sale
              </li>
            </ul>
          </div>
          <div className="privacypolicy">
            <h2>4. Your Data Rights</h2>
            <p>
              You can request to access, update, or delete your personal data.
              To do so, visit your profile data and update/delete your account.
            </p>
            <h2>5. Security</h2>
            <ul className="privacypolicy-ul">
              <p>
                We take reasonable measures to protect your data but cannot
                guarantee its absolute security.
              </p>
            </ul>
            <h2>6. Links to Other Websites</h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for their privacy practices. Please review their
              policies.
            </p>
            <h2>7. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. We will notify you of
              any changes by posting the new policy on our website and updating
              the "Last updated" date.
            </p>
          </div>
        </div>
        <div className="privacypolicy">
          <h2>8. Contact Us</h2>

          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>

          <p>Email: activelisteners2024@gmail.com</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy_policy;