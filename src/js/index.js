import "./../scss/style.scss";

// if (process.env.NODE_ENV !== 'production') {
//     console.log('Looks like we are in development mode!');
// }

console.log("Connected and watching");

// Project layout:
// Goal is to create a todo list app that allows users to add, edit, and delete tasks.
// The app will allow users to sort by priority, due date, and completion status.
//
// Structure of the .js will be like so:
// 1. Create a class for the todo elements (TodoItem) that creates new todo objects. This will be a class that creates objects
// and allows users to edit all of their indvidiual properties.
    // a. Create a constructor that takes in the task name, due date, priority, completion status, project (default = Inbox)
    // b. Create methods that allows users to edit the task name, due date, priority, completion status, and project
    
// 2. Create a class (TodoList) that begins with an empty list, and then has methods that allow users to add and remove todo objects, ultimately storing all of the objects in one place so that they can be sorted.
    // a. Create a constructor that creates an empty list for todo objects
    // b. Create a function to add a todo object to the list of todo objects
    // c. Create a function to remove a todo object from the list of todo objects
    // d. Create a function to retrieve and display the list of todo objects
    
// 3. Create a class or function that creates default sorting methods. This will retrieve the total list from TodoList, and populate a list of lists that contain TodoItems sorted by specific parameters. "This week" which will select only the tasks in the inbox (the total list of tasks) that are due this week.  "This month" will be another sorting method that will return a list of todo objects that are due this month. "Overdue" will return a list of todo objects that are past their due date. "Today" will return a list of todo objects that are due today.
    // a. Create a function that takes in a list of todo objects and returns a list of todo objects that meet the criteria
        // This will need to be modified/done for all default sorting methods. 
        // These will be shown in the ui as a sidebar, underneath their own default section.
    // b. Create a function that will take in a project name and return only the todo objects that are in that project
        // The project names will be shown in the ui as a sidebar, underneath their own section titled "Projects".
    // c. Create a function to filter by priority

// 4. index.js will be largely responsible for the DOM manipulation and event listeners. It will also create a default
// list of information to use on window.onLoad so that the user has something to look at when they first open the app.
// This is for controlling the logic and interactionb etween the other classes and methods so that they work nicely together.