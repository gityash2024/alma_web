import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/GetInvolvedPage.scss';
import BeTheChange from '../assets/images/BeTheChange.png';
import WomenEmpowerment from '../assets/images/WomenEmpowerment.png';
import JoinHandsWithAlmawakening from '../assets/images/JoinHandsWithAlmawakening.png';
import albert_flores from '../assets/images/albert_flores.svg';

const GetInvolvedPage: React.FC = () => {

    const handleExploreMore = (): void => {
          console.log('Explore more clicked');
        };
  return (
    <Layout>
      <SEO title="Get Involved" />
      <div className="get-involved-page">
        
        {/* Hero Section with Background Image */}
        <section className="hero-section">
          <div 
            className="hero-background"
            style={{ backgroundImage: `url(${BeTheChange})` }}
          >
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">Be The Change - Contribute Now</h1>
                <p className="hero-subtitle">
                  Whether you want to volunteer, intern, or partner with us -<br />
                  There's a place for you at Almawakening
                </p>
              </div>
              
              {/* Feature Cards */}
              <div className="feature-cards">
                <div className="feature-card card-pink">
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="card-title">Make a Real Difference</h3>
                  <p className="card-description">
                    Your time and effort directly uplift communities—helping children learn, supporting families in need, and spreading hope where it's needed most.
                  </p>
                </div>
                
                <div className="feature-card card-coral">
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="card-title">Grow Personally & Professionally</h3>
                  <p className="card-description">
                    Volunteering builds empathy, confidence, and new skills—while connecting you with like-minded people who care about creating change.
                  </p>
                </div>
                
                <div className="feature-card card-yellow">
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2.05v2.02c4.39.54 7.5 4.53 6.96 8.92-.46 3.64-3.32 6.5-6.96 6.96v2.02c5.5-.55 9.5-5.43 8.95-10.93C21.45 6.37 17.63 2.55 13 2.05zm-2 0C6.5 2.6 2.5 7.48 3.05 12.98c.5 4.67 4.37 8.47 9.04 8.97v-2.02c-3.64-.46-6.5-3.32-6.96-6.96C4.59 8.58 7.7 4.59 11 4.05V2.05z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="card-title">Be Part of Something Bigger</h3>
                  <p className="card-description">
                    Join a purpose-driven community that believes in kindness, action, and impact. Together, we're building a better world—one step at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="events-section">
          <div className="events-container">
            <div className="events-sidebar">
              <h2 className="events-title">
                Explore Events to <br />
                <span className="title-highlight">Volunteer</span>
              </h2>
              <p className="events-description">
                Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <button className="view-all-btn">View All</button>
            </div>
            
            <div className="events-cards">
              <div 
                className="event-card event-card-with-image"
                style={{ backgroundImage: `url(${WomenEmpowerment})` }}
              >
                <div className="event-content">
                  <h3 className="event-title">Women Empowerment Training</h3>
                  <p className="event-description">
                    Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate.
                  </p>
                  <div className="event-details">
                    <p className="event-date">Date: 15 March 2025</p>
                    <p className="event-location">Location: Jaipur</p>
                  </div>
                  <div className="event-actions">
                    <button className="volunteer-btn">Volunteer Now</button>
                    <button className="participate-btn">
                      Participate 
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div 
                className="event-card event-card-with-image"
                style={{ backgroundImage: `url(${WomenEmpowerment})` }}
              >
                <div className="event-content">
                  <h3 className="event-title">Free Medical Camp</h3>
                  <p className="event-description">
                    Providing consultations and medicines to 800+ villagers
                  </p>
                  <div className="event-details">
                    <p className="event-date">Date: 5 February 2025</p>
                    <p className="event-location">Location: Nashik</p>
                  </div>
                  <div className="event-actions">
                    <button className="volunteer-btn">Volunteer Now</button>
                    <button className="participate-btn">
                      Participate 
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Form Section */}
        <section className="volunteer-form-section">
          <div 
            className="form-background"
            style={{ backgroundImage: `url(${JoinHandsWithAlmawakening})` }}
          >
            <div className="container">
              <div className="form-container">
                <div className="form-header">
                  <h2 className="form-title">
                    Join Hands With <br />
                    <span className="alma-purple">Alma</span><span className="alma-yellow">wakening</span>
                  </h2>
                  <p className="form-subtitle">Make a difference in lives.</p>
                </div>
                
                <form className="volunteer-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        placeholder="e.g. Jane"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        placeholder="e.g. Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Id</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="e.g. janedoe@gmail.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="e.g. 63566XXXXX"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="checkbox-label">Select Preferred Volunteer Role</label>
                    <div className="checkbox-group">
                      <label className="checkbox-item">
                        <input type="checkbox" name="role" value="event-helper" />
                        <span className="checkmark"></span>
                        Event Helper
                      </label>
                      <label className="checkbox-item">
                        <input type="checkbox" name="role" value="awareness-campaigner" defaultChecked />
                        <span className="checkmark checked"></span>
                        Awareness Campaigner
                      </label>
                      <label className="checkbox-item">
                        <input type="checkbox" name="role" value="mentor" defaultChecked />
                        <span className="checkmark checked"></span>
                        Mentor for Beneficiaries
                      </label>
                      <label className="checkbox-item">
                        <input type="checkbox" name="role" value="admin-assistant" defaultChecked />
                        <span className="checkmark checked"></span>
                        Administrative Assistant
                      </label>
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="submit-btn">Submit</button>
                    <button type="button" className="cancel-btn">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Banner Section */}
        <section className="scrolling-banner-section">
          <div className="scrolling-text">
            <span>Be The Voice * Be The Voice * Be The Voice * Be The Voice * Be The Voice * Be The Voice * Be The Voice * Be The Voice * Be The Voice * Be The Voice * </span>
          </div>
        </section>

        {/* Second Section - About Our Founder */}
<section className="founder-section">
  <div className="founder-container">
    <div className="founder-card">
      <div className="founder-content">
        <div className="founder-text">
          <h2 className="founder-title">About Our Founder</h2>
          <h3 className="founder-subtitle">Alma Chopra: Redefining Strength, Breaking Barriers</h3>
          <p className="founder-description">
            Diagnosed with cerebellar ataxia at 10, she have faced many 
            challenges, but she have turned them into opportunities for 
            growth and empowerment. She is passionate about raising 
            awareness for disabilities and promoting inclusion, believing that 
            every obstacle is a chance to grow stronger.
          </p>
          
          <button 
            onClick={handleExploreMore}
            className="founder-explore-btn"
          >
            Explore more
          </button>
        </div>
      
        <div className="founder-image-container">
          <img 
            src={albert_flores}
            alt="Alma Chopra - Founder"
            className="founder-image"
          />
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Partnership Section */}
        <section className="partnership-section">
          <div className="partnership-container">
            <div className="partnership-content">
              <p className="partnership-description">
                Collaborate with us to create lasting <br />
               change. We welcome partnerships with <br />
                NGOs, corporates, academic institutions, <br />
                and local communities.
              </p>
              <button className="partner-btn">Partner With Us</button>
            </div>
            
            <div className="partnership-card">
              <div className="partnership-item">
                <div className="check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="partnership-text">
                  <h4>Corporate Social Responsibility (CSR) collaborations</h4>
                </div>
              </div>
              
              <div className="partnership-item">
                <div className="check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="partnership-text">
                  <h4>Educational institutions for skill training & research</h4>
                </div>
              </div>
              
              <div className="partnership-item">
                <div className="check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="partnership-text">
                  <h4>NGOs and grassroots organizations for joint initiatives</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default GetInvolvedPage;