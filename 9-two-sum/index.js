// two sum

const twoSumComplexityOfNSquare = (numArray, sum) => {
  const result = [];
  for (let i = 0; i < numArray.length; i++) {
    for (let j = i + 1; j < numArray.length; j++) {
      if (numArray[j] + numArray[i] === sum) result.push([numArray[j], numArray[i]])
    }
  }
  return result;
}

// console.log(twoSumComplexityOfNSquare([1, 6, 4, 5, 3, 3], 7));

const twoSumComplexityOfN = (numArray, sum) => {
  //* creating hash table
  const hashTable = [];
  const pairs = [];

  for (let i = 0; i < numArray.length; i++) {
    const currNum = numArray[i];
    const counterPart = sum - currNum;
    /**
     * We uses here Set.@has instead of using something like Array.@includes because @has method 
     * has Time Complexity of `O(1)` where @includes and @indexOf methods has Time complexity of `O(n)` 
     */
     if(new Set(hashTable).has(counterPart)) pairs.push([currNum, counterPart]);
     
     //* Fill out the hash table
     hashTable.push(currNum);
  }
  return pairs
}

console.log(twoSumComplexityOfN([1, 6, 4, 5, 3, 3], 7));