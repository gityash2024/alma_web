import React from 'react';
import './HeroBanner.scss';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="primary-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default HeroBanner; 