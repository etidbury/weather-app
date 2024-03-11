import { render } from '@testing-library/react';

import IconWeather from './icon-weather';

describe('IconWeather', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconWeather icon={'fog'} size={145} />);
    expect(baseElement).toBeTruthy();
  });
});
