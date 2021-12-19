const binarySearch = (numArray, key) => {
  const middleIndex = Math.floor(numArray.length / 2);
  const middleElem = numArray[middleIndex];

  //* Base Case
  if (middleElem === key) return true;
  //* Recursive Cases
  else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex), key);
  } else return false;
}

console.log(binarySearch([1, 55, 77, 8, 6, 44, 11, 22, 63, 74].sort((a, b) => a - b), 22))