let list = document.querySelector(".list-all");

function httpServer() {
    let xHttp = new XMLHttpRequest();
    xHttp.onload = function() {
        if (this.status === 200) {
            let items = this.responseXML.children[0].children
            console.log(items[0].children[0].textContent,items[0].children[1].textContent,items[0].children[2].textContent);
            
            
            for (let i = 0; i < items.length; i++) {
                createProduct(items[i].children[0].textContent,items[i].children[1].textContent,items[i].children[2].textContent)
            } 
        }
    }
    xHttp.open("GET", "product.xml",false);
    xHttp.send();
}
httpServer()



function createProduct(name,price,ImgLink){
    const product = document.createElement("li")
    
    product.setAttribute("class","product-container")

    let img = document.createElement("img")
    img.setAttribute("src", ImgLink)
    img.setAttribute("id","product-img")

    let detail = document.createElement("div")
    detail.setAttribute("class","detail")

    let headDetail = document.createElement("div")
    
    let h2 = document.createElement("h2")
    h2.innerText = name
    let p = document.createElement("p")
    p.innerText = "Men's Shoes"

    headDetail.append(h2)
    headDetail.append(p)
    

    let priceTag = document.createElement("h2")
    priceTag.innerText = "$"+price

    let btn = document.createElement("button")
    btn.textContent = "Buy Now"

    detail.append(headDetail)
    detail.append(priceTag)
    detail.append(btn)

    product.append(img)
    product.append(detail)

    list.append(product)


}


