import { render } from '@testing-library/react';

import ButtonRounded from './button-rounded';

describe('ButtonRounded', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonRounded>example1</ButtonRounded>);
    expect(baseElement).toBeTruthy();
  });
});
