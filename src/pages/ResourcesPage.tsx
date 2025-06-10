import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/ResourcesPage.scss';
import Storiesandinterviews from '../assets/images/Storiesandinterviews.png';
import stories_1 from '../assets/images/stories_1.png';
import ShareYourStoryWithUs from '../assets/images/ShareYourStoryWithUs.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import storybackground from '../assets/images/storybackground.png';

interface ImpactStory {
  author: string;
  date: string;
  content: string;
  image: string;
}

interface VideoStory {
  id: number;
  episode: string;
  title: string;
  author: string;
  date: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}

const ResourcesPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [currentStory, setCurrentStory] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [storyText, setStoryText] = useState<string>('');
  const [storyName, setStoryName] = useState<string>('');
  const [submitAnonymously, setSubmitAnonymously] = useState<boolean>(false);

  const videosPerPage = 6;
  
  const videoStories: VideoStory[] = [
    {
      id: 1,
      episode: "EPISODE - 01",
      title: "A silent mom who inspired millions.",
      author: "Arec Whitney",
      date: "17 Jan 2022",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      thumbnail: "https://img.youtube.com/vi/zNngzWy6xcQ/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=zNngzWy6xcQ"
    },
    {
      id: 2,
      episode: "EPISODE - 02",
      title: "Breaking barriers: Living beyond disability.",
      author: "Demi Wilkinson",
      date: "10 Jan 2022",
      description: "Mental models are simple expressions of complex processes or relationships.",
      thumbnail: "https://img.youtube.com/vi/JXDvXAEZxrs/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=JXDvXAEZxrs"
    },
    {
      id: 3,
      episode: "EPISODE - 03",
      title: "Turning obstacles into mental health wins.",
      author: "Candice Wu",
      date: "05 Jan 2022",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      thumbnail: "https://img.youtube.com/vi/Ip9VrLheXNY/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=Ip9VrLheXNY"
    },
    {
      id: 4,
      episode: "EPISODE - 04",
      title: "A polio survivor's triumph over limitations.",
      author: "Natali Craig",
      date: "14 Sep 2022",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      thumbnail: "https://img.youtube.com/vi/-i-ehW3dEuo/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=-i-ehW3dEuo"
    },
    {
      id: 5,
      episode: "EPISODE - 05",
      title: "What can you see with no site? No limits.",
      author: "Drew Cano",
      date: "15 Sep 2022",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      thumbnail: "https://img.youtube.com/vi/alqRIfic2GU/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=alqRIfic2GU"
    },
    {
      id: 6,
      episode: "EPISODE - 06",
      title: "Watch this triumphant return from ovarian cancer.",
      author: "Orlando Diggs",
      date: "12 Jan 2022",
      description: "Starting a community doesn't need to be complicated, but how do you get started?",
      thumbnail: "https://img.youtube.com/vi/1sHI9h0bCXE/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=1sHI9h0bCXE"
    }
  ];

  const totalPages = Math.ceil(videoStories.length / videosPerPage);

  const impactStories: ImpactStory[] = [
    {
      author: "Olivia Rhye",
      date: "20 Jan 2022",
      content: "I watched your discussion with Georg yesterday and was truly inspired. When I was diagnosed with FA eight years ago, exercise was recommended to slow it down. Your conversation added depth to that advice. I found your insights captivating and essential to guide my path forward. For years, I've been on a career track leading to desk job, which took a toll on my body and mind. I've lost muscle and abilities like walking and standing unassisted.\n\nRecently, I changed course, dedicating my energy to wheelchair fencing and pursuing nutrition and health science to understand my FA better and help other with FA. I simply thank you for this discussion it came at the right time for me.",
      image: stories_1
    }
    // Add more stories here as needed
  ];

  const handleSubscribe = (): void => {
    if (email.trim()) {
      console.log('Subscribing email:', email);
      // Add your subscription logic here
      setEmail('');
      alert('Thank you for subscribing!');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  const nextStory = (): void => {
    setCurrentStory((prev) => (prev + 1) % impactStories.length);
  };

  const prevStory = (): void => {
    setCurrentStory((prev) => (prev - 1 + impactStories.length) % impactStories.length);
  };

  const handleWatchVideo = (videoUrl: string): void => {
    window.open(videoUrl, '_blank');
  };

  const getCurrentPageVideos = (): VideoStory[] => {
    const startIndex = (currentPage - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    return videoStories.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const handlePrevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleStorySubmit = (): void => {
    if (storyText.trim()) {
      console.log('Story submitted:', {
        text: storyText,
        name: submitAnonymously ? 'Anonymous' : storyName,
        anonymous: submitAnonymously
      });
      // Add your story submission logic here
      alert('Thank you for sharing your story!');
      setStoryText('');
      setStoryName('');
      setSubmitAnonymously(false);
    }
  };

  return (
    <>
      <SEO
        title="Resources - Stories and Interviews"
        description="Access resources, articles, and educational materials from Almawakening to help you learn about social issues and create positive change."
        keywords="resources, education, articles, guides, social change, community resources, stories, interviews"
        path="/resources"
        ogImage="https://www.almawakening.org/og-image-resources.jpg"
      />
      
      <Layout>
        <div className="resources-page-container">
          {/* Stories and Interviews Section with Proper Background */}
          <section className="stories-interviews-hero">
            <div className="hero-container">
              <div 
                className="hero-background"
                style={{ backgroundImage: `url(${storybackground})` }}
              >
                <div className="hero-overlay">
                  <div className="hero-content">
                    <div className="hero-text">
                      <h1 className="hero-title">Stories and interviews</h1>
                      <p className="hero-subtitle">
                        Subscribe to learn about new product features, the latest in technology, solutions,
                        and updates.
                      </p>
                      
                      <div className="hero-subscription">
                        <div className="subscription-wrapper">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="email-input"
                            aria-label="Email address for subscription"
                          />
                          <button 
                            onClick={handleSubscribe} 
                            className="subscribe-btn"
                            disabled={!email.trim()}
                            aria-label="Subscribe to newsletter"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hero-image">
                      <img 
                        src={Storiesandinterviews}
                        alt="Person in wheelchair enjoying mountain scenery with yellow flowers"
                        className="featured-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Story of the Month/Day Section */}
          <section className="story-month-section">
            <div className="story-month-gradient">
              <div className="story-month-content">
                <div className="story-month-title-area">
                  <h2 className="story-month-title">
                    Story of the<br />Month/Day.
                  </h2>
                </div>
                
                <div className="story-month-quote-area">
                  <div className="quote-start" aria-hidden="true">"</div>
                  <div className="quote-text-content">
                    <p className="quote-paragraph">
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu 
                      turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus 
                      nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum 
                      tellus elit sed risus. Maecenas eget condimentum velit, sit amet 
                      feugiat lectus. Class aptent taciti sociosqu ad litora torquent per 
                      conubia nostra, per inceptos himenaeos. Praesent auctor purus 
                      luctus enim egestas, ac scelerisque ante pulvinar. Donec ut 
                      rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. 
                      Curabitur vel bibendum lorem. Morbi convallis convallis diam sit 
                      amet lacinia. Aliquam in elementum tellus.
                    </p>
                    <div className="quote-author">-Carolina Woods</div>
                  </div>
                  <div className="quote-end" aria-hidden="true">"</div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Stories Section */}
          <section className="impact-stories-section">
            <div className="impact-stories-wrapper">
              <h2 className="impact-stories-title">Impact Stories</h2>
              
              <div className="impact-story-card">
                <div className="impact-story-image-area">
                  <img 
                    src={impactStories[currentStory].image}
                    alt="Woman writing and working"
                    className="impact-story-image"
                  />
                </div>
                
                <div className="impact-story-text-area">
                  <div className="impact-story-meta">
                    <span className="impact-story-author">{impactStories[currentStory].author}</span>
                    <span className="impact-story-date"> • {impactStories[currentStory].date}</span>
                  </div>
                  
                  <div className="impact-story-content">
                    {impactStories[currentStory].content.split('\n\n').map((paragraph: string, index: number) => (
                      <p key={index} className="impact-story-paragraph">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="impact-navigation">
                <button 
                  onClick={prevStory} 
                  className="impact-nav-btn impact-nav-prev"
                  disabled={impactStories.length <= 1}
                  aria-label="Previous story"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextStory} 
                  className="impact-nav-btn impact-nav-next"
                  disabled={impactStories.length <= 1}
                  aria-label="Next story"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </section>

          {/* See Stories That Inspires Section */}
          <section className="video-stories-section">
            <div className="video-stories-wrapper">
              <h2 className="video-stories-title">See Stories That Inspires</h2>
              
              <div className="video-stories-grid">
                {getCurrentPageVideos().map((video) => (
                  <div key={video.id} className="video-story-card">
                    <div className="video-thumbnail-container">
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="video-thumbnail"
                      />
                      <div className="video-episode-badge">{video.episode}</div>
                    </div>
                    
                    <div className="video-story-content">
                      <div className="video-story-meta">
                        <span className="video-story-author">{video.author}</span>
                        <span className="video-story-date"> • {video.date}</span>
                      </div>
                      
                      <h3 className="video-story-title">{video.title}</h3>
                      
                      <p className="video-story-description">{video.description}</p>
                      
                      <button 
                        onClick={() => handleWatchVideo(video.videoUrl)}
                        className="video-watch-btn"
                      >
                        Watch Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="video-pagination">
                <button 
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="pagination-btn pagination-prev"
                >
                  <ChevronLeft size={16} />
                  Previous
                </button>
                
                <div className="pagination-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button 
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="pagination-btn pagination-next"
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* Share Your Story With Us Section */}
          <section className="share-story-section">
            <div className="share-story-container">
              <div 
                className="share-story-background"
                style={{ backgroundImage: `url(${ShareYourStoryWithUs})` }}
              >
                <div className="share-story-content">
                  <h2 className="share-story-title">Share Your Story With Us</h2>
                  <p className="share-story-subtitle">Lorem ipsum dolor sit.</p>
                  
                  <div className="share-story-form">
                    <textarea
                      placeholder="Write here"
                      value={storyText}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setStoryText(e.target.value)}
                      className="share-story-textarea"
                      rows={6}
                    />
                    
                    <input
                      type="text"
                      placeholder="Enter Name"
                      value={storyName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStoryName(e.target.value)}
                      className="share-story-name-input"
                      disabled={submitAnonymously}
                    />
                    
                    <div className="share-story-checkbox-wrapper">
                      <label className="share-story-checkbox-label">
                        <input
                          type="checkbox"
                          checked={submitAnonymously}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubmitAnonymously(e.target.checked)}
                          className="share-story-checkbox"
                        />
                        <span className="checkbox-text">Submit anonymously.</span>
                      </label>
                    </div>
                    
                    <button 
                      onClick={handleStorySubmit}
                      disabled={!storyText.trim()}
                      className="share-story-submit-btn"
                    >
                      Share
                    </button>
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

export default ResourcesPage;