import { describe, expect, test } from 'vitest';
import { arrayToList, listToArray } from '../../__ds__/ListNode';
import { addTwoNumbers } from './add-two-numbers';
import { addTwoNumbers as addTwoNumbers2 } from './Solution';

const addTwoNumbers3 = (num1: number[], num2: number[]) =>
    listToArray(addTwoNumbers2(arrayToList(num1), arrayToList(num2)));

describe('0002.add-two-numbers', () => {
    test('if l1 = [2,4,3], l2 = [5,6,4], return [7, 0, 8]', () =>
        expect(addTwoNumbers([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]));

    test('if l1 = [0], l2 = [0], then [0]', () =>
        expect(addTwoNumbers([0], [0])).toEqual([0]));

    test('if l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9], then [8,9,9,9,0,0,0,1]', () =>
        expect(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([
            8, 9, 9, 9, 0, 0, 0, 1,
        ]));

    test('if l1 = [2,4,3], l2 = [5,6,4], return [7, 0, 8]', () =>
        expect(addTwoNumbers3([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]));

    test('if l1 = [0], l2 = [0], then [0]', () =>
        expect(addTwoNumbers3([0], [0])).toEqual([0]));

    test('if l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9], then [8,9,9,9,0,0,0,1]', () =>
        expect(addTwoNumbers3([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([
            8, 9, 9, 9, 0, 0, 0, 1,
        ]));
});
