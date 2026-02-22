# 🧠 Infinite Currying in JavaScript

## 📌 Problem Statement

Implement a function that supports infinite currying.

You are expected to design a function that keeps returning another function until no argument is passed.

This tests your understanding of:

- Closures
- Function chaining
- State preservation across calls

---

## ✅ Expected Output

```js
sum(1)(2)(3)(); // 6
```

---

## 💡 Solution

```js
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
```

---

## 🔍 Example Usage

```js
console.log(sum(1)(2)(3)());       // 6
console.log(sum(5)(10)(15)(20)()); // 50
console.log(sum(7)());             // 7
```

---

## 🧠 How It Works

When we write: `sum(1)(2)(3)`

**What must happen?**

```
sum(1)       → returns a function
That returned function (2)  → returns a function
That returned function (3)  → returns a function
```

So yes — it keeps returning the same inner function (or another function).

Only when **no argument is passed**:

```
sum(1)(2)(3)()
```

Now:
- `()` → no argument passed
- So instead of returning the function again
- It **returns the final value**

---

## 🔄 Real Logic

```
if (argument is provided)  → return the function again
else                       → return the accumulated result
```

> It does **not** always return itself forever.
> It returns itself **conditionally**.
>
> - When argument **exists** → return function
> - When argument **does not exist** → return result

---

## 🔄 Flow Visualization

```
sum(1) → returns function
   (2) → returns function
   (3) → returns function
    () → returns number ✅
```

```
sum(1)(2)(3)() → 6
```

---

## 🗣️ Very Simple Analogy

> Imagine someone saying:
> **"Keep giving me numbers. When you're done, just say nothing — and I'll tell you the total."**

- If you pass a number → they keep collecting
- If you say nothing `()` → they hand you the total

---

## 🎯 Key Concept: Closure

The variable `total` is preserved between function calls because of **JavaScript closures**.

Each chained call still has access to the **same `total` variable**.

```
sum(1)  → total = 1, returns inner
  (2)   → total = 3, returns inner
  (3)   → total = 6, returns inner
  ()    → returns 6 ✅
```

---

## 🚀 Bonus (Interview Follow-up)

A common follow-up question:

> **Can you make it work without the final `()`?**

```js
sum(1)(2)(3) // 6
```

This can be achieved using **`valueOf()`** or **`toString()`** override:

```js
function sum(a) {
  let total = a;

  function inner(b) {
    total += b;
    return inner;
  }

  inner.valueOf = function () {
    return total;
  };

  return inner;
}

console.log(+sum(1)(2)(3)); // 6
```

---

## 📚 Takeaway

Infinite currying works by:

1. **Returning a function repeatedly**
2. **Preserving state using closures**
3. **Ending the chain when no argument is passed**