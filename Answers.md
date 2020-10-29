1. What problem does the context API help solve?

Context API allows developers to avoid 'prop drilling' by making state available as context for the components down the component tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store in Redux is a repository of state. It is known as the single source of truth because the entire application state is held and managed in one place.

Actions are blocks of code that describe an event, and contain some piece of data as payload if needed. 

Reducers are functions that receive current state and action object as props, and determine how to update state based on what just happened in the application (using action.type).

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is state local to a component, such as the value of an input field inside a form. You can have many forms throughout the application that have the same input field (name, for example) but they would all have different values. It doesn't make sense to manage this state on application level. Application state is state that needs to be accessed by multiple components, for example username that's displayed in the navigation, header, comments, etc. Any data that will need to be accessed by more than one component is Application state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that allows us to perform asynchronous operations inside action-creators that are synchronous by default.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is Redux, because it allows me to have one source of truth for my application state. Context API is alright too, but I'm not a huge fan of setting up multiple contexts, and then when you start wrapping them around components and some contexts have to wrap around each other as well it starts to look cluttered. Redux may have many moving pieces involved in its setup, but then I can just connect individual components to the store--and that looks way more organized.
