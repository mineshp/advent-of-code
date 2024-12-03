import { expect, test } from 'bun:test';
import { handle } from './index';

/*

Maybe the lists are only off by a small amount! To find out, pair up the numbers and measure how far apart they are. Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest left number with the second-smallest right number, and so on.

*/
test('should sum the diff foreach of the smallest numbers from each list', () => {
  expect(handle([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3])).toBe(11);
});
