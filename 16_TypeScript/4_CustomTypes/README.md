# Introduction

Now that you've delved into TypeScript, you've learned about its built-in types, including primitive types and arrays. However, the real excitement begins with creating your own custom types. These types are tailored to your specific needs and allow TypeScript to perform precise type checking.

You've actually encountered a custom type example already: tuples. For instance, [string, string, number, boolean] is a custom type suitable for user data, containing first name, last name, age, and account status.

Pre-defined types are like individual ingredients, serving specific purposes. Custom types, on the other hand, are like complete meals, combining different ingredients into a satisfying dish.

You can use complex custom types just like simpler types. They work as type annotations for variables:

```typescript
let myVar: compType;
```

And as type annotations for functions:

```typescript
function testFn(param: compType): returnedCompType {
  /* Function body */
}
```

Complex types even support type inference:

```typescript
let inferredTypeVariable = testFn(myVar);
// inferredTypeVariable has the type returnedCompType.
```

## Enums

Our first example of a complex type is also one of the most useful: enums. We use enums when we’d like to enumerate all the possible values that a variable could have. This is in contrast to most of the other types we have studied. A variable of the string type can have any string as a value; there are infinitely many possible strings, and it would be impossible to list them all. Similarly, a variable of the boolean[] type can have any array of booleans as its value; again, the possibilities are infinite.

```ts
enum Direction {
  North,
  South,
  East,
  West
}
```

There are many situations when we might want to limit the possible values of a variable. For example, the code above defines the enum Direction, representing four compass directions: Direction.North, Direction.South, Direction.East, and Direction.West. Any other values, like Direction.Southeast, are not allowed. Check out the example below:

```ts
let whichWayToArcticOcean: Direction;
whichWayToArcticOcean = Direction.North; // No type error.
whichWayToArcticOcean = Direction.Southeast; // Type error: Southeast is not a valid value for the Direction enum.
whichWayToArcticOcean = West; // Wrong syntax, we must use Direction.West instead.
```

As shown above, an enum type can be used in a type annotation like any other type.

Under the hood, TypeScript processes these kinds of enum types using numbers. Enum values are assigned a numerical value according to their listed order. The first value is assigned a number of 0, the second a number of 1, and onwards

For example, if we set whichWayToArticOcean = Direction.North, then whichWayToArticOcean == 0 evaluates to true. Furthermore, we can reassign whichWayToArticOcean to a number value, like whichWayToArticOcean = 2, and it does not raise a type error. This is because Direction.North, Direction.South, Direction.East, and Direction.West are equal to 0, 1, 2, and 3, respectively.

We can change the starting number, writing something like

```ts
enum Direction {
  North = 7,
  South,
  East,
  West
}
```

Here, Direction.North, Direction.South, Direction.East, and Direction.West are equal to 7, 8, 9, and 10, respectively.

We can also specify all numbers separately, if needed:

```ts
enum Direction {
  North = 8,
  South = 2,
  East = 6,
  West = 4
}
```

(These numbers match up with the keys on the numpad portion of many keyboards.)

## String Enums vs. Numeric Enums

In TypeScript, enums can be defined based on either numbers (numeric enums) or strings (string enums), and each type has its own characteristics and advantages.

**Numeric Enums:**

- Numeric enums use numbers as their underlying values.
- Enum members without explicitly assigned values are automatically assigned incremental numbers (0, 1, 2, ...).
- Numeric enum members can be assigned any numeric value, even if it's not part of the enum's defined values. This can lead to potential bugs.
- Example: `enum DirectionNumber { North, South, East, West }`

```ts
let whichWayToAntarctica: DirectionNumber;
whichWayToAntarctica = 1; // Valid TypeScript code.
whichWayToAntarctica = DirectionNumber.South; // Valid, equivalent to the above line.
```

**String Enums:**

- String enums use strings as their underlying values.
- Enum members must have explicitly assigned string values.
- String enum members can only be assigned values that are part of the defined enum values, ensuring type safety and preventing unintended values.
- It's recommended to use the convention of assigning capitalized enum member names as their string values.
- Example: `enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }`

```ts
enum DirectionNumber { North, South, East, West }
enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }
```

Advantages of String Enums:

- String enums are more strict and prevent accidental assignment of arbitrary values.
- They provide more informative error messages and help catch potential bugs.
- String enums are often preferred in TypeScript development for their type safety and clarity.

```ts
let whichWayToAntarctica: DirectionString;
whichWayToAntarctica = '\ (•◡•) / Arbitrary String \ (•◡•) /'; // Type error!
whichWayToAntarctica = 'SOUTH'; // STILL a type error!
whichWayToAntarctica = DirectionString.South; // The only allowable way to do this.
```

In summary, while both numeric enums and string enums have their uses, string enums are generally recommended due to their stricter type checking and better prevention of bugs related to incorrect assignments.

## Object Types in TypeScript

Object types in TypeScript allow for fine-level control over variable types, specifying the types of properties an object should have. They are commonly used to define the structure and types of objects.

Here's a breakdown of using object types:

1. **Type Annotation for Object:**
You can use a type annotation to define an object type. The annotation includes property names followed by their corresponding types.

```typescript
let aPerson: { name: string, age: number };
```

2.**Assigning Values:**
When you assign a value to a variable with an object type, the assigned object must match the specified property names and types.

```typescript
aPerson = { name: 'Aisle Nevertell', age: 25 }; // Valid assignment
aPerson = { name: 'Kushim', yearsOld: 5000 }; // Type error: incorrect property name
aPerson = { name: 'User McCodecad', age: '22' }; // Type error: incorrect property type
```

3.**Nested Object Types:**
You can include nested object types within an object type, creating complex structures.

```typescript
let aCompany: {
  companyName: string,
  boss: { name: string, age: number },
  employees: { name: string, age: number }[],
  employeeOfTheMonth: { name: string, age: number },
  moneyEarned: number
};
```

4.**Type Flexibility:**
TypeScript allows object properties to have various types, including enums, arrays, and other object types.

Object types provide clarity and type safety, ensuring that your code adheres to the expected structure and types of objects. While the above introduction covers the basics, TypeScript's object types offer more advanced features that can be explored in-depth.

## Type Aliases in TypeScript

Type aliases provide a way to create custom names for existing types, making code more readable and maintainable. They are particularly useful for simplifying complex types and reducing repetition.

Here's how type aliases work:

1. **Creating a Type Alias:**
To create a type alias, use the `type` keyword followed by the alias name and the desired type.

```typescript
type MyString = string;
type MyNumberArray = number[];
```

2.**Using Type Aliases:**
You can then use the type alias to declare variables and annotate their types.

```typescript
let greeting: MyString = 'Hello'; // Valid code.
let numbers: MyNumberArray = [1, 2, 3]; // Valid code.
```

3.**Customizing Complex Types:**
Type aliases are especially valuable for complex types like object types or tuple types. They allow you to create meaningful names for intricate type structures.

```typescript
type Person = { name: string, age: number };
type Company = {
  companyName: string,
  boss: Person,
  employees: Person[],
  employeeOfTheMonth: Person,
  moneyEarned: number
};
```

4.**No Influence on Type Behavior:**
Type aliases only provide alternate names for existing types. They do not affect how types work or behave.

```typescript
type MyString = string;
type MyOtherString = string;
let firstString: MyString = 'test';
let secondString: MyOtherString = firstString; // Valid code.
```

Using type aliases, you can simplify code, enhance clarity, and minimize repetition, making your TypeScript programs more elegant and easier to understand.

## Function Types in TypeScript

Function types allow you to precisely define the structure of functions, including their parameter types and return type. This enables you to control the types of functions that can be assigned to variables or used as arguments in various contexts.

Here's how function types work:

1. **Defining a Function Type:**
To define a function type, use the syntax `(parameters) => returnType`. The parameters specify the types of the function's parameters, and the returnType specifies the type of the value the function will return.

```typescript
type StringsToNumberFunction = (arg0: string, arg1: string) => number;
```

2.**Assigning Functions to Variables:**
You can now use the defined function type to assign compatible functions to variables.

```typescript
let myFunc: StringsToNumberFunction;
myFunc = function(firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};

myFunc = function(whatever: string, blah: string) {
  return whatever.length - blah.length;
};
```

3.**Parameter Names in Type Annotation:**
While defining the function type, you can use arbitrary parameter names, as they are only for documentation purposes. The types of the parameters must match those specified in the function type.

```typescript
type StringToNumberFunction = (str1: string, str2: string) => number;
```

4.**Single Parameter:**
Even if there's only one parameter, you still need to use parentheses around it in the function type definition.

```typescript
type StringToNumberFunction = (str: string) => number; // Correct
type StringToNumberFunction = str: string => number;   // Incorrect
```

Function types are particularly valuable when dealing with callback functions, as they ensure type safety and help in maintaining code clarity. They allow you to define the expected function signature, making your code more reliable and easier to understand.

## Generic Types in TypeScript

Generic types in TypeScript allow you to create flexible and reusable types that can work with a variety of data types while maintaining type safety. They are parameterized by one or more type variables, which can be substituted with actual types when using the generic type.

Here's how generic types work:

1. **Defining a Generic Type:**
Use the syntax `type TypeName<T> = ...` to define a generic type. The `<T>` syntax indicates that the type is parameterized by a type variable `T`.

```typescript
type Family<T> = {
  parents: [T, T],
  mate: T,
  children: T[]
};
```

2.**Using Generic Types:**
When using a generic type, you substitute the type variable with an actual type. For example, `Family<string>` replaces `T` with the `string` type:

```typescript
let aStringFamily: Family<string> = {
  parents: ['stern string', 'nice string'],
  mate: 'string next door', 
  children: ['stringy', 'stringo', 'stringina', 'stringolio']
};
```

3.**Type Placeholder T:**
Within the type definition, `T` serves as a placeholder for the actual type that will be provided when using the generic type.

4.**Type Safety and Reusability:**
Generic types ensure type safety by allowing you to specify constraints on the type variables. They also enable the creation of versatile and reusable types that can work with a wide range of data types.

Generics are commonly used in functions, classes, and interfaces to create flexible components that can work with multiple data types. They enhance code flexibility and maintainability, as well as improve the overall readability of your code.

```ts
// Use Case

type Human = {name: string, job: string};
type Dog = {name: string, tailWagSpeed: number};

type Family<T> = {
  parents: [T, T], mate: T, children: T[]
};
//Do not change the code above this line.

//Provide type annotations for the variables below:
let theFamily: Family<number> = {
  parents: [3, 4], mate: 9, children: [5, 30, 121]
};

let someFamily: Family<boolean> = {
  parents: [true, true], mate: false, 
  children: [false, false, true, true]
};

let aFamily: Family<Human> = {
  parents: [
    {name: 'Mom', job: 'software engineer'},
    {name: 'Dad', job: 'coding engineer'}
  ],
  mate: {name: 'Matesky', job: 'engineering coder'},
  children: [{name: 'Babesky', job: 'none'}]
};

let anotherFamily: Family<Dog> = {
  parents: [
    {name: 'Momo', tailWagSpeed: 3},
    {name: 'Dado', tailWagSpeed: 100}
  ],
  mate: {name: 'Cheems', tailWagSpeed: 7},
  children: [
    {name: 'Puppin', tailWagSpeed: 0.001},
    {name: 'Puppenaut', tailWagSpeed: 0.0001},
    {name: 'Puppenator', tailWagSpeed: 0.01}
  ]
};

```

## Generic Functions

We can also use generics to create collections of typed functions. Generic functions like these are probably easiest to understand via an example. And for once, the example is actually useful! Imagine we wanted to create a function that returns arrays filled with a certain value. Let’s just write the JavaScript for now:

```ts
function getFilledArray(value, n) {
  return Array(n).fill(value);
}
```

Here, getFilledArray('cheese', 3) evaluates to ['cheese', 'cheese', 'cheese']. No problem, right? Well, we run into a problem when we try to specify the function’s return type. We know it should be an array of whatever value‘s type is—do we have to write a separate type annotation for every type of value? Nope. Here, we are rescued by generic functions!

```ts
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}
```

The above code tells TypeScript to make sure that value and the returned array have the same type T. When the function is invoked, we will provide T‘s value. For example, we can invoke the function using getFilledArray`<string>(`'cheese', 3), which sets T equal to string. This still evaluates to ['cheese', 'cheese', 'cheese'], but the function is now correctly typed and less prone to errors. The function getFilledArray`<string>` is precisely the same as if we had written (value: string, n: number): string[] in its type annotation.

In general, writing generic functions with function functionName`<T>` allows us to use T within the type annotation as a type placeholder. Later, when the function is invoked, T is replaced with the provided type.

```ts
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

// Write your code below:
stringArray = getFilledArray<string>('hi', 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{name: string, age: number}>({name:'J. Dean', age: 24}, 6);
coordinateArray = getFilledArray<[number, number]>([3,4], 6);

```

## Review

Upon completion of this lesson you have officially* become a TypeScript Hero. No longer are you limited to TypeScript’s pre-defined types; you have now learned how to create your own custom types! These include:

- Enums (both string and numeric)
- Object types
- Function types

Furthermore, you learned how to refer to complex types using type aliases. And you even learned to master generics, which are like doubly-custom types. Impressive!
