// exclude the two first command line arguments, as we only need and want the time the user adds.
const args = process.argv.slice(2);
// create a function that will be used to call a beep(sound) in setTimeout
const beep = function() {
  process.stdout.write('\x07');
};
// check over the arguments and assign the number(s) to 'time' - this allows multiple arguments, not just one.
for (const arg of args) {
  const time = Number(arg);
  if (time <= 0 || isNaN(time)) {
    console.log(`🔴 ${time} seconds is invalid.`);
  } else {
    // added the beep function into setTimeout after the invalid check to ensure beep only plays for valid cases.
    setTimeout(() => {
      beep();
    }, time * 1000);
    console.log(`🟢 Timer set for ${time} seconds.`);
  }
}