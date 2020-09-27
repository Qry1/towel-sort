
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) return []
  let result = [];
  
  for (let i = 0; i < matrix.length; i++) {
    if (i === 1 || i === 3 || i === 5) {
      matrix[i].reverse();
      matrix[i].forEach(elem => {
        result.push(elem)
      })
    } else {
      matrix[i].forEach(elem => {
        result.push(elem)
      })
    }
  }
  return result
}




/* 
function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) return []
  let result = [];
  
  for (let i = 0; i < matrix.length; i++) {
    if (i === 1 || i === 3 || i === 5) {
      matrix[i].reverse();
      matrix[i].forEach(elem => {
        result.push(elem)
      })
    } else {
      matrix[i].forEach(elem => {
        result.push(elem)
      })
    }
  }
  return result
}

console.log(towelSort([
  [1, 2, 4],
  [5, 6, 7, 8],
  [9, 12],
])) */