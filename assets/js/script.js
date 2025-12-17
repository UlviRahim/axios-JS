const products = document.querySelector(".products");
async function com() {
  const endpoint = "https://dummyjson.com/products";
  const res = await axios(endpoint);
  const data = res.data.products;
  data.forEach((element) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${element.thumbnail}" alt="">
      <h3>${element.title}</h3>
      <p>${element.description}</p>
      <span>$${element.price}</span>

        `;
    products.appendChild(card);
  });
}
window.onload = com;
