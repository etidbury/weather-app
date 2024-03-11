import { render } from '@testing-library/react';

import SectionBreakdown from './section-breakdown';
import { SAMPLE_RESPONSE__WEATHER } from '@lib/sdk/weather-api';

describe('SectionBreakdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SectionBreakdown
        currentConditions={SAMPLE_RESPONSE__WEATHER.currentConditions}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
