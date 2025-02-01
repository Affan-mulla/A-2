// const Product = [
//   {
//     name: "Air Max 90",
//     price: 120,
//     img: "Shoes/Shoe1.png",
//   },
//   {
//     name: "Air Force 1",
//     price: 110,
//     img: "Shoes/shoe2.png",
//   },
//   {
//     name: "Air Zoom Pegasus",
//     price: 130,
//     img: "Shoes/shoe3.png",
//   },
//   {
//     name: "React Infinity Run",
//     price: 160,
//     img: "Shoes/shoe4.png",
//   },
//   {
//     name: "Blazer Mid '77",
//     price: 100,
//     img: "Shoes/shoe5.png",
//   },
//   {
//     name: "Air VaporMax",
//     price: 190,
//     img: "Shoes/shoe6.png",
//   },
//   {
//     name: "Court Vision Low",
//     price: 75,
//     img: "Shoes/shoe7.png",
//   },
//   {
//     name: "ZoomX Vaporfly",
//     price: 250,
//     img: "Shoes/shoe8.png",
//   },
// ];

let list = document.querySelector(".list-all");
let input = document.getElementById("input");

function httpServer() {
    let xHttp = new XMLHttpRequest();
    xHttp.onload = function() {
        if (this.status === 200) {
            let items = this.responseXML.children[0].children

            for (let i = 0; i < items.length; i++) {
                createProduct(items[i].children[0].textContent,items[i].children[1].textContent,items[i].children[2].textContent)
            }
        }
    }
    xHttp.open("GET", "product.xml",false);
    xHttp.send();
}
httpServer()

function createProduct(ImgLink,name, price) {
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
  btn.setAttribute("id","buy-btn")

  detail.append(headDetail);
  detail.append(priceTag);
  detail.append(btn);

  product.append(img);
  product.append(detail);

  list.append(product);
}

function loop() {
  for (const element of Product) {
    createProduct(element.img, element.name, element.price);
  }
}
loop();
function search() {
  list.innerHTML = "";

  if (input.value) {
    for (const element of Product) {
      if (element.name.toLowerCase().includes(input.value.toLowerCase())) {
        createProduct(element.img, element.name, element.price);
      }
    }
  } else {
    loop()
  }
  if (list.innerHTML == "") {
    list.innerHTML = "<h2>No result found.</h2>"
  }
}
