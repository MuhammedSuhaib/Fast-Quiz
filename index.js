#!/usr/bin/env node
import inquirer from "inquirer";
import showBanner from "node-banner";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let starts = true;
let score = 0;
await showBanner("Fast Quiz", "", "blue");
let question1 = await inquirer.prompt({
    name: "Q1",
    message: "What is TypeScript?",
    type: "list",
    choices: [
        "A superset of JavaScript",
        "A new programming language",
        "A JavaScript framework",
    ],
});
if (question1.Q1 === "A superset of JavaScript") {
    score++;
    console.log(chalk.whiteBright.bgGreen("Correct!"));
    console.log(chalk.greenBright(`You got 1 point 🎉`));
}
else {
    console.log(chalk.bgRedBright(`Wrong Answer ❌😥`));
}
let question2 = await inquirer.prompt({
    name: "Q2",
    message: "Which command is used to compile TypeScript files?",
    type: "list",
    choices: ["tsc", "cd", "mkdir"],
});
if (question2.Q2 === "tsc") {
    score++;
    console.log(chalk.whiteBright.bgGreen("Correct!"));
    console.log(chalk.greenBright(`You got 1 point 🎉`));
}
else {
    console.log(chalk.bgRedBright(`Wrong Answer ❌😥`));
}
let question3 = await inquirer.prompt({
    name: "Q3",
    message: "Which command is used to create a new directory?",
    type: "list",
    choices: ["tsc", "cd", "mkdir"],
});
if (question3.Q3 === "mkdir") {
    score++;
    console.log(chalk.whiteBright.bgGreen("Correct!"));
    console.log(chalk.greenBright(`You got 1 point 🎉`));
}
else {
    console.log(chalk.bgRedBright(`Wrong Answer ❌😥`));
}
let question4 = await inquirer.prompt({
    name: "Q4",
    message: "Which file extension is used for TypeScript files?",
    type: "list",
    choices: [".java", ".py", ".ts"],
});
if (question4.Q4 === ".ts") {
    score++;
    console.log(chalk.whiteBright.bgGreen("Correct!"));
    console.log(chalk.greenBright(`You got 1 point 🎉`));
}
else {
    console.log(chalk.bgRedBright(`Wrong Answer ❌😥`));
}
let question5 = await inquirer.prompt({
    name: "Q5",
    message: "Which command is used to change directory?",
    type: "list",
    choices: ["tsc", "cd", "mkdir"],
});
if (question5.Q5 === "cd") {
    score++;
    console.log(chalk.whiteBright.bgGreen("Correct!"));
    console.log(chalk.greenBright(`You got 1 point 🎉`));
}
else {
    console.log(chalk.bgRedBright(`Wrong Answer ❌😥`));
}
const rainbow = chalkAnimation.rainbow(`\n >Your final score is: ` + ` 05/` + 0 + score);
setTimeout(() => {
    rainbow.stop();
}, 4000);
