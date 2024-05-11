function solution(a, window_size) {
  // your code here
  let returnArr = []
  let sum = 0
  for (let i=0; i<a.length-window_size+1; i++){

    sum = 0
    for (let j=0; j<window_size; j++){
      console.log(a[i+j])
      sum += a[i+j]
    }
    returnArr.push(sum/window_size)
  }
  return returnArr
}

const a = [20, 64, 73, 58, 74]
const window_size = 4
console.log(solution(a, window_size))


// Write a function that moves a "window" over an array, averaging the values under the window as it goes.

// For example, a window of size 3 moving across an array of length 9 might look like this for the first 3 moves (window is the bar over the values):

//  _____
//  6 2 8 3 7 9 1 0 5    Window over 6,2,8

//    _____
//  6 2 8 3 7 9 1 0 5    Window over 2,8,3

//      _____
//  6 2 8 3 7 9 1 0 5    Window over 8,3,7
// Your goal is to return an array of averages of the values under the window as it moves.

// Example
// Input:
// a == [20, 64, 73, 58, 74]
// window_size == 4

// Output:
// [53.75, 67.25]
