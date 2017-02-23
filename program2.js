const fs = require('fs');
function nodeStyleCallback(err, data) {
  if(err) {
    console.error('There was an error', err);
    return;
  }
  console.log(data);
}

//fs.readFile('/home/tab/popdev/node/pro1.js', nodeStyleCallback);
//console.log('#########break here##########');
fs.readFile('/home/tab/popdev/node/program1.js', nodeStyleCallback);
