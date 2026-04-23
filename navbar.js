// Navbar component
function renderNavbar(activePage = '') {
  const user = Auth.getCurrentUser();
  const base = getBasePath();
  const cartCount = Cart.getTotalItems();

  const navHTML = `
    <nav class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <a href="${base}index.html" class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            ShopKu
          </a>

          <div class="hidden md:flex items-center gap-6">
            <a href="${base}index.html" class="text-sm font-medium ${activePage === 'home' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'} transition-colors">Beranda</a>
            ${user ? `
              <a href="${base}pages/orders.html" class="text-sm font-medium ${activePage === 'orders' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'} transition-colors">Pesanan</a>
              <a href="${base}pages/wishlist.html" class="text-sm font-medium ${activePage === 'wishlist' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'} transition-colors">Wishlist</a>
            ` : ''}
          </div>

          <div class="flex items-center gap-3">
            <button id="theme-toggle" class="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            </button>

            ${user ? `
              <a href="${base}pages/cart.html" class="relative p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span id="cart-badge" class="${cartCount === 0 ? 'hidden' : ''} absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">${cartCount}</span>
              </a>
              <div class="relative group">
                <button class="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <div class="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    ${user.name.charAt(0).toUpperCase()}
                  </div>
                  <span class="hidden sm:block">${user.name.split(' ')[0]}</span>
                </button>
                <div class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div class="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                    <p class="text-sm font-semibold text-gray-800 dark:text-white">${user.name}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">${user.email}</p>
                  </div>
                  <a href="${base}pages/orders.html" class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                    Riwayat Pesanan
                  </a>
                  <button id="logout-btn" class="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 rounded-b-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                    Logout
                  </button>
                </div>
              </div>
            ` : `
              <a href="${base}pages/login.html" class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Login</a>
              <a href="${base}pages/register.html" class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors">Daftar</a>
            `}

            <!-- Mobile menu button -->
            <button id="mobile-menu-btn" class="md:hidden p-2 text-gray-600 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden md:hidden pb-4 border-t border-gray-100 dark:border-gray-700 mt-2 pt-2">
          <a href="${base}index.html" class="block py-2 text-sm text-gray-700 dark:text-gray-300">Beranda</a>
          ${user ? `
            <a href="${base}pages/orders.html" class="block py-2 text-sm text-gray-700 dark:text-gray-300">Pesanan</a>
            <a href="${base}pages/wishlist.html" class="block py-2 text-sm text-gray-700 dark:text-gray-300">Wishlist</a>
            <button id="logout-btn-mobile" class="block py-2 text-sm text-red-600 w-full text-left">Logout</button>
          ` : `
            <a href="${base}pages/login.html" class="block py-2 text-sm text-gray-700 dark:text-gray-300">Login</a>
            <a href="${base}pages/register.html" class="block py-2 text-sm text-gray-700 dark:text-gray-300">Daftar</a>
          `}
        </div>
      </div>
    </nav>
    <div id="toast-container" class="fixed top-20 right-4 z-50 flex flex-col gap-2 max-w-xs w-full"></div>
  `;

  const navEl = document.getElementById('navbar');
  if (navEl) navEl.innerHTML = navHTML;

  // Events
  document.getElementById('theme-toggle')?.addEventListener('click', () => Theme.toggle());
  document.getElementById('logout-btn')?.addEventListener('click', () => Auth.logout());
  document.getElementById('logout-btn-mobile')?.addEventListener('click', () => Auth.logout());
  document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
  });

  Theme.updateIcon();
}
