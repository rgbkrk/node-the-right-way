const fs = require('fs');
fs.writeFile('target.txt', 'something special', function(err) {
  if (err) {
    throw err;
  }
  console.log("File saved!");
})
