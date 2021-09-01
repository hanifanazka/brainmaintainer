#!/usr/bin/env node

const readline = require("readline");
const chalk = require("chalk");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

createPair = () => {
    const A = Math.floor(Math.random() * 10 + 1);
    const B = Math.floor(Math.random() * 10 + 1);
    return {
        question: `${A} x ${B} = `,
        answer: A * B,
    };
};

function ask() {
    const pair = createPair();
    const askTime = new Date().getTime();
    rl.question(pair.question, function (name) {
        const userAnswerTime = new Date().getTime();
        const duration = userAnswerTime - askTime;
        pair.answer == name
            ? console.log(chalk.green(`Correct! [${duration}ms]`))
            : console.log(chalk.red(`Wrong! [${duration}ms]`));
        ask();
    });
}

ask();
