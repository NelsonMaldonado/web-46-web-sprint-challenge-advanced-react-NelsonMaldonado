# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

2. When does a componentWillMount function be called? What about a componentWillUpdate?
   componentWillMount are called in the mouning phase and componentWillUpdate are called in the updating phase.

3. Define stateful logic.

Stateful logic is logic that is built into a component. It can be a function that handles a click event or maybe a function that sets toggle state... Usually this kind of logic deals with state in the component.

4. What are the three step of creating a successful test? What is done in each phase?

The three steps of creating a successful test are:

1 Arrange - This is where we setup the react component that we're testing.

2 Act - In this step we execute our behaviour (if there is one)

3 Assert - Here we extract the response element and check (if neccessary) that is what we expect it to be.
