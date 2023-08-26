# Presentational and continer components

In React, the concept of "presentational" and "container" components is a common design pattern used to separate concerns and improve code organization and maintainability. The idea is to split components into two categories based on their responsibilities:

## Presentational Components

- Focus on how things look.
- Receive data and callbacks via props from their parent (container) components.
- Typically have no or minimal state of their own.
- Mainly concerned with rendering UI elements.

## Container Components

- Focus on how things work.
- Manage the data and business logic.
- Pass data and behavior (callbacks) down to their child (presentational) components via props.
- Can have state and use lifecycle methods.
- This pattern promotes a clear separation of concerns and allows you to reuse presentational components across different container components, improving code reusability and maintainability.
