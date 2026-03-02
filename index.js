let cart = []
let total = 0

function addtoCart(name, price) {

    cart.push({name, price})

    total += price

    document.getElementById("cart-count").innerText = cart.length
    document.getElementById("total").innerText = total

    displayCart()   
}

function displayCart() {
    
    let item = ""

    cart.forEach(function(item) {
        items += "<p>" + item.name + "- $" + item.price + "</p>"
        })

        document.getElementById("cart-items").innerHTML = items  
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("active")   
}