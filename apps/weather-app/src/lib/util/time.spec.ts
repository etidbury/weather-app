import {
  formatDateEpochToFriendly,
  formatDateEpochToTimeFriendly,
} from './time';

describe('time', () => {
  it('formatDateEpochToFriendly', () => {
    expect(formatDateEpochToFriendly(new Date().getTime())).toBeDefined(); //todo: improve test
  });
  it('formatDateEpochToTimeFriendly()', () => {
    expect(formatDateEpochToTimeFriendly(new Date().getTime())).toBeDefined(); //todo: improve test
  });
});
