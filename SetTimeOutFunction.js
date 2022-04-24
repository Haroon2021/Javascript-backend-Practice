const printHello = () => {
  console.log("Hello");
};

setTimeout(printHello, 3000);

const printHello = () => {
  console.log("Hello!");
};

const executeAfterDelay = (seconds, printHello) => {
  console.log(setTimeout(printHello, seconds * 1000));
};

executeAfterDelay(5, printHello);
