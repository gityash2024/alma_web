import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/DonatePage.scss';
import donateBackground from '../assets/images/donateBackground.png';
import donatelogo from '../assets/images/donatelogo.png';
import IgniteImpact from '../assets/images/IgniteImpact.png';
import DriveChange from '../assets/images/DriveChange.png';
import EveryRupeeCounts from '../assets/images/EveryRupeeCounts.png';
import albert_flores from '../assets/images/albert_flores.svg';
import Contactus from '../assets/images/contactus.svg'; 
import contactlogo from '../assets/images/contactlogo.png';
import questionMark from '../assets/images/questionMark.svg';
import BeAnAlly from '../assets/images/BeAnAlly.png';
import ContactMainIconSVG from '../assets/images/contactus.svg';
const DonatePage: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState(100);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [otherAmount, setOtherAmount] = useState<string>('');
      const [openFaq, setOpenFaq] = useState(0);
  

  const donationOptions = [
    [30, 40, 50, 100],
    [150, 300, 450, 500],
    [1000, 1500, 3000, 4000]
  ];

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(parseInt(event.target.value));
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setOtherAmount('');
  };

  const handleOtherAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtherAmount(event.target.value);
    setSelectedAmount(null);
  };

   const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? -1 : index);
};

     const faqs = [
        {
            question: "Is my donation secure?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
        },
        {
            question: "Will I receive a receipt?",
            answer: "Yes, you will receive an email receipt immediately after your donation is processed."
        },
        {
            question: "How is the money spent?",
            answer: "We provide detailed reports on how donations are allocated across our various programs and initiatives."
        },
        {
            question: "Can I volunteer instead of donating?",
            answer: "Absolutely! We welcome volunteers and have various opportunities available throughout the year."
        }
    ];

  const handleContribute = () => {
    const finalAmount = selectedAmount || parseInt(otherAmount) || 0;
    console.log('Contributing amount:', finalAmount);
    // Add your contribution logic here
  };

  return (
    <>
      <SEO
        title="Donate"
        description="Support our mission by donating to Almawakening. Your contribution helps us create positive change in communities."
        keywords="donate, support, contribution, charity, nonprofit, almawakening"
        path="/donate"
        ogImage="https://www.almawakening.org/og-image-donate.jpg"
      />
      
      <Layout>
        <div className="donate-page">
          {/* Hero Section */}
          <section className="hero-section">
            <div 
              className="hero-background"
              style={{ backgroundImage: `url(${BeAnAlly})` }}
            >
              <div className="hero-content">
                <div className="hero-image-container">
                  <img src={donatelogo} alt="Community support" className="hero-image" />
                </div>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          <section className="cards-section">
            <div className="cards-container">
              <div className="card card-purple">
                <div className="card-icon">♥</div>
                <h3 className="card-title">Ignite Impact</h3>
                <p className="card-description">
                  Spark joy by sharing your cause and positive impact it brings. 
                  Clearly express how contribution will make meaningful difference.
                </p>
              </div>
              
              <div className="card card-coral">
                <div className="card-icon">✦</div>
                <h3 className="card-title">Drive Change</h3>
                <p className="card-description">
                  Every contribution helps uplift real people and communities 
                  through sustainable, grassroots initiatives.
                </p>
              </div>
              
              <div className="card card-yellow">
                <div className="card-icon">⚡</div>
                <h3 className="card-title">Every Rupee Counts</h3>
                <p className="card-description">
                  No matter the amount, your support brings hope, healing, 
                  and opportunity to someone who truly needs it.
                </p>
              </div>
            </div>
          </section>

          {/* Interactive Donation Section */}
          <section className="donation-section">
            <div className="donation-container">
              <h2 className="donation-title">Learn How Your Gift Helps</h2>
              <p className="donation-subtitle">Even the smallest contribution can make a difference.</p>
              
              <div className="slider-container">
                <div className="slider-labels">
                  <span className="slider-min">₹1</span>
                  <span className="slider-max">₹1000</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="1000"
                  value={donationAmount}
                  onChange={handleSliderChange}
                  className="donation-slider"
                />
              </div>
              
              <div className="amount-display">
                <span className="amount-label">Total Rupees</span>
                <div className="amount-value">₹ {donationAmount}</div>
              </div>
              
              <div className="donation-cards">
                <div className="donation-card">
                  <h4>Ignite Impact</h4>
                  <p>Spark joy by sharing your cause and positive impact it brings. 
                     Clearly express how contribution will make meaningful difference.</p>
                </div>
                
                <div className="donation-card">
                  <h4>Drive Change</h4>
                  <p>Every contribution helps uplift real people and communities 
                     through sustainable, grassroots initiatives.</p>
                </div>
                
                <div className="donation-card">
                  <h4>Every Rupee Counts</h4>
                  <p>No matter the amount, your support brings hope, healing, 
                     and opportunity to someone who truly needs it.</p>
                </div>
              </div>
              
              <button className="support-button">Be a Support</button>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="testimonial-section">
            <div className="testimonial-container">
              <blockquote className="testimonial-quote">
                "When you give to Almawakening, you're investing in real stories, 
                real change, and real futures"
              </blockquote>
              
              <button className="circle-button">Join our Circle of Hope!</button>
              
              <p className="consistent-support">Consistent support means consistent impact!</p>
              
              <div className="testimonial-content">
                <div className="testimonial-text">
                  <h3>"People now recognise that having a good performance conversation 
                      means that something happens as a result."</h3>
                  
                  <p>"With Landingfolio, the design team can now build design which 
                     identifies employees' career aspirations and goals and from which 
                     we approach managers and check to see what is happening."</p>
                </div>
                
                <div className="testimonial-image">
                  <img src={albert_flores} alt="Albert Flores" />
                </div>
              </div>
              
              <div className="testimonial-navigation">
                <button className="nav-button nav-prev">←</button>
                <button className="nav-button nav-next">→</button>
              </div>
            </div>
          </section>

          {/* Amount Selection Section */}
          <section className="amount-selection-section">
            <div className="amount-selection-container">
              <div className="amount-selection-content">
                <div className="amount-title-section">
                  <h2 className="amount-title">
                    Be a Helping Hand for<br />
                    Better Cause
                  </h2>
                </div>
                
                <div className="amount-options-section">
                  <div className="amount-grid">
                    {donationOptions.map((row, rowIndex) => (
                      <div key={rowIndex} className="amount-row">
                        {row.map((amount) => (
                          <button
                            key={amount}
                            className={`amount-button ${selectedAmount === amount ? 'active' : ''}`}
                            onClick={() => handleAmountSelect(amount)}
                          >
                            ₹{amount}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                  
                  <div className="amount-actions">
                    <input
                      type="number"
                      placeholder="Other Amount"
                      value={otherAmount}
                      onChange={handleOtherAmountChange}
                      className="other-amount-input"
                    />
                    <button 
                      className="contribute-button"
                      onClick={handleContribute}
                    >
                      Contribute
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

            
{/* Contact Section */}
                <section className="contact-section">
                    <div className="container">
                        <div
                            className="contact-card"
                            // Correct placement of the style prop inside the div's opening tag
                            style={{
                                backgroundImage: `url(${Contactus})`, // Using the renamed import for the background SVG
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                
                            }}
                        >
                            <div className="contact-icon">
                                <img src={ContactMainIconSVG} alt="Contact Us" className="w-12 h-12" /> {/* Using renamed import */}
                            </div>
                            <div className="contact-content">
                                <h2>Contact Us</h2>
                                <p>Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.</p>
                                <div className="contact-info">
                                    <div className="contact-item">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.33940 8.3616L4.79126 9.13616C5.90756 11.8616 8.13844 14.0924 10.8638 15.2087L11.6384 13.6606C11.866 13.2679 12.2955 13.0493 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.82030 18 2 12.1797 2 5V3Z" fill="currentColor"/>
                                        </svg>
                                        <span>+012 345 6789</span>
                                    </div>
                                    <div className="contact-item">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M2.5 6.5L9.5 11.5C9.77614 11.6913 10.2239 11.6913 10.5 11.5L17.5 6.5M4 4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V6C2 4.89543 2.89543 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span>Hello@animaapp.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           
            {/* FAQ Section */}
                <section className="faq-section">
                    <div className="container">
                        <div className="faq-header">
                            <div className="faq-icon">
                                <img src={questionMark} alt="FAQ" />
                            </div>
                            <h2>Frequently Asked Questions</h2>
                            <p>See what people often asks us?</p>
                        </div>
                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                                    <button 
                                        className="faq-question"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <span>{faq.question}</span>
                                        <div className="faq-toggle">
                                            {openFaq === index ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                                    <path d="M8 12h8" stroke="currentColor" strokeWidth="2"/>
                                                </svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                                    <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2"/>
                                                </svg>
                                            )}
                                        </div>
                                    </button>
                                    <div className={`faq-answer ${openFaq === index ? 'show' : ''}`}>
                                        <p>{faq.answer}</p>
                                    </div>
                                    {index < faqs.length - 1 && <div className="faq-divider"></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
        </div>
      </Layout>
    </>
  );
};

export default DonatePage;