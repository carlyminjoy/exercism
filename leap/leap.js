const divisibleBy = (year, x) => year % x === 0;

export const isLeap = year => divisibleBy(year, 4) && (!divisibleBy(year, 100) || divisibleBy(year, 400));
