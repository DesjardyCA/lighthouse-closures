var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

// console.log(rollDie()); // 1 (for example)

// fakes random dice rolls by reading from list
function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = -1;

  return function () {
    i++;
    return list[i];
  }
}

var rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie()); // 5
// console.log(rollLoadedDie()); // 4
// console.log(rollLoadedDie()); // 6

// counts down from num passed through
var countdownGenerator = function (x) {
  /* your code here */
  var count = x;

  return function () {
    if (count > 0) {
      console.log(`T-minus ${ count }`);
      count--;
      return;
    } else if (count === 0) {
      console.log(`Blast Off!`);
      count--;
      return;
    }
    console.log(`Rockets already gone, bub!`);
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!