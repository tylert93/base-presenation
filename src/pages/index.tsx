import React from 'react';
import Carousel from '@src/components/atoms/Carousel';
import Slide from '@src/components/atoms/Carousel/Slide';
import Code from '@src/components/atoms/Code';

const EmblaCarousel = () => {
  return (
    <Carousel className="h-[100vh] w-[100vw]">
      <Slide heading="Slide 1">
        <Code />
      </Slide>
      <Slide heading="Slide 2"></Slide>
      <Slide heading="Slide 3"></Slide>
    </Carousel>
  );
};

export default EmblaCarousel;
