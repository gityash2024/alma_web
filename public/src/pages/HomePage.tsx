import React, { useState, useRef } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import { getOrganizationSchema } from '../utils/seo';
import '../styles/pages/HomePage.scss';
import Donate_1 from '../assets/images/Donate_1.png';
import Donate_2 from '../assets/images/Donate_2.png';
import HomePageTwo from './HomePageTwo';
import HomePageThree from './HomePageThree';
import purplecard from '../assets/images/purplecard.svg';
import yellow from '../assets/images/yellow.svg';
import mission from '../assets/images/mission.svg';
import { useNavigate } from 'react-router-dom';


const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Display 3 videos at once in grid layout
  const videos = [
    { id: 1, url: 'https://www.youtube.com/watch?v=hSFA-mNXrCc' },
    { id: 2, url: 'https://www.youtube.com/watch?v=yILKff68-BU' },
    { id: 3, url: 'https://www.youtube.com/watch?v=zNngzWy6xcQ' }
  ];
  
  // Additional sets of videos for pagination
  const videoSets = [
    [
       { id: 1, url: 'https://www.youtube.com/watch?v=hSFA-mNXrCc' },
    { id: 2, url: 'https://www.youtube.com/watch?v=yILKff68-BU' },
    { id: 3, url: 'https://www.youtube.com/watch?v=zNngzWy6xcQ' }
    ],
    [
     { id: 1, url: 'https://www.youtube.com/watch?v=hSFA-mNXrCc' },
    { id: 2, url: 'https://www.youtube.com/watch?v=yILKff68-BU' },
    { id: 3, url: 'https://www.youtube.com/watch?v=zNngzWy6xcQ' }
    ]
  ];
  
  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };
  
  const getYoutubeThumbnail = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };
  
  const handlePlayVideo = (videoId: number) => {
    setPlayingVideos(prev => new Set(prev).add(videoId));
  };
  
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? videoSets.length - 1 : prev - 1));
    setPlayingVideos(new Set()); // Reset playing videos when changing slides
  };
  
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === videoSets.length - 1 ? 0 : prev + 1));
    setPlayingVideos(new Set()); // Reset playing videos when changing slides
  };

  return (
    <>
      <SEO
        path="/"
        structuredData={getOrganizationSchema()}
      />
      <Layout>
        <div className="home-page">
         {/* Reshaping Tomorrow Section */}
          <section className="reshaping-section">
            <div className="reshaping-header">
              <h1>Reshaping Tomorrow</h1>
              <p>Great futures are built with a small change.</p>
              <div className="donate-button-container">
                <button onClick={() =>{navigate('/donate')}} className="donate-button">Donate Now</button>
              </div>
            </div>
            
            <div className="cards-container">
              <div 
                className="card purple-card"
                style={{
                  backgroundImage: `url(${purplecard})`,
                  // backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  // backgroundPosition: 'center',
                }}
              >
                <h2>65%</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <button className="card-button">Donate Now <span>→</span></button>
              </div>
              
              <div className="card image-card">
                <img src={Donate_1} alt="Person with prosthetic leg" />
                <div className="card-overlay">
                </div>
              </div>
              
              <div className="card pink-card">
                <h3>Join 5000+ People Donate.</h3>
                <button className="card-button">Explore Events <span>→</span></button>
              </div>
              
              <div className="card image-card-second">
                <img src={Donate_2} alt="Person blowing dandelion" />
              </div>
              
              <div 
                className="card yellow-card"
                style={{
                  backgroundImage: `url(${yellow})`,
                  // backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <p>At Almawakening Foundation, we help people build better lives through education, healthcare, and strong communities.</p>
                <button className="card-button">Explore more <span>→</span></button>
              </div>
              
              <div className="card dark-card">
                <h3>Your Home For Charity.</h3>
              </div>
               <div className="card dark-cardtwo">
                <h3>Let Them Be Heard.</h3>
              </div>
            </div>
          </section>

          {/* Our Mission Section */}
          <section className="mission-section">
            <div className="mission-banner"></div>

            <div className="mission-header">
              <div className="mission-icon">
                <span className="icon-target">🎯</span>
              </div>
              <h2>Our Mission</h2>
              <p className="mission-description">
                At Almawakening Foundation, we believe in transforming lives through education,
                healthcare, and community empowerment. Our goal is to create sustainable
                change by providing support where it's needed the most.
              </p>      
            </div>

            <div className="video-slider" ref={sliderRef}>
              <div className="slider-container">
                {videoSets[currentSlide].map((video, index) => (
                  <div key={video.id} className="slide">
                    <div className="video-wrapper">
                      {!playingVideos.has(video.id) ? (
                        <div 
                          className="video-thumbnail"
                          style={{
                            backgroundImage: `url(${getYoutubeThumbnail(video.url)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        >
                          <div 
                            className="play-button"
                            onClick={() => handlePlayVideo(video.id)}
                          >
                            <span>▶</span>
                          </div>
                        </div>
                      ) : (
                        <iframe 
                          src={getYoutubeEmbedUrl(video.url)} 
                          title={`Video ${video.id}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="slider-controls">
                <button className="prev-button" onClick={handlePrevSlide}>
                  <span>←</span>
                </button>
                <button className="next-button" onClick={handleNextSlide}>
                  <span>→</span>
                </button>
              </div>
            </div>
             <HomePageTwo />
        <HomePageThree />
          </section>

        </div>
       
      </Layout>
    </>
  );
};

export default HomePage;