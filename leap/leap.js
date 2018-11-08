export const isLeap = (year) => {
    let divisibleBy4 = year % 4 === 0;
    let divisibleBy100 = year % 100 === 0;
    let divisibleBy400 = year % 400 === 0;

    if (!divisibleBy4) {
      return false;
    }

    return divisibleBy100 ? divisibleBy400 : true; 
};
