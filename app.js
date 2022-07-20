const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
    },
    {
        name: 'Chocolate',
        image: 'https://www.thespruceeats.com/thmb/COMM8fP6QZg4bppB6OCAPRZoP-U=/2042x2042/smart/filters:no_upscale()/easy-chocolate-ice-cream-recipe-1945798-hero-01-45d9f26a0aaf4c1dba38d7e0a2ab51e2.jpg',
        price: 2,
}]

const vessels = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 3
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
    },{
    name: 'Bowl',
    image: 'https://www.aerialind.com/wp-content/uploads/2017/06/AI-73-004-00010.png',
    price: 2
}, {
    name: 'Sugar Cone',
    image: 'http://www.foodrepublic.com/wp-content/uploads/2016/08/cone1-700x467.jpg',
    price: 2
}
]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Choclate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
},{
    name: 'Choclate Syrup',
    image: 'https://www.theflourhandprint.com/wp-content/uploads/2019/11/chocolate-syrup-recipe-12.jpg',
    price: 2
}, {
    name: 'Toffee Chuncks',
    image: 'https://sparklelivingblog.com/wp-content/uploads/2018/08/homemade-toffee-bits-735x1103.jpg',
    price: 2
}]


let orders = []

function drawIcecream() {
    let template = ''
    iceCream.forEach(item => {
        template += `
                      <div class="col-md-3 iceCream" onclick="order('${item.name}')">
              <div class="">
                <img class='img-fluid Picsize' src="${item.image}" alt="" />
                <p class="bg-black p-2 icecream-name text-light mb-0">${item.name}</p>
                <p class="bg-black price p-2 text-light">$${item.price}</p>
              </div>
            </div>`
        let icecreamElm = document.getElementById('iceCream')
        icecreamElm.innerHTML = template
    })
}
drawIcecream()

function drawVessels() {
    let template = ''
    vessels.forEach(item => {
        template += `
                      <div class="col-md-3 vessels" onclick="order2('${item.name}')">
              <div class="">
                <img class='img-fluid Picsize' src="${item.image}" alt="" />
                <p class="bg-black p-2 vessels-name mb-0 text-light">${item.name}</p>
                <p class="text-light bg-black price p-2">$${item.price}</p>
              </div>
            </div>`
        // console.log(template, 'vessels')
        let vesselsElm = document.getElementById('vessels')
        vesselsElm.innerHTML = template
    })
}
drawVessels()

function drawToppings() {
    let template = ''
    toppings.forEach(item => {
        template += `
                      <div class="col-3 toppings" onclick="order3('${item.name}')">
              <div class="">
                <img class='img-fluid Picsize' src="${item.image}" alt="" />
                <p class="bg-black p-2 toppings-name mb-0 text-light">${item.name}</p>
                <p class="bg-black price p-2 text-light">$${item.price}</p>
              </div>
            </div>`
        // console.log(template , 'toppings')
        let toppingsElm = document.getElementById('toppings')
        toppingsElm.innerHTML = template
    })
}
drawToppings()

function drawOrders() {
    let template = ''
    orders.forEach(order => template += `
    <div class="col-12 order-item" >
    <p><span>${order.name}</span> - <span class="text-end ms-auto">$${order.price}</span></p>
    </div>
    `)
    console.log(template)
    let orderElm = document.getElementById('yourcart')
    orderElm.innerHTML = template
    drawTotal()
}

drawOrders()

function drawTotal() {
    let subtotal = 0
    orders.forEach(order => subtotal += order.price)
    let totalElm = document.getElementById('total')
    subtotal*=1.06
    totalElm.innerText = subtotal.toFixed(2)
}

drawTotal()


function order(selectedOrder) {
    console.log('order', selectedOrder)
    let foundIC = iceCream.find(iceCream => iceCream.name == selectedOrder)
    console.log(foundIC)
    orders.push(foundIC)
    drawOrders()
}

function order2(selectedOrder) {
    let foundVes = vessels.find(vessels => vessels.name == selectedOrder)
    console.log(foundVes)
    orders.push(foundVes)
    drawOrders()
    
}

function order3(selectedOrder) {
    let foundTop = toppings.find(toppings => toppings.name == selectedOrder)
    orders.push(foundTop)
    drawOrders()
}



function clearOrders() {
    orders=[]
    drawOrders()
}


function deleteItem(index) {
    let order = orders[index]
    if(window.confirm( `do you want to remove 1${order.name}?`)){}
}

