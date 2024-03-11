import { render } from '@testing-library/react';

import ContainerCentered from './container-centered';

describe('ContainerCentered', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ContainerCentered>
        <div>example1</div>
      </ContainerCentered>
    );
    expect(baseElement).toBeTruthy();
  });
});
