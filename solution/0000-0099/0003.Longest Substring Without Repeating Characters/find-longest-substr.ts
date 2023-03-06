/**
 * 无重复字符的最长子串长度
 */
export const findLongestSubStr = (str: string): number => {
  let longtest = 0;
  const list = [str[0]];
  for (let i = 1; i < str.length; i++) {
    const val = str[i];
    const index = list.indexOf(val);
    if (index !== -1) {
      list.splice(0, index + 1);
    }
    list.push(val);
    longtest = Math.max(longtest, list.length);
  }

  return longtest;
};
