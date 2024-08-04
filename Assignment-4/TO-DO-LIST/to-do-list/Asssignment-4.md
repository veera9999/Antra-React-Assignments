![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)

# Assignment - 3

===========================================================================

<!-- What are some differences between class and functional components?
Explain what lifecycle is in a simple way. How do you manage it in class and functional components?
Explain immutability in one sentence. -->

## What are some differences between class and functional components?

🎯Class Components are defined using ES6 class syntax and requires the render() method to return JSX. Functional components are defines using plain Javascript functions and they return jsx directly from the function body.

🎯 Class Components use this.state to define state and this.setState() to update it for state Management. Functional components use useState hook for the state management.

🎯 Class Components use and have access to lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount. Functional components use useEffect hook to handle side effects.

🎯 Class Components Can become complex in terms of structure and readability due to state and lifecycle methods. Functional Components are typically simpler and more readable, especially for components that don't need state or complex lifecycle logic.

🎯 Class Components may have slight performance overhead due to this binding and the complexity of lifecycle methods. Functional Components are generally more performant due to the absence of this binding and simpler structure.

🎯 Class Components do not support hooks; rely on traditional state and lifecycle methods. Functional Components can leverage hooks (useState, useEffect, useContext, etc.) for powerful and flexible component logic.

## Explain what lifecycle is in a simple way. How do you manage it in class and functional components?

## Life Cycle:

In React, the lifecycle of a component refers to the series of events from the moment the component is created and added to the DOM (Document Object Model), updated and to the moment it is removed.

🎯 Class components use specific methods to handle different lifecycle stages:

**Mounting:**

- constructor(): Initialize state.
- render(): Return JSX.
- componentDidMount(): Run after component is mounted, good for initial data fetching.

**Updating:**

- render(): Re-render with new state/props.
- componentDidUpdate(): Run after component updates.

**Unmounting:**

- componentWillUnmount(): Clean up (e.g., remove event listeners) before component is removed.

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return <div>Hello World</div>;
  }
}
```

🎯 Functional components use the useEffect hook to handle lifecycle-related logic:

- The useEffect hook combines componentDidMount, componentDidUpdate, and componentWillUnmount into a single API.
- You can have multiple useEffect hooks in a single component to separate concerns.
- In the functional component example, the useEffect hook allows you to perform side effects (like data fetching, subscriptions, or DOM manipulation) after the component renders.
- The cleanup function (returned by useEffect) runs before the component unmounts or before the effect runs again.

```jsx
import React, { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    console.log("Component mounted or updated");

    // This return function is equivalent to componentWillUnmount
    return () => {
      console.log("Component will unmount");
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return <div>Hello World</div>;
}
```

## Explain immutability in one sentence.

🎯 Immutability is the concept of not changing the original data, but instead creating a new copy with the desired modifications.
