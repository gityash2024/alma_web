import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/LegalPage.scss';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn about how Almawakening collects, uses, and protects your personal information."
        keywords="privacy policy, data protection, personal information, cookies"
        path="/privacy-policy"
        ogImage="https://www.almawakening.org/og-image-default.jpg"
      />
      <Layout>
        <div className="legal-page privacy-policy">
          <div className="container">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last Updated: June 15, 2023</p>

            <section className="legal-section">
              <h2>1. Introduction</h2>
              <p>
                Almawakening ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.almawakening.org, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Collection of Your Information</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>

              <h3>Personal Data</h3>
              <p>
                Personally identifiable information, such as your name, email address, telephone number, and demographic information that you voluntarily give to us when you register with the Site, make a donation, or when you choose to participate in various activities related to the Site, such as online chat and message boards. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site.
              </p>

              <h3>Derivative Data</h3>
              <p>
                Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.
              </p>

              <h3>Financial Data</h3>
              <p>
                Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you make a donation or purchase on the Site. All financial information is stored by our payment processor, and you are encouraged to review their privacy policy and contact them directly for responses to your questions.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Use of Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul>
                <li>Create and manage your account.</li>
                <li>Process donations and send statements, receipts, and other communications.</li>
                <li>Email you regarding your account or events.</li>
                <li>Fulfill and manage donations and other transactions related to the Site.</li>
                <li>Send you newsletters, updates, and other communications.</li>
                <li>Request feedback and contact you about your use of the Site.</li>
                <li>Respond to your inquiries and solve any potential issues you might have with the use of the Site.</li>
                <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
                <li>Increase the efficiency and operation of the Site.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>

              <h3>By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </p>

              <h3>Third-Party Service Providers</h3>
              <p>
                We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </p>

              <h3>Marketing Communications</h3>
              <p>
                With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Cookies and Web Beacons</h2>
              <p>
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Third-Party Websites</h2>
              <p>
                The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Children's Privacy</h2>
              <p>
                The Site is not intended for use by children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If you are under 13, please do not attempt to register for the Site or send any information about yourself to us. If we learn we have collected personal information from a child under 13, we will delete that information as quickly as possible.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <address>
                Almawakening<br />
                123 Change Avenue<br />
                New York, NY 10001<br />
                United States<br /><br />
                Email: privacy@almawakening.org<br />
                Phone: +1 (555) 123-4567
              </address>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicyPage; 