class User {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name 
    }
    getIntroduction() {
        return `Hi my name is: ${this.name }`
    }
}

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

// const getNamesone = (array) => {
//     array.map((item) => console.log(`${item.getName()}`))
// }

// const getIntroductionsone = (array) => {
//     array.map((item) => console.log(`${item.getIntroduction()}`))
// }

// console.log(getNamesone(users));

// console.log(getIntroductionsone(users));

  class UserBase {
    constructor(users) {
        this.users = users
    }

    count() {
        return this.users.length
    }
    getNames()  {
        return this.users.map((item) => `${item.getName()}`)
    }
    getIntroductions() {
        return this.users.map((item) => `${item.getIntroduction()}`)
    }
}

const userBase = new UserBase(users);

// console.log(userBase.count());

// console.log(userBase.getNames());

// console.log(userBase.getIntroductions());

console.log(userBase);