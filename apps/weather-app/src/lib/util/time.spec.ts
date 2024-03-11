import { formatDateEpochToFriendly } from './time';

describe('time', () => {
  it('should work', () => {
    expect(formatDateEpochToFriendly(new Date().getTime())).toBeDefined(); //todo: improve test
  });
});
