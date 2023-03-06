import { describe, expect, test } from 'vitest';
import { findLongestPalindromicSubString } from './longest-palindromic-substring';

describe('longest palindromic substring', () => {
  test('if s = babad, ret is bab', () => {
    expect(findLongestPalindromicSubString('abad')).toBe('aba');
  });
});
