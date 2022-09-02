const Cards = document.querySelector(".card-container");

// export const topStoreData = [
//   { shop: "Amazon", cashback: "Rs. 200 cashback", img: "./assets/1.PNG" },
//   { shop: "Behrous", cashback: "Rs. 200 cashback", img: "./assets/2.PNG" },
//   { shop: "Big bazar", cashback: "Rs. 200 cashback", img: "./assets/3.PNG" },
//   { shop: "Smytten", cashback: "Rs. 200 cashback", img: "./assets/4.PNG" },
//   { shop: "Clear", cashback: "Rs. 200 cashback", img: "./assets/5.PNG" },
//   { shop: "Dineout", cashback: "Rs. 200 cashback", img: "./assets/6.PNG" },
//   { shop: "Grofers", cashback: "Rs. 200 cashback", img: "./assets/7.PNG" },
//   { shop: "Man arden", cashback: "Rs. 200 cashback", img: "./assets/8.PNG" },
//   { shop: "Myntra", cashback: "Rs. 200 cashback", img: "./assets/9.PNG" },
//   { shop: "Jockey", cashback: "Rs. 200 cashback", img: "./assets/10.PNG" },
// ];

let c1 = ["./assets/1.PNG", "Rs. 200 cashback", "See all offers"];
let c2 = ["./assets/2.PNG", "Rs. 200 cashback", "See all offers"];
let c3 = ["./assets/3.PNG", "Rs. 200 cashback", "See all offers"];
let c4 = ["./assets/4.PNG", "Rs. 200 cashback", "See all offers"];
let c5 = ["./assets/5.PNG", "Rs. 200 cashback", "See all offers"];
let c6 = ["./assets/6.PNG", "Rs. 200 cashback", "See all offers"];
let c7 = ["./assets/7.PNG", "Rs. 200 cashback", "See all offers"];
let c8 = ["./assets/8.PNG", "Rs. 200 cashback", "See all offers"];
let c9 = ["./assets/9.PNG", "Rs. 200 cashback", "See all offers"];
let c10 = ["./assets/10.PNG", "Rs. 200 cashback", "See all offers"];

function storeCard([img, cashback, offer]) {
  let code = `
    <div class="card">
    <img src="${img}"  />
    <p>${cashback}</p>
    <h6>See All Offers</h6>
    </div>
`;
  Cards.innerHTML += code;
}

storeCard(c1);
