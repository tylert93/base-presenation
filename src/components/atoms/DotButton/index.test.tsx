import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DotButton from '.';

const onClick = jest.fn();

describe('DotButton', () => {
  const Component = () => <DotButton selected={false} onClick={onClick} />;

  it('should render', () => {
    const { container } = render(<Component />);
    expect(container).not.toBeNull();
  });

  it('should run onClick function when clicked', () => {
    const { getByTestId } = render(<Component />);

    const DotButton = getByTestId('dot-button');
    fireEvent.click(DotButton);

    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
