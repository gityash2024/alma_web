import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/ProjectsPage.scss';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Projects"
        description="Explore the various projects and initiatives undertaken by Almawakening to create positive change in communities around the world."
        keywords="projects, initiatives, community development, social impact, education, healthcare"
        path="/projects"
        ogImage="https://www.almawakening.org/og-image-projects.jpg"
      />
      <Layout>
        <div className="projects-page">
          <section className="projects-hero">
            <div className="container">
              <h1>Our Projects</h1>
              <p className="subtitle">Initiatives that are making a difference in communities worldwide</p>
            </div>
          </section>

          <section className="featured-project">
            <div className="container">
              <div className="featured-content">
                <div className="featured-image">
                  <img src="/images/projects/featured-project.jpg" alt="Featured Project" />
                  <div className="status active">Active</div>
                </div>
                <div className="project-details">
                  <span className="project-category">Education</span>
                  <h2>Rural Education Initiative</h2>
                  <p className="project-description">
                    Our flagship project focuses on improving educational access and quality in rural communities.
                    Through infrastructure development, teacher training, and learning resource provision, we've
                    helped over 5,000 children gain better education opportunities.
                  </p>
                  <div className="project-meta">
                    <div className="meta-item">
                      <span className="label">Location:</span>
                      <span className="value">Multiple Rural Districts</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">Started:</span>
                      <span className="value">January 2020</span>
                    </div>
                    <div className="meta-item">
                      <span className="label">Impact:</span>
                      <span className="value">5000+ Students</span>
                    </div>
                  </div>
                  <button className="primary-button">Learn More</button>
                </div>
              </div>
            </div>
          </section>

          <section className="project-categories">
            <div className="container">
              <h2 className="section-title">Our Focus Areas</h2>
              <div className="categories-grid">
                <div className="category-card">
                  <div className="category-icon education"></div>
                  <h3>Education</h3>
                  <p>Improving access to quality education through school construction, teacher training, and learning resources.</p>
                </div>
                <div className="category-card">
                  <div className="category-icon healthcare"></div>
                  <h3>Healthcare</h3>
                  <p>Providing medical supplies, healthcare education, and supporting healthcare facilities in underserved areas.</p>
                </div>
                <div className="category-card">
                  <div className="category-icon environment"></div>
                  <h3>Environment</h3>
                  <p>Promoting environmental conservation, sustainable practices, and clean energy initiatives.</p>
                </div>
                <div className="category-card">
                  <div className="category-icon community"></div>
                  <h3>Community Development</h3>
                  <p>Empowering communities through infrastructure development, skill training, and capacity building.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="projects-list">
            <div className="container">
              <h2 className="section-title">Current Projects</h2>
              <div className="projects-grid">
                <div className="project-card">
                  <div className="project-image">
                    <img src="/images/projects/project1.jpg" alt="Project 1" />
                    <div className="status active">Active</div>
                  </div>
                  <div className="project-content">
                    <span className="project-category">Education</span>
                    <h3>School Library Initiative</h3>
                    <p>Establishing libraries in rural schools to promote reading and resource-based learning.</p>
                    <button className="text-button">View Details</button>
                  </div>
                </div>
                
                <div className="project-card">
                  <div className="project-image">
                    <img src="/images/projects/project2.jpg" alt="Project 2" />
                    <div className="status active">Active</div>
                  </div>
                  <div className="project-content">
                    <span className="project-category">Healthcare</span>
                    <h3>Mobile Health Clinics</h3>
                    <p>Bringing essential healthcare services to remote communities through mobile clinic units.</p>
                    <button className="text-button">View Details</button>
                  </div>
                </div>
                
                <div className="project-card">
                  <div className="project-image">
                    <img src="/images/projects/project3.jpg" alt="Project 3" />
                    <div className="status active">Active</div>
                  </div>
                  <div className="project-content">
                    <span className="project-category">Environment</span>
                    <h3>Clean Water Access</h3>
                    <p>Implementing water purification systems and wells in communities lacking clean water.</p>
                    <button className="text-button">View Details</button>
                  </div>
                </div>
                
                <div className="project-card">
                  <div className="project-image">
                    <img src="/images/projects/project4.jpg" alt="Project 4" />
                    <div className="status completed">Completed</div>
                  </div>
                  <div className="project-content">
                    <span className="project-category">Community</span>
                    <h3>Women's Skill Training</h3>
                    <p>Training women in marketable skills to promote financial independence and empowerment.</p>
                    <button className="text-button">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="impact-numbers">
            <div className="container">
              <h2 className="section-title">Our Impact</h2>
              <div className="numbers-grid">
                <div className="impact-item">
                  <div className="number">15+</div>
                  <div className="label">Active Projects</div>
                </div>
                <div className="impact-item">
                  <div className="number">25,000+</div>
                  <div className="label">Lives Impacted</div>
                </div>
                <div className="impact-item">
                  <div className="number">12</div>
                  <div className="label">Countries</div>
                </div>
                <div className="impact-item">
                  <div className="number">$2.5M</div>
                  <div className="label">Funds Raised</div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="get-involved">
            <div className="container">
              <div className="get-involved-content">
                <h2>Support Our Projects</h2>
                <p>Join us in making a difference through our various initiatives. Your support can help us expand our reach and impact.</p>
                <div className="button-group">
                  <button className="primary-button">Donate Now</button>
                  <button className="secondary-button">Become a Volunteer</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default ProjectsPage; 