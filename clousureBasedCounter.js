function createCounter(initialValue = 0) {
  let count = initialValue; // Private variable

  return {
    increment: function () {
      count++;
      return count;
    },

    decrement: function () {
      count--;
      return count;
    },

    reset: function () {
      count = initialValue;
      return count;
    }
  };
}

const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset());  


