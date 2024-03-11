import { render } from '@testing-library/react';

import { InputSearch } from './input-search';

describe('InputSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <InputSearch
        action={'/'}
        searchParams={new URLSearchParams('q=London')}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
