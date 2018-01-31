


class shoppingCart {

    constructor () {
        this.items = [];
        this.total = 0;
        this.elements = {
          items:  document.querySelectorAll('#food li'),
          result: document.getElementById('result')
      
    }
  this.itemEventListener()
}

    itemEventListener () {
      this.elements.items.forEach((listItem) => {
         listItem.addEventListener('click', (e)=>{
          this.total += Number(listItem.dataset.price)
          this.items.push({name: listItem.innerHTML, price: listItem.dataset.price})
          this.elements.result.innerHTML = JSON.stringify(this.items)
          console.log(this.total)
          localStorage.setItem("cart", JSON.stringify({total: this.total, items: this.items}))
          
         })
        })
  
    }
}

const A = new shoppingCart();
console.log(shoppingCart)

