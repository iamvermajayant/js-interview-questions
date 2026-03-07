function once(fn) {
  let hasBeenCalled = false;
  let result;

  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

const init = once(() => {
  console.log("Initialized");
  return 42;
});

init(); // "Initialized" → 42
init(); // 42
init(); // 42
