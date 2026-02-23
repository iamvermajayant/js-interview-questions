# 🔒 Counter Using Closures in JavaScript

## 📌 Problem Statement

Create a counter using **closures** that supports:

- `increment()`
- `decrement()`
- `reset()`

The counter must:

- ✅ Maintain private state  
- ✅ Not use global variables  
- ✅ Not use classes  
- ✅ Use closures properly  

### Example

```javascript
const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset());     // 5
```

---

# 🧠 Core Concept: Closures

A **closure** is when a function remembers variables from its lexical scope even after the outer function has finished executing.

In simple terms:

> Inner functions can access variables defined in their outer function.

This allows us to create **private state** in JavaScript.

---

# ✅ Implementation

```javascript
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
```

---

# 🔍 Step-by-Step Explanation

## 1️⃣ Private Variable

```javascript
let count = initialValue;
```

- This variable lives inside `createCounter`
- It is not accessible from outside
- It is not global

---

## 2️⃣ Returning Functions

We return an object containing three methods:

```javascript
return {
  increment,
  decrement,
  reset
};
```

Each method:

- Has access to `count`
- Can modify it
- Keeps it private from outside access

This works because of **closures**.

---

# 🔐 Why This Is Encapsulation

Encapsulation means:

- Data is hidden
- Access is controlled

In this case:

- `count` cannot be accessed directly
- It can only be changed using the provided methods

This mimics private variables in OOP — without using classes.

---

# 🧪 Testing the Counter

```javascript
const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset());     // 5
```

---

# 🚀 Cleaner Version (Using Arrow Functions)

```javascript
function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = initialValue)
  };
}
```

---

# ❌ Why Not Use Global Variables?

Bad Example:

```javascript
let count = 0;
```

Problems:

- Shared across entire application
- Can be accidentally modified
- Harder to maintain
- Not reusable

---

# 🎯 Interview Perspective

This question tests:

- Understanding of closures
- Lexical scope
- Encapsulation
- Avoiding global state
- Function factories

If you can clearly explain *why closures work here*, you're demonstrating strong JavaScript fundamentals.

---

# 📦 Final Takeaway

Closures allow us to:

- Maintain private state
- Build modular code
- Create reusable logic
- Mimic OOP patterns without classes

Mastering closures is essential for:

- React hooks
- Async callbacks
- Event listeners
- State management patterns

---

**Author:** Jayant Verma  
**Topic:** JavaScript Closures  
**Difficulty:** Beginner → Intermediate  