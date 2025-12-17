const container = document.querySelector(".container");
//axios
async function getProductsByAxios() {
  const endpoint = "https://fakestoreapi.com/products";
  const res = await axios(endpoint);
  const data = await res.data;
  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList = "product-card";
    card.innerHTML = `
                    <img src="${element.image}" alt="">
                    <p>${element.title}</p>
                    <p>${
                      element.description.length > 20
                        ? element.description.slice(0, 20) + "..."
                        : element.description
                    }</p>
                    <span>${element.price}</span>
                    <button class="product-card_btn">Buy</button>
                    `;
    container.appendChild(card);
  });
}
window.onload = () => getProductsByAxios();
