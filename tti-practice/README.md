# TTI Practice

A growing quick-reference for the JavaScript methods, syntax, and problem-solving patterns that may be useful in the TTI test.

The goal is to keep each entry short: what it does, when to use it, a small example, and important edge cases.

## Finding a value in an array

### `.find()`

Use `.find()` when you want the **first element** in an array that matches a condition.

### `Number.isInteger()`

Checks whether a value is a JavaScript number representing a whole integer.

```javascript
Number.isInteger(8);     // true
Number.isInteger(8.5);   // false
Number.isInteger("8");   // false
```

### Find the first integer

```javascript
const items = ["hello", 12, true, 5];
const number = items.find(Number.isInteger);

console.log(number); // 12
```

How it works:

1. `.find()` checks the array from left to right.
2. It passes each element to `Number.isInteger()`.
3. It returns the first element for which the check is `true`.
4. It stops searching after the first match.

If no element matches, `.find()` returns `undefined`.

```javascript
const items = ["hello", true, 5.5];
const number = items.find(Number.isInteger);

console.log(number); // undefined
```

**Remember:** `.find()` returns one matching value (or `undefined`), not a new array. Use `.filter()` if you want all matching values.
