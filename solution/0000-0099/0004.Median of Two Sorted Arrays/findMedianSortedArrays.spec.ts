import { expect, test } from 'vitest';
import { findMedianSortedArrays } from './findMedianSortedArrays';

// test('if nums1 = [1,3], nums2 = [2], return 2', () =>
//     expect(findMedianSortedArrays([1, 3], [2])).toBe(2));

test('if nums1 = [1,2], nums2 = [3,4], return 2.5 ', () => expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5));
