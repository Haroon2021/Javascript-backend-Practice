// const numbers = [1, 2, 3, 4];

// numbers.forEach((number) => {
//     console.log(number);
//   })

//   names = [ 'Rakshak', 'Haroon', 'Larry'];
//   console.log(names.length);
//   console.log(names[1]);

//   const newnames = names.concat('Joe')
//   console.log(newnames);

// const numbers = [1, 2, 3];
// let sum = 0;
// numbers.forEach((number) => {
//     sum = sum + number;
// })

// console.log(sum);

const addToBatch = (array, name) => {
  if (array.length < 5) {
    return array.concat(name);
  } else {
    return array;
  }
};

console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10) );
