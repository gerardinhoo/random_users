**About React Hooks and Context API**:

Before we dive deep in the details let's review some core concepts of the React ecosystem to better understand the "WHY" React Hooks and Context API have been introduced by the Facebook Team.

**_Stateful and Stateless Components:_**

1.  Stateful Components:
    Stateful Components are components that allow us to use a class in our React application but mostly to use state and lifecycle components.
2.  Stateless Components:
    Stateless Components or functional components allow us to just use pure functions in our react apps.
    Note: Before the introduction of React Hooks which we will talk about later, we could not use state and lifecycle components in stateless or functional components.

**_What's State in react?:_**
State is an object that determines how React components render and behave. It allows us to create components that are dynamic and interactive.

**_Lifecycles Components_**
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

**_How do we use "useState" and "useEffect"_**

{import useState, useEffect} from React.
