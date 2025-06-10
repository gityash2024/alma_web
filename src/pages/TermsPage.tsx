import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/LegalPage.scss';

const TermsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Read the Terms of Service for Almawakening. Learn about the rules, guidelines, and legal terms governing the use of our website and services."
        keywords="terms of service, legal, terms and conditions, rules, guidelines"
        path="/terms"
        ogImage="https://www.almawakening.org/og-image-default.jpg"
      />
      <Layout>
        <div className="legal-page terms">
          <div className="container">
            <h1>Terms of Service</h1>
            <p className="last-updated">Last Updated: June 15, 2023</p>

            <section className="legal-section">
              <h2>1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Almawakening ("we," "us" or "our"), concerning your access to and use of the www.almawakening.org website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
              </p>
              <p>
                You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
              <p>
                The Content and Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. User Representations</h2>
              <p>
                By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Prohibited Activities</h2>
              <p>
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p>
                As a user of the Site, you agree not to:
              </p>
              <ul>
                <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                <li>Use the Site to advertise or offer to sell goods and services.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
                <li>Engage in unauthorized framing of or linking to the Site.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
                <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
                <li>Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. User Generated Contributions</h2>
              <p>
                The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").
              </p>
              <p>
                Contributions may be viewable by other users of the Site. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that the content is accurate, not in violation of any rights of any third party, and does not include material that is defamatory, obscene, threatening, or harmful.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Submissions</h2>
              <p>
                You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Site Management</h2>
              <p>
                We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Service; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Term and Termination</h2>
              <p>
                These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Governing Law</h2>
              <p>
                These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the State of New York applicable to agreements made and to be entirely performed within the State of New York, without regard to its conflict of law principles.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <address>
                Almawakening<br />
                123 Change Avenue<br />
                New York, NY 10001<br />
                United States<br /><br />
                Email: legal@almawakening.org<br />
                Phone: +1 (555) 123-4567
              </address>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TermsPage; 