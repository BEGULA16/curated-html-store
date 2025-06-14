/**
 * Handles all curated store logic: category filtering, product rendering, search, and UI animations.
 */

// ---- Data ----
const products = [
  {
    id: 1,
    name: "Sample 1",
    description: "Gorgeous ultralight lamp with ambient glow.",
    price: 120,
    image: "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item1.html",
    category: "1"
  },
  {
    id: 2,
    name: "Sample 2",
    description: "Handcrafted walnut tray, premium finish.",
    price: 90,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item2.html",
    category: "1"
  },
  {
    id: 3,
    name: "Sample 3",
    description: "Elegant glass vase with vintage finish.",
    price: 50,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item3.html",
    category: "2"
  },
  {
    id: 4,
    name: "Sample 4",
    description: "Ultra-soft cotton towel set.",
    price: 35,
    image: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item4.html",
    category: "2"
  },
  {
    id: 5,
    name: "Sample 5",
    description: "Minimalist oak desk clock.",
    price: 70,
    image: "https://images.unsplash.com/photo-1455656678494-4d1ef1c6f88e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item5.html",
    category: "2"
  },
  // New products:
  {
    id: 6,
    name: "Sample 6",
    description: "Portable Bluetooth speaker, modern style.",
    price: 110,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item1.html",
    category: "3"
  },
  {
    id: 7,
    name: "Sample 7",
    description: "Designer ceramic plate, blue blossom motif.",
    price: 45,
    image: "https://images.unsplash.com/photo-1511689660979-2cd30701e126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item2.html",
    category: "3"
  },
  {
    id: 8,
    name: "Sample 8",
    description: "Natural linen pillow cover.",
    price: 28,
    image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item3.html",
    category: "4"
  },
  {
    id: 9,
    name: "Sample 9",
    description: "Retro teal kettle, induction compatible.",
    price: 60,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item4.html",
    category: "4"
  },
  {
    id: 10,
    name: "Sample 10",
    description: "Wireless charging pad, compact.",
    price: 40,
    image: "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item5.html",
    category: "5"
  },
  {
    id: 11,
    name: "Sample 11",
    description: "Bamboo bath caddy, bathtub tray.",
    price: 54,
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item1.html",
    category: "5"
  },
  {
    id: 12,
    name: "Sample 12",
    description: "Eco friendly reusable water bottle.",
    price: 32,
    image: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item2.html",
    category: "6"
  },
  {
    id: 13,
    name: "Sample 13",
    description: "Silicone kitchen utensil set.",
    price: 62,
    image: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item3.html",
    category: "6"
  },
  {
    id: 14,
    name: "Sample 14",
    description: "Brushed steel insulated mug.",
    price: 25,
    image: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item4.html",
    category: "7"
  },
  {
    id: 15,
    name: "Sample 15",
    description: "Modern desk organizer, modular set.",
    price: 75,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "items/item5.html",
    category: "7"
  }
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
  const result = {};
  for (let cat = 1; cat <= 7; cat++) {
    result[String(cat)] = productsArr.filter((p) => p.category === String(cat));
  }
  return result;
}

function renderProducts(category, query = "") {
  const grid = productsGrid();
  if (!grid) return;
  grid.innerHTML = "";

  if (category === "all") {
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

    for (let cat = 1; cat <= 7; cat++) {
      const groupList = grouped[String(cat)];
      if (!groupList || groupList.length === 0) continue;
      const label = document.createElement("h4");
      label.textContent = `Category ${cat}`;
      label.className =
        "text-2xl font-bold mt-10 mb-4 gradient-text animate-fade-in";
      grid.appendChild(label);

      const catGroup = document.createElement("div");
      catGroup.className =
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8";
      groupList.forEach((prod, i) => {
        const node = createProductCard(prod, i);
        catGroup.appendChild(node);
      });
      grid.appendChild(catGroup);
    }
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
  for(let c = 1; c <= 7; c++) {
    document.getElementById(`cat-btn-${c}`).addEventListener("click", () => setCategory(String(c)));
  }

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
