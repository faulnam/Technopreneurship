 document.addEventListener('DOMContentLoaded', () => {
      const products = [
        {
          name: "Dimsum Mentai",
          desc: "Translucent steamed shrimp dumplings with bamboo shoots",
          price: "$8.99",
          img: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Steamed Shrimp Dumplings",
          category: "favorite"
        },
        {
          name: "Lumpia Udang",
          desc: "Open-faced dumplings with pork, shrimp, and mushroom",
          price: "$7.99",
          img: "https://images.pexels.com/photos/14000383/pexels-photo-14000383.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Pork Siu Mai",
          category: "all"
        },
        {
          name: "Char Siu Bao",
          desc: "Fluffy steamed buns filled with sweet BBQ pork",
          price: "$6.99",
          img: "https://images.pexels.com/photos/6646007/pexels-photo-6646007.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "BBQ Pork Buns",
          category: "favorite"
        },
        {
          name: "Egg Tarts",
          desc: "Delicate pastry shells filled with sweet egg custard",
          price: "$5.99",
          img: "https://images.pexels.com/photos/4552047/pexels-photo-4552047.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Egg Tarts",
          category: "all"
        },
        {
          name: "Spring Rolls",
          desc: "Crispy rolls filled with vegetables and meat",
          price: "$4.99",
          img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Spring Rolls",
          category: "favorite"
        },
        {
          name: "Fried Wontons",
          desc: "Golden fried wontons with savory filling",
          price: "$6.50",
          img: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Fried Wontons",
          category: "all"
        },
        {
          name: "Rice Noodles",
          desc: "Soft rice noodles served with savory sauce",
          price: "$7.50",
          img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Rice Noodles",
          category: "all"
        },
        {
          name: "Pork Buns",
          desc: "Steamed buns filled with seasoned pork",
          price: "$6.00",
          img: "https://images.pexels.com/photos/524740/pexels-photo-524740.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Pork Buns",
          category: "favorite"
        },
        {
          name: "Sesame Balls",
          desc: "Sweet red bean-filled sesame-covered balls",
          price: "$5.00",
          img: "https://images.pexels.com/photos/209088/pexels-photo-209088.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Sesame Balls",
          category: "all"
        },
        {
          name: "Turnip Cake",
          desc: "Pan-fried savory radish cakes",
          price: "$6.25",
          img: "https://images.pexels.com/photos/290316/pexels-photo-290316.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Turnip Cake",
          category: "favorite"
        },
        {
          name: "Char Siu Bao",
          desc: "Fluffy steamed buns filled with sweet BBQ pork",
          price: "$6.99",
          img: "https://images.pexels.com/photos/6646007/pexels-photo-6646007.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "BBQ Pork Buns",
          category: "new"
        },
        {
          name: "Egg Tarts",
          desc: "Delicate pastry shells filled with sweet egg custard",
          price: "$5.99",
          img: "https://images.pexels.com/photos/4552047/pexels-photo-4552047.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Egg Tarts",
          category: "dessert"
        },
        {
          name: "Sesame Balls",
          desc: "Sweet red bean-filled sesame-covered balls",
          price: "$5.00",
          img: "https://images.pexels.com/photos/209088/pexels-photo-209088.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Sesame Balls",
          category: "dessert"
        },
        {
          name: "Turnip Cake",
          desc: "Pan-fried savory radish cakes",
          price: "$6.25",
          img: "https://images.pexels.com/photos/290316/pexels-photo-290316.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Turnip Cake",
          category: "popular"
        },
        {
          name: "Fried Wontons",
          desc: "Golden fried wontons with savory filling",
          price: "$6.50",
          img: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Fried Wontons",
          category: "new"
        },
        {
          name: "Rice Noodles",
          desc: "Soft rice noodles served with savory sauce",
          price: "$7.50",
          img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
          alt: "Rice Noodles",
          category: "popular"
        }
      ];

      const productsGrid = document.getElementById('products-grid');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      const pageInfo = document.getElementById('pageInfo');

      let currentPage = 1;
      let currentCategory = 'all';
      const itemsPerPage = 8;

      function getFilteredProducts() {
        if (currentCategory === 'all') return products;
        return products.filter(p => p.category === currentCategory);
      }

      function renderProducts(page) {
        const filtered = getFilteredProducts();
        const totalPages = Math.ceil(filtered.length / itemsPerPage);
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pagedItems = filtered.slice(start, end);

        productsGrid.style.opacity = 0;
        setTimeout(() => {
          productsGrid.innerHTML = '';
          pagedItems.forEach((p, i) => {
            const card = document.createElement('div');
            card.classList.add('product-card');
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
      prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          renderProducts(currentPage);
        }
      });

      nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(getFilteredProducts().length / itemsPerPage);
        if (currentPage < totalPages) {
          currentPage++;
          renderProducts(currentPage);
        }
      });

      // Filter Buttons
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentCategory = btn.dataset.category;
          currentPage = 1;
          renderProducts(currentPage);
        });
      });

      // Initial render
      renderProducts(currentPage);
    });