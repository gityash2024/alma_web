import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/ContactPage.scss';
import contactusbackground from '../assets/images/contactusbackground.png';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with the Almawakening team. We're here to answer your questions and connect with you."
        keywords="contact, reach out, message, email, phone, location"
        path="/contact"
        ogImage="https://www.almawakening.org/og-image-contact.jpg"
      />
      <Layout>
        <div className="contact-page">
          {/* Header Section with Background Image */}
          <section 
            className="contact-header" 
            style={{ 
              backgroundImage: `url(${contactusbackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="header-content">
              <h1>Contact Us</h1>
              <p>Let's take initiative towards something great together!</p>
              <p>Contact one of us now.</p>
              
              <div className="scroll-indicator">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="contact-form-section">
            <div className="container">
              <div className="contact-content">
                {/* Contact Info */}
                <div className="contact-info">
                  <h2>Get In Touch</h2>
                  
                  <div className="info-item">
                    <h3>Phone</h3>
                    <p>+91 72369 89237</p>
                  </div>
                  
                  <div className="info-item">
                    <h3>Email</h3>
                    <p>makechange@mail.com</p>
                    <p>getintouch@mail.com</p>
                    <p>almawakening@mail.com</p>
                  </div>
                  
                  <div className="info-item">
                    <h3>Address</h3>
                    <p>5th Avenue</p>
                    <p>Near Sunshine square</p>
                    <p>300014</p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-container">
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="e.g. Jane"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="e.g. Jane"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Type email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Type Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Type message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default ContactPage;