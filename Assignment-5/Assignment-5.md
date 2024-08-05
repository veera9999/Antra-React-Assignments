<!-- How do you decide when to split a component into subcomponents?
What is the difference between state and props?
How to trigger rerender in a component?
Why do you like react over other front-end libraries and frameworks?
What’s the difference between controlled components and uncontrolled components?
How to prevent components from unnecessary rerendering?
Why are props needed to be immutable?
Explain the Virtual DOM and how React uses it to improve performance.
Can you explain the useMemo and useCallback hooks and provide examples of when you might use them?
Explain the concept of Higher-Order Components (HOCs) and provide an example use case.
Discuss the differences between React's class components and functional components. Which one do you prefer and why?
How do you ensure your code is maintainable and scalable? -->

![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)

# Assignment - 5

===========================================================================

# The Webpage Output:

![image](https://github.com/user-attachments/assets/5d90ee9b-941e-45eb-838a-572e335c2838)

# Interview Questions:

## How do you decide when to split a component into subcomponents?

```
It is general practice to split a component into subcomponents when it becomes too large, complex, or contains logically distinct parts that can be reused or tested independently. This makes the code readable, well structured and easy to debug.
```

## What is the difference between state and props?

```
State is a built-in React object that stores property values that belong to a component. State is used to keep track of changes within a component and managed within the component and can change over time.
Props are read-only attributes and immutable within the component that are passed from a parent component to a child component. Props allow parent components to pass data and event handlers down to child components.
```

## How to trigger rerender in a component?

```
 Updating the state using setState (in class components) or useState (in functional components) triggers a re-render.
```

## Why do you like react over other front-end libraries and frameworks?

```
I prefer React over other front-end libraries and frameworks because:

🎯 Component-Based Architecture: Encourages reusable and modular code.
🎯 Virtual DOM: Efficient rendering and updating of the UI.
🎯 Hooks: Simplify state management and side effects in functional components.
🎯 Strong Community and Ecosystem: Plenty of libraries, tools, and resources available.
🎯 Flexibility: Can be used in various environments (web, mobile with React Native).
```

## What’s the difference between controlled components and uncontrolled components?

```
Controlled and uncontrolled components are two approaches to handling form inputs in React:

Controlled Components:
* The component's state controls the form input value.
* React manages the input's state.
* Requires an onChange handler to update the state.
* Offers more control and easier implementation of dynamic inputs or validation.

Uncontrolled Components:
* The DOM handles form data.
* Uses refs to access input values.
* Simpler to implement for basic inputs.
* Useful when integrating with non-React code.
```

## How to prevent components from unnecessary rerendering?

```
We can use PureComponent or React.memo to avoid unnecessary rerendering. They perform shallow comparison of props and state.
```

## Why are props needed to be immutable?

```
Immutability of props is important because it ensures that child components cannot alter the data they receive, making the application more predictable. It also allows React to optimize re-renders by making shallow comparisons.
```

## Explain the Virtual DOM and how React uses it to improve performance.

```
Virtual DOM is a lightweight copy of the real DOM that React keeps in memory. When the state of a component changes, React updates the Virtual DOM first.
React then compares the Virtual DOM with the real DOM (diffing) and applies only the necessary changes to the real DOM (reconciliation), making updates more efficient.
```

## Can you explain the useMemo and useCallback hooks and provide examples of when you might use them?

```

```
