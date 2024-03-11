import { render } from '@testing-library/react';

import CardUnitBasic from './card-unit-basic';

describe('CardUnitBasic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardUnitBasic title={''} value={''} />);
    expect(baseElement).toBeTruthy();
  });
});
