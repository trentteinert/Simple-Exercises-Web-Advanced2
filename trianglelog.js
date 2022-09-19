function makeTriangle(rows = 4, patternA = "b", patternB = "a") {
  let n = 1;
  let pattern = "";

  while (n <= rows) {
    if (n % 2 === 0) {
      pattern = patternA;
    } else {
      pattern = patternB;
    }
    console.log(pattern.repeat(n));
    n++;
  }
}
