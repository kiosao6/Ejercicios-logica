function findFirstRepeated(gifts) {
  // Code here
  
  let nums = {}
  
  for(let i = 0; i<= gifts.length; i++) {
    if(gifts[i] in nums) {
      console.log(nums)
      return gifts[i]
    } else {
      nums[gifts[i]] = i
    }
  };
  console.log(nums)
  return - 1
}