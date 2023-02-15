export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export const arrayToList = (nums: number[]): ListNode => {
    const root = new ListNode(nums[0], null);
    let curr = root;
    for (let i = 1; i < nums.length; i++) {
        curr.next = new ListNode(nums[i], null);
        curr = curr.next;
    }
    return root;
};

export const listToArray = (node: ListNode | null): number[] => {
    if (!node) return [];
    let curr = node;
    const result: number[] = [curr.val];
    while (curr.next) {
        result.push(curr.next.val);
        curr = curr.next;
    }
    return result;
};
