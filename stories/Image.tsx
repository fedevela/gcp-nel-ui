import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  [key: string]: unknown;
}

const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} {...props} />;
};

export default Image;
