function solution(size) {
  let returnArr = []
  for (let row = 0; row < size; row++) {
    const rowArr = Array(size).fill(0)
    returnArr.push(rowArr)
  }

  for (let i=0; i<size; i++) {
      returnArr[i][i] = 1
  }
  return returnArr
}

console.log(solution(4))

// Create a square 2D array of size size x size. Fill the array with 0's.
// Then draw a line of 1's down the main diagonal.
// This is called an identity matrix.

// Example
// Input: size = 4
// Output: solution(4) =
// [
//   [1, 0, 0, 0],
//   [0, 1, 0, 0],
//   [0, 0, 1, 0],
//   [0, 0, 0, 1],
// ]
