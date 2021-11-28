let cart = [
    {id:1,productName:"İphone",quantity:3,unitPrice:1000},
    {id:2,productName:"Huawei",quantity:2,unitPrice:2000},
    {id:3,productName:"Nokia",quantity:5,unitPrice:5000},
    {id:4,productName:"Samsung",quantity:6,unitPrice:6000},
    {id:5,productName:"Mi",quantity:1,unitPrice:9000},
    {id:6,productName:"Siemens",quantity:7,unitPrice:7000},
]

console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : " + product.unitPrice * product.quantity+"</li>")
})
console.log("</ul>")

let total = cart.reduce((acc,product) =>acc+ product.unitPrice * product.quantity,0)
console.log(total)

let quantityOver2 =  cart.filter(product=>product.quantity>2)
console.log(quantityOver2)

function addToCart(sepet) {
    sepet.push({id:7,productName:"Ruhsat",quantity:9,unitPrice:500})
}

addToCart(cart)
console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1
}

sayiTopla(sayi)

console.log(sayi)