const categoryFilterEl = document.getElementById("category-filter");
const productsEl = document.getElementById("products");

categoryFilterEl.addEventListener("change", () => {
  const category = categoryFilterEl.value;
  productsEl.innerHTML = "Loading...";

  fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      productsEl.innerHTML = "";

      for (let i = 0; i < data.products.length; i++) {
        const title = data.products[i].title;
        const description = data.products[i].description;
        const thumbnail = data.products[i].thumbnail;
        const price = data.products[i].price;
        const brand = data.products[i].brand;

        const productEl = document.createElement("div");
        productEl.className = "product";

        const productImageEl = document.createElement("img");
        productImageEl.src = thumbnail;
        productImageEl.alt = title;

        const productTitleEl = document.createElement("h3");
        productTitleEl.textContent = title;

        const productDescriptionEl = document.createElement("p");
        productDescriptionEl.textContent = description;

        const productPriceEl = document.createElement("p");
        productPriceEl.textContent = `$${price}`;

        const productBrandEl = document.createElement("p");
        productBrandEl.textContent = brand;

        productEl.appendChild(productImageEl);
        productEl.appendChild(productTitleEl);
        productEl.appendChild(productDescriptionEl);
        productEl.appendChild(productPriceEl);
        productEl.appendChild(productBrandEl);

        productsEl.appendChild(productEl);
      }
    });
});
