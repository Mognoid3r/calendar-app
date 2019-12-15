//package allowing user interaction in the terminal
const inquirer = require("inquirer");



//consturctor for events
// const eventData = (id, name, startTime, endTime, description) => [{
//     this.id = id;
//     this.name = name;
//     this.startTime = startTime;
//     this.endTime = endTime;
//     this.description = description;

// }]

//arrays
const availableTimes = [];
const upComingEvents = [];


var monday = [];
var tuesday = [];
var wednesday = [];
var thursday = [];
var friday = [];
var saturday = [];
var sunday = [];


//function to prompt user t
const userPrompt = () => {

    // Created a series of questions
    inquirer.prompt([
        //greet and determine what user intents to do
        {
            type: "input",
            name: "name",
            message: "Hello, Please tell me your name?"
        },

        {
            type: "list",
            name: "makeSelection",
            message: "What would you like to do?",
            choices: ["Create an event", "Remove an event", "Review upcoming events"]
        }
    ]).then(user => {
        // explore user choices
        // if (user.makeSelection) {
        if (user.makeSelection === "Create an event") {
            //user would like to create an event
            inquirer.prompt([
                //determine which day, morning or afternoon, and time
                {
                    type: "input",
                    name: "description",
                    message: "Please provide a short description of this event."
                },
                {
                    type: "list",
                    name: "day",
                    message: "When would you like to schedule your event?",
                    choices: ["Monday", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
                },

                {
                    type: "list",
                    name: "eventTimeStart",
                    message: "Would you like to schedule morning or afernoon?",
                    choices: ["Morning", "Afternoon"]
                },
                {
                    type: "input",
                    name: "eventStart",
                    message: "What time will the event begin?"
                },
                {
                    type: "list",
                    name: "eventTimeEnd",
                    message: "Will this event end in the morning or afernoon?",
                    choices: ["Morning", "Afternoon"]
                },
                {
                    type: "input",
                    name: "eventEnd",
                    message: "What time will the event end?"
                },
                //determine what time works best if morning is chosen

            ]).then(answers => {
                console.log("You've scheduled an event on " + answers.day + " starting at " + answers.eventStart + " in the " + answers.eventTimeStart + " and ending at " + answers.eventEnd + " in the " + answers.eventTimeEnd +"!" + "  Event Description: " + answers.description )

            })


        } else if (user.makeSelection === "Remove an event") {

            // user would like to remove an event
            inquirer.prompt([

                {
                    type: "list",
                    name: "day",
                    message: "When would you like to schedule?",
                    choices: ["Monday", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]
                },
            ]);
            console.log("Which event would you like to remove?");
        }
        else if (user.makeSelection === "Review upcoming events") {
            console.log("review all upcoming events here: ");
        }
        //  } 
        else {
            console.log("See you next time.")
        }
    });
};

userPrompt();