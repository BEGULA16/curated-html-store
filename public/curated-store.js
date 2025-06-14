
/**
 * Handles all curated store logic: category filtering, product rendering, search, and UI animations.
 */

// ---- Data ----
const products = [
  {
    id: 1,
    name: "Sample 1",
    description: "this item is a sample",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item1.html",
    category: "1",
  },
  {
    id: 2,
    name: "Sample 2",
    description: "this item is a sample",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item2.html",
    category: "1",
  },
  {
    id: 3,
    name: "Sample 3",
    description: "this item is a sample",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item3.html",
    category: "1",
  },
  {
    id: 4,
    name: "Sample 4",
    description: "this item is a sample",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item4.html",
    category: "2",
  },
  {
    id: 5,
    name: "Sample 5",
    description: "this item is a sample",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item5.html",
    category: "2",
  },
];

// ---- State ----
let currentCategory = "all";
let searchQuery = "";

// ---- DOM Nodes ----
const productsGrid = () => document.getElementById("products-grid");
const catBarButtons = () => document.querySelectorAll(".category-btn");
const searchInput = () => document.getElementById("search-bar");

// ---- Core Logic ----
function filterProductsBySearchAndCategory(products, query, category) {
  const filtered = products.filter(
    (p) =>
      (!query ||
        p.name.toLowerCase().includes(query.toLowerCase().trim())) &&
      (category === "all" || p.category === category)
  );
  return filtered;
}

function groupProductsByCategory(productsArr) {
  return {
    "1": productsArr.filter((p) => p.category === "1"),
    "2": productsArr.filter((p) => p.category === "2"),
  };
}

function renderProducts(category, query = "") {
  const grid = productsGrid();
  if (!grid) return;
  grid.innerHTML = "";

  // Check for "all" (grouped) or single category mode
  if (category === "all") {
    // Group & show labels
    const filtered = filterProductsBySearchAndCategory(products, query, "all");
    const grouped = groupProductsByCategory(filtered);

    if (filtered.length === 0) {
      const noResults = document.createElement("div");
      noResults.className =
        "flex flex-col items-center justify-center min-h-[200px] w-full animate-fade-in";
      noResults.innerHTML = `
        <svg class="w-14 h-14 mb-2 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="18" stroke="#7f1dff" stroke-width="2.5" fill="none"></circle>
          <path d="M20 20l8 8m0-8l-8 8" stroke="#41d1ff" stroke-width="2.3" stroke-linecap="round"/>
        </svg>
        <div class="text-lg font-semibold gradient-text mb-1">No products found</div>
        <p class="text-sm text-slate-400">Try different search terms or categories.</p>
      `;
      grid.appendChild(noResults);
      return;
    }

    ["1", "2"].forEach((cat) => {
      if (grouped[cat].length === 0) return;
      // Category heading
      const label = document.createElement("h4");
      label.textContent = cat === "1" ? "Category 1" : "Category 2";
      label.className =
        "text-2xl font-bold mt-10 mb-4 gradient-text animate-fade-in";
      grid.appendChild(label);

      // Product grid
      const catGroup = document.createElement("div");
      catGroup.className =
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8";
      grouped[cat].forEach((prod, i) => {
        const node = createProductCard(prod, i);
        catGroup.appendChild(node);
      });
      grid.appendChild(catGroup);
    });
  } else {
    const filtered = filterProductsBySearchAndCategory(
      products,
      query,
      category
    );

    if (filtered.length === 0) {
      const noResults = document.createElement("div");
      noResults.className =
        "flex flex-col items-center justify-center min-h-[200px] w-full animate-fade-in";
      noResults.innerHTML = `
        <svg class="w-14 h-14 mb-2 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="18" stroke="#7f1dff" stroke-width="2.5" fill="none"></circle>
          <path d="M20 20l8 8m0-8l-8 8" stroke="#41d1ff" stroke-width="2.3" stroke-linecap="round"/>
        </svg>
        <div class="text-lg font-semibold gradient-text mb-1">No products found</div>
        <p class="text-sm text-slate-400">Try different search terms or categories.</p>
      `;
      grid.appendChild(noResults);
      return;
    }

    const productGrid = document.createElement("div");
    productGrid.className =
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8";
    filtered.forEach((prod, i) => {
      productGrid.appendChild(createProductCard(prod, i));
    });
    grid.appendChild(productGrid);
  }
}

function createProductCard(prod, i) {
  const a = document.createElement("a");
  a.href = prod.link;
  a.className =
    "group product-card rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl focus-visible:outline-fuchsia-400 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 will-change-transform animate-fade-in";
  a.setAttribute("data-category", prod.category);
  a.style.animationDelay = `${(i % 4) * 0.07 + 0.01}s`;

  a.innerHTML = `
      <div class="aspect-square overflow-hidden bg-[#090912] border-b-[1.2px] border-[#222143]">
          <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover transition-transform duration-300 rounded-2xl group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-110" />
      </div>
      <div class="p-6">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 group-hover:scale-105 transition-all font-playfair">${prod.name}</h3>
          <p class="text-slate-300 mb-4 line-clamp-2 group-hover:text-indigo-100 transition-colors duration-200">${prod.description}</p>
          <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-[#43ffae] group-hover:text-[#3be0d0] transition-colors">$${prod.price}</span>
              <span class="card-btn bg-[#111] border border-cyan-700 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium shadow transition-all group-hover:bg-cyan-500 group-hover:text-[#fff] animate-pulse">View Details</span>
          </div>
      </div>
  `;
  return a;
}

// ---- Event Logic ----
function setCategory(category) {
  currentCategory = category;
  catBarButtons().forEach((btn) => {
    btn.classList.toggle("selected", btn.getAttribute("data-category") === category);
  });
  renderProducts(currentCategory, searchQuery);
}

function onSearchInput(e) {
  searchQuery = e.target.value || "";
  renderProducts(currentCategory, searchQuery);
}

// ---- Initialization ----
document.addEventListener("DOMContentLoaded", function () {
  // Animate elements on appear:
  setTimeout(() => {
    document.querySelectorAll("[data-animate]").forEach((el) => {
      el.classList.add("animate-fade-in");
    });
  }, 180);

  // Render products (default ALL)
  renderProducts("all", "");

  // Category toggle
  document.getElementById("cat-btn-all").addEventListener("click", () => setCategory("all"));
  document.getElementById("cat-btn-1").addEventListener("click", () => setCategory("1"));
  document.getElementById("cat-btn-2").addEventListener("click", () => setCategory("2"));

  // Search bar event
  searchInput().addEventListener("input", onSearchInput);

  // Nav responsive
  document.addEventListener("click", function (e) {
    if (window.innerWidth > 768) return;
    const navLinks = document.querySelector(".navbar-links");
    const navToggle = document.querySelector(".nav-toggle");
    if (!navLinks || !navToggle) return;
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove("open");
    }
  });
});
