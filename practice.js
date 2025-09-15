
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