import { render } from '@testing-library/react';

import DashboardLayout from './layout';

describe('DashboardLayout', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardLayout>Test</DashboardLayout>);
    expect(baseElement).toBeTruthy();
  });
});
