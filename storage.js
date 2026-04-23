// Storage utility functions
const Storage = {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(key);
  },

  // Users
  getUsers() { return this.get('users') || []; },
  saveUsers(users) { this.set('users', users); },

  // Session
  getSession() { return this.get('session'); },
  saveSession(user) { this.set('session', user); },
  clearSession() { this.remove('session'); },

  // Cart
  getCart() { return this.get('cart') || []; },
  saveCart(cart) { this.set('cart', cart); },
  clearCart() { this.remove('cart'); },

  // Orders
  getOrders() { return this.get('orders') || []; },
  saveOrders(orders) { this.set('orders', orders); },

  // Wishlist
  getWishlist() { return this.get('wishlist') || []; },
  saveWishlist(wishlist) { this.set('wishlist', wishlist); },

  // Theme
  getTheme() { return this.get('theme') || 'light'; },
  saveTheme(theme) { this.set('theme', theme); }
};
