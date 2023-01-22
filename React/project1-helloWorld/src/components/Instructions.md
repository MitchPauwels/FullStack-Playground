ToDO APP

    Step 1:
    The component begins by importing React and the useState hook.
    Step 2:
    Then we create state variables for items, inputValue, and completedItems, using the useState hook.
    Step 3:
    submitHandler function is for handling the form submission, it prevents the default behavior, add the value of the input to the items state variable, and reset the input value.
    Step 4: 
    onChangeHandler function is for keeping track of what is inside of input
    Step 5:
    deleteItem function is for deleting an item from the list, it accepts an index and uses the splice method to remove an element from the array and updates the state.
    Step 6:
    markComplete function is for marking an item as complete, it accepts an index and toggle the item's index in the completedItems array and updates the state.
    Step 7
    The JSX, it renders a form with an input, a button, and an unordered list. The input's value is controlled by the inputValue state variable, the list items are mapped from the items state variable, and each item has a checkbox that triggers the markComplete function and a delete button that triggers the `delete  Item` function. Each item has a class name that is conditionally added based on whether or not the item's index is in the `completedItems` state variable.

    That's it! This code should give you a basic Todo app that allows you to add, delete, and mark items as complete. You can further improve this app by adding features such as the ability to edit items, sort items, or persist data to local storage.