import { render } from '@testing-library/react';

import WeatherDayHero from './weather-day-hero';
import { SAMPLE_RESPONSE__WEATHER } from '@lib/sdk/weather-api';

describe('WeatherDayHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <WeatherDayHero
        weatherData={SAMPLE_RESPONSE__WEATHER}
        tempUnit={'celcius'}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
