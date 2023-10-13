function spiralTraversal(matrix) {
    const result = [];
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let top = 0;
    let right = numCols - 1;
    let bottom = numRows - 1;
    let left = 0;
  
    while (left <= right && top <= bottom) {
      // Traverse the top row from left to right
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
  
      // Traverse the right column from top to bottom
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
  
      // Traverse the bottom row from right to left
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(matrix[bottom][i]);
        }
        bottom--;
      }
  
      // Traverse the left column from bottom to top
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(matrix[i][left]);
        }
        left++;
      }
    }
  
    return result;
  }
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  

  console.log(spiralTraversal(matrix));