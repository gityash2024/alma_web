import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/GalleryPage.scss';
import OurMonthbyMonth_1 from '../assets/images/OurMonthbyMonth_1.png';
import OurMonthbyMonth_2 from '../assets/images/OurMonthbyMonth_2.png';
import OurMonthbyMonth_3 from '../assets/images/OurMonthbyMonth_3.png';
import OurMonthbyMonth_4 from '../assets/images/OurMonthbyMonth_4.png';
import OurMonthbyMonth_5 from '../assets/images/OurMonthbyMonth_5.png';
import OurMonthbyMonth_6 from '../assets/images/OurMonthbyMonth_6.png';
import Contactus from '../assets/images/Contactus.svg';
import contactlogo from '../assets/images/contactlogo.png';
import OurMonthbyMonth from '../assets/images/OurMonthbyMonth.png'
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
import img_13 from '../assets/images/img_13.jpg';
import img_14 from '../assets/images/img_14.jpg';
import img_15 from '../assets/images/img_15.jpg';
import img_16 from '../assets/images/img_16.jpg';
import img_17 from '../assets/images/img_17.jpg';
import img_18 from '../assets/images/img_18.jpg';
import img_19 from '../assets/images/img_19.jpg';
import img_20 from '../assets/images/img_20.jpg';
import img_21 from '../assets/images/img_21.jpg';
import img_22 from '../assets/images/img_22.jpg';
import img_23 from '../assets/images/img_23.jpg';
import img_24 from '../assets/images/img_24.jpg';
import img_25 from '../assets/images/img_25.jpg';
import img_26 from '../assets/images/img_26.jpg';
import img_27 from '../assets/images/img_27.jpg';
import img_28 from '../assets/images/img_28.jpg';
import img_29 from '../assets/images/img_29.jpg';
import img_30 from '../assets/images/img_30.jpg';
import img_31 from '../assets/images/img_31.jpg';
import img_32 from '../assets/images/img_32.jpg';
import img_33 from '../assets/images/img_33.jpg';
import img_34 from '../assets/images/img_34.jpg';
import img_35 from '../assets/images/img_35.jpg';
import img_36 from '../assets/images/img_36.jpg';
import img_37 from '../assets/images/img_37.jpg';
import img_38 from '../assets/images/img_38.jpg';
import img_39 from '../assets/images/img_39.jpg';
import img_40 from '../assets/images/img_40.jpg';
import img_41 from '../assets/images/img_41.jpg';
import img_42 from '../assets/images/img_42.jpg';
import img_43 from '../assets/images/img_43.jpg';
import img_44 from '../assets/images/img_44.jpg';
import img_45 from '../assets/images/img_45.jpg';
import img_46 from '../assets/images/img_46.jpg';
import img_47 from '../assets/images/img_47.jpg';
import img_48 from '../assets/images/img_48.jpg';
import img_49 from '../assets/images/img_49.jpg';
import img_50 from '../assets/images/img_50.jpg';
import img_51 from '../assets/images/img_51.jpg';
import img_52 from '../assets/images/img_52.jpg';
import img_53 from '../assets/images/img_53.jpg';
import img_54 from '../assets/images/img_54.jpg';
import img_55 from '../assets/images/img_55.jpg';
import img_56 from '../assets/images/img_56.jpg';
import img_57 from '../assets/images/img_57.jpg';
import img_58 from '../assets/images/img_58.jpg';
import img_59 from '../assets/images/img_59.jpg';
import img_60 from '../assets/images/img_60.jpg';
import img_61 from '../assets/images/img_61.jpg';
import img_62 from '../assets/images/img_62.jpg';
import img_63 from '../assets/images/img_63.jpg';
import img_64 from '../assets/images/img_64.jpg';
import img_65 from '../assets/images/img_65.jpg';
import img_66 from '../assets/images/img_66.jpg';
import img_67 from '../assets/images/img_67.jpg';
import img_68 from '../assets/images/img_68.jpg';
import img_69 from '../assets/images/img_69.jpg';
import img_70 from '../assets/images/img_70.jpg';
import img_71 from '../assets/images/img_71.jpg';
import img_72 from '../assets/images/img_72.jpg';
import img_73 from '../assets/images/img_73.jpg';
import img_74 from '../assets/images/img_74.jpg';
import img_75 from '../assets/images/img_75.jpg';
import img_76 from '../assets/images/img_76.jpg';
import img_77 from '../assets/images/img_77.jpg';
import img_78 from '../assets/images/img_78.jpg';
import img_79 from '../assets/images/img_79.jpg';
import img_80 from '../assets/images/img_80.jpg';
import img_81 from '../assets/images/img_81.jpg';
import img_82 from '../assets/images/img_82.jpg';
import img_83 from '../assets/images/img_83.jpg';
import img_84 from '../assets/images/img_84.jpg';

const GalleryPage: React.FC = () => {
  const [expandedAlbums, setExpandedAlbums] = useState<number[]>([]);

  // Organize all 84 images into different albums
  const allPhotosAlbum1 = [
    img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10,
    img_11, img_12, img_13, img_14, img_15, img_16, img_17, img_18, img_19, img_20,
    img_21, OurMonthbyMonth_1, OurMonthbyMonth_2, OurMonthbyMonth_3
  ];

  const allPhotosAlbum2 = [
    img_22, img_23, img_24, img_25, img_26, img_27, img_28, img_29, img_30, img_31,
    img_32, img_33, img_34, img_35, img_36, img_37, img_38, img_39, img_40, img_41,
    img_42, OurMonthbyMonth_4, OurMonthbyMonth_5, OurMonthbyMonth_6
  ];

  const allPhotosAlbum3 = [
    img_43, img_44, img_45, img_46, img_47, img_48, img_49, img_50, img_51, img_52,
    img_53, img_54, img_55, img_56, img_57, img_58, img_59, img_60, img_61, img_62,
    img_63, OurMonthbyMonth_1, OurMonthbyMonth_3, OurMonthbyMonth_5
  ];

  const allPhotosAlbum4 = [
    img_64, img_65, img_66, img_67, img_68, img_69, img_70, img_71, img_72, img_73,
    img_74, img_75, img_76, img_77, img_78, img_79, img_80, img_81, img_82, img_83,
    img_84, OurMonthbyMonth_2, OurMonthbyMonth_4, OurMonthbyMonth_6
  ];

  const albumData = [
    {
      id: 1,
      month: "April 2025",
      photoCount: `${allPhotosAlbum1.length} photos`,
      previewImages: [img_1, img_2, img_3],
      allPhotos: allPhotosAlbum1
    },
    {
      id: 2,
      month: "March 2025", 
      photoCount: `${allPhotosAlbum2.length} photos`,
      previewImages: [img_22, img_23, img_24],
      allPhotos: allPhotosAlbum2
    },
    {
      id: 3,
      month: "February 2025",
      photoCount: `${allPhotosAlbum3.length} photos`, 
      previewImages: [img_43, img_44, img_45],
      allPhotos: allPhotosAlbum3
    },
    {
      id: 4,
      month: "January 2025",
      photoCount: `${allPhotosAlbum4.length} photos`,
      previewImages: [img_64, img_65, img_66],
      allPhotos: allPhotosAlbum4
    }
  ];

  const handleViewAlbum = (albumId: number) => {
    setExpandedAlbums(prev => 
      prev.includes(albumId) 
        ? prev.filter(id => id !== albumId)
        : [...prev, albumId]
    );
  };

  return (
    <>
      <SEO
        title="Gallery"
        description="Explore our gallery of images and videos that showcase Almawakening's events, initiatives, and impact in communities."
        keywords="gallery, photos, videos, events, community impact, almawakening"
        path="/gallery"
        ogImage="https://www.almawakening.org/og-image-gallery.jpg"
      />
      <Layout>
        <div className="gallery-page">
          <div className="gallery-container">
            {/* Header Section with Background Image Only */}
            <section className="gallery-header-new">
              <div className="header-background" style={{ backgroundImage: `url(${OurMonthbyMonth})` }}>
                {/* Just the background image, no content */}
              </div>
            </section>

            {/* Gallery Albums Section */}
            <section className="gallery-albums">
              <div className="albums-grid">
                {albumData.map((album) => (
                  <div key={album.id} className="album-card">
                    <div className="album-images">
                      <div className="main-image">
                        <img src={album.previewImages[0]} alt={`${album.month} main`} />
                      </div>
                      <div className="side-images">
                        <div className="small-image">
                          <img src={album.previewImages[1]} alt={`${album.month} 2`} />
                        </div>
                        <div className="small-image">
                          <img src={album.previewImages[2]} alt={`${album.month} 3`} />
                        </div>
                      </div>
                    </div>
                    <div className="album-info">
                      <h3>{album.month}</h3>
                      <p>{album.photoCount}</p>
                      <button 
                        className="view-album-btn" 
                        onClick={() => handleViewAlbum(album.id)}
                      >
                        {expandedAlbums.includes(album.id) ? 'Hide Album' : 'View Album'}
                      </button>
                    </div>
                    
                    {/* Expanded Photos */}
                    {expandedAlbums.includes(album.id) && (
                      <div className="expanded-photos">
                        <div className="photos-grid">
                          {album.allPhotos.map((photo, index) => (
                            <div key={index} className="photo-item">
                              <img src={photo} alt={`${album.month} Photo ${index + 1}`} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section className="gallery-contact" style={{ backgroundImage: `url(${contactlogo})` }}>
              <div className="contact-card">
                <div className="contact-icon">
                  <img src={Contactus} alt="Contact Us" />
                </div>
                <div className="contact-content">
                  <h2>Contact Us</h2>
                  <p>Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.</p>
                  <div className="contact-details">
                    <div className="contact-item">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3616L4.79126 9.13616C5.90756 11.8616 8.13844 14.0924 10.8638 15.2087L11.6384 13.6606C11.866 13.2679 12.2955 13.0493 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z" fill="currentColor"/>
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
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GalleryPage;