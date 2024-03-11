import { render } from '@testing-library/react';

import TextTempUnit from './text-temp-unit';

describe('TextTempUnit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TextTempUnit tempUnit={'celcius'} temp={0} />
    );
    expect(baseElement).toBeTruthy();
  });
});
