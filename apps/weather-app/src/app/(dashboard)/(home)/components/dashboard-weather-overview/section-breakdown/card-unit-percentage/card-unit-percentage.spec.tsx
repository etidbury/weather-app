import { render } from '@testing-library/react';

import CardUnitPercentage from './card-unit-percentage';

describe('CardUnitPercentage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CardUnitPercentage title={''} percentageValue={0} />
    );
    expect(baseElement).toBeTruthy();
  });
});
