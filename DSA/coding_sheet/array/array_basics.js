/*
1.Largest Element in an Array.

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)
*/

function largestElement(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let inp_1 = [1, 2, 3, 4, 5];

console.log("Ans: 1");

console.log(largestElement(inp_1));

/*
2.Second Largest & Second Smallest Elements in an Array without sorting.

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)
*/

function secondLargest(arr, n) {
  let largest = arr[0];
  let sLargest = -1;

  for (let i = 1; i < n; i++) {
    if (arr[i] > largest) {
      sLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > sLargest) {
      sLargest = arr[i];
    }
  }
  return sLargest;
}

function secondSmallest(arr, n) {
  let smallest = arr[0];
  let sSmallest = Infinity;

  for (let i = 1; i < n; i++) {
    if (arr[i] < smallest) {
      sSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] !== smallest && arr[i] < sSmallest) sSmallest = arr[i];
  }
  return sSmallest;
}

function getSecondOrderElement(n, arr) {
  let sLargest = secondLargest(arr, n);
  let sSmallest = secondSmallest(arr, n);
  return [sLargest, sSmallest];
}

let inp_2 = [1, 2, 4, 7, 7, 5];
let result_2 = getSecondOrderElement(inp_2.length, inp_2);

console.log("Ans: 2");

console.log(result_2);

/*
3.Given an array arr. Your task is to find the minimum and maximum elements in the array.

Note: Return a Pair that contains two elements the first one will be a minimum element and the second will be a maximum.

Examples:

Input: arr[] = [3, 2, 1, 56, 10000, 167]
Output: 1 10000
Explanation: minimum and maximum elements of array are 1 and 10000.

Input: arr[] = [1, 345, 234, 21, 56789]
Output: 1 56789
Explanation: minimum and maximum element of array are 1 and 56789.

Input: arr[] = [56789]
Output: 56789 56789
Explanation: Since the array contains only one element so both min & max are same.

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)
*/

function minimumNumber(arr, n) {
  let smallestNum = arr[0];

  for (let i = 1; i < n; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }
  return smallestNum;
}

function maximumNumber(arr, n) {
  let largestNum = arr[0];

  for (let i = 1; i < n; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

function getMinimumAndMaximum(n, arr) {
  let smallestNum = minimumNumber(arr, n);
  let largestNum = maximumNumber(arr, n);
  return [smallestNum, largestNum];
}

let inp_3 = [3, 2, 1, 56, 10000, 167];

let result_3 = getMinimumAndMaximum(inp_3.length, inp_3);

console.log("Ans: 3");

console.log(result_3);

/*
4.Given an array, arr of positive integers. Find the third largest element in it. Return -1 if the third largest element is not found.

Examples:

Input: arr[] = [2, 4, 1, 3, 5]
Output: 3
Explanation: The third largest element in the array [2, 4, 1, 3, 5] is 3.

Input: arr[] = [10, 2]
Output: -1
Explanation: There are less than three elements in the array, so the third largest element cannot be determined.

Input: arr[] = [5, 5, 5]
Output: 5
Explanation: In the array [5, 5, 5], the third largest element can be considered 5, as there are no other distinct elements.

Expected Time Complexity: O(n)
Expected Space Complexity: O(1)
*/

function thirdLargest(arr) {
  let n = arr.length;
  if (n <= 2) {
    return -1;
  }

  let fLargest = Math.max(arr[0], arr[1]);
  let sLargest = Math.min(arr[0], arr[1]);
  let tLargest = Number.MIN_SAFE_INTEGER;

  for (let i = 2; i < n; i++) {
    if (arr[i] > tLargest) {
      tLargest = arr[i];
    }

    if (arr[i] > sLargest) {
      tLargest = sLargest;
      sLargest = arr[i];
    }

    if (arr[i] > fLargest) {
      sLargest = fLargest;
      fLargest = arr[i];
    }
  }
  return tLargest;
}

let inp_4 = [2, 4, 1, 3, 5];

console.log("Ans: 4");

console.log(thirdLargest(inp_4));
console.log(thirdLargest([10, 2]));
console.log(thirdLargest([5, 5, 5]));

/*
5.Check if the array is sorted

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)
*/

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      return false;
    }
  }
  return true;
}

let inp_5 = [5, 4, 3, 2, 1];

console.log("Ans: 5");

console.log(isSorted(inp_5));
console.log(isSorted([1, 2, 3, 4, 5]));
