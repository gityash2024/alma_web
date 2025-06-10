import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import { getEventSchema } from '../utils/seo';
import '../styles/pages/EventsPage.scss';
import BePartofTheChange from '../assets/images/BePartofTheChange.png';
import image_1 from '../assets/images/image_1.png';
import image_2 from '../assets/images/image_2.png';
import image_3 from '../assets/images/image_3.png';
import WomenEmpowermentTraining from '../assets/images/WomenEmpowermentTraining.png';
import FreeMedicalCamp from '../assets/images/FreeMedicalCamp.png';
import CleanUpDriveWorld from '../assets/images/CleanUpDriveWorld.png';
import questionMark from '../assets/images/questionMark.svg';
import img_1 from '../assets/images/img_1.jpg';
import img_2 from '../assets/images/img_2.jpg';
import img_3 from '../assets/images/img_3.jpg';
import img_4 from '../assets/images/img_4.jpg';
import img_5 from '../assets/images/img_5.jpg';
import img_6 from '../assets/images/img_6.jpg';
import img_7 from '../assets/images/img_7.jpg';
import img_8 from '../assets/images/img_8.jpg';
import img_9 from '../assets/images/img_9.jpg';
import img_10 from '../assets/images/img_10.jpg';
import img_11 from '../assets/images/img_11.jpg';
import img_12 from '../assets/images/img_12.jpg';


const EventsPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const galleryImages = [image_1, image_2, image_3];

  // Gallery data sets for dynamic navigation
  const galleryData = [
    {
      main: img_1,
      side: [img_2, img_3],
      alts: {
        main: "Main community gathering",
        side: ["Community activity 1", "Community activity 2"]
      }
    },
    {
      main: img_4,
      side: [img_5, img_6],
      alts: {
        main: "Community engagement",
        side: ["Community work", "Group celebration"]
      }
    },
    {
      main: img_7,
      side: [img_8, img_9],
      alts: {
        main: "Community impact",
        side: ["Community gathering", "Happy moment"]
      }
    },
    {
      main: img_10,
      side: [img_11, img_12],
      alts: {
        main: "Women empowerment session",
        side: ["Medical camp", "Cleanup drive"]
      }
    }
  ];

  const events = [
    {
      id: 1,
      title: "Women Empowerment Training",
      description: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate.",
      date: "Date: 15 March 2025",
      location: "Location: Jaipur",
      // Use the specific background image for the card shape
      backgroundImage: WomenEmpowermentTraining, // Changed from `image` to `backgroundImage` for clarity
      colorClass: "purple-card" // Using a class to target specific styling
    },
    {
      id: 2,
      title: "Free Medical Camp",
      description: "Providing consultations and medicines to 800+ villagers",
      date: "Date: 5 February 2025",
      location: "Location: Nashik",
      // Use the specific background image for the card shape
      backgroundImage: FreeMedicalCamp, // Changed from `image` to `backgroundImage` for clarity
      colorClass: "pink-card" // Using a class to target specific styling
    },
    {
      id: 3,
      title: "Clean-Up Drive - World Cleanup Day",
      description: "300+ volunteers collecting more than 1,200kg of waste",
      date: "Date: 16 September 2024",
      location: "Location: Mumbai Beaches",
      // Use the specific background image for the card shape
      backgroundImage: CleanUpDriveWorld, // Changed from `image` to `backgroundImage` for clarity
      colorClass: "yellow-card" // Using a class to target specific styling
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

  // Hero section navigation
  const handlePrevImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? galleryImages.length - 1 : prev - 1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => prev === galleryImages.length - 1 ? 0 : prev + 1);
  };

  // Gallery section navigation
  const handlePrevGallery = () => {
    setCurrentGallerySlide(prev => prev === 0 ? galleryData.length - 1 : prev - 1);
  };

  const handleNextGallery = () => {
    setCurrentGallerySlide(prev => prev === galleryData.length - 1 ? 0 : prev + 1);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // Get current gallery data
  const currentGallery = galleryData[currentGallerySlide];

  return (
    <>
      {/* <SEO
        title="Events"
        description="Join our impactful events and be part of the change in communities worldwide"
        keywords="events, community impact, volunteer, change, almawakening"
        path="/events"
        structuredData={getEventSchema()}
      /> */}
      <Layout>
        <div className="events-page">
          {/* Hero Section - Image 1 */}
          <section className="hero-section">
            <div className="hero-background" style={{ backgroundImage: `url(${BePartofTheChange})` }}>
              <div className="hero-content">
                <div className="hero-text">
                  {/* <h1>Be Part of The Change</h1> */}
                  {/* <p>Join hands, share knowledge, and help communities grow through impactful events.</p> */}
                </div>
                <div className="hero-image-container">
                  <div className="hero-image">
                    <img src={galleryImages[currentImageIndex]} alt="Community impact" />
                  </div>
                  
                
                </div>
              </div>
            </div>
          </section>

          {/* Events Cards Section - Image 2 */}
          <section className="events-section">
            <div className="container">
              <div className="events-grid">
                {events.map((event) => (
                  <div key={event.id}
                       className={`event-card ${event.colorClass}`} // Use colorClass here
                       style={{ backgroundImage: `url(${event.backgroundImage})` }} // Apply the background image directly
                  >
                    <div className="event-content">
                      <h3>{event.title}</h3>
                      <p className="event-description">{event.description}</p>
                      <p className="event-date">{event.date}</p>
                      <p className="event-location">{event.location}</p>
                      
                      <div className="event-buttons">
                        <button className="volunteer-btn">Volunteer Now</button>
                        <button className="participate-btn">
                          Participate
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Dynamic Gallery Section - Image 3 */}
          <section className="gallery-section">
            <div className="container">
              <div className="gallery-header">
                <h2>Event Gallery</h2>
                <div className="gallery-indicators">
                  {galleryData.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${index === currentGallerySlide ? 'active' : ''}`}
                      onClick={() => setCurrentGallerySlide(index)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>

              <div className="gallery-grid">
                <div className="gallery-main">
                  <img 
                    src={currentGallery.main} 
                    alt={currentGallery.alts.main} 
                  />
                </div>
                <div className="gallery-side">
                  {currentGallery.side.map((image, index) => (
                    <div key={index} className="gallery-item">
                      <img 
                        src={image} 
                        alt={currentGallery.alts.side[index]} 
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="gallery-navigation">
                <button className="nav-btn prev-btn" onClick={handlePrevGallery}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="nav-btn next-btn" onClick={handleNextGallery}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
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

          {/* CTA Section - Image 5 */}
          <section className="cta-section">
            <div className="container">
              <div className="cta-card">
                <div className="cta-content">
                  <h2>Want to Host or Join an Event?</h2>
                  <p>Whether you're an expert or a helping hand, your participation creates real change.</p>
                  <div className="cta-buttons">
                    <button className="host-btn">Host An Event!</button>
                    <button className="volunteer-btn">Join As Volunteer</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </Layout>
    </>
  );
};

export default EventsPage;