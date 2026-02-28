# 🧠 Implementing `once()` in JavaScript

## 📌 Problem Statement

Create a `once()` function that ensures a given function executes **only
the first time** it is called.

After the first execution:

-   The original function should NOT run again.
-   No side effects should occur.
-   The previously returned result should be returned instantly.

------------------------------------------------------------------------

## ✅ Example

``` js
const init = once(() => {
  console.log("Initialized");
  return 42;
});

init(); // "Initialized" → 42
init(); // 42
init(); // 42
```

------------------------------------------------------------------------

# 🏗 Final Implementation

``` js
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
```

------------------------------------------------------------------------

# 🔎 How It Works

## 1️⃣ Closure

`hasBeenCalled` and `result` are stored inside a closure, keeping them
private.

## 2️⃣ First Call

-   Executes the function
-   Stores the result
-   Sets `hasBeenCalled = true`

## 3️⃣ Later Calls

-   Skips execution
-   Returns stored result instantly

------------------------------------------------------------------------

# 🧠 Why Use `apply`?

``` js
result = fn.apply(this, args);
```

This ensures:

-   Correct `this` context
-   Arguments are forwarded properly

Without `apply`, `this` may become `undefined` if the function loses its
object context.

------------------------------------------------------------------------

# 🔥 Example With `this`

``` js
const obj = {
  value: 10,
  getValue: once(function () {
    return this.value;
  }),
};

console.log(obj.getValue()); // 10
```

------------------------------------------------------------------------

# 🎯 Interview Summary

> `once()` uses closures to ensure a function runs only once. It caches
> the result and returns it for future calls. `apply` is used to
> preserve context and forward arguments properly.

------------------------------------------------------------------------
