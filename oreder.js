// // code for order page begins >>>>>
// let cards=document.querySelectorAll(".cards");
// let order=document.querySelector(".order")
// cards.forEach((ele)=>{
//     ele.addEventListener("click",()=>{
//         window.location.assign("order.html")
//         // let card_img=ele.getElementsByTagName("img")
//         // let card_img_att=card_img.get
        
//         // img_div.classList.add("product-image","img_div")
//         // img_div.setAttribute("src",)
//         // img_div.appendChild(card_img)
        
//         for(let i of products.data){
//             if(ele.id==i.id){
//             let img_div=document.createElement("img");
//             img_div.setAttribute("src",i.image)
//             order.appendChild(img_div)
//             console.log("hello")
//         }
//         else{
//             console.log("not")
//         }
//     }
    
//     // order.appendChild(img_div)
//         // console.log("hello")
//     })
// })
// // code for order page ends >>>>>



for (let i of products.data) {
    // ...

    // Add an event listener to each card
    card.addEventListener("click", function () {
        // Store image source and price in local storage
        localStorage.setItem("selectedProductImage", i.image);
        localStorage.setItem("selectedProductPrice", i.price);

        // Navigate to a new page
        window.location.href = "order.html"; // Change the URL to your product detail page
    });

    // ...
}

// In your productDetailPage.html (or any other product detail page), you can display the image and pricing using the following code:

// Retrieve the image source and price from local storage
const selectedProductImage = localStorage.getItem("selectedProductImage");
const selectedProductPrice = localStorage.getItem("selectedProductPrice");

// Display the image and price on the product detail page
const productImage = document.querySelector(".product-detail-image");
const productPrice = document.querySelector(".product-detail-price");

if (selectedProductImage && selectedProductPrice) {
    productImage.src = selectedProductImage;
    productPrice.textContent = selectedProductPrice;
}