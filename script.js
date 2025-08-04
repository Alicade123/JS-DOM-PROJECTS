//1. Hello World
// console.log("Hello Alicade");

//2. Selecting Elements
// function changeAllArticleColors() {
//   const results = document.querySelectorAll("#products article");
//   for (const element of results) {
//     element.classList.add("sale");
//   }

// }
// changeAllArticleColors();

//3. Events
// function attachByEvents() {
//   const buttons = document.getElementsByClassName("buy");
//   for (const button of buttons) {
//     // button.addEventListener("click", function (){
//     //     console.log(this);
//     // })
//     button.addEventListener("click", function (event) {
//       //   console.log(event);
//       console.log(event.currentTarget);
//     });
//   }
// }
// attachByEvents();

//4. Attributes

// function attachByEvents() {
//   const buttons = document.getElementsByClassName("buy");
//   for (const button of buttons) {
//     button.addEventListener("click", function (event) {
//       console.log(button.parentElement.textContent);
//       button.parentElement.classList.toggle("sale");
//       const data_id = button.parentElement.getAttribute("data-id");
//       console.log(data_id);
//     });
//   }
// }
// attachByEvents();

// 5. Creating Elements

function attachByEvents() {
  const buttons = document.getElementsByClassName("buy");
  const tbody = document.querySelector("#cart tbody");
  const cartTotal = document.getElementById("cart-total");
  for (const button of buttons) {
    button.addEventListener("click", function () {
      const article = button.parentElement;
      // article.classList.toggle("sale");

      const id = article.getAttribute("data-id");
      const name = article.querySelector("h2").textContent;
      const price = parseFloat(article.querySelector(".price").textContent);
      const quantity = parseInt(article.querySelector(".quantity").value);
      const total = price * quantity;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td>${total}</td>
        <td><button class="remove">Remove</button></td>
      `;

      tbody.appendChild(tr);

      updateCartTotal();

      tr.querySelector(".remove").addEventListener("click", function () {
        tr.remove();
        updateCartTotal();
      });
    });
  }

  function updateCartTotal() {
    let total = 0;
    const rows = tbody.querySelectorAll("tr");
    for (const row of rows) {
      const itemTotal = parseFloat(row.children[4].textContent);
      total += itemTotal;
    }
    cartTotal.textContent = total.toFixed(2);
  }
}
attachByEvents();
