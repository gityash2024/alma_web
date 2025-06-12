import React, { useState, useEffect } from "react";
import '../styles/pages/HomePageThree.scss';

// Renamed for clarity based on likely usage
import CardBackgroundSVG from '../assets/images/contactus.svg'; // Assuming this is the full card background SVG
import ContactMainIconSVG from '../assets/images/contactus.svg'; // Assuming this is the main circular phone icon SVG

// Other imports (trusted partners, testimonials, etc.)
import TrustedPartners_1 from '../assets/images/TrustedPartners_1.svg';
import TrustedPartners_2 from '../assets/images/TrustedPartners_2.svg';
import TrustedPartners_3 from '../assets/images/TrustedPartners_3.svg';
import TrustedPartners_4 from '../assets/images/TrustedPartners_4.svg';
import TrustedPartners_5 from '../assets/images/TrustedPartners_5.svg';
import TrustedPartners_6 from '../assets/images/TrustedPartners_6.svg';
import TrustedPartners_7 from '../assets/images/TrustedPartners_7.svg';
import TrustedPartners_8 from '../assets/images/TrustedPartners_8.svg';
import TrustedPartners_9 from '../assets/images/TrustedPartners_9.svg';
import TrustedPartners_10 from '../assets/images/TrustedPartners_10.svg';
import TrustedPartners_11 from '../assets/images/TrustedPartners_11.svg';
import TrustedPartners_12 from '../assets/images/TrustedPartners_12.svg';
import albert_flores from '../assets/images/albert_flores.svg';
import questionMark from '../assets/images/questionMark.svg';


const HomePageThree = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [openFaq, setOpenFaq] = useState(0);

    const trustedPartners = [
        { img: TrustedPartners_1, name: "Pathways" },
        { img: TrustedPartners_2, name: "Chicago Public Library" },
        { img: TrustedPartners_3, name: "We Work" },
        { img: TrustedPartners_4, name: "Republic" },
        { img: TrustedPartners_5, name: "Outlook" },
        { img: TrustedPartners_6, name: "The Telegraph Online" },
        { img: TrustedPartners_7, name: "The Print" },
        { img: TrustedPartners_8, name: "T.E.S.F" },
        { img: TrustedPartners_9, name: "The Sikkim News" },
        { img: TrustedPartners_10, name: "International Purple Fest" },
        { img: TrustedPartners_11, name: "DD News" },
        { img: TrustedPartners_12, name: "Aristocrat" }
    ];

    const testimonials = [
        {
            quote: "People now recognize that having a good performance conversation means that something happens as a result.",
            description: "With Landingfolio, the design team can now build design which identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening.",
            image: albert_flores,
            name: "Albert Flores", // Added missing name
            position: "CEO, Company Name" // Added missing position
        }
    ];

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

 const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? -1 : index);
};

    return (
        <div className="homepage-three">
            {/* Trusted Partners Section */}
            <section className="trusted-partners-section">
                <div className="container">
                    <h2 className="section-title">Trusted Partners</h2>
                    <div className="partners-grid">
                        {trustedPartners.map((partner, index) => (
                            <div 
                                key={index}
                                className="partner-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="partner-logo">
                                    <img src={partner.img} alt={partner.name} />
                                </div>
                                <p className={`partner-name ${partner.name.length > 15 ? 'long-name' : ''}`}>
                                    {partner.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

                {/* Testimonials Section */}
                <section className="testimonials-section">
                    <div className="container">
                        <div className="testimonial-wrapper">
                            <div className="testimonial-content">
                                <div className="quote-mark">
                                    <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
                                        <path d="M18.7 68C13.6 68 9.06667 66.7333 5.1 64.2C1.13333 61.6667 0.2 58.4667 2.55 54.6L18.7 17H34L22.5667 43.3333C26.6 43.3333 30.0667 44.7667 32.9667 47.6333C35.8667 50.5 37.3 53.9667 37.3 58.0333C37.3 62.1 35.8667 65.5667 32.9667 68.4333C30.0667 69.4667 26.6 68 22.5667 68H18.7ZM61.2 68C56.1 68 51.5667 66.7333 47.6 64.2C43.6333 61.6667 42.7 58.4667 45.05 54.6L61.2 17H76.5L65.0667 43.3333C69.1 43.3333 72.5667 44.7667 75.4667 47.6333C78.3667 50.5 79.8 53.9667 79.8 58.0333C79.8 62.1 78.3667 65.5667 75.4667 68.4333C72.5667 69.4667 69.1 68 65.0667 68H61.2Z" fill="#D1D5DB"/>
                                    </svg>
                                </div>
                                <h3 className="testimonial-quote">{testimonials[currentTestimonial].quote}</h3>
                                <p className="testimonial-description">{testimonials[currentTestimonial].description}</p>
                            </div>
                            <div className="testimonial-image">
                                <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
                                <div className="author-info">
                                    <h4>{testimonials[currentTestimonial].name}</h4>
                                    <p>{testimonials[currentTestimonial].position}</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-navigation">
                            <button 
                                className="nav-btn prev-btn"
                                onClick={() => setCurrentTestimonial(currentTestimonial > 0 ? currentTestimonial - 1 : testimonials.length - 1)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button 
                                className="nav-btn next-btn"
                                onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
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
                                backgroundImage: `url(${CardBackgroundSVG})`, // Using the renamed import for the background SVG
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
        );
    };

    export default HomePageThree;