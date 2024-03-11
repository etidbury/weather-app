import { render } from '@testing-library/react';

import CardForecastDay from './card-forecast-day';
import { SAMPLE_RESPONSE__WEATHER } from '@lib/sdk/weather-api';

describe('CardForecastDay', () => {
  it('should render successfully', () => {
    const SAMPLE_WEATHER_CONDITION = SAMPLE_RESPONSE__WEATHER.days[0];
    const { baseElement } = render(
      <CardForecastDay
        weatherCondition={SAMPLE_WEATHER_CONDITION}
        tempUnit={'celcius'}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
