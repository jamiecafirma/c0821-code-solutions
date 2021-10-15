const filter = function (array, predicate) {
  const output = [];
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
};

const moreNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const moreNames = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const findOdd = number => number % 2 !== 0;
const oddNumbers = filter(moreNumbers, findOdd);
console.log('value of oddNumbers:', oddNumbers);

const firstLetterJ = name => name[0] === 'J';
const startWithJ = filter(moreNames, firstLetterJ);
console.log('value of startWithJ:', startWithJ);
