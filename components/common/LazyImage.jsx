import React, { useState, useEffect } from 'react';
import ImageNext from 'next/image';
import PropTypes from 'prop-types';

export default function LazyImage({ src, mobileSrc, alt, type, className }) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImageSrc(img.src);
    };

    return () => {
      img.src = '';
    };
  }, [src]);

  return (
    <picture className={`picture-opacity-1`}>
      <source type={type} srcSet={src} />
      <ImageNext
        src={imageSrc}
        alt={alt}
        loading="eager"
        className={className}
      />
    </picture>
  );
}

LazyImage.propTypes = {
  type: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

LazyImage.defaultProps = {
  type: 'image/webp',
  src: '',
  alt: '',
  className: '',
};
