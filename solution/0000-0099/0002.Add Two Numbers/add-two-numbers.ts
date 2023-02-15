export const addTwoNumbers = (num1: number[], num2: number[]): number[] => {
    const result: number[] = [];
    let addOneFlag = false;
    const len = Math.max(num1.length, num2.length);

    for (let i = 0; i < len; i++) {
        const ival = num1[i] || 0;
        const jval = num2[i] || 0;
        const addVal = ival + jval + (addOneFlag ? 1 : 0);
        if (addVal < 10) {
            result.push(addVal);
            addOneFlag = false;
        } else {
            addOneFlag = true;
            result.push(addVal - 10);
        }
    }
    if (addOneFlag) result.push(1);
    return result;
};
