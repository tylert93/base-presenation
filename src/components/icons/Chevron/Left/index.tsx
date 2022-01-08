import React from 'react';
import IIconProps from '@src/types/Icon';

const Left = ({
  width = '100%',
  height = '100%',
  color = '#000',
  ...props
}: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    width={width}
    height={height}
    className={props.className}
    style={{ maxWidth: width, maxHeight: height }}
    {...props}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z" />
  </svg>
);

export default Left;
