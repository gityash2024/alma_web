import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/LegalPage.scss';

const CookiesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Cookie Policy"
        description="Learn about how Almawakening uses cookies and similar technologies on our website."
        keywords="cookies, cookie policy, tracking, privacy, website cookies"
        path="/cookies"
        ogImage="https://www.almawakening.org/og-image-default.jpg"
      />
      <Layout>
        <div className="legal-page cookies">
          <div className="container">
            <h1>Cookie Policy</h1>
            <p className="last-updated">Last Updated: June 15, 2023</p>

            <section className="legal-section">
              <h2>1. Introduction</h2>
              <p>
                This Cookie Policy explains how Almawakening ("we," "us," or "our") uses cookies and similar technologies to recognize you when you visit our website at www.almawakening.org ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              <p>
                Please read this Cookie Policy carefully before you continue to use our Website. By using our Website, you are agreeing to our use of cookies in the manner described in this policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. What Are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, Almawakening) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Why Do We Use Cookies?</h2>
              <p>
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
              </p>
              <p>
                The specific types of first and third-party cookies served through our Website and the purposes they perform are described below:
              </p>

              <h3>Essential Cookies</h3>
              <p>
                These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the Website, you cannot refuse them without impacting how our Website functions.
              </p>

              <h3>Performance and Functionality Cookies</h3>
              <p>
                These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
              </p>

              <h3>Analytics and Customization Cookies</h3>
              <p>
                These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
              </p>

              <h3>Advertising Cookies</h3>
              <p>
                These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. How Can I Control Cookies?</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided below.
              </p>
              <p>
                You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
              </p>
              <p>
                In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com</a>.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Specific Cookies We Use</h2>
              <p>
                The following is a detailed list of the cookies used on our Website:
              </p>
              <div className="cookies-table-wrapper">
                <table className="cookies-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Purpose</th>
                      <th>Provider</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>_ga</td>
                      <td>Used to distinguish users for analytics purposes.</td>
                      <td>Google Analytics</td>
                      <td>2 years</td>
                    </tr>
                    <tr>
                      <td>_gid</td>
                      <td>Used to distinguish users for analytics purposes.</td>
                      <td>Google Analytics</td>
                      <td>24 hours</td>
                    </tr>
                    <tr>
                      <td>_gat</td>
                      <td>Used to throttle request rate.</td>
                      <td>Google Analytics</td>
                      <td>1 minute</td>
                    </tr>
                    <tr>
                      <td>sessionId</td>
                      <td>Used to maintain user session state.</td>
                      <td>Almawakening</td>
                      <td>Session</td>
                    </tr>
                    <tr>
                      <td>cookie_consent</td>
                      <td>Records your cookie consent preferences.</td>
                      <td>Almawakening</td>
                      <td>1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="legal-section">
              <h2>6. Changes to Our Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p>
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us at:
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

export default CookiesPage; 