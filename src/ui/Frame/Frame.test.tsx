import React from 'react';
import { Frame } from './Frame';
import { render } from '../../utils/testing';

describe('Frame', () => {
  it('should match snapshot', () => {
    const { container } = render(<Frame />);

    expect(container).toMatchSnapshot();
  });
});
