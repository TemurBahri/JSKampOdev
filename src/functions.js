
function addToCard(productName = "Elma",quantity) {
    console.log("Sepete eklendi : ürün : " + productName + "adet:" + quantity)
}

/*
addToCard()
addToCard("Muz eklendi")
addToCard("Çilek eklendi")
*/
addToCard("Yumurta", 10)

let addToCardTwo = () => {
    console.log("Hello Card")
}

addToCardTwo()

let addToCardThree = function product() {
    console.log("Hello Three")
}

addToCardThree()

function addToCart4(productName,quantity,unitPrice) {
    
}

let product1 = {productName: "Elma",quantity:4,unitPrice:10}
function addToCart3(product) {
    console.log("Ürün : " +product.productName, + product.quantity, + product.unitPrice)
}


addToCart3(product1)

let product2 = {productName: "Elma",quantity:4,unitPrice:10}
let product3 = {productName: "Elma",quantity:4,unitPrice:10}
product2 = product3
product2.productName = "Muz"
console.log(product3.productName)

function addToCart4(s) {
    console.log(products)
}

let products = [
    {productName: "Elma",quantity:4,unitPrice:10},
    {productName: "Muz",quantity:4,unitPrice:10},
    {productName: "Kavun",quantity:4,unitPrice:10}
]

addToCart4(products)

function add(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]  
    }
    console.log(total)
}

add(10,10)
add(10,10,32)
add(10,10,55,66)

let numbers = [30,10,500,552,599]
console.log(Math.max(...numbers))

let [guney,kuzey,doğu,[batı]]= [
    {name:"Güney",identity : "80M"},
    {name:"Kuzey", identity :"56"},
    {name:"Batı", identity :"26"},
    [
        ["İstanbul","Bursa"],
        ["Mus","Ankara"],
        ["İstanbul","Van"],
    ]
]
//console.log(guney.name)
//console.log(kuzey.identity)
console.log(batı)


