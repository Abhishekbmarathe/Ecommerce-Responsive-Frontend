
// creating cards and appending starts

let products = {
    data: [
        {
            productname: "i phone",
            category: "mobile",
            price: "$200",
            image: "resources/ap_1.jpg",
            id: "p1"
        },
        {
            productname: "i phone",
            category: "mobile",
            price: "$200",
            image: "resources/ap_2.jpg",
            id: "p2"

        },
        {
            productname: "computer",
            category: "desktop",
            price: "$20",
            image: "resources/apple_1.jpg",
            id: "p3"

        },
        {
            productname: "computer",
            category: "desktop",
            price: "$200",
            image: "resources/apple_2.jpg",
            id: "p4"

        },
        {
            productname: "dslr",
            category: "Camera",
            price: "$200",
            image: "resources/cam_1.jpg",
            id: "p5"

        },
        {
            productname: "dslr",
            category: "Camera",
            price: "$200",
            image: "resources/ca_2.jpg",
            id: "p6"

        },
        {
            productname: "dslr",
            category: "Camera",
            price: "$200",
            image: "resources/ca_3.jpg",
            id: "p7"

        },
        {
            productname: "dslr",
            category: "Camera",
            price: "$160",
            image: "resources/ca_4.jpg",
            id: "p8"

        },
        {
            productname: "headphones",
            category: "headphone",
            price: "$200",
            image: "resources/ha_1.jpg",
            id: "p9"

        },
        {
            productname: "headphones",
            category: "headphone",
            price: "$200",
            image: "resources/ha_2.jpg",
            id: "p10"

        },
        {
            productname: "headphones",
            category: "headphone",
            price: "$200",
            image: "resources/ha_3.jpg",
            id: "p11"

        },
        {
            productname: "headphones",
            category: "headphone",
            price: "$200",
            image: "resources/ha_4.jpg",
            id: "p12"

        },
        {
            productname: "watch",
            category: "watch",
            price: "$200",
            image: "resources/wa_1.jpg",
            id: "p13"

        },
        {
            productname: "watch",
            category: "watch",
            price: "$200",
            image: "resources/wa_2.jpg",
            id: "p14"

        },
        {
            productname: "watch",
            category: "watch",
            price: "$200",
            image: "resources/wa_3.jpg",
            id: "p15"

        },
        {
            productname: "dslr",
            category: "Camera",
            price: "$200",
            image: "resources/ca_4.jpg",
            id: "p16"

        },

        {
            productname: "mobile",
            category: "mobile",
            price: "$250",
            image: "resources/ap_4.jpg",
            id: "p17"

        },
        {
            productname: "dslr",
            category: "Camera",
            price: "$20",
            image: "resources/ca_5.jpg",
            id: "p18"

        },
        {
            productname: "mobile",
            category: "mobile",
            price: "$200",
            image: "resources/ap_3.jpg",
            id: "p19"

        },
        {
            productname: "computer",
            category: "desktop",
            price: "$200",
            image: "resources/apple_3.jpg",
            id: "p20"

        },
        {
            productname: "computer",
            category: "desktop",
            price: "$200",
            image: "resources/apple_4.jpg",
            id: "p21"

        },

    ],
}
for (let i of products.data) {
    // creating elements starts

    let card = document.createElement("div")
    let imag = document.createElement("img")
    let product_info = document.createElement("div")
    let h2 = document.createElement("h2")
    let product_ratings = document.createElement("div")
    let product_price = document.createElement("p")

    // creating elements ends

    // setting attribues to elemnts starts

    card.classList.add("card", i.category)
    card.id = i.id
    // console.log(card.id)
    imag.setAttribute("class", "product-image")
    imag.setAttribute("src", i.image)
    product_info.setAttribute("class", "product-info")

    h2.setAttribute("class", "product-name")
    h2.innerHTML = i.productname

    product_ratings.setAttribute("class", "product-ratings")
    product_ratings.setAttribute("id", "ratings")

    product_price.setAttribute("class", "product-price")
    product_price.innerHTML = i.price

    // setting attribues to elemnts ends

    // adding all created elements to cards div starts

    card.appendChild(imag)
    card.appendChild(product_info)
    product_info.appendChild(h2)
    product_info.appendChild(product_ratings)
    product_info.appendChild(product_price)

    let cards_section = document.querySelector(".cards")
    cards_section.appendChild(card)
    // adding all created elements to cards div ends
// Add this code inside your loop that creates cards and appends them

    



};

// creating cards and appending ends










//  code for category buttons starts


function filterProducts(value) {
    let all_prdts = document.querySelector(".ap span")
    let cat_btns = document.querySelectorAll('.cat_btns')
    cat_btns.forEach(btn => {
        if (value.toUpperCase() == btn.innerText.toUpperCase()) {
            btn.classList.add("active")
            all_prdts.innerText = btn.innerText
        }
        else {
            btn.classList.remove("active")
        }
    })

    // selecting all the cards and filtering starts
    let elem = document.querySelectorAll(".card")

    elem.forEach((element) => {

        if (value == "All") {
            element.classList.remove("hide")
        }
        else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide")
            }
            else {
                element.classList.add("hide")
            }
        }

    })
    // selecting all the cards and filtering end
}
window.onload = () => {
    filterProducts('All')
}
//  code for category buttons ends 

// slider starts
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].style.transform = 'translateX(-100%)';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.transform = 'translateX(0)';
}
setInterval(nextSlide, 1000);
// slider ends

// targeting search bar and making functional

// function search_items() {
//     let search_btn = document.querySelector(".search")
//     let search_bar = document.querySelector(".search_bar").value;
//     let cards = document.querySelectorAll(".card");

//     cards.forEach((ele) => {

//         // for(let i of products.data){
//         // if(i.productname.toUpperCase().includes(search_bar.toUpperCase())||i.category.toUpperCase().includes(search_bar.toUpperCase()))
//         if (ele.classList.contains(search_bar)) {
//             console.log(i)
//             ele.classList.remove("hide")

//         }
//         else {
//             console.log("notincludes")
//             ele.classList.add("hide")

//         }
//         // }
//     })
// }


