const divisibleBy = x => year => year % x === 0;
const divisibleBy4 = divisibleBy(4);
const divisibleBy100 = divisibleBy(100);
const divisibleBy400 = divisibleBy(400);

export const isLeap = year => divisibleBy4(year) && (!divisibleBy100(year) || divisibleBy400(year));
