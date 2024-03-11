import { render } from '@testing-library/react';

import RootLayout from './layout';
jest.mock('next/font/google', () => ({
  Capriola: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}));
describe('RootLayout', () => {
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
    const { baseElement } = render(<RootLayout>Test</RootLayout>);
    expect(baseElement).toBeTruthy();
  });
});
