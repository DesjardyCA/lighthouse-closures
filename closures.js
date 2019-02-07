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

// var countdown = countdownGenerator(3);
// countdown(); // T-minus 3...
// countdown(); // T-minus 2...
// countdown(); // T-minus 1...
// countdown(); // Blast Off!
// countdown(); // Rockets already gone, bub!
// countdown(); // Rockets already gone, bub!

// higher order function stuff
// Create a function called wrapLog() that takes in a function (callback) and a string (name) 
// and returns a function that internally invokes (calls) callback during its execution and 
// also logs the name, input parameters, and return value of the callback function. 
var wrapLog = function (callback, name) {
  var operation = name;

  return function (x, y, z) {
    if (!z) {
      console.log(`${operation}(${x},${y}) =>`);
    } else {
      console.log(`${operation}(${x},${y},${z}) =>`);
    }
    return callback(x, y, z);
  }
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30
console.log(logVolume(3, 2, 4)); // volume(3, 2, 4) => 24