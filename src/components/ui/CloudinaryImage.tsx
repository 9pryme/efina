'use client';

import { CldImage } from 'next-cloudinary';

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export const CloudinaryImage = ({
  src,
  alt,
  width,
  height,
  sizes,
  fill,
  className,
  priority
}: CloudinaryImageProps) => {
  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      fill={fill}
      className={className}
      priority={priority}
      deliveryType="upload"
    />
  );
}; 