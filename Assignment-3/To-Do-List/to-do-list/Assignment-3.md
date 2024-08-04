![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)

# Assignment - 3

===========================================================================

<!-- What is useEffect? What are the different behaviors of useEffect? What is a dependency array?
What is useRef and when do you want to use it?
How to reuse hook logic in React? -->

## What is useEffect? What are the different behaviors of useEffect? What is a dependency array?

## UseEffect:

🎯 **useEffect** is a Hook that lets you perform side effects in function components.

🎯 Side effects are operations that can affect other parts of the application or outside world and include data fetching, manual DOM manipulation, setting up subscriptions, timers, and more.

🎯 You can pass an array of dependencies as the second argument to useEffect. The effect will only re-run if any of the dependencies have changed.

🎯 The useEffect hook takes two arguments: a function containing the side effect logic and an optional dependency array.

🎯 If the effect returns a function, React will call the cleanup function when the component unmounts or before running the effect again for the next time.

```jsx
import React, { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // Side effect logic here
    console.log("Component mounted or updated");
  });

  return <div>My Component</div>;
}
```

## Different Behaviors of useEffect:

Without Dependency Array: The effect runs after every render.

```jsx
useEffect(() => {
  console.log("Effect runs after every render");
});
```

With Empty Dependency Array: The effect runs only once, after the initial render (similar to componentDidMount).

```jsx
useEffect(() => {
  console.log("Effect runs only once");
}, []);
```

With Dependencies: The effect runs only when one of the dependencies has changed since the last render.

```jsx
useEffect(() => {
  console.log("Effect runs when count changes");
}, [count]);
```

## Cleanup Function:

useEffect can return a cleanup function. This function is run when the component unmounts or before the effect re-runs due to a change in dependencies. This is useful for cleaning up resources such as subscriptions or timers.

```jsx
useEffect(() => {
  console.log("Effect with cleanup");

  return () => {
    console.log("Cleanup");
  };
}, [count]);
```

## Dependency Array:

🎯 The dependency array is an array of values that the effect depends on. The effect will only re-run if one of these values changes between renders. React performs a shallow comparison of the dependency array elements to determine if they have changed.

🎯 It helps optimize performance by preventing unnecessary effect executions and ensures that your effect remains synchronized with the state it depends on.

```jsx
function MyComponent({ prop }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect runs when count or prop changes");

    return () => {
      console.log("Cleanup when count or prop changes or component unmounts");
    };
  }, [count, prop]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## What is useRef and when do you want to use it?

🎯 The **useRef** hook is used to create a mutable object that persists across re-renders. It is commonly used for accessing and manipulating DOM elements directly, as well as storing mutable values that do not trigger a re-render when they change.

🎯 The most common use case for useRef is to access a DOM element directly. This is useful when you need to interact with the DOM in ways that React does not directly support, such as focusing an input element or playing a video.

Key characteristics of useRef:

- It persists between renders.
- Changing its value doesn't trigger a re-render.
- It's mutable, unlike state which should be treated as immutable.

**You might want to use useRef in the following scenarios:**

🎯 Accessing DOM elements directly.

🎯 Storing mutable values that don't require re-renders.

🎯 Keeping track of previous state or prop values.

🎯 Storing interval or timeout IDs for cleanup.

🎯 Implementing forwardRef for passing refs to child components.

🎯 Caching expensive computations that don't need to be recalculated on every render.

```jsx
import React, { useRef, useEffect } from "react";

function MyComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
```

```jsx
function Timer() {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      console.log("Timer tick");
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  return <div>Check the console for timer ticks</div>;
}
```

```jsx
function Component() {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Render count:", renderCount.current);
  });

  return <div>Check the console for render count</div>;
}
```

## How to reuse hook logic in React?

In React, you can reuse hook logic by creating custom hooks. Custom hooks are JavaScript functions that utilize React hooks (like useState, useEffect, useRef, etc.) and can encapsulate reusable logic for different components. Custom hooks follow the same naming convention as built-in hooks, usually starting with "use".

```jsx
function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => prev - 1);

  return { value, increment, decrement };
}

// Usage in a component
function Counter() {
  const { value, increment, decrement } = useCustomHook(0);
  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

## Benefits of Custom Hooks

- **Reusability:** Encapsulate logic in a single place and reuse it across different components.
- **Clean Code:** Keeps your components clean and focused on their main purpose.
- **Testability:** Easier to test the logic separately from the component rendering.
