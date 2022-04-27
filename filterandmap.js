const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
  ];

const checkLength = (phoneno) => {
    if (phoneno.length<11) {
        return true;
    } else {
        return false;
    }
}

const filterLongNumbers = numbers.filter(checkLength);

console.log(filterLongNumbers);

// Map method:

// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// const generateMessages = (array) => {
//     array.map(item => console.log(`Hi ${item} 50% off our best candies for you today!`));
// }

// generateMessages(names);

// Map method part 2:

// const namesAndDiscounts = [
//     { name: 'Anna', discount: 50 },
//     { name: 'Laura', discount: 40 },
//     { name: 'Josh', discount: 30 },
//     { name: 'Min', discount: 50 },
//     { name: 'Karla', discount: 60 }
//   ];

//   const generateMessages = (array) => {
//       return array.map( (item) =>  `Hi ${item.name} ${item.discount}% off our best candies for you today!`)
//   };

// console.log(generateMessages(namesAndDiscounts));