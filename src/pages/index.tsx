import React from 'react';
import Carousel from '@src/components/atoms/Carousel';
import Slide from '@src/components/atoms/Carousel/Slide';
import Code from '@src/components/atoms/Code';
import Flex from '@src/components/atoms/Flex';
import Typography from '@src/components/atoms/Typography';

const EmblaCarousel = () => {
  return (
    <Carousel className="h-[100vh] w-[100vw]">
      <Slide heading="Slide 1">
        <Flex justify="center" alignItems="center" className="h-full">
          <Typography variant="bodyXL" className="mx-auto">
            This is a project for creating react based presentations
          </Typography>
        </Flex>
      </Slide>
      <Slide heading="Slide 2">
        <Code />
      </Slide>
      <Slide heading="Slide 3"></Slide>
    </Carousel>
  );
};

export default EmblaCarousel;
