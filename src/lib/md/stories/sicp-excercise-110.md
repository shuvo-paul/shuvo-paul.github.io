---
title: SICP(JS) Excercise 1.10 explanation
date: 17-07-2023
---

**The following procedure computes a mathematical function called Ackermann's function.**

```
function A(x, y) {
    return y === 0
           ? 0
           : x === 0
           ? 2 * y
           : y === 1
           ? 2
           : A(x - 1, A(x, y - 1));
}
```

What are the values of the following expressions?

```
A (1, 10)
```
```
A(2, 4)
```
```
A(3, 3)
```

Consider the following procedures, where A is the procedure defined above:

```
function f(n) {
    return A(0, n);
}
```

```
function g(n) {
    return A(1, n);
}
```

```
function h(n) {
    return A(2, n);
}
```

**Solutions**

---
```
    A(1, 10)
```
```
=>  A(0, A(1, 9))
=>  A(0, A(0, A(1, 8)))
//This will continue until
=>  A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(1, 1))))))))))
```
Which is a 10th level recursion.

At this point, the condition `y === 1` is met because y is equal to 1. Therefore, according to the condition, the function returns 2.

So, we can simplify the expression 
`
A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(1, 1)))))))))) to A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, 2)))))))))`.

Now, we can evaluate each instance of `A(0, y)` as `2 * y`. Since we have 9 instances of A(0, y) in the expression, we can simplify it further:

`A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, 2)))))))))` becomes `2^9 * 2`, which is equivalent to `2^10`, and the final result is 1024.

Therefore, the value of `A(1, 10)` is 1024.

---

```
    A(2, 4)
```
```
=>  A(1, A(2, 3))
=>  A(1, A(1, A(2, 2)))
=>  A(1, A(1, A(1, A(2, 1))))
=>  A(1, A(1, A(1, 2))) // From third condition y === 1 ? 2
=>  A(1, A(1, 4)) // From previours example we know A(1, n) => 2^n. So a A(1, 2) will be 2^2. Which is 4.
=>  A(1, 16) // From previous example A(1, 4) => 2^4 => 16
=>  2^16 // Previous example
```

---