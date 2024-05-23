import React from 'react'
import "../Css/Privacypolicy.css";
import Footer from "../Components/Footer";

const Customer_support = () => {
  return (
    <div>
      <div className="customer-suppot-main">
     
        <h1>CUSTOMER SUPPORT - ACTIVELISTENERS.IN</h1>
        <div className="customer suppot-container">
          <div>
            <h2>1. Introduction </h2>
            <p> Welcome to ActiveListeners.in!</p>
            <ul className="customer-support-ul">
              <li>
                <p>
                  We are committed to providing our users with exceptional
                  support to ensure a seamless experience on our platform.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2>2. Support Channels</h2>
            <ul className="customer-support-ul">
              <li>
                {" "}
                <p>
                  Email Support: Reach us at activelisteners@gmail.com for any
                  queries or issues.
                </p>
              </li>
              <li>
                {" "}
                <p>
                  Phone Support: Call us at [phone] during our support hours.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2> 3. Response Time - Acknowledgement:</h2>
            <ul className="customer-support-ul">
              <li>
                {" "}
                <p>
                  You will receive an acknowledgment email within 24 hours of
                  submitting your support request.
                </p>
              </li>
              <li>
                {" "}
                <p>
                  Resolution Time: We aim to resolve all issues within 3
                  business days. Complex issues may take longer, and we will
                  keep you informed of the progress.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2>4. Support Hours - Operating Hours:</h2>
            <ul className="customer-support-ul">
              <li>
                <p>
                  Our support team is available from 9 AM to 6 PM, Monday to
                  Friday.
                </p>
              </li>
              <li>
                <p>
                  Holiday Schedule: Support services are limited during weekends
                  and public holidays. We will notify users in advance of any
                  changes in support availability.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2> 5. User Responsibilities - Information to Provide:</h2>
            <ul className="customer-support-ul">
              <li>
                {" "}
                <p>
                  Information to Provide: When contacting support, please
                  provide your user ID, a detailed description of the issue, and
                  any relevant screenshots
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Behavioural Expectations: We expect users to communicate
                  respectfully with our support team. Abusive or disrespectful
                  behaviour will not be tolerated
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2> 6. Confidentiality and Privacy - Data Protection:</h2>
            <ul className="customer-support-ul">
              <li>
                {" "}
                <p>
                  We are committed to protecting your personal data in
                  accordance with our Privacy Policy.
                </p>
              </li>
              <li>
                <p>
                  Information provided by users will only be used to address
                  their support requests and improve our services
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2> 7.Contact Information - Support Team Contact: </h2>
            <ul className="customer-support-ul">
              <li>
                {" "}
                <p>For any support-related inquiries, contact us at:</p>
              </li>
              <li>
                <p>Email: activelisteners2024@gmail.com </p>
              </li>
              <li>Phone: [phone] </li>
              <li>Alternative Contacts: [phone]</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Customer_support