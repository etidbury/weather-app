import { render } from '@testing-library/react';

import IconWeather, { WEATHER_ICONS } from './icon-weather';

describe('IconWeather', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconWeather icon={WEATHER_ICONS.CLOUDY} size={145} />);
    expect(baseElement).toBeTruthy();
  });
});
