import { cn } from './cn';

describe('cn', () => {
  it('should work', () => {
    expect(cn(['a', 'b', 'c'])).toEqual('a b c'); //todo: fix
  });
});
