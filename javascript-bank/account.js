/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var newDeposit = new Transaction('deposit', amount);
  if (amount <= 0 || Number.isInteger(amount) === false) {
    return false;
  }
  this.transactions.push(newDeposit);
  return true;
};

Account.prototype.withdraw = function (amount) {
  var newWithdrawal = new Transaction('withdrawal', amount);
  if (amount <= 0 || Number.isInteger(amount) === false) {
    return false;
  }
  this.transactions.push(newWithdrawal);
  return true;
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
