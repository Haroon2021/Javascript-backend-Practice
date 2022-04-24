let counter = 0;

const counterFunction = () => {
  counter = counter + 1;
  console.log(counter);
};

setInterval(counterFunction, 2000);
