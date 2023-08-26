const readline = require('readline');
const stream = require('stream');

// Create a no-op stream for cases where we don't want to echo the input.
const noopStream = new stream.Writable({
  write(chunk, encoding, callback) {
    callback();
  }
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.isTTY ? process.stdout : noopStream,
    terminal: process.stdin.isTTY
});

rl.question('Welcome to Holberton School, what is your name?\n', (input) => {
    console.log('Welcome to Holberton School, what is your name?')
    console.log(`Your name is: ${input}`);
    
    rl.on('close', () => {
        if (process.stdin.isTTY) {
            console.log('This important software is now closing\n');
        }
    });

    rl.close();
});

