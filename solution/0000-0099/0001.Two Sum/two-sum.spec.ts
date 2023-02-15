import { describe, expect, it } from 'vitest';
import { twoSum } from './two-sum';

describe('0001.twoSum', () => {
    it('nums = [1, 2, 3, 4], target = 100, return []', () => {
        expect(twoSum([1, 2, 3, 4], 100)).toEqual([]);
    });

    it('nums = [2,7,11,15], target = 9, return [0, 1]', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });

    it('nums = [3,2,4], target = 6, return [1,2]', () => {
        const nums = [3, 2, 4];
        const target = 6;
        expect(twoSum(nums, target)).toEqual([1, 2]);
    });

    it('nums = [3,3], target = 6, return [0, 1]', () => {
        const nums = [3, 3];
        const target = 6;
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });
});
