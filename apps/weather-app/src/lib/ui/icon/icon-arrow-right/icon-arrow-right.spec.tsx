import { render } from '@testing-library/react';

import IconArrowRight from './icon-arrow-right';

describe('IconArrowRight', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconArrowRight alt="" width={20} />);
    expect(baseElement).toBeTruthy();
  });
});
