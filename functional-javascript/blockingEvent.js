function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return;
  setTimeout(operation);
  return setTimeout(repeat, [0, operation, --num]);
}

function OfficialRepeat(operation, num) {
  if (num <= 0) return;

  operation();

  // release control every 10 or so
  // iterations.
  // 10 is arbitrary.
  if (num % 10 === 0) {
    setTimeout(function() {
      repeat(operation, --num);
    });
  } else {
    repeat(operation, --num);
  }
}

module.exports = repeat;
