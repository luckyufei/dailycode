export const findLongestPalindromicSubString = (str: string): string => {
  const dp: boolean[][] = new Array(str.length).fill([]);
  let start = 0;
  let mx = 0;
  for (let j = 0; j < str.length; j++) {
    for (let i = 0; i <= j; i++) {
      if (j - i < 2) {
        dp[i][j] = str.charAt(i) === str.charAt(j);
      } else {
        dp[i][j] = dp[i + 1][j - 1] && str.charAt(i) === str.charAt(j);
      }
      if (dp[i][j] && mx < j - i + 1) {
        start = i;
        mx = j - i + 1;
      }
    }
  }
  return str.substring(start, start + mx);
};
