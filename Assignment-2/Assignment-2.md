![Antra-logo](https://github.com/user-attachments/assets/9db2d170-9512-4225-b245-e2a71c13f171)

# Assignment - 2

===========================================================================

## What is useState?

# **_useState_**

🎯 useState is one of the most fundamental and commonly used Hooks in React. It allows functional components to manage state.

🎯 Prior to the introduction of hooks, state management was only possible in class components.

🎯 useState lets you add state to functional components. It returns an array with two elements: the current state value and a function to update it.

```jsx
const [state, setState] = useState(initialValue);
```

🎯 The initialValue is the value you want the state to start with. state is the current state value. setState is a function to update the state.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}
```

## What is props drilling and state lifting?

**_Props Drilling_**
🎯 Props drilling occurs when you need to pass data through multiple levels of components that don't need the data themselves, but their children or grandchildren do.

🎯 It refers to the process of passing data from one component to another through a series of intermediate components.

```jsx
function GrandParent({ user }) {
  return (
    <div>
      <Parent user={user} />
    </div>
  );
}

function Parent({ user }) {
  return (
    <div>
      <Child user={user} />
    </div>
  );
}

function Child({ user }) {
  return <div>{user.name}</div>;
}

function App() {
  const user = { name: "John Doe" };
  return <GrandParent user={user} />;
}
```

**_State Lifting_**
🎯 State lifting involves moving the state to a common ancestor of components that need to share the state, then passing it down as props.

🎯 It is done to avoid passing the state through intermediate components (props drilling) and to manage the state in a single place.

```jsx
import React, { useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </div>
  );
}

function ChildA({ count }) {
  return <div>Count: {count}</div>;
}

function ChildB({ setCount }) {
  return (
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      Increment
    </button>
  );
}
```

## What is the ‘key’ attribute?

🎯 The key attribute in React is a special prop used when rendering lists of elements.

🎯 It helps React identify which items in a list have changed, been added, or been removed.

🎯By using keys, React can re-order, update, or remove elements more efficiently without re-rendering the entire list.

🎯 The key should be unique among its siblings. It doesn’t have to be globally unique, only within the context of the list.

🎯 The key should be consistent and stable across re-renders to ensure correct behavior. Avoid using indexes as keys if the order of items can change because it can lead to incorrect updates.

🎯 Without keys, React may produce unexpected results, like:

- Incorrect item reordering
- Inefficient updates
- Loss of component state between re-renders

## What is synthetic event?

🎯 Synthetic events in React are a cross-browser wrapper around the browser's native event system.

🎯 They are React's way of normalizing events so that they have consistent properties across different browsers.

🎯 Synthetic events normalize the differences in event handling across different browsers, making your event handling code more predictable and easier to maintain.

🎯 React implements a synthetic event system to provide a more efficient and controlled event handling mechanism.

🎯 React supports all standard DOM events, such as: - onClick - onChange - onSubmit - onMouseEnter - onMouseLeave - onKeyDown - onKeyUp

```jsx
import React, { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  const handleClick = (event) => {
    // Access properties from the synthetic event
    console.log("Event type:", event.type); // 'click'
    console.log("Button clicked:", event.target); // <button> element

    setMessage("Button was clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p>{message}</p>
    </div>
  );
};

export default App;
```

## Synthetic Event Properties:

🎯Synthetic events contain the same properties and methods as native events, such as:

- event.target
- event.currentTarget
- event.preventDefault()
- event.stopPropagation()

## Synthetic Event Pooling:

    Event pooling in React refers to the practice of reusing event objects to optimize performance and reduce memory overhead. React uses a pool of synthetic event objects, which are recycled and reused across different events. When an event is triggered, React retrieves an event object from the pool, populates it with the event data, and passes it to the event handler. After the event handler finishes executing, the event object is returned to the pool and its properties are reset.

    Event pooling is primarily used to improve performance by reducing the number of objects created and garbage collected. In a high-performance application, especially one that handles a large number of events, creating a new event object for every event can be inefficient and can put pressure on the garbage collector. Event pooling helps mitigate this issue by reusing event objects.

```jsx
import React, { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  const handleClick = (event) => {
    console.log("Event type:", event.type); // 'click'
    console.log("Button clicked:", event.target); // <button> element

    setMessage("Button was clicked!");

    // Trying to access the event object asynchronously without persist()
    setTimeout(() => {
      console.log("Event type after timeout:", event.type); // undefined or null
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p>{message}</p>
    </div>
  );
};

export default App;
```

when you wantg to access the event in an asynchronous operation, it might lead to unespected results as the event is returned to the pool and it's properties will be reset. In order to prevent this from happening in asynchronous operations, you need to use **event.persist()**.
This method removes the event from the pool, allowing you to retain its properties beyond the lifecycle of the event handler.

```jsx
const handleClick = (event) => {
  event.persist();
  console.log("Event type:", event.type); // 'click'

  setMessage("Button was clicked!");

  setTimeout(() => {
    console.log("Event type after timeout:", event.type); // 'click'
  }, 1000);
};
```

## What is virtual dom?

🎯 Virtual DOM is a core concept in React that helps optimize UI updates and provides a more efficient and developer-friendly way to build dynamic web applications.

🎯 The Virtual DOM is a lightweight, in-memory representation of the actual DOM. It's a JavaScript object that mimics the structure of the real DOM.

🎯 It minimize direct manipulations of the actual DOM, which are costly in terms of performance.

🎯 When the state or props of a React component change, React updates the Virtual DOM first. It then compares the new Virtual DOM with the previous one to identify what has changed. This process is known as **reconciliation**.

🎯 React uses a **diffing algorithm** to compare the old and new Virtual DOMs. It identifies the differences and calculates the most efficient way to update the actual DOM to reflect these changes.

🎯 Instead of updating the DOM with every single change, React batches updates together. After calculating all the changes, it applies them in a single batch, minimizing the number of interactions with the actual DOM.

🎯 React uses heuristics to determine which elements have changed. Direct manipulation of the DOM is costly in terms of performance. By using the Virtual DOM, React reduces the number of direct DOM manipulations, which can significantly improve performance, especially in applications with complex UIs.
