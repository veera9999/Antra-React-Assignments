<!-- What is FLUX?
What is Redux? How do you use it with React components?
What is a reducer?
How do you choose between ContextAPI and Redux for global state management?
What is redux thunk and why do you want to use it? -->

![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)

# Assignment - 5

===========================================================================

## What is Flux?

Flux is an architecture pattern to manage the flow of data in web applications. Flux is not a framework or library; it’s a pattern that guides the structure of your application, ensuring a unidirectional data flow.

### Components:

**Actions:** Plain JavaScript objects that describe what should change in the app.

**Dispatcher:** The central hub that receives actions and dispatches them to the stores. It ensures that all stores are updated in a controlled manner.

**Stores:** Hold the application's state and logic. They update themselves when they receive actions from the dispatcher and notify views of state changes.

**Views:** React components that listen to the store changes and re-render accordingly.

In Flux, data flows in a single direction—from actions to the dispatcher, then to stores, and finally to the views (components). This simplifies debugging and reasoning about state changes.

## What is Redux? How do you use it with React components?

Redux is a predictable state management library that is based on the Flux architecture. It’s commonly used with React but can be used with any UI layer.

Core Concepts:

**Store:** The single source of truth that holds the entire state of your application.
**Actions:** Plain JavaScript objects that describe events that should change the state.
**Reducers:** Pure functions that take the current state and an action as arguments and return a new state.
**Dispatch:** A method used to send actions to the store.
**Selectors:** Functions that extract and return specific parts of the state from the store.

## What is a reducer?

A reducer is a pure function in Redux that determines how the state of the application changes in response to an action. The reducer receives two arguments: the current state and an action, and it returns a new state.

## How do you choose between ContextAPI and Redux for global state management?

Context API and Redux are both used for global state management in React, but they have different use cases.

**ContextAPI:**

- Better suited for simpler applications with less complex state management needs.
- Can lead to unnecessary re-renders in larger applications, as all components subscribed to a context re-render when its value changes.
- Limited built-in debugging tools.
- No built-in support for middleware or side-effect management.
- Can lead to scattered state management across multiple contexts.
- May become harder to manage as the application grows.

**Redux:**

- More appropriate for larger, more complex applications with extensive state management requirements.
- Offers better performance optimization for larger applications through its use of selectors and memoization.
- Excellent developer tools, including time-travel debugging and state inspection.
- Rich ecosystem of middleware (e.g., redux-thunk, redux-saga) for handling asynchronous operations and side-effects.
- Promotes a more structured approach to state management with a single store.
- Scales well with larger applications and teams.

Generally, we choose ContextAPI for smaller applications, simpler state management needs, and want to avoid additional dependencies. We choose Redux if you have a larger, more complex application, need robust debugging tools, or require advanced features like middleware and time-travel debugging.

## What is redux thunk and why do you want to use it?

Redux Thunk is a middleware for Redux that allows you to write action creators that return a function instead of an action object. This is particularly useful for handling asynchronous operations, such as API calls, within your Redux actions.

## Why Use Redux Thunk?:

Async Logic: In a typical Redux flow, action creators can only return plain objects. Redux Thunk allows action creators to return a function that can perform side effects, such as fetching data, and then dispatch actions based on the result.
Conditional Dispatch: You can dispatch actions conditionally, which allows you to write more complex logic in your action creators.
