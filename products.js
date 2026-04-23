// Products module
const Products = {
  data: [],

  async load() {
    try {
      const base = getAbsoluteBase();
      const res = await fetch(base + 'data/products.json');
      if (!res.ok) throw new Error('HTTP ' + res.status);
      this.data = await res.json();
      return this.data;
    } catch (err) {
      console.error('Gagal memuat produk:', err);
      // Fallback: coba path relatif
      try {
        const fallback = getBasePath();
        const res = await fetch(fallback + 'data/products.json');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        this.data = await res.json();
        return this.data;
      } catch (err2) {
        console.error('Fallback juga gagal:', err2);
        this.data = [];
        return [];
      }
    }
  },

  getAll() { return this.data; },

  getById(id) { return this.data.find(p => p.id === parseInt(id)); },

  getCategories() {
    return [...new Set(this.data.map(p => p.category))];
  },

  filter({ search = '', category = '', minPrice = 0, maxPrice = Infinity, sort = '' } = {}) {
    let result = [...this.data];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (category) {
      result = result.filter(p => p.category === category);
    }
    result = result.filter(p => p.price >= minPrice && p.price <= maxPrice);

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    else if (sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  },

  formatPrice(price) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  },

  renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < 5; i++) {
      if (i < full) stars += '<span class="text-yellow-400">★</span>';
      else if (i === full && half) stars += '<span class="text-yellow-400">½</span>';
      else stars += '<span class="text-gray-300">★</span>';
    }
    return stars;
  },

  renderCard(product, basePath = '') {
    const inWishlist = Storage.getWishlist().some(w => w.id === product.id);
    return `
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer product-card" data-id="${product.id}">
        <div class="relative overflow-hidden">
          <img src="${product.image}" alt="${product.name}" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
          <span class="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-2 py-1 rounded-full">${product.category}</span>
          <button class="wishlist-btn absolute top-3 right-3 bg-white dark:bg-gray-700 rounded-full p-2 shadow hover:scale-110 transition-transform" data-id="${product.id}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ${inWishlist ? 'text-red-500 fill-red-500' : 'text-gray-400'}" viewBox="0 0 24 24" stroke="currentColor" fill="${inWishlist ? 'currentColor' : 'none'}">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
        </div>
        <div class="p-4">
          <h3 class="font-semibold text-gray-800 dark:text-white text-sm mb-1 line-clamp-2">${product.name}</h3>
          <div class="flex items-center gap-1 mb-2 text-xs">${this.renderStars(product.rating)} <span class="text-gray-500 dark:text-gray-400">(${product.rating})</span></div>
          <p class="text-indigo-600 dark:text-indigo-400 font-bold text-base mb-3">${this.formatPrice(product.price)}</p>
          <button class="add-to-cart-btn w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-xl transition-colors" data-id="${product.id}">
            + Keranjang
          </button>
        </div>
      </div>
    `;
  }
};
