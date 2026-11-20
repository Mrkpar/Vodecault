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

---

## Keeping matching values from an array

### `.filter()`

Use `.filter()` when you want **all elements** that pass a condition.

It returns a **new array** containing every matching element. If nothing matches, it returns an empty array `[]`.

```javascript
const items = [3, "cat", 7, true, 10];
const integers = items.filter(Number.isInteger);

console.log(integers); // [3, 7, 10]
```

How it works:

1. `.filter()` checks every element from left to right.
2. It keeps an element when the condition returns `true`.
3. It skips an element when the condition returns `false`.
4. It returns a new array with all the kept elements.

**Remember:** `.find()` gives you the first match; `.filter()` gives you all matches in an array.

## Transforming every element

### `.map()`

Use `.map()` when you want to **transform every element** in an array.

It returns a **new array** with the transformed results. The new array has the same number of elements as the original array.

```javascript
const numbers = [2, 4, 6, 8];
const doubled = numbers.map(number => number * 2);

console.log(doubled); // [4, 8, 12, 16]
```

How it works:

1. `.map()` takes each element in turn.
2. The callback function performs an operation on that element.
3. The result becomes the corresponding element in the new array.

The callback `number => number * 2` means: take the current element, call it `number`, and return it multiplied by two.

**Important:** `.map()` does not automatically skip strings, booleans, or other values. It applies your callback to every element.

If you want to transform only integers, combine `.filter()` and `.map()`:

```javascript
const items = [2, "hello", 5, "world", 8];

const doubledIntegers = items
    .filter(Number.isInteger)
    .map(number => number * 2);

console.log(doubledIntegers); // [4, 10, 16]
```

**Remember:** `.filter()` selects; `.map()` transforms.

## Adding an element to an array

### `.push()`

Use `.push()` when you want to **add one or more elements to the end** of an existing array.

```javascript
const fruits = ["apple", "banana"];

fruits.push("orange");

console.log(fruits); // ["apple", "banana", "orange"]
```

Important points:

- `.push()` changes (mutates) the original array.
- It adds the new element or elements at the end.
- It returns the new length of the array, not the array itself.

```javascript
const numbers = [1, 2];

const newLength = numbers.push(3, 4);

console.log(numbers);   // [1, 2, 3, 4]
console.log(newLength); // 4
```

**Remember:** `.push()` adds to the original array and returns its new length.
