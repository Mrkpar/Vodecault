# JavaScript Methods Katas — Instructor Guide

This file records the intended learning outcomes and method coverage. It is deliberately not imported into the Vodecault frontend.

## Coverage checklist

Every method from the original three lists is exercised in at least one reference solution. Repetition across tasks is intentional.

### Kata 1 — The Messy Shop

**Intent:** Parse messy text records, normalise fields, validate data, transform records, remove invalid/irrelevant sales, calculate totals, and assemble a report.

- Array: `map()` — transform each raw record into a cleaned sale or null.
- Array: `filter()` — remove invalid records and sales below the minimum total.
- Array: `forEach()` — accumulate revenue and build report lines.
- Array: `push()` — append report lines.
- Array: `join()` — combine report lines into one string.
- String: `split()` — separate record fields and customer-name words.
- String: `trim()` — remove whitespace around fields.
- String: `toLowerCase()` — normalise names and product names.
- String: `toUpperCase()` — capitalise the first letter of each name word.
- String: `slice()` — append the remainder of each name word after its first character.
- Math: `Math.round()` — round money to two decimal places.

### Kata 2 — The Student Analyzer

**Intent:** Validate student records, derive averages, answer boolean questions, find extrema, create rankings, and support name searches.

- Array: `filter()` — keep valid active students and matching names.
- Array: `map()` — create analysed student records and average lists.
- Array: `every()` — validate grades and check whether all students passed.
- Array: `reduce()` — calculate grade averages and the overall average.
- Array: `some()` — check for an outstanding student.
- Array: `find()` — retrieve the highest, lowest, and first searched student.
- Array: `sort()` — rank students.
- Array: `reverse()` — create the reverse ranking.
- Array: `slice()` — copy rankings and select the top three.
- Array: `includes()` — find students with a perfect grade.
- String: `includes()` — search within names.
- String: `startsWith()` — find names beginning with the search term.
- String: `endsWith()` — find names ending with the search term.
- String: `substring()` — extract the student's first initial.
- Math: `Math.max()` and `Math.min()` — find the highest and lowest averages.
- Math: `Math.trunc()` — return the integer part of the overall average.

### Kata 3 — The Store Management System

**Intent:** Clean and validate inventory, apply stock movements, protect against negative stock, calculate stock metrics, search and sort products, and generate a report.

- Array: `forEach()` — apply movements and add stock metrics.
- Array: `includes()` — validate movement types.
- Array: `find()` — locate the product affected by a movement.
- Array: `filter()` — identify valid, low-stock, out-of-stock, and discounted products.
- Array: `map()` — normalise and enrich product records.
- Array: `reduce()` — calculate inventory value and average price.
- Array: `sort()` — order inventory by price and stock.
- Array: `slice()` — copy inventory before sorting.
- String: `replace()` — collapse repeated whitespace in product names.
- String: `trim()` — remove surrounding whitespace.
- String: `toLowerCase()` — normalise categories and search.
- String: `includes()` — search product names and categories.
- Math: `Math.abs()` — calculate the distance from minimum stock.
- Math: `Math.floor()` — count complete boxes.
- Math: `Math.ceil()` — calculate boxes needed to reach minimum stock.

### Warm-up — The Report Editor

**Intent:** Practise removing the final array element without mutating the original array.

- Array: `slice()` — make a copy before changing it.
- Array: `pop()` — remove and return the final line from the copy.

## Full original target list

### Array methods
- [x] `forEach()`
- [x] `map()`
- [x] `filter()`
- [x] `find()`
- [x] `some()`
- [x] `every()`
- [x] `reduce()`
- [x] `includes()`
- [x] `sort()`
- [x] `reverse()`
- [x] `push()`
- [x] `pop()`
- [x] `slice()`
- [x] `join()`

### String methods
- [x] `split()`
- [x] `slice()`
- [x] `substring()`
- [x] `toUpperCase()`
- [x] `toLowerCase()`
- [x] `trim()`
- [x] `includes()`
- [x] `replace()`
- [x] `startsWith()`
- [x] `endsWith()`

### Math methods
- [x] `Math.floor()`
- [x] `Math.ceil()`
- [x] `Math.round()`
- [x] `Math.abs()`
- [x] `Math.max()`
- [x] `Math.min()`
- [x] `Math.trunc()`

## Teaching rules

- Do not reveal the method checklist before the learner has attempted the task.
- Give hints before full solutions unless the learner explicitly asks for the solution.
- Accept alternative valid approaches, but make sure every target method is practised at least once.
- Ask the learner to explain why a method is suitable after they use it.
- Use the collapsed **Reference solution** section as an answer key, not as the starting point.
