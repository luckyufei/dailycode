const findKth = (num1: number[], i: number, num2: number[], j: number, k: number): number => {
  if (i >= num1.length) {
    return num2[j + k - 1];
  }
  if (j >= num2.length) {
    return num1[i + k - 1];
  }
  if (k === 1) {
    return Math.min(num1[i], num2[j]);
  }
  const minVal1Idx = i + k / 2 - 1;
  const minVal2Idx = j + k / 2 - 1;
  const midVal1 = minVal1Idx < num1.length ? num1[Math.floor(minVal1Idx)] : Number.MAX_VALUE;
  const midVal2 = minVal2Idx < num2.length ? num2[Math.floor(minVal2Idx)] : Number.MAX_VALUE;
  const result =
    midVal1 < midVal2
      ? findKth(num1, Math.floor(i + k / 2), num2, j, Math.floor(k - k / 2))
      : findKth(num1, i, num2, Math.floor(j + k / 2), Math.floor(k - k / 2));
  console.log('🚀 ~ file: findMedianSortedArrays.ts:22 ~ result', result, {
    i,
    j,
    k,
    minVal1Idx,
    midVal1,
    minVal2Idx,
    midVal2,
  });
  return result;
};

export const findMedianSortedArrays = (num1: number[], num2: number[]): number => {
  const m = num1.length;
  const n = num2.length;
  const left = Math.floor((m + n + 1) / 2);
  const right = Math.floor((m + n + 2) / 2);
  console.log('🚀 ~ file: findMedianSortedArrays.ts:48 ~ left', left, right);
  return (findKth(num1, 0, num2, 0, left) + findKth(num1, 0, num2, 0, right)) / 2;
};
