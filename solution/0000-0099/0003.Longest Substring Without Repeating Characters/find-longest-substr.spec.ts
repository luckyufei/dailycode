import { afterAll, describe, expect, test } from 'vitest';
import { Bench } from 'tinybench';
import { findLongestSubStr } from './find-longest-substr';

const bench = new Bench({ time: 1000 });

describe('findLongestSubStr', () => {
  test('if s = "abcabcbb", return 3', () => {
    expect(findLongestSubStr('abcabcbb')).toBe(3);
  });

  test('if s = "pwwkew", return 3', () => expect(findLongestSubStr('pwwkew')).toBe(3));
});

afterAll(async () => {
  bench.add('findLongestSubStr(abcabcbb)', () => findLongestSubStr('abcabcbb'));
  await bench.run();
  console.table(
    bench.tasks.map(({ name, result }) => ({
      'Task Name': name,
      'Average Time (ps)': result!.mean * 1000,
      'Variance (ps)': result!.variance * 1000,
    })),
  );
});
