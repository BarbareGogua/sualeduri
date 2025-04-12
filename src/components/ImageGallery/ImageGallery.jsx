
import React, { useState } from 'react';
import './ImageGallery.css';
import iconPrevious from '../../assets/icons/icon-previous.jpg';
import iconNext from '../../assets/icons/icon-next.jpg';
import iconClose from '../../assets/icons/icon-close.jpg';

const ImageGallery = ({ images, isMobile }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const openLightbox = () => {
    if (!isMobile) {
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="image-gallery">
      <div className="main-image">
        <img
          src={images[activeIndex]}
          alt="Product"
          onClick={openLightbox}
        />
        {isMobile && (
          <>
            <button
              className="prev-button mobile"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <img src={iconPrevious} alt="Previous" />
            </button>
            <button
              className="next-button mobile"
              onClick={nextImage}
              aria-label="Next image"
            >
              <img src={iconNext} alt="Next" />
            </button>
          </>
        )}
      </div>

      {!isMobile && (
        <div className="thumbnails">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      )}

      {lightboxOpen && !isMobile && (
        <div className="lightbox">
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <div className="lightbox-content">
            <button
              className="close-lightbox"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <img src={iconClose} alt="Close" />
            </button>
            <div className="lightbox-main-image">
              <img src={images[activeIndex]} alt="Product" />
              <button
                className="prev-button"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <img src={iconPrevious} alt="Previous" />
              </button>
              <button
                className="next-button"
                onClick={nextImage}
                aria-label="Next image"
              >
                <img src={iconNext} alt="Next" />
              </button>
            </div>
            <div className="lightbox-thumbnails">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;