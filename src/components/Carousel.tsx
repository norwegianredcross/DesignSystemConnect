import React from 'react';
import { Carousel } from 'rk-designsystem';

const sampleImages = [
  { src: 'https://picsum.photos/800/400?random=1', alt: 'Bilde 1' },
  { src: 'https://picsum.photos/800/400?random=2', alt: 'Bilde 2' },
  { src: 'https://picsum.photos/800/400?random=3', alt: 'Bilde 3' },
  { src: 'https://picsum.photos/800/400?random=4', alt: 'Bilde 4' },
];

export const CarouselDefaultExample = () => {
  return <Carousel images={sampleImages} />;
};

export const CarouselWithArrowsExample = () => {
  return (
    <Carousel
      images={sampleImages}
      showArrows={true}
    />
  );
};

export const CarouselWithDotsExample = () => {
  return (
    <Carousel
      images={sampleImages}
      showDots={true}
    />
  );
};

export const CarouselWithArrowsAndDotsExample = () => {
  return (
    <Carousel
      images={sampleImages}
      showArrows={true}
      showDots={true}
    />
  );
};

export const CarouselAutoPlayExample = () => {
  return (
    <Carousel
      images={sampleImages}
      autoPlay={true}
      autoDelay={3000}
      showDots={true}
    />
  );
};

export const CarouselMultipleSlidesExample = () => {
  return (
    <Carousel
      images={sampleImages}
      slidesPerView={2}
      slideSpacing={16}
      showArrows={true}
    />
  );
};

export const CarouselThreeSlidesExample = () => {
  return (
    <Carousel
      images={sampleImages}
      slidesPerView={3}
      slideSpacing={12}
      showArrows={true}
      showDots={true}
    />
  );
};

export const CarouselWithCornerRadiusExample = () => {
  return (
    <Carousel
      images={sampleImages}
      cornerRadius={16}
      showArrows={true}
      showDots={true}
    />
  );
};

export const CarouselNoCornerRadiusExample = () => {
  return (
    <Carousel
      images={sampleImages}
      cornerRadius={0}
      showArrows={true}
      showDots={true}
    />
  );
};

export const CarouselFullExample = () => {
  return (
    <Carousel
      images={sampleImages}
      autoPlay={true}
      autoDelay={4000}
      showArrows={true}
      showDots={true}
      slidesPerView={1}
      slideSpacing={0}
      cornerRadius={8}
    />
  );
};
