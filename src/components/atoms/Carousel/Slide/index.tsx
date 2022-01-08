import React, { FC } from 'react';
import { ISlideProps } from './types';
import Typography from '@src/components/atoms/Typography';

const Slide: FC<ISlideProps> = ({ heading, children }) => (
  <div className="relative min-w-full h-full">
    <div className="relative overflow-hidden h-full">
      <div className="h-[100vh] w-[100vw] bg-secondary-main p-4">
        {heading && (
          <Typography
            variant="h2"
            component="h1"
            align="left"
            className="text-primary-main mb-4"
          >
            {heading}
          </Typography>
        )}
        {children}
      </div>
    </div>
  </div>
);

export default Slide;
