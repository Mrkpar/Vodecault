# Streams

Streams process data through a pipeline rather than requiring you to manually manage each step.

## The mental model

```text
source → intermediate operations → terminal operation
```

## Example

```java
List<String> names = List.of("Mark", "Anna", "Mike", "Bob");

List<String> result = names.stream()
        .filter(name -> name.startsWith("M"))
        .map(String::toUpperCase)
        .toList();
```

Result:

```text
[MARK, MIKE]
```

## Most useful operations

```java
// Keep elements matching a condition
numbers.stream()
        .filter(n -> n > 10);

// Transform every element
names.stream()
        .map(String::toUpperCase);

// Turn nested collections into one stream
lists.stream()
        .flatMap(List::stream);

// Sort
names.stream()
        .sorted();

// Remove duplicates
names.stream()
        .distinct();

// Combine everything into one value
int sum = numbers.stream()
        .reduce(0, Integer::sum);

// Collect/group
Map<Integer, List<String>> byLength = names.stream()
        .collect(Collectors.groupingBy(String::length));
```

## Intermediate vs terminal

These are intermediate:

- `filter`
- `map`
- `flatMap`
- `sorted`
- `distinct`

They return another Stream and build the pipeline.

These are terminal:

- `toList`
- `collect`
- `forEach`
- `reduce`
- `count`
- `findFirst`

The terminal operation actually consumes the stream.

## When to use Streams

Streams are useful when the code reads naturally as:

> "Take these things, keep some, transform them, then produce a result."

Don't force a Stream onto complicated logic just because it is shorter.

**Related:** Collections, lambdas, Predicate, Function, Optional.
