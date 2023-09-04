# Introduction to Types

## Type Inferences

Type inference in TypeScript refers to the ability of the TypeScript compiler to automatically determine the data type of a variable based on the initial value assigned to it. This helps catch type-related errors during development and enforces type consistency throughout the code.

In JavaScript, you can assign any value to a variable, making it flexible but potentially error-prone. TypeScript, on the other hand, leverages type inference to ensure that once a variable is assigned a specific data type, it cannot be reassigned to a value of a different data type.

For example, if you declare a variable `order` and assign it the value `'first'`, TypeScript infers that `order` is of type `string`. If you then try to reassign `order` to the value `1`, which is of type `number`, TypeScript will raise an error indicating a type mismatch.

TypeScript recognizes JavaScript's primitive data types like `boolean`, `number`, `null`, `string`, and `undefined`. If you try to assign a value of a different type to a variable that has already been assigned a type, TypeScript will flag an error.

In summary, type inference in TypeScript helps catch type-related errors early in development by ensuring that variables maintain their inferred data types throughout the code, leading to more reliable and maintainable programs.

## Type shapes in TypeScript refer to the structure and properties that an object is expected to have based on its inferred or defined type. TypeScript uses the knowledge of these shapes to provide type-checking and catch potential errors in your code

When you work with objects in TypeScript, the type system knows about the properties and methods that are associated with the given type. For example, all strings are expected to have a `.length` property and methods like `.toLowerCase()`. Similarly, other types have their own set of properties and methods that can be accessed.

If you try to access a property or method that doesn't exist on the inferred type, TypeScript will raise an error, providing you with a helpful message that guides you toward the correct property or method name.

For instance:

```typescript
"MY".toLowercase(); // Error: Property 'toLowercase' does not exist on type '"MY"'. Did you mean 'toLowerCase'?
```

In this example, TypeScript recognizes that the correct method name is `toLowerCase` instead of `toLowercase` and informs you about it.

This feature of TypeScript's type system helps you catch mistakes early and ensures that your code conforms to the expected shapes of objects, reducing the likelihood of runtime errors.

## `Any` type

In TypeScript, the `any` type is used to represent a variable that can hold values of any type. It's a way of telling the TypeScript compiler to suspend type checking for that variable, allowing you to assign values of different types without triggering type errors.

When a variable is declared without an initial value or when TypeScript cannot infer its type, it's automatically considered of type `any`. This means you can assign it values of any type, and TypeScript won't raise errors if you reassign it to a different type later on.

For example:

```typescript
let onOrOff;

onOrOff = 1;
onOrOff = false;
```

In this code, `onOrOff` is initially of type `any` since it doesn't have an initial value. Therefore, you can assign both a number and a boolean to it without TypeScript complaining.

However, while `any` provides flexibility, it also removes the benefits of static type checking, which can lead to runtime errors or unexpected behavior. It's generally recommended to avoid using `any` when possible and instead opt for more specific types to ensure better code quality and maintainability.

## Variable Type Annotations

Type annotations in TypeScript allow you to explicitly specify the type that a variable is expected to have. This helps prevent accidental assignments of incorrect types and enhances code clarity. Annotations are added after the variable's name, using a colon followed by the desired type.

For instance:

```typescript
let mustBeAString: string;
mustBeAString = 'Catdog';

mustBeAString = 1337; // Error: Type 'number' is not assignable to type 'string'
```

In the example above, `mustBeAString` is declared to be of type `string`. This means it can only hold string values. When you try to assign a number to it, TypeScript raises an error because the assigned type (`number`) doesn't match the expected type (`string`).

While type annotations can make code more explicit, some developers might find them verbose. However, it's important to note that these annotations are removed during the compilation process, so they don't impact the runtime behavior of the JavaScript code that TypeScript compiles to. The benefit of type safety during development outweighs any concerns about code verbosity.

## Review

TypeScript is a superset of JavaScript that adds types.
The type system refers to TypeScript’s understanding of how your code is meant to function: mainly what data types should be stored under your variables.
TypeScript expects the data type of the variable to match the type of the value initially assigned to it at its declaration—this is known as type inference.
An object’s shape describes, among other things, what properties and methods it does or doesn’t contain. TypeScript knows not only what type something is but also what shape that type has.
When it isn’t able to infer a type, TypeScript will consider a variable to be of type any.
Type annotations are little pieces of code that indicate what type a variable is meant to be.

```js
let youAreAwesome: boolean;
youAreAwesome = true;
```
