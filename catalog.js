
document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      name: "Протеїн Optimum Nutrition",
      price: 1200,
      img: "https://via.placeholder.com/200x150?text=Протеїн",
      desc: "Сироватковий протеїн 100% Whey Gold Standard, 900 г"
    },
    {
      name: "Гантелі 10 кг",
      price: 850,
      img: "https://via.placeholder.com/200x150?text=Гантелі",
      desc: "Регульовані гантелі для домашнього тренування"
    },
    {
      name: "Фітнес резинки",
      price: 300,
      img: "https://via.placeholder.com/200x150?text=Резинки",
      desc: "Набір з 5 фітнес-резинок різного опору"
    }
  ];

  const container = document.getElementById("product-list");
  products.forEach(p => {
    const el = document.createElement("div");
    el.className = "col-md-4 mb-4";
    el.innerHTML = `
      <div class="card h-100">
        <img src="${p.img}" class="card-img-top" alt="${p.name}">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">${p.desc}</p>
          <p class="text-primary fw-bold">${p.price} грн</p>
          <a href="product.html" class="btn btn-success">Детальніше</a>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
});
