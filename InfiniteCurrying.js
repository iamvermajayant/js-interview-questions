function sum(a) {
  let total = a;

  function inner(b) {
    if (b === undefined) {
      return total;
    }
    total += b;
    return inner;
  }

  return inner;
}