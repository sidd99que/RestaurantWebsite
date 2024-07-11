import React, { useEffect, useRef, useState } from 'react';

const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const imageRef = useRef();

  useEffect(() => {
    let observer;
    const currentImage = imageRef.current;

    if (currentImage) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(currentImage);
          }
        });
      });

      observer.observe(currentImage);
    }

    return () => {
      if (observer && currentImage) {
        observer.unobserve(currentImage);
      }
    };
  }, [src]);

  return <img ref={imageRef} src={imageSrc} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
};

export default LazyImage;
