# Test Doubles

> **Next topic**

A **test double** is an object used in a test instead of a real dependency.

## The five common types

| Type | Main purpose |
|---|---|
| Dummy | Fills a required parameter but is not used |
| Stub | Returns predetermined answers |
| Fake | Simplified working implementation |
| Mock | Verifies that interactions happened |
| Spy | Records or wraps calls to real behavior |

## Why do we need them?

Imagine:

```java
class PaymentService {
    private final PaymentGateway gateway;

    PaymentService(PaymentGateway gateway) {
        this.gateway = gateway;
    }

    void pay(double amount) {
        gateway.pay(amount);
    }
}
```

Calling the real payment gateway in a unit test would be undesirable.

Instead, provide a test double:

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

Test:

```java
@Test
void paymentIsSentToGateway() {
    FakePaymentGateway gateway = new FakePaymentGateway();
    PaymentService service = new PaymentService(gateway);

    service.pay(50);

    assertTrue(gateway.paid);
}
```

## The important connection

This works cleanly because the production class depends on an **interface**, and the dependency is supplied through the constructor.

```text
PaymentService
     |
     v
PaymentGateway ← interface
     ^
     |
FakePaymentGateway
```

That is **dependency injection**, and it connects directly to the **Dependency Inversion Principle**.

## Mockito

Later, we will also cover using Mockito to create mocks and verify interactions without writing every test double ourselves.

**Related:** unit testing, interfaces, dependency injection, SOLID.
