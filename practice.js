
/**
 
Get user's name
    Prompt user for their name and assign it to a variable

    Display a messaage "Welcome to Habit App ${user}. Let's get started!"

    Prompt user to add a task they would like to complete
        push tasks into an array

   Convert to Number( Prompt user to add number of times the task should be repeated.)

   Present user with option to print task to do for the week or just a specific day.
        if (week) {
        loop through weekTasksArray
        } else if (specificDay) {
            access array at point of week and loop through day 
        }

   Loop through array were tasks are stored. Either print each day of the week array or print the tasks from the array of a specific day. 

   User can ask to print habit statistics. Which can be found in user object.
    userObject { name, percentage of tasks completed, percentage of incomple tasks, likelyhoodToPushBackTasks, numberOfReoccuringTasks }

 */


/*User Input*/

const input = require("readline-sync");

console.log("You've opened the Habit App!");

let appUser = input.question("To get started, please let us know your name: ");

console.log(`Welcome to Habit App ${appUser}. Let's get started!`);

console.log(`****************************************************`);

// let userTasks = ["Do Laundry", "Wash Dishes", "Call Doctor", "Cook Dinner"];
let userTasks = [];
// console.log(userTasks);
// console.log(userTasks.length);

if (userTasks[0] === undefined) {
    console.log("You currently don't have any tasks to complete.");

    let addTask = input.question("Please enter a task to add: ");

    userTasks.push(addTask);
} else {
    console.log("Here are all your current tasks:");
    for (i = 0; i < userTasks.length; i++) {
        console.log(`${userTasks[i]}`);
    }
}
console.log(`Updated tasks list: ${userTasks}`);

console.log(`****************************************************`);

let completeTasks = input.question("Would you like to mark a task complete?(Y/N): ").toLowerCase();

if (completeTasks === "y") {
    let removeTask = input.question("Great! What task can we take off your list?: ");

    userTasks.splice(userTasks.indexOf(removeTask), 1);

    console.log(`Here is your updated list: ${userTasks}`);

} else if (completeTasks === "n") {
    console.log(`That's totally cool! Here's all that you've got going on!`);
    for (i = 0; i < userTasks.length; i++) {
        console.log(`${userTasks[i]}`);
    }
}

/*Sample Data Storage*/

let exampleClass = {
    user: "Dani",
    userTasks: ["Do Laundry", "Wash Dishes", "Call Doctor", "Cook Dinner"],
    numCompletedTasks: 25,
    likelyhoodToPushBackTasks: 64,
    numUncompleteTasks: 20
}

console.log(exampleClass);