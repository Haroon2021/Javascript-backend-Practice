class Candy {
    constructor(candyname,candyprice) {
        this.candyname = candyname
        this.candyprice = candyprice
    }
    getName() {
        return this.candyname 
    }
    getPrice() {
        return this.candyprice
    }
}

class ShoppingBasket {
    constructor() {
        this.items = []
        this.totalPrice = 0;
    }
    getTotalPrice() {
        // return this.totalPrice ;
        this.items.map((candy) => {
            this.totalPrice += candy.getPrice();
            return this.totalPrice;
          });
    }
    addItem(item) {
        return this.items.push(item) 
        // this.price += this.items.candyprice
    }
}

const candy = new Candy('Mars', 4.99);
console.log(candy);

// console.log(candy.getName());

// console.log(candy.getPrice());

const basket = new ShoppingBasket();
// console.log(basket.getTotalPrice());

console.log(basket.addItem(candy));
console.log(basket.getTotalPrice()); 

// console.log(basket);

// basket.addItem(new Candy('Skittle', 3.99));
// basket.addItem(new Candy('Skittle', 3.99));

// basket.getTotalPrice();