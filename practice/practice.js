// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello, Node.js!');
// });

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });


// import chalk from "chalk";

// console.log(chalk.red.underline.bold("Hello", "World", "akbar", "ali"));




// console.log(chalk.blue("Hello World"));
// const log = console.log;
// log(chalk.black("Hello") + 'world' + chalk.red('world'));


// module.exports/////////////////


// const add = (a,b) =>{
//     return a+b;
// }

// const mil = (a,b) =>{
//     return a*b;
// }

// const div = (a,b) =>{
//     return a/b;
// }

// const sub = (a,b) =>{
//     return a-b;
// }

// module.exports = {add, mil, div, sub};

// const  {add, mil, div, sub} = require("./practice/practice")

// console.log(add(12,8));
// console.log(mil(2,2));
// console.log(div(6,2));
// console.log(sub(3,1));


// modules.path node.js//

// const path = require("path");

// console.log(__dirname);
// console.log(__filename);

// const filepath  =  path.join("folder","student", "data.txt");
// console.log(filepath);

// const parsedata = path.parse(filepath)
// const resolvepath = path.resolve(filepath)
// const extname = path.extname(filepath)
// const basename = path.basename(filepath)
// const dirname = path.dirname(filepath)

// console.log({parsedata, resolvepath, extname, basename, dirname});

//os.modules//

// const os = require("os")

// console.log("Platform:", os.platform());
// console.log("User:", os.userInfo());
// console.log("CPU Archittecture:", os.arch());
// console.log("Total Monery:", os.totalmem(), "bytes");
// console.log("Operating System:", os.type());



//writeFileSync wargan//

// const fs = require ("fs")
// const fileName = "ali.txt";

// const data = "my name is ali";

// fs.writeFileSync(fileName, data, "utf-8");

// console.log(fs.writeFileSync);



//appendfile///


// const fs = require("fs");
// const filepath = "example.txt"; 
// fs.appendFileSync(filepath, "this is new data", "utf-8");
// console.log("Data appended successfully.");
// const fs = require ("fs")
// const path = require("path")

// const readFile = fs.readFileSync(filepath, "utf-8");
// console.log(readFile, toString());

// const fileName = "ali.txt";
// const data = "my name is ali";
// fs.writeFileSync(fileName, data, "utf-8");
// console.log(fs.writeFileSync);

// const fs = require("fs")
// const path = require("path")

// const fileName = "fsAsycn.txt";
// const filepath = path.join(__dirname, __filename)

// fs.writeFile(filepath, "This is my new file", "utf-8", (err) =>{
//     if (err) console.error(err);
//     else console.log("saved ha ");
    
    
    
// })








