export const twoSum = (nums: number[], target: number): [number?, number?] => {
  const map = new Map<number, number>();
  for(let i = 0; i< nums.length; i++){
    const curr = nums[i];
    const part = target - curr;
    if(map.has(part)) {
      return [map.get(part), i];
    }
    map.set(curr, i);
  }
    return [];
}