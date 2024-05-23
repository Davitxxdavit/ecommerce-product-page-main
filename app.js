
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const mainImg = document.getElementById("introImg");
const border1 = document.getElementById("border1");
const border2 = document.getElementById("border2");
const border3 = document.getElementById("border3");
const border4 = document.getElementById("border4");
const cart = document.getElementById("cart");
const emptyCart = document.getElementById("emptyCart");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const quantity = document.getElementById("quantity");
const submitBtn = document.getElementById("productCart");
const cartProductImg = document.getElementById("cartProductImg");
const cartProductPrice = document.getElementById("cartProductPrice");
const cartProductQuantity = document.getElementById("cartProductQuantity");
const sumPrice = document.getElementById("sumPrice");
const filled = document.getElementById("filled");
const cartSpan = document.getElementById("cartSpan");
const trash = document.getElementById("trash");
const cartDecor = document.getElementById("cartDecor");
const item1Zoom = document.getElementById("item1Zoom");
const item2Zoom = document.getElementById("item2Zoom");
const item3Zoom = document.getElementById("item3Zoom");
const item4Zoom = document.getElementById("item4Zoom");
const mainImgZoom = document.getElementById("introImgZoom");
const border1Zoom = document.getElementById("border1Zoom");
const border2Zoom = document.getElementById("border2Zoom");
const border3Zoom = document.getElementById("border3Zoom");
const border4Zoom = document.getElementById("border4Zoom");
const productZoom = document.getElementById("productZoom");
const x = document.getElementById("x");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");


productZoom.style.display = "none";

item1.classList.add("active");
mainImg.style.backgroundImage = 'url("./images/image-product-1.jpg")';
border1.classList.add("active-border");
item1.addEventListener("click", (e)=>{
    mainImg.style.backgroundImage = 'url("./images/image-product-1.jpg")';
    item1.classList.add("active");
    border1.classList.add("active-border");


    item2.classList.remove("active");
    item3.classList.remove("active");
    item4.classList.remove("active");
    border2.classList.remove("active-border");
    border3.classList.remove("active-border");
    border4.classList.remove("active-border");
})


item2.addEventListener("click", ()=>{
    mainImg.style.backgroundImage = 'url("./images/image-product-2.jpg")';
    item2.classList.add("active");
    border2.classList.add("active-border");

    item1.classList.remove("active");
    item3.classList.remove("active");
    item4.classList.remove("active");
    border1.classList.remove("active-border");
    border3.classList.remove("active-border");
    border4.classList.remove("active-border");
})

item3.addEventListener("click", ()=>{
    mainImg.style.backgroundImage = 'url("./images/image-product-3.jpg")';
    item3.classList.add("active");
    border3.classList.add("active-border");

    item1.classList.remove("active");
    item2.classList.remove("active");
    item4.classList.remove("active");
    border1.classList.remove("active-border");
    border2.classList.remove("active-border");
    border4.classList.remove("active-border");
})


item4.addEventListener("click", ()=>{
    mainImg.style.backgroundImage = 'url("./images/image-product-4.jpg")';
    item4.classList.add("active");
    border4.classList.add("active-border");

    item1.classList.remove("active");
    item2.classList.remove("active");
    item3.classList.remove("active");
    border1.classList.remove("active-border");
    border2.classList.remove("active-border");
    border3.classList.remove("active-border");
})


cart.addEventListener("click", ()=>{
    
    emptyCart.classList.toggle("display-block")
   
})

minus.addEventListener("click", ()=>{
    
    if(quantity.innerHTML > 0){
      quantity.innerHTML--;  
    }
    
})

plus.addEventListener("click", ()=>{
    quantity.innerHTML++;
})


submitBtn.addEventListener("click", ()=>{
   

    if(quantity.innerHTML > 0){
        cartProductQuantity.innerHTML = `x ${quantity.innerHTML}`;
        sumPrice.innerHTML = `$${quantity.innerHTML * 125}`;
        cartProductImg.style.backgroundImage = mainImg.style.backgroundImage;
        filled.classList.add("display-flex");
        cartSpan.style.display = "none";
        cartDecor.style.display = "block";
        cartDecor.innerHTML = quantity.innerHTML;
    }else{ 
    }
})


trash.addEventListener("click", ()=>{
    filled.classList.remove("display-flex");
    cartDecor.style.display = "none";
        cartSpan.style.display = "block";
})



// ================== zoom ================





item1Zoom.classList.add("active");
mainImgZoom.style.backgroundImage = 'url("./images/image-product-1.jpg")';
border1Zoom.classList.add("active-border");

item1Zoom.addEventListener("click", (e)=>{
    mainImgZoom.style.backgroundImage = 'url("./images/image-product-1.jpg")';
    item1Zoom.classList.add("active");
    border1Zoom.classList.add("active-border");
    item2Zoom.classList.remove("active");
    item3Zoom.classList.remove("active");
    item4Zoom.classList.remove("active");
    border2Zoom.classList.remove("active-border");
    border3Zoom.classList.remove("active-border");
    border4Zoom.classList.remove("active-border");



})


item2Zoom.addEventListener("click", ()=>{
    mainImgZoom.style.backgroundImage = 'url("./images/image-product-2.jpg")';
    item2Zoom.classList.add("active");
    border2Zoom.classList.add("active-border");
    item1Zoom.classList.remove("active");
    item3Zoom.classList.remove("active");
    item4Zoom.classList.remove("active");
    border1Zoom.classList.remove("active-border");
    border3Zoom.classList.remove("active-border");
    border4Zoom.classList.remove("active-border");


})

item3Zoom.addEventListener("click", ()=>{
    mainImgZoom.style.backgroundImage = 'url("./images/image-product-3.jpg")';
    item3Zoom.classList.add("active");
    border3Zoom.classList.add("active-border");

    item1Zoom.classList.remove("active");
    item2Zoom.classList.remove("active");
    item4Zoom.classList.remove("active");
    border1Zoom.classList.remove("active-border");
    border2Zoom.classList.remove("active-border");
    border4Zoom.classList.remove("active-border");

    
})


item4Zoom.addEventListener("click", ()=>{
    mainImgZoom.style.backgroundImage = 'url("./images/image-product-4.jpg")';
    item4Zoom.classList.add("active");
    border4Zoom.classList.add("active-border");

    item1Zoom.classList.remove("active");
    item2Zoom.classList.remove("active");
    item3Zoom.classList.remove("active");
    border1Zoom.classList.remove("active-border");
    border2Zoom.classList.remove("active-border");
    border3Zoom.classList.remove("active-border");

    
})


mainImg.addEventListener("click", ()=>{
    productZoom.style.display = "flex";
    productZoom.style.backgroundColor = "rgba(17, 17, 17, 0.73)";
})


x.addEventListener("click", ()=>{
    productZoom.style.display = "none";
    
})

const items = [item1Zoom, item2Zoom, item3Zoom, item4Zoom];
const borders = [border1Zoom, border2Zoom, border3Zoom, border4Zoom];




rightArrow.addEventListener("click", ()=>{
  
 


    function findActive(items){
        return items.classList.contains("active");
    }

     let indexOfItem = items.findIndex(findActive);


    switch (indexOfItem){
        case 0:
             mainImgZoom.style.backgroundImage = `url("./images/image-product-2.jpg")`;
             item2Zoom.classList.add("active");
             border2Zoom.classList.add("active-border");
             item4Zoom.classList.remove("active");
             item1Zoom.classList.remove("active");
             item3Zoom.classList.remove("active");
             border4Zoom.classList.remove("active-border");
             border1Zoom.classList.remove("active-border");
             border3Zoom.classList.remove("active-border");
         
            break;
        case 1:
            mainImgZoom.style.backgroundImage = 'url("./images/image-product-3.jpg")';
            item3Zoom.classList.add("active");
             border3Zoom.classList.add("active-border");
             item4Zoom.classList.remove("active");
             item1Zoom.classList.remove("active");
             item2Zoom.classList.remove("active");
             border4Zoom.classList.remove("active-border");
             border1Zoom.classList.remove("active-border");
             border2Zoom.classList.remove("active-border");
         
            break;
        case 2:
            mainImgZoom.style.backgroundImage = 'url("./images/image-product-4.jpg")';
            item4Zoom.classList.add("active");
             border4Zoom.classList.add("active-border");
             item3Zoom.classList.remove("active");
             item1Zoom.classList.remove("active");
             item2Zoom.classList.remove("active");
             border3Zoom.classList.remove("active-border");
             border1Zoom.classList.remove("active-border");
             border2Zoom.classList.remove("active-border");
           
            break;
        case 3: 
            
            default:
                console.log("upss");
    }

   


})





leftArrow.addEventListener("click", ()=>{
    function findActive(items){
        return items.classList.contains("active");
    }

     let indexOfItem = items.findIndex(findActive);

    switch (indexOfItem){
        case 0:
             console.log("no more items");
         
            break;
        case 1:
            mainImgZoom.style.backgroundImage = 'url("./images/image-product-1.jpg")';
            item1Zoom.classList.add("active");
             border1Zoom.classList.add("active-border");
             item4Zoom.classList.remove("active");
             item3Zoom.classList.remove("active");
             item2Zoom.classList.remove("active");
             border4Zoom.classList.remove("active-border");
             border3Zoom.classList.remove("active-border");
             border2Zoom.classList.remove("active-border");
         
            break;
        case 2:
            mainImgZoom.style.backgroundImage = 'url("./images/image-product-2.jpg")';
            item2Zoom.classList.add("active");
             border2Zoom.classList.add("active-border");
             item4Zoom.classList.remove("active");
             item1Zoom.classList.remove("active");
             item3Zoom.classList.remove("active");
             border4Zoom.classList.remove("active-border");
             border1Zoom.classList.remove("active-border");
             border3Zoom.classList.remove("active-border");
           
            break;
        case 3: 
        mainImgZoom.style.backgroundImage = 'url("./images/image-product-3.jpg")';
        item3Zoom.classList.add("active");
         border3Zoom.classList.add("active-border");
         item4Zoom.classList.remove("active");
         item1Zoom.classList.remove("active");
         item2Zoom.classList.remove("active");
         border4Zoom.classList.remove("active-border");
         border1Zoom.classList.remove("active-border");
         border2Zoom.classList.remove("active-border");
            default:
                console.log("upss");
    }
})






