let list = document.querySelector(".list-all");
let input = document.getElementById("input");
let addCartBtn = document.querySelector("#cart-btn");
let cartQtn = document.querySelector("#cart-quantity");
let cartCloseBtn = document.querySelector(".close-cart");
let cartWindow = document.querySelector(".cart-container");
let cartProduct = document.querySelector(".cart-product");
let profile = document.querySelector(".profile-id");
let container = document.querySelector(".container")
let total = document.querySelector("#total")
let buyNowBtn = document.querySelector(".Buy-btn-cart")

buyNowBtn.addEventListener("click",()=>{
  if(cart) {
    localStorage.setItem("cart",JSON.stringify([]))
    cartCreate()
    cartQtn.textContent = 0
  }
})

let user = JSON.parse(localStorage.getItem("person"));

function toggleWindow() {
  cartWindow.classList.toggle("closeCart");
}
cartCloseBtn.addEventListener("click", toggleWindow);

let cart = localStorage.getItem("cart");

if (cart != undefined && cart != null) {
  cartQtn.innerText = JSON.parse(cart).length;
  cartQtn.setAttribute("class", "");
}

const Product = [
  {
    id: 1,
    name: "Air Max 90",
    price: 120,
    img: "Shoes/Shoe1.png",
  },
  {
    id: 2,
    name: "Air Force 1",
    price: 110,
    img: "Shoes/shoe2.png",
  },
  {
    id: 3,
    name: "Air Zoom Pegasus",
    price: 130,
    img: "Shoes/shoe3.png",
  },
  {
    id: 4,
    name: "React Infinity Run",
    price: 160,
    img: "Shoes/shoe4.png",
  },
  {
    id: 5,
    name: "Blazer Mid '77",
    price: 100,
    img: "Shoes/shoe5.png",
  },
  {
    id: 6,
    name: "Air VaporMax",
    price: 190,
    img: "Shoes/shoe6.png",
  },
  {
    id: 7,
    name: "Court Vision Low",
    price: 75,
    img: "Shoes/shoe7.png",
  },
  {
    id: 8,
    name: "ZoomX Vaporfly",
    price: 250,
    img: "Shoes/shoe8.png",
  },
];

function createCartItem(imgLink, name, price, id) {
  let item = document.createElement("div");
  item.classList.add("product-cart-div");

  let imgDiv = document.createElement("div");

  let img = document.createElement("img");
  img.setAttribute("src", imgLink);
  img.setAttribute("id", "cart-img");

  let cartDetail = document.createElement("div");
  cartDetail.classList.add("cart-detail");

  let h3 = document.createElement("h3");
  h3.innerText = name;
  let h4 = document.createElement("h4");
  h4.innerText = "$" + price;

  let btn = document.createElement("button");
  btn.textContent = "Remove From Cart";
  btn.setAttribute("id", "cart-btn");
  btn.setAttribute("value", id);
  btn.addEventListener("click", (e) => {
    AddToCart(e);
  });

  cartDetail.append(h3);
  cartDetail.append(h4);
  cartDetail.append(btn);

  imgDiv.append(img);

  item.append(imgDiv);
  item.append(cartDetail);

  cartProduct.append(item);
}

let cartItem = JSON.parse(localStorage.getItem("cart"));

function cartCreate(cartItem) {
  let t = 0
  cartProduct.innerHTML = "";
  if (cartItem != null && cartItem.length > 0) {
    for (const element of cartItem) {
      t+=element.price
      createCartItem(element.img, element.name, element.price, element.id);
    }
  } else {
    cartProduct.innerHTML = "Cart is empty";
  }

  total.innerText = t
}

cartCreate(cartItem);

function AddToCart(e) {
  let item = Product.find((item) => item.id == e.target.value);

  cart = JSON.parse(localStorage.getItem("cart"))
  if (cart == undefined || cart == null) {
    localStorage.setItem("cart", JSON.stringify([item]));
    cartCreate(cart);
    e.target.textContent = "Already in cart";
    cartQtn.innerText = 1;
  } else {

    if (cart.find((item) => item.id == e.target.value)) {
      cart = cart.filter((item) => item.id != e.target.value);
      cartCreate(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      e.target.textContent = "Add to cart";
    } else {
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      cartCreate(cart);
      e.target.textContent = "Already in cart";
    }
    cartQtn.innerText = cart.length;
  }

  cartQtn.setAttribute("class", "");
}

// function httpServer() {
//     let xHttp = new XMLHttpRequest();
//     xHttp.onload = function() {
//         if (this.status === 200) {
//             let items = this.responseXML.children[0].children

//             for (let i = 0; i < items.length; i++) {
//                 createProduct(items[i].children[0].textContent,items[i].children[1].textContent,items[i].children[2].textContent)
//             }
//         }
//     }
//     xHttp.open("GET", "product.xml",false);
//     xHttp.send();
// }
// httpServer()

function createProduct(ImgLink, name, price, id) {
  let addCartText = "Add to cart";
  if (localStorage.getItem("cart")) {
    addCartText = JSON.parse(localStorage.getItem("cart")).find(
      (item) => item.id == id
    )
      ? "Already in cart"
      : "Add to cart";
  }

  const product = document.createElement("li");

  product.setAttribute("class", "product-container");

  let img = document.createElement("img");
  img.setAttribute("src", ImgLink);
  img.setAttribute("id", "product-img");

  let detail = document.createElement("div");
  detail.setAttribute("class", "detail");

  let headDetail = document.createElement("div");

  let h2 = document.createElement("h2");
  h2.innerText = name;
  let p = document.createElement("p");
  p.innerText = "Men's Shoes";

  headDetail.append(h2);
  headDetail.append(p);

  let priceTag = document.createElement("h2");
  priceTag.innerText = "$" + price;

  let btn = document.createElement("button");
  btn.textContent = "Buy Now";
  btn.setAttribute("id", "buy-btn");
  btn.addEventListener("click",()=>{
    createBuyPopUp(ImgLink,name,price)
  })

  let btn2 = document.createElement("button");
  btn2.textContent = addCartText;
  btn2.setAttribute("id", "cart-btn");
  btn2.setAttribute("value", id);
  btn2.addEventListener("click", (e) => {
    AddToCart(e);
  });

  let btnDiv = document.createElement("div");
  btnDiv.setAttribute("id", "btnDiv");
  btnDiv.append(btn);
  btnDiv.append(btn2);

  detail.append(headDetail);
  detail.append(priceTag);
  detail.append(btnDiv);

  product.append(img);
  product.append(detail);

  list.append(product);
}

function loop() {
  for (const element of Product) {
    createProduct(element.img, element.name, element.price, element.id);
  }
}

function search() {
  list.innerHTML = "";

  if (input.value) {
    for (const element of Product) {
      if (element.name.toLowerCase().includes(input.value.toLowerCase())) {
        createProduct(element.img, element.name, element.price, element.id);
      }
    }
  } else {
    loop();
  }
  if (list.innerHTML == "") {
    list.innerHTML = "<h2>No result found.</h2>";
  }
}

loop();


let buyPopUp = document.createElement("div") 
function createBuyPopUp(Img,name,pricing){
  buyPopUp.classList.add("buy-pop")

  let currUser = user[user.length - 1]
  

  let buyContainer = document.createElement("div")
  buyContainer.classList.add("buy-container")

  let img = document.createElement("img")
  img.setAttribute("src",Img);
  img.setAttribute("id","buy-img");

  let buyDetail = document.createElement("div")
  buyDetail.classList.add("buy-detail")
  let h2 = document.createElement("h2")
  h2.innerText = name;
  let address = document.createElement("h4")
  let price = document.createElement("h3")
  address.innerText = "Shipping address :" + currUser.address || "Not Defined";
  price.innerText = "$" + pricing

  let btn = document.createElement("button")
  btn.classList.add("done")
  btn.innerText = "Done"

  btn.addEventListener("click",()=>{
    buyPopUp.remove()
    buyContainer.remove()
  })

  buyDetail.append(h2)
  buyDetail.append(address);
  buyDetail.append(price);
  buyDetail.append(btn)

  buyContainer.append(img)
  buyContainer.append(buyDetail)

  
  
  buyPopUp.append(buyContainer)
  console.log(buyPopUp);

  container.before(buyPopUp)
 
  
}