const fs = require('fs');

// Synchronous Reading of a File
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error('Error reading the file:', err);
}

// Synchronous Writing to a File
try {
    fs.writeFileSync('example.txt', 'Hello, World!');
    console.log('File written successfully');
} catch (err) {
    console.error('Error writing to the file:', err);
}


// Asynchronous Reading of a File
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log(data);
});

// Asynchronous Writing to a File
fs.writeFile('example.txt', 'Hello, Async World!', (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
        return;
    }
    console.log('File written successfully');
});
