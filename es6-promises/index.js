const takeAChance = require('./take-a-chance');

const promise = takeAChance('Jamie');

promise.then(value => {
  console.log(value);
}, reason => {
  console.error(reason.message);
});
