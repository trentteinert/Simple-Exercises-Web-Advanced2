// Creates a triangular pattern.
function makeTriangle(rows = 4, patternA = "b", patternB = "a") {
  let n = 1;
  let pattern = "";

  // Returns a pattern based on the rows in the table.
  while (n <= rows) {
    if (n % 2 === 0) {
      pattern = patternA;
    } else {
      pattern = patternB;
    }
    // Log a repeat pattern.
    console.log(pattern.repeat(n));
    n++;
  }
}

// Creates a triangle 2.
function makeTriangle2(rows = 4, patternA = "a", patternB = "b") {
  let string = "";
  let n = 0;
  // Generates list of patterns.
  while (n < rows) {
    string = "";
    for (let j = 0; j <= n; j++) {
      if (j % 2 == 0) {
        string += patternA;
      } else {
        string += patternB;
      }
    }
    // log a string to the console
    console.log(string);
    n++;
  }
}
