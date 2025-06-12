import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        path="/404"
      />
      <Layout>
        <div className="not-found-page">
          <div className="not-found-content">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <Link to="/" className="primary-button">
              Return to Home
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage; 