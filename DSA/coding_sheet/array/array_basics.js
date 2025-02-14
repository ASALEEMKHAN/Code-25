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
3.Check if the array is sorted

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

let inp_3 = [5, 4, 3, 2, 1];

console.log("Ans: 3");

console.log(isSorted(inp_3));
console.log(isSorted([1, 2, 3, 4, 5]));

/*
4.Remove duplicates in-place from Sorted array.

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)
*/

function removeDuplicates(arr) {
  let i = 0;
  let n = arr.length;

  for (let j = 0; j < n; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
}

let inp_4 = [1, 1, 2, 2, 2, 3, 3];
let newLength = removeDuplicates(inp_4);

console.log("Ans: 4");

console.log(inp_4.slice(0, newLength));

/*
5.Given an array arr. Your task is to find the minimum and maximum elements in the array.

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

let inp_5 = [3, 2, 1, 56, 10000, 167];

let result_5 = getMinimumAndMaximum(inp_5.length, inp_5);

console.log("Ans: 5");

console.log(result_5);

/*
6.Given an array, arr of positive integers. Find the third largest element in it. Return -1 if the third largest element is not found.

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

let inp_6 = [2, 4, 1, 3, 5];

console.log("Ans: 6");

console.log(thirdLargest(inp_6));
console.log(thirdLargest([10, 2]));
console.log(thirdLargest([5, 5, 5]));

/*
7.Left Rotate an array by one place.

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)
*/

function leftRotate_One(arr) {
  let n = arr.length;
  let temp = arr[0];

  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = temp;
  return arr;
}

let inp_7 = [1, 2, 3, 4, 5];

console.log("Ans: 7");

console.log(leftRotate_One(inp_7));

/*
8.Left Rotate an array by D places.

Brute code:-
Expected Time Complexity: O(n + d)
Expected Auxiliary Space: O(d)
*/

function leftRotate_D(arr, n, d) {
  d = d % n; // Handle cases where d >= n

  let temp = []; // Temporary array to store the rotated elements

  // Copy first `d` elements into `temp`
  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }

  // Shift the remaining elements to the left
  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }

  // Copy the `temp` array elements to the end of the original array
  for (let i = 0; i < d; i++) {
    arr[n - d + i] = temp[i];
  }
}

let inp_8_B = [1, 2, 3, 4, 5, 6, 7];
let n = inp_8_B.length;
let d = 3;

leftRotate_D(inp_8_B, n, d);

console.log("Ans: 8 (Brute)");

console.log(inp_8_B);

/*
Optimal code:-
Expected Time Complexity: O(2n) => O(n)
Expected Auxiliary Space: O(1)
*/

function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function leftRotate_D2(arr, n, d) {
  d = d % n; // Handle cases where d >= n

  reverseArray(arr, 0, d - 1); // Reverse the first `d` elements
  reverseArray(arr, d, n - 1); // Reverse the remaining `n - d` elements
  reverseArray(arr, 0, n - 1); // Reverse the entire array
}

let inp_8_O = [1, 2, 3, 4, 5, 6, 7];
let n1 = inp_8_O.length;
let d2 = 3;

leftRotate_D(inp_8_O, n1, d2);

console.log("Ans: 8 (Optimal)");

console.log(inp_8_O);

/*
9.Move Zero to end.

Brute code:-
Expected Time Complexity: O(2n) => O(n)
Expected Auxiliary Space: O(n)
*/

function moveZeros(n, arr) {
  let temp = [];

  // Collect all non-zero elements
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }

  // Number of non-zero elements
  let nz = temp.length;

  // Copy non-zero elements back to the original array
  for (let i = 0; i < nz; i++) {
    arr[i] = temp[i];
  }

  // Fill the rest of the array with zeros
  for (let i = nz; i < n; i++) {
    arr[i] = 0;
  }

  return arr;
}

let inp_9_B = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n_mz = inp_9_B.length;

let result_mz = moveZeros(n_mz, inp_9_B);

console.log("Ans: 9 (Brute)");

console.log(result_mz);

/*
Optimal code:-
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)
*/

function moveZeros2(n, arr) {
  let j = -1;

  // Find the first zero in the array
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  // If no zero is found, return the array as is
  if (j === -1) return arr;

  // Move non-zero elements to the front
  for (let i = j + 1; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}

let inp_9_O = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n_mz2 = inp_9_O.length;

result_mz2 = moveZeros2(n_mz2, inp_9_O);

console.log("Ans: 9 (Optimal)");

console.log(result_mz2);
