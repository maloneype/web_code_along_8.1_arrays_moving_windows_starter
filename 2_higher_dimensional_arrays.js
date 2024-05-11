function solution(arr, row, col) {
  // your code here
  const zDimensionLength = arr[0][0].length
  let zArr = arr[row][col]
  let sum = 0
  for (num of zArr) {
    sum += num
  }
  return sum
}

const arr = [
  [
    [1, 2, 3, 4, 0, 6],
    [7, 0, -9, 10, 11, 12],
    [0, 14, 15, 16, 17, 18],
  ],
  [
    [0, 1, 23, 17, 29, 13],
    [1, -2, 3, 4, 5, -6],
    [7, 0, 9, 8, 6, 1],
  ]
]

console.log(solution(arr, 1, 2))

// 3D Array - Depth Sum

// Given a 3D array arr of integers, your task is to find the sum of the elements at row i and column j. In the most common visualization of 3D arrays, we can picture rows and columns of a (2D) spreadsheet and each cell having a "depth" extruded into space to create a prism-like structure.

// So for this problem, the goal is to sum all elements in that third "depth" dimension at a particular row and column.

// Hint: for a 3D array,
//// arr[i] returns a 2D array of all elements at row i
//// arr[i][j] returns a 1D array of all elements at row i, column j
//// arr[i][j][k] returns the integer at row i, column j, depth k

// Knowing this, finding all of the array elements at row i, column j (and any depth) is straightforward. Once you've found the 1D array that contains all of these integers, just sum them up :)

// Example

// For arr = [
//   [
//     [1, 2, 3, 4, 0, 6],
//     [7, 0, -9, 10, 11, 12],
//     [0, 14, 15, 16, 17, 18],
//   ],
//   [
//     [0, 1, 23, 17, 29, 13],
//     [1, -2, 3, 4, 5, -6],
//     [7, 0, 9, 8, 6, 1],
//   ]
// ]

// row = 1
// col = 2

// the return value of `solution(arr, row, col)` should be 31
