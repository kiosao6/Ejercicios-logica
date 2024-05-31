// Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

// The booleans should always start with false becase there is no digit before the first one.

// Examples
// 73312        => [false, false, true, false, true]
// 2026         => [false, true, false, true]
// 635          => [false, false, false]
// *** Remember 0 is evenly divisible by all integers but not the other way around ***



function divide(num) {
  const arr = Array.from(String(num).split(""));
  const numbers = arr.map(num => Number(num))
  console.log(numbers);
  let results = [];
  
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % numbers[i - 1] === 0) {
      results.push(true);
    } else {
      results.push(false)
    }
  };
  return results
};