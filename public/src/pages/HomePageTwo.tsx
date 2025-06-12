import React, { useState, useEffect, useRef } from "react";
import HeroBanner from "../components/home/HeroBanner";
import SEO from '../components/common/SEO';
import { getOrganizationSchema } from '../utils/seo';
import '../styles/pages/HomePageTwo.scss';
import nothing_changes from '../assets/images/nothing_changes.png';
import helpeach from '../assets/images/helpeach.png';
import stories_1 from '../assets/images/stories_1.png';
import stories_2 from '../assets/images/stories_2.png';
import TransformingArrow from '../assets/images/TransformingArrow.png';
import discover_1 from '../assets/images/discover_1.png';
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


const HomePageTwo: React.FC = () => {
    // Gallery state for navigation
    const [currentGallerySlide, setCurrentGallerySlide] = useState(0);

    // Image gallery data sets
    const galleryData = [
        {
            large: img_1,
            small: [img_2, img_3],
            alts: {
                large: "Community group",
                small: ["Happy children", "Community work"]
            }
        },
        {
            large: img_4,
            small: [img_5, img_6],
            alts: {
                large: "Happy children celebrating",
                small: ["Community work session", "Group activity"]
            }
        },
        {
            large: img_7,
            small: [img_8, img_9],
            alts: {
                large: "Community work in progress",
                small: ["Community gathering", "Children learning"]
            }
        },
        {
            large: img_10,
            small: [img_11, img_12],
            alts: {
                large: "Person writing their story",
                small: ["People coming together", "Community transformation"]
            }
        }
    ];

    // Gallery navigation functions
    const handlePrevGallery = () => {
        setCurrentGallerySlide((prev) => 
            prev === 0 ? galleryData.length - 1 : prev - 1
        );
    };

    const handleNextGallery = () => {
        setCurrentGallerySlide((prev) => 
            prev === galleryData.length - 1 ? 0 : prev + 1
        );
    };

    // Counter animation hook with proper types
    const useCounter = (end: number, duration: number = 2000, trigger: boolean = true): number => {
        const [count, setCount] = useState<number>(0);
        
        useEffect(() => {
            if (!trigger) return;
            
            let startTime: number | undefined;
            let animationFrame: number;
            
            const animate = (timestamp: number): void => {
                if (!startTime) startTime = timestamp;
                const progress: number = Math.min((timestamp - startTime) / duration, 1);
                
                setCount(Math.floor(progress * end));
                
                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };
            
            animationFrame = requestAnimationFrame(animate);
            
            return () => {
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                }
            };
        }, [end, duration, trigger]);
        
        return count;
    };

    // Intersection Observer hook with proper types
const useInView = (): [React.RefObject<HTMLDivElement | null>, boolean] => {
    const [inView, setInView] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]: IntersectionObserverEntry[]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.3 }
        );
        
        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => observer.disconnect();
    }, []);
    
    return [ref, inView];
};

    // Counter refs and states with proper types
    const [livesRef, livesInView] = useInView();
    const [transformingRef, transformingInView] = useInView();
    
    // Counter values with explicit types
    const childrenCount: number = useCounter(5000, 2000, livesInView);
    const medicalCount: number = useCounter(10000, 2500, livesInView);
    const projectsCount: number = useCounter(100, 1500, livesInView);
    const membersCount: number = useCounter(800, 2000, transformingInView);

    // Get current gallery data
    const currentGallery = galleryData[currentGallerySlide];

    return (
        <>
            <div className="homepage-two" style={{marginTop: "20px" }}>
                {/* First Section - Nothing Changes */}
                <section className="nothing-changes-section">
                    <div className="container">
                        <div className="content-wrapper">
                            <div className="image-container">
                                <img src={nothing_changes} alt="Community gathering" />
                            </div>
                            <div className="text-content">
                                <h1>Nothing Changes If Nothing Changes</h1>
                                <p className="author">-Donna Barnes</p>
                                <p className="description">
                                    Almawakening is a community-driven initiative dedicated to creating 
                                    meaningful change through education, healthcare, and empowerment 
                                    programs. We believe that everyone deserves access to opportunities that help 
                                    them lead better lives. From providing quality education to underserved 
                                    children to offering healthcare support and skill-building programs, we strive to 
                                    uplift individuals and communities. Through the power of collective action, 
                                    compassion, and unwavering commitment, we aim to bring hope, inspire 
                                    change, and build a future where no one is left behind.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Second Section - Lives Impacted */}
                <section className="lives-impacted-section" ref={livesRef}>
                    <div className="container">
                        <h2>Lives Impacted</h2>
                        <p className="subtitle">Every life touched is a story of hope, resilience, and a brighter future.</p>
                        
                        <div className="stats-grid">
                            <div className="stat-card purple">
                                <div className="icon">🎓</div>
                                <div className="number">{childrenCount.toLocaleString()}+</div>
                                <div className="label">Children Educated.</div>
                            </div>
                            <div className="stat-card pink">
                                <div className="icon">+</div>
                                <div className="number">{medicalCount.toLocaleString()}+</div>
                                <div className="label">People Received Medical Aid.</div>
                            </div>
                            <div className="stat-card yellow">
                                <div className="icon">♥</div>
                                <div className="number">{projectsCount}+</div>
                                <div className="label">Sustainable Community Projects.</div>
                            </div>
                        </div>

                        <div className="join-section">
                            <p className="join-text">People are already joining,</p>
                            <button className="join-btn">Yes, I want to join community!</button>
                        </div>
                    </div>
                </section>

                {/* Third Section - Transforming Lives */}
                <section className="transforming-lives-section" ref={transformingRef}>
                    <div className="container">
                        <div className="content-wrapper">
                            <div className="arrow-decoration">
                                <img src={TransformingArrow} alt="Arrow" className="arrow-image" />
                            </div>
                            <div className="main-content">
                                <h2>Transforming Lives Through Actions</h2>
                                <p className="description">
                                    Amet minim mollit non deserunt ullamco est sit
                                    aliqua dolor do amet sint.
                                </p>
                                <div className="stats-display">
                                    <div className="big-number">{membersCount}+</div>
                                    <p className="stats-label">Active community members.</p>
                                    <button className="volunteer-btn">Volunteer Now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fourth Section - Scrolling Text */}
                <section className="scrolling-text-section">
                    <div className="scrolling-text">
                        <span style={{ color: 'black', animationDelay: '0s', fontSize: '24px' }}>Help Each Other * Let's Help Each Other * Let's Help Each Other * Let's Help Each Other * </span>
                        <span style={{ color: 'black', animationDelay: '10s', fontSize: '24px' }}>Help Each Other * Let's Help Each Other * Let's Help Each Other * Let's Help Each Other * </span>
                    </div>
                </section>

                {/* Fifth Section - Stories Straight From People */}
                <section className="stories-section">
                    <div className="container">
                        <div className="stories-wrapper">
                            <div className="stories-intro">
                                <div className="star-icon">
                                    <svg viewBox="0 0 40 40" className="star">
                                        <path d="M20 3l5.09 10.31L36 15.18l-8 7.27L30.18 33 20 27.64 9.82 33 12 22.45l-8-7.27L14.91 13.31z" 
                                              fill="#9d7fb5" stroke="#9d7fb5" strokeWidth="1"/>
                                    </svg>
                                </div>
                                <h2>Stories Straight From People</h2>
                                <p className="stories-description">
                                    Dorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit. Nunc vulputate libero et velit 
                                    interdum, ac aliquet odio mattis.
                                </p>
                                <button className="view-all-btn">View All</button>
                            </div>
                            
                            <div className="stories-cards">
                                <div className="story-card">
                                    <div className="story-image">
                                        <img src={stories_1} alt="Person writing" />
                                    </div>
                                    <div className="story-content">
                                        <h3>"Piece by piece, people are picking me apart" : why attitudes to disabled people need to improve.</h3>
                                        <p>Disabled campaigner Joshua Reeves BEM opens about his experiences of ableist comments from the general public.</p>
                                        <button className="read-more-btn">Read More →</button>
                                    </div>
                                </div>
                                
                                <div className="story-card">
                                    <div className="story-image">
                                        <img src={stories_2} alt="People together" />
                                    </div>
                                    <div className="story-content">
                                        <h3>Beyond Companionship: The Role of Communities in Transforming Lives</h3>
                                        <p>From everyday motivation to extraordinary moments—like attending a Buckingham Palace garden party —these incredible people have been so much more than companions.</p>
                                        <button className="read-more-btn">Read More →</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sixth Section - Discover Our Programs */}
                <section className="discover-programs-section">
                    <div className="container">
                        <div className="discover-header">
                            <div className="play-icon">
                                <svg viewBox="0 0 40 40" className="play-button">
                                    <circle cx="20" cy="20" r="18" fill="none" stroke="#9d7fb5" strokeWidth="2"/>
                                    <path d="M15 12l12 8-12 8z" fill="#9d7fb5"/>
                                </svg>
                            </div>
                            <h2>Discover Our Programs</h2>
                        </div>
                        
                        <div className="programs-grid">
                            <div className="program-item">
                                <div className="program-image">
                                    <img src={discover_1} alt="Women Empowerment Training" />
                                </div>
                                <div className="program-info">
                                    <div className="program-meta">
                                        <span className="category">Growth</span>
                                        <span className="date">April 09, 2022</span>
                                    </div>
                                    <h3>Women Empowerment Training</h3>
                                </div>
                            </div>
                            
                            <div className="program-item">
                                <div className="program-image">
                                    <img src={discover_1} alt="Free Medical Camp" />
                                </div>
                                <div className="program-info">
                                    <div className="program-meta">
                                        <span className="category">Growth</span>
                                        <span className="date">April 09, 2022</span>
                                    </div>
                                    <h3>Free Medical Camp</h3>
                                </div>
                            </div>
                            
                            <div className="program-item">
                                <div className="program-image">
                                    <img src={discover_1} alt="Clean-up drive" />
                                </div>
                                <div className="program-info">
                                    <div className="program-meta">
                                        <span className="category">Growth</span>
                                        <span className="date">April 09, 2022</span>
                                    </div>
                                    <h3>Clean - up drive, World clean-up day</h3>
                                </div>
                            </div>
                            
                            <div className="program-item">
                                <div className="program-image">
                                    <img src={discover_1} alt="Mental health awareness" />
                                </div>
                                <div className="program-info">
                                    <div className="program-meta">
                                        <span className="category">Growth</span>
                                        <span className="date">April 09, 2022</span>
                                    </div>
                                    <h3>Mental health awareness session</h3>
                                </div>
                            </div>
                        </div>
                        
                        <div className="programs-footer">
                            <button className="check-all-btn">Check All Programs →</button>
                        </div>
                    </div>
                </section>

                {/* Seventh Section - Dynamic Image Gallery */}
                <section className="image-gallery-section">
                    <div className="container">
                        <div className="gallery-header">
                            <h2>Our Gallery</h2>
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
                            <div className="gallery-large">
                                <img 
                                    src={currentGallery.large} 
                                    alt={currentGallery.alts.large}
                                />
                            </div>
                            <div className="gallery-small-grid">
                                {currentGallery.small.map((image, index) => (
                                    <div key={index} className="gallery-small">
                                        <img 
                                            src={image} 
                                            alt={currentGallery.alts.small[index]}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="gallery-navigation">
                            <button className="nav-btn prev-btn" onClick={handlePrevGallery}>
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
                                </svg>
                            </button>
                            <button className="nav-btn next-btn" onClick={handleNextGallery}>
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePageTwo;