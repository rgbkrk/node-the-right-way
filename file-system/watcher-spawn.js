"use strict";

const
  fs = require('fs'),
  spawn = require('child_process').spawn,
  processName = process.argv[2],
  processArgs = process.argv.slice(3, process.argv.length-1),
  filename = process.argv[process.argv.length-1];

// Minimum three arguments: thisscript process filetowatch
if (process.argv.length-1 < 3 || !processName) {
  console.error("Need at least a program and a file to watch");
  console.error("<program> [arg1 arg2 ...] <file to watch>");
  throw Error("Argue more.");

}

fs.watch(filename, function(){
  let args = processArgs.concat(filename);
  let ls = spawn(processName, args);
  ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + filename + " for changes...");
