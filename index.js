#! /usr/bin/env node
// This is a Student Management System made by Muhammad Hassan Jawaid
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 9000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name: ",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "Courses",
        type: "list",
        message: "select the course to enrolled",
        choices: ["HTML", "JavaScript", "TypeScript", "Python"],
    }
]);
const tutionFee = {
    'HTML': 2000,
    'JavaScript': 5000,
    'TypeScript': 6000,
    'Python': 10000,
};
console.log(`\nTutio Fees: ${tutionFee[answer.Courses]}`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Easypaise", "JazzCash"],
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}\n`);
const tutionFees = tutionFee[answer.Courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congrats! you have successfully enrolled in ${answer.Courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n**********Status**********\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.Courses}`);
        console.log(`Tution Fees PAid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System\n");
    }
}
else {
    console.log(`Invalid amount due to course.`);
}
