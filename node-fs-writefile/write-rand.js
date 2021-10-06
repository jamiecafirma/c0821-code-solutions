const fs = require('fs');
const generateNum = Math.random();
const randomNumber = generateNum.toString() + '\n';

fs.writeFile('random.txt', randomNumber, 'utf-8', function (err) {
  if (err) throw err;
});
