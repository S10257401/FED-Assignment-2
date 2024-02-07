/* class CartItem{
    constructor(name, img, price){
        this.name = name
        this.desc = desc
        this.img = img
        this.price = price
        this.quantity = 1
    }
}


class LocalCart{
    static key = 'flex-item'

    static get LocalCartItems(){
        let cartMap = new Map()
        const cart  = localStorage.getItem(key)
        if(cart===null || cart.length===0) return cartMap
            return new Map(Object.entries(JSON.parse(cart)))
    }

    static addItemToLocalCart(id, item){
        let cart = LocalCart.getLocalCartItems()
        if(cart.has(id)){
            let mapItem = cart.get(id)
            mapItem.quantity += 1
            cart.set(id, mapItem)
        }
        else 
        cart.set(id, item)
        localStorage.setItem(LocalCart.key, Json.stringify(object.fromEntries(cart)))
        updateCartUI()
    }
    static removeItemFromCart(id){
        let cart = LocalCart.getLocalCartItems()
        if(cart.has(id)){
            let mapItem = cart.get(id)
            if(mapItem.quantity>1)
            {
                mapItem.quantity -=1
                cart.set(id, mapItem)
            }
            else 
            cart.delete(id)
        }
        if(cart.length===0)
        localStorage.clear()
        else 
        localStorage.Storage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cart)))
            updateCartUI()
    }
}
*/
const cartIcon = document.querySelector('.fa-cart-arrow-down')
const wholeCartWindow = document.querySelector('.whole-cart-window')
wholeCartWindow.inWindow = 0
const addToCartButton = document.querySelectorAll('.addToCartButton')
addToCartButton.forEach((btn)=>{
    btn.addEventListener('click', addItemFunction)
})

function addItemFunction(e){
    const id = e.target.parentElement.parentElement.getAttribute("data-id")
    const img = e.target.parentElement.parentElement.previousElement.Sibling.src
    const name = e.target.parentElement.previousElement.Sibling.textContent
    const desc = e.target.parentElement.previousElement.children[0].textContent
    const price = e.target.parentElement.children[1].textContent
    price = price.replace("Price: $", '')
    const item = new CartItem(name, desc, img, price)
}


cartIcon.addEventListener('mouseover', ()=>{
    if(wholeCartWindow.classList.contains('hide'))
    wholeCartWindow.classList.remove('hide')
})

cartIcon.addEventListener('mouseleave', ()=>{
    //if(wholeCartWindow.classList.contains('hide'))
    setTimeout( () =>{
        if(wholeCartWindow.inWindow===0){
            wholeCartWindow.classList.add('hide')
        }
    },300)

})

wholeCartWindow.addEventListener('mouseover', ()=>{
    wholeCartWindow.inWindow=1
})

wholeCartWindow.addEventListener('mouseleave', ()=>{
    wholeCartWindow.inWindow=0
    wholeCartWindow.classList.add('hide')
})

/* function updateCartUI(){
    const cartWrapper = document.querySelector('.cart-wrapper')
    cartWrapper.innerHTML=""
    const items = LocalCart.getLocalCartItems('cartItems')
    if(items === null) return
    let count = 0 
    let total = 0 
    for(const [key, value] of items.entries()){
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart-item')
        cartItem.innerHTML = `
        
        <div class="flex-img">
				<img src="images/Razer Hunstman Mini KeyBoard.jpg">
            </div>
            <div class="flex-info">
                <h4>${value.name}</h4>
                <p>${value.desc}</p>
                <span class="quantity>Quantity: ${value.quantity}</span>
                <span class="price>Price: $ ${value.price*value.quantity}</span>
            
            </div>`
    }

}
*/
