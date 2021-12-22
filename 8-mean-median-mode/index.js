/* 
What are Mean Median and Mode?

Mean, median and mode are all measures of central tendency in statistics. In different ways they each tell us what value in a data set is typical or representative of the data set.
*/

/*
* How to Find the Mean?
The mean is the same as the average value in a data set.

* How to Find the Median
The median x is the data value separating the upper half of a data set from the lower half.
    - Arrange data values from lowest to highest value
    - The median is the data value in the middle of the set
    - If there are 2 data values in the middle the median is the mean of those 2 values.

* How to Find the Mode
Mode is the value or values in the data set that occur most frequently.
*/

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

function getMean(array) {
  var sum = 0;

  array.forEach(num => {
    sum += num;
  });

  var mean = sum / array.length;
  return mean;
}

function getMedian(array) {
  array.sort(function (a, b) { return a - b });
  var median;

  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  }
  else {
    var mid1 = array[(array.length / 2) - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }

  return median;
}

function getMode(array) {
  var modeObj = {};

  // create modeObj => hash table
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  // create array of mode/s 
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times 
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}


meanMedianMode([9, 10, 23, 10, 23, 9]);