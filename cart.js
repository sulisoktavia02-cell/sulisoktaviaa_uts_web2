// Cart module
const Cart = {
  getItems() {
    return Storage.getCart();
  },

  addItem(product, quantity = 1) {
    const cart = this.getItems();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    Storage.saveCart(cart);
    this.updateBadge();
    Toast.show('Produk ditambahkan ke keranjang!', 'success');
  },

  removeItem(productId) {
    const cart = this.getItems().filter(item => item.id !== productId);
    Storage.saveCart(cart);
    this.updateBadge();
  },

  updateQuantity(productId, quantity) {
    const cart = this.getItems();
    const item = cart.find(i => i.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
        return;
      }
      item.quantity = quantity;
      Storage.saveCart(cart);
      this.updateBadge();
    }
  },

  getTotal() {
    return this.getItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  getTotalItems() {
    return this.getItems().reduce((sum, item) => sum + item.quantity, 0);
  },

  clear() {
    Storage.clearCart();
    this.updateBadge();
  },

  updateBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
      const count = this.getTotalItems();
      badge.textContent = count;
      badge.classList.toggle('hidden', count === 0);
    }
  }
};
