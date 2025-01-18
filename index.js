


const fs = require("fs");
const path = require("path");

// Write data to 'ali.txt'
const fileName = "ali.txt";
const data = "my name is ali";
fs.writeFileSync(fileName, data, "utf-8");

// Append data to 'example.txt'
const filepath = "example.txt";
fs.appendFileSync(filepath, "this is new data", "utf-8");
console.log("Data appended successfully.");

// Read and display the content of 'example.txt'
const readFile = fs.readFileSync(filepath, "utf-8");
console.log(readFile);

// Rewrite data to 'ali.txt'
fs.writeFileSync(fileName, data, "utf-8");
console.log("Data written to ali.txt successfully.");
