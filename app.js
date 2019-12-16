//package allowing user interaction in the terminal
const inquirer = require("inquirer");

let upComingEvents = [
    {
        value: 1,
        name: 'Test Event',
        eventTimeStart: "Afternoon",
        eventStart: '12',
        eventTimeEnd: "Afternoon",
        eventEnd: '4',
        weekday: 'Monday'
    },
    {
        value: 2,
        name: 'Second event',
        eventTimeStart: "Afternoon",
        eventStart: '1',
        eventTimeEnd: "Afternoon",
        eventEnd: '2',
        weekday: 'Tuesday'
    },
];



//############################################create event option############################################################

//create event option:
const createEventOption = () => {
    //user would like to create an event
    inquirer.prompt([
        //determine which day, morning or afternoon, and time
        {
            type: "input",
            name: "name",
            message: "Please provide a name or short description of this event"
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
            type: "list",
            name: "eventStart",
            message: "What time will the event start?",
            choices: ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
        },
        {
            type: "list",
            name: "eventTimeEnd",
            message: "Will this event end in the morning or afernoon?",
            choices: ["Morning", "Afternoon"]
        },
        {
            type: "list",
            name: "eventEnd",
            message: "What time will the event end?",
            choices: ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
        },
        //determine what time works best if morning is chosen

    ]).then(answers => {

        let newEvent = {
            value: upComingEvents[upComingEvents.length - 1].value + 1,
            eventStart: answers.eventStart,
            eventTimeStart: answers.eventTimeStart,
            eventEnd: answers.eventEnd,
            eventTimeEnd: answers.eventTimeEnd,
            name: answers.name,
            weekday: answers.day
        }

        upComingEvents.push(newEvent)


        console.log(
            "You've scheduled an event on " +
            answers.day + " starting at " +
            answers.eventStart + " in the " +
            answers.eventTimeStart + " and ending at " +
            answers.eventEnd + " in the " +
            answers.eventTimeEnd + "!" + "  Event Description: " +
            answers.description
        )
        userPrompt();
    })
    

}

//############################################End of create event option############################################################






//function to prompt user t
const userPrompt = () => {


    // // Created a series of questions
    inquirer.prompt([
        {
            type: "list",
            name: "makeSelection",
            message: "What would you like to do?",
            choices: ["Create an event", "Remove an event", "Review upcoming events"]
        }
    ]).then(user => {
        if (user.makeSelection === "Create an event") {

            createEventOption();


        } else if (user.makeSelection === "Remove an event") {

            inquirer.prompt([

                {
                    type: "list",
                    name: "day",
                    message: "Which event would you like to remove?",
                    choices: upComingEvents
                },
            ]).then(answer => {

                let removeEvent = upComingEvents.findIndex(i => i.value === answer.day)

                upComingEvents.splice(removeEvent, 1)
                console.log(upComingEvents)
                userPrompt();
            })

        }
        else if (user.makeSelection === "Review upcoming events") {
            inquirer.prompt([

                {
                    type: "list",
                    name: "day",
                    message: "Which event would you like to view?",
                    choices: upComingEvents
                },
            ]).then(answer => {


                let specificEvent = upComingEvents.findIndex(i => i.value === answer.day)
                console.log(upComingEvents[specificEvent])
                userPrompt();

            })

        }
        //  } 
        else {
            console.log("See you next time.")
        }
    });
};

userPrompt();