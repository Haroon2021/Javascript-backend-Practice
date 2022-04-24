const fizzBuzz = (a) => {
  if (a % 15 === 0) {
    console.log("fizz buzz");
  } else if (a % 3 === 0) {
    console.log("Fizz");
  } else if (a % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(a);
  }
};

const fizzbuzzUntil = (n) => {
  for (let a = 0; a < n + 1; a++) {
    // console.log("Fizzbuzz result for ");
    // console.log(`${a} is`);
    fizzBuzz(a);
  }
};

fizzbuzzUntil(78);
