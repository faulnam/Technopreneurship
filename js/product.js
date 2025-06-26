document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "Dimsum Mentai",
      desc: "Delicious shrimp dumplings topped with spicy mentaiko sauce",
      price: "$8.99",
      img: "/assets/images/dimsummentai.jpg",
      alt: "Dimsum Mentai",
      category: "favorite",
    },

    {
      name: "Lumpia Udang",
      desc: "Light and crispy spring rolls filled with shrimp",
      price: "$7.99",
      img: "/assets/images/lumpiaudang.jpg",
      alt: "lumpia udang",
      category: "all",
    },
    {
      name: "Char Siu Bao",
      desc: "Delicious shrimp dumplings topped with spicy chili oil sauce",
      price: "$6.99",
      img: "/assets/images/dimsumchilioil.jpg",
      alt: "Dimsum Chili Oil",
      category: "favorite",
    },
   
  ];

  const productsGrid = document.getElementById("products-grid");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageInfo = document.getElementById("pageInfo");

  let currentPage = 1;
  let currentCategory = "all";
  const itemsPerPage = 8;

  function getFilteredProducts() {
    if (currentCategory === "all") return products;
    return products.filter((p) => p.category === currentCategory);
  }

  function renderProducts(page) {
    const filtered = getFilteredProducts();
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pagedItems = filtered.slice(start, end);

    productsGrid.style.opacity = 0;
    setTimeout(() => {
      productsGrid.innerHTML = "";
      pagedItems.forEach((p, i) => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.style.animationDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <div class="product-img">
              <img src="${p.img}" alt="${p.alt}" />
            </div>
            <div class="product-info">
              <h3>${p.name}</h3>
              <p>${p.desc}</p>
              <span class="price">${p.price}</span>
            </div>
          `;
        productsGrid.appendChild(card);
      });

      pageInfo.textContent = `Page ${page} of ${totalPages}`;
      prevBtn.disabled = page === 1;
      nextBtn.disabled = page === totalPages;
      productsGrid.style.opacity = 1;
    }, 200);
  }

  // Button event listeners
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts(currentPage);
    }
  });

  nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(getFilteredProducts().length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderProducts(currentPage);
    }
  });

  // Filter Buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      currentPage = 1;
      renderProducts(currentPage);
    });
  });

  // Initial render
  renderProducts(currentPage);
});
