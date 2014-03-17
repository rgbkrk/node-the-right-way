"use strict";

const
  fs = require('fs'),
  spawn = require('child_process').spawn,
  filename = process.argv[2];

if (!filename) {
  throw Error("A file to watch must be specified!");
}

fs.watch(filename, function(){
  let ls = spawn('ls', ['-lh', filename]);
  let output = '';

  ls.stdout.on('data', function(chunk){
    output += chunk.toString();
  });

  ls.stdout.on('close', function(){
    let parts = output.split(/\s+/);
    // Won't work parse right if there are spaces in names, groups
    console.dir([parts[0], parts[4], parts[8]]);
  });
});

console.log("Now watching " + filename + " for changes...");
