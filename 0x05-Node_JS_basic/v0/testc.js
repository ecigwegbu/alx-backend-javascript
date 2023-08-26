const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: process.stdin.isTTY // This checks if input is coming from a terminal
});

rl.question('Welcome to Holberton School, what is your name?\n', (input) => {
    if (process.stdin.isTTY) { // Check if input is from a terminal (keyboard)
        console.log(`Your name is: ${input}`);
    }

    rl.on('close', () => {
        if (process.stdin.isTTY) { // Only display the message if the input is from a terminal
            console.log('This important software is now closing\n');
        }
    });

    rl.close();
});

