**About React Hooks and Context API**:

Before we dive deep in the details let's review some core concepts of the React ecosystem to better understand the "WHY" React Hooks and Context API have been introduced by the Facebook Team.

**Stateful and Stateless Components:**

1.  Stateful Components:
    Stateful Components are components that allow us to use a class in our React application but mostly to use state and lifecycle components.
2.  Stateless Components:
    Stateless Components or functional components allow us to just use pure functions in our react apps.
    Note: Before the introduction of React Hooks which we will talk about later, we could not use state and lifecycle components in stateless or functional components.

**What's State in react?:**
State is an object that determines how React components render and behave. It allows us to create components that are dynamic and interactive.

- Initialization of state in a react app:

`this.state = {[name: ""]}`

**How to dynamically change State in react?:**
We do that by using `setState`.

`this.setState: ({name: "Todd"})`

**Lifecycles Components**
Lifecycles methods can be defined as the series of methods that are invoked in different stages of a component’s existence. Some examples of those methods are:

- componentDidMount, render when the component is mounting...
- componentWillReceiveProps, componentDidUpdate when the component is updating...
- componentWillUnmount when the component is unmounting...

----- Let's take a look at a simple react app using state and a lifecycle component ----

**What are React Hooks and Context API?**
With the core concepts of React review out of the way let's now learn about React Hooks and Context API.

1.  React Hooks
    React hooks allow us to just use functional components to buils React Apps without using stateful components.(Without writing a class).

- Before Hooks:
  Before the introduction of hooks, we could not use "State" and "Lifecycles Components" in functional components.
- With Hooks:
  We can now use "State and "Lifecycle Components" using React Hooks

The two majors hooks features widely used are "useState" and "useEffect".

**How do we use "useState" and "useEffect Hooks"**

**useState:**
The `UseState`Hook allow us to use state in functional components.

- How to use useState in a functional component:
  1. First We just import them from React as shown below.
     `import {useState} from React`
  2. Then we initialize it as show below:
     `const [name, setName] = useState(" ")`
  3. How to dynamically change State in react using `useState`?
     `setName(Todd)`

**useEffect:**
According to the definition of the official documentation of React, The `UseEffect` Hook adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

- Before the `useEffect` Hook, in order to fetch data from an external API for example we would do something like this:

```
  componentDidMount(){
    fetch('url')
    .then( Do Something...)
}
```

Note: We could only use ``componentDidMount` in a stateful component.

- With the introduction of the `useEffect` we would do something like this to fetch the data.

```
useEffect(() => {
  fetch('url')
    .then( Do Something...)
})
```

Sometimes React may an infinite loop issue with this implementation. To solve the issue, we can just add an empty array to the useEffect as shown below.

```
useEffect(() => {
  fetch('url')
    .then( Do Something...)
}, [])
```