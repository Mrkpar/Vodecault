export const javaTopics = [
  {
    id: "java-variables",
    title: "Variables & Primitive Types",
    category: "Java",
    difficulty: "Beginner",
    sections: [
      {
        title: "Description",
        content: "Java is statically typed: every variable has a declared type. Common primitives include int, double, boolean and char. String is a class.",
      },
      {
        title: "Syntax",
        content: `int age = 35;
double salary = 100000.25;
boolean employed = false;
char grade = 'A';
String name = "Mark";`,
      },
      {
        title: "Example",
        content: `int yearsUntilRetirement = 65 - age;
System.out.println(name + " has " + yearsUntilRetirement + " years left.");`,
      },
    ],
  },
  {
    id: "java-classes-objects",
    title: "Classes & Objects",
    category: "Java",
    difficulty: "Beginner",
    sections: [
      {
        title: "Description",
        content: "A class defines the state and behaviour of objects. An object is an instance created from that class.",
      },
      {
        title: "Syntax",
        content: `class Person {
    String name;

    void sayHello() {
        System.out.println("Hello, " + name);
    }
}`,
      },
      {
        title: "Example",
        content: `Person person = new Person();
person.name = "Mark";
person.sayHello();`,
      },
    ],
  },
  {
    id: "java-constructors",
    title: "Constructors",
    category: "Java",
    difficulty: "Beginner",
    sections: [
      {
        title: "Description",
        content: "A constructor initializes a new object. It has the same name as the class and no return type.",
      },
      {
        title: "Syntax",
        content: `class Person {
    private String name;

    Person(String name) {
        this.name = name;
    }
}`,
      },
      {
        title: "Example",
        content: `Person person = new Person("Mark");`,
      },
    ],
  },
  {
    id: "java-encapsulation",
    title: "Encapsulation",
    category: "Java",
    difficulty: "Beginner",
    sections: [
      {
        title: "Description",
        content: "Encapsulation keeps an object's internal state protected and exposes controlled operations through methods.",
      },
      {
        title: "Syntax",
        content: `class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
}`,
      },
      {
        title: "Example",
        content: `BankAccount account = new BankAccount();
account.deposit(100);
System.out.println(account.getBalance());`,
      },
    ],
  },
  {
    id: "java-inheritance",
    title: "Inheritance",
    category: "Java",
    difficulty: "Beginner",
    sections: [
      {
        title: "Description",
        content: "Inheritance lets a subclass reuse and specialize behaviour from a parent class. Use it when the child really is a kind of the parent.",
      },
      {
        title: "Syntax",
        content: `class MobileSpacecraft {
    void move() {
        System.out.println("Moving");
    }
}

class CargoShip extends MobileSpacecraft {
}`,
      },
      {
        title: "Example",
        content: `CargoShip ship = new CargoShip();
ship.move(); // inherited method`,
      },
    ],
  },
  {
    id: "java-composition",
    title: "Composition",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "Composition means an object contains or uses other objects to do its work. It often gives more flexibility than inheritance.",
      },
      {
        title: "Syntax",
        content: `class SpaceStation {
    private final DockingManager dockingManager;

    SpaceStation(DockingManager dockingManager) {
        this.dockingManager = dockingManager;
    }
}`,
      },
      {
        title: "Example",
        content: `DockingManager manager = new DockingManager();
SpaceStation station = new SpaceStation(manager);`,
      },
    ],
  },
  {
    id: "java-interfaces",
    title: "Interfaces",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "An interface defines a contract. Different classes can implement the same contract without sharing the same implementation.",
      },
      {
        title: "Syntax",
        content: `interface Dockable {
    void dock();
}

class CargoShip implements Dockable {
    @Override
    public void dock() {
        System.out.println("Cargo ship docked");
    }
}`,
      },
      {
        title: "Example",
        content: `Dockable ship = new CargoShip();
ship.dock();`,
      },
    ],
  },
  {
    id: "java-polymorphism",
    title: "Polymorphism",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "Polymorphism lets code work with a parent type or interface while the actual object's implementation is chosen at runtime.",
      },
      {
        title: "Syntax",
        content: `List<Dockable> ships = List.of(
    new CargoShip(),
    new PassengerShip()
);

for (Dockable ship : ships) {
    ship.dock();
}`,
      },
      {
        title: "Example",
        content: "The loop does not need to know which concrete ship it received. Each implementation provides its own dock() behaviour.",
      },
    ],
  },
  {
    id: "java-abstract-classes",
    title: "Abstract Classes",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "An abstract class can contain shared state and implemented methods while leaving some behaviour abstract for subclasses.",
      },
      {
        title: "Syntax",
        content: `abstract class Spacecraft {
    abstract void dock();

    void launch() {
        System.out.println("Launching");
    }
}`,
      },
      {
        title: "Example",
        content: `class CargoShip extends Spacecraft {
    @Override
    void dock() {
        System.out.println("Cargo ship docked");
    }
}`,
      },
    ],
  },
  {
    id: "java-access-modifiers",
    title: "Access Modifiers",
    category: "Java",
    difficulty: "Beginner",
    sections: [
      {
        title: "Description",
        content: "public is accessible broadly, private only inside the declaring class, protected allows package access plus subclass access, and package-private means no modifier and package access.",
      },
      {
        title: "Syntax",
        content: `public class Person {
    private String name;
    protected int age;
    String nickname; // package-private
    public void greet() {}
}`,
      },
      {
        title: "Example",
        content: "Use the most restrictive visibility that still lets the code work. This supports encapsulation.",
      },
    ],
  },
  {
    id: "java-solid",
    title: "SOLID",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "SOLID is a group of design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation and Dependency Inversion.",
      },
      {
        title: "Syntax",
        content: `interface PaymentGateway {
    void charge(double amount);
}

class OrderService {
    private final PaymentGateway gateway;

    OrderService(PaymentGateway gateway) {
        this.gateway = gateway;
    }
}`,
      },
      {
        title: "Example",
        content: "The OrderService depends on the PaymentGateway abstraction rather than constructing a concrete payment provider itself. This is dependency inversion and makes testing easier.",
      },
    ],
  },
  {
    id: "java-dependency-injection",
    title: "Dependency Injection",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "Dependency injection means an object receives the collaborators it needs instead of creating them internally. Constructor injection is usually the clearest form.",
      },
      {
        title: "Syntax",
        content: `class OrderService {
    private final PaymentGateway gateway;

    OrderService(PaymentGateway gateway) {
        this.gateway = gateway;
    }
}`,
      },
      {
        title: "Example",
        content: `OrderService service =
    new OrderService(new StripePaymentGateway());`,
      },
    ],
  },
  {
    id: "java-collections",
    title: "Collections",
    category: "Java",
    difficulty: "Beginner",
    sections: [
      {
        title: "Description",
        content: "Collections store groups of objects. List keeps order, Set prevents duplicates, and Map stores key-value pairs.",
      },
      {
        title: "Syntax",
        content: `List<String> names = new ArrayList<>();
Set<String> uniqueNames = new HashSet<>();
Map<Integer, String> users = new HashMap<>();`,
      },
      {
        title: "Example",
        content: `names.add("Mark");
users.put(1, "Mark");
System.out.println(users.get(1));`,
      },
    ],
  },
  {
    id: "java-generics",
    title: "Generics",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "Generics let classes and methods work with types while keeping compile-time type safety.",
      },
      {
        title: "Syntax",
        content: `class Box<T> {
    private T value;

    Box(T value) {
        this.value = value;
    }

    T getValue() {
        return value;
    }
}`,
      },
      {
        title: "Example",
        content: `Box<String> box = new Box<>("hello");
String value = box.getValue();`,
      },
    ],
  },
  {
    id: "java-lambdas",
    title: "Lambdas & Functional Interfaces",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "A lambda is a compact way to provide behaviour for a functional interface: an interface with one abstract method.",
      },
      {
        title: "Syntax",
        content: `Predicate<String> longName =
    name -> name.length() > 5;

Consumer<String> print =
    name -> System.out.println(name);`,
      },
      {
        title: "Example",
        content: `List<String> names = List.of("Mark", "Alexandra");
names.stream()
    .filter(longName)
    .forEach(print);`,
      },
    ],
  },
  {
    id: "java-streams",
    title: "Streams",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "A Stream describes a pipeline for processing data: source -> intermediate operations -> terminal operation. Streams do not modify the original collection by default.",
      },
      {
        title: "Syntax",
        content: `List<String> result = names.stream()
    .filter(name -> name.length() > 4)
    .map(String::toUpperCase)
    .sorted()
    .toList();`,
      },
      {
        title: "Example",
        content: `long count = employees.stream()
    .filter(Employee::isActive)
    .count();`,
      },
    ],
  },
  {
    id: "java-stream-grouping",
    title: "Stream Grouping & Reduction",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "Collectors can group elements into maps, while reduce combines many values into one result.",
      },
      {
        title: "Syntax",
        content: `Map<String, List<Employee>> byDepartment =
    employees.stream()
        .collect(Collectors.groupingBy(Employee::getDepartment));`,
      },
      {
        title: "Example",
        content: `int total = numbers.stream()
    .reduce(0, Integer::sum);`,
      },
    ],
  },
  {
    id: "java-optional",
    title: "Optional",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "Optional represents a value that may or may not exist. It can make absence explicit and reduce accidental null handling.",
      },
      {
        title: "Syntax",
        content: `Optional<String> name =
    Optional.ofNullable(findName());

String result = name.orElse("Unknown");`,
      },
      {
        title: "Example",
        content: `name.ifPresent(value ->
    System.out.println(value));`,
      },
    ],
  },
  {
    id: "java-equals-hashcode",
    title: "equals() & hashCode()",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "equals() defines logical equality. hashCode() provides a hash consistent with equals. Objects used in HashSet or as HashMap keys need a correct pair.",
      },
      {
        title: "Syntax",
        content: `@Override
public boolean equals(Object other) {
    if (!(other instanceof Person p)) return false;
    return name.equals(p.name);
}

@Override
public int hashCode() {
    return Objects.hash(name);
}`,
      },
      {
        title: "Example",
        content: "Two Person objects with the same logical identity can be treated as equal in a Set when equals() and hashCode() are implemented consistently.",
      },
    ],
  },
  {
    id: "java-enums-records",
    title: "Enums & Records",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "An enum represents a fixed set of named values. A record is a compact way to model immutable data carriers.",
      },
      {
        title: "Syntax",
        content: `enum Status {
    OPEN, CLOSED
}

record Person(String name, int age) {}`,
      },
      {
        title: "Example",
        content: `Status status = Status.OPEN;
Person person = new Person("Mark", 35);
System.out.println(person.name());`,
      },
    ],
  },
  {
    id: "java-exceptions",
    title: "Exceptions",
    category: "Java",
    difficulty: "Beginner",
    sections: [
      {
        title: "Description",
        content: "Exceptions represent exceptional situations. Handle them where you can meaningfully recover or translate the error; do not use exceptions for ordinary control flow.",
      },
      {
        title: "Syntax",
        content: `try {
    service.process();
} catch (IllegalArgumentException e) {
    System.out.println(e.getMessage());
}`,
      },
      {
        title: "Example",
        content: `if (amount < 0) {
    throw new IllegalArgumentException("Amount cannot be negative");
}`,
      },
    ],
  },
  {
    id: "java-testing-doubles",
    title: "Testing Doubles",
    category: "Java",
    difficulty: "Intermediate",
    sections: [
      {
        title: "Description",
        content: "A test double replaces a real dependency during a test. Dummy is only a placeholder, Stub supplies answers, Fake is a lightweight working implementation, Mock verifies interactions, and Spy wraps a real implementation while allowing observation.",
      },
      {
        title: "Syntax",
        content: `interface PaymentGateway {
    void charge(double amount);
}

class FakePaymentGateway implements PaymentGateway {
    double charged;

    public void charge(double amount) {
        charged += amount;
    }
}`,
      },
      {
        title: "Example",
        content: `FakePaymentGateway fake = new FakePaymentGateway();
OrderService service = new OrderService(fake);

service.placeOrder(50);
assertEquals(50, fake.charged);`,
      },
    ],
  },
  {
    id: "java-maven",
    title: "Maven",
    category: "Java",
    difficulty: "Beginner",
    sections: [
      {
        title: "Description",
        content: "Maven is a build and dependency-management tool. The pom.xml describes the project, dependencies, plugins and build configuration.",
      },
      {
        title: "Syntax",
        content: `mvn test
mvn package
mvn clean package`,
      },
      {
        title: "Example",
        content: "Add JUnit or another library as a dependency in pom.xml, then Maven downloads it and makes it available to the project.",
      },
    ],
  },
];
