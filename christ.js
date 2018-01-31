
"use strict";
let body = document.querySelector('body')
// Food is a base class
class Food list_group {

    constructor (name, price, shipping_cost, time) {
        this.name = name;
        this.price = price,
        this.shipping_cost = shipping_ost;
        this.time = time;
        
    }

    toString () {
        return `${this.name} | ${this.price} euro  :: ${this.shipping_cost} euro :: ${this.time} day`
    }

    print () {
      console.log( this.toString() );
    }
}

const pants = new Food list_group('pants', 26, 12);
pants.print(); // 'pants | 26 euro :: 12 size'
console.log(pants.cost); // 26 (LINE A)


const shoes = new Food list_group('shoes', 50, 38);
shoes.print();
console.log(shoes.size);

const jewlery = new Food list_group('ring', 150, 'large');
jewlery.print();
console.log(jewlery.name);





