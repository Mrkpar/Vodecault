# Java

A quick-reference map of the Java concepts we are learning. This is intentionally a **reference**, not a textbook: glance at a topic, see the core idea and a small example, then return to the lesson when you need the deeper explanation.

## Object-oriented programming

- **Classes & objects** — a class is a blueprint; an object is an instance.
- **Encapsulation** — protect state and control how it changes.
- **Inheritance** — model a genuine "is-a" relationship.
- **Composition** — build objects from other objects ("has-a").
- **Polymorphism** — use an abstraction while different implementations provide the behavior.
- **Abstract classes** — shared base behavior plus required abstract behavior.
- **Interfaces** — contracts/capabilities that unrelated classes can implement.

### Tiny example

```java
interface Dockable {
    void dock();
}

class CargoShip implements Dockable {
    @Override
    public void dock() {
        System.out.println("Cargo ship docking");
    }
}

List<Dockable> dockableObjects = List.of(new CargoShip());

for (Dockable object : dockableObjects) {
    object.dock();
}
```

The important idea is that the list only cares that the objects are **Dockable**.

## SOLID & design

### S — Single Responsibility
One coherent responsibility; avoid classes with many unrelated reasons to change.

### O — Open/Closed
Prefer designs that allow new behavior through extension rather than repeatedly modifying stable code.

### L — Liskov Substitution
A subtype must honor the contract of the type it replaces.

### I — Interface Segregation
Prefer small, focused interfaces over huge interfaces that force unused methods on implementations.

### D — Dependency Inversion
High-level code should depend on abstractions, not concrete low-level implementations.

**Example:**

```java
class MissionControl {
    private final Dockable ship;

    MissionControl(Dockable ship) {
        this.ship = ship;
    }
}
```

This also leads naturally to **dependency injection**, which makes code easier to test.

## Collections

### List
Ordered; duplicates allowed.

```java
List<String> names = new ArrayList<>();
names.add("Mark");
names.add("Mark");
```

### Set
Unique elements.

```java
Set<String> names = new HashSet<>();
names.add("Mark");
names.add("Mark"); // still one Mark
```

### Map
Key → value lookup.

```java
Map<String, Integer> ages = new HashMap<>();
ages.put("Mark", 30);
int age = ages.get("Mark");
```

**Quick choice:** order/duplicates → List; uniqueness → Set; lookup by key → Map.

## Generics

Generics provide type safety while allowing reusable code.

```java
class Box<T> {
    private final T value;

    Box(T value) {
        this.value = value;
    }

    T get() {
        return value;
    }
}

Box<String> box = new Box<>("hello");
```

Here `T` is a type parameter.

## Lambdas & functional interfaces

A lambda is a compact way to provide behavior.

```java
names.forEach(name -> System.out.println(name));
```

Useful functional interfaces:

- `Predicate<T>` → T → boolean
- `Function<T, R>` → T → R
- `Consumer<T>` → T → void
- `Supplier<T>` → () → T

These are especially important for **Streams**.

## Streams

Streams process data through a pipeline:

```text
source → intermediate operations → terminal operation
```

```java
List<String> result = names.stream()
        .filter(name -> name.startsWith("M"))
        .map(String::toUpperCase)
        .toList();
```

Common operations:

- `filter` — keep matching elements
- `map` — transform each element
- `flatMap` — flatten nested results
- `sorted` — sort
- `distinct` — remove duplicates
- `reduce` — combine into one value
- `collect` — collect into a result
- `groupingBy` — group by a key

Example:

```java
Map<Integer, List<String>> byLength = names.stream()
        .collect(Collectors.groupingBy(String::length));
```

**Remember:** intermediate operations build the pipeline; a terminal operation such as `toList`, `collect`, `forEach`, or `reduce` triggers processing.

## Optional

`Optional<T>` represents a value that may or may not exist.

```java
Optional<String> name = findName();

String result = name.orElse("Unknown");
name.ifPresent(System.out::println);
```

Use it mainly when absence is a meaningful return result. It is not a replacement for every `null`.

## Immutability

An immutable object cannot change its state after creation.

```java
public final class Person {
    private final String name;

    public Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
```

Immutability makes objects easier to reason about and safer to share.

## Enums & records

### Enum

Use an enum for a fixed set of values.

```java
enum GateState {
    OPEN,
    CLOSED,
    MOVING
}
```

### Record

Use a record for a compact data carrier.

```java
record Position(double x, double y) {}

Position p = new Position(10, 20);
System.out.println(p.x());
```

## Exceptions

Exceptions represent abnormal situations.

```java
try {
    int value = Integer.parseInt(input);
} catch (NumberFormatException e) {
    System.out.println("Not a number");
}
```

- `throw` actually throws an exception.
- `throws` declares that a method may propagate one.

Don't use exceptions as normal control flow; catch them where you can meaningfully handle them.

## Testing

A unit test checks a small piece of behavior, usually in isolation.

Typical pattern:

```text
Arrange → Act → Assert
```

```java
@Test
void depositIncreasesBalance() {
    BankAccount account = new BankAccount();

    account.deposit(100);

    assertEquals(100, account.getBalance());
}
```

Good tests focus on behavior rather than implementation details.

## Test doubles

**Next topic**

A test double replaces a real dependency during a test.

- **Dummy** — exists only because a value is required.
- **Stub** — gives predetermined answers.
- **Fake** — simplified but working implementation.
- **Mock** — verifies expected interactions.
- **Spy** — wraps/records real behavior.

Example fake:

```java
interface PaymentGateway {
    void pay(double amount);
}

class FakePaymentGateway implements PaymentGateway {
    boolean paid;

    @Override
    public void pay(double amount) {
        paid = true;
    }
}
```

Then inject it into the class under test:

```java
FakePaymentGateway gateway = new FakePaymentGateway();
PaymentService service = new PaymentService(gateway);

service.pay(50);

assertTrue(gateway.paid);
```

**Key connection:** interfaces + dependency injection make test doubles easy to substitute.

## Maven

Maven is a Java build and dependency-management tool.

Common commands:

```bash
mvn test
mvn package
mvn clean
```

The `pom.xml` describes dependencies and build configuration.

---

## Topics to add as we learn them

This list is deliberately open-ended. Future lessons can add entries without restructuring the whole reference.

- Access modifiers
- Constructors
- Static vs instance members
- Method overloading vs overriding
- Equality: `==` vs `equals()`
- `hashCode()`
- Comparable vs Comparator
- Iterators
- Functional programming patterns
- Advanced Stream operations
- Generics wildcards
- File I/O
- Date and time API
- Concurrency and threads
- Common design patterns
- JUnit in more depth
- Mockito
- Clean code and refactoring
