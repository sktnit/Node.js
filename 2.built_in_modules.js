// fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions
const fs = require("fs");

let text= fs.readFileSync("text_file.txt","utf-8");
console.log("The content of the file is");
console.log(text);

text = text.replace("console", "text_file");
console.log("Creating a new file...");
fs.writeFileSync("text_file2.txt",text);