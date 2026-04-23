// Authentication module
const Auth = {
  register(name, email, password) {
    const users = Storage.getUsers();
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Email sudah terdaftar.' };
    }
    if (password.length < 6) {
      return { success: false, message: 'Password minimal 6 karakter.' };
    }
    const user = { id: Date.now(), name, email, password, createdAt: new Date().toISOString() };
    users.push(user);
    Storage.saveUsers(users);
    return { success: true, message: 'Registrasi berhasil!' };
  },

  login(email, password) {
    const users = Storage.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return { success: false, message: 'Email atau password salah.' };
    }
    const session = { id: user.id, name: user.name, email: user.email };
    Storage.saveSession(session);
    return { success: true, user: session };
  },

  logout() {
    Storage.clearSession();
    Storage.clearCart();
    window.location.href = getBasePath() + 'pages/login.html';
  },

  isLoggedIn() {
    return !!Storage.getSession();
  },

  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = getBasePath() + 'pages/login.html';
      return false;
    }
    return true;
  },

  getCurrentUser() {
    return Storage.getSession();
  }
};

function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/pages/')) return '../';
  return './';
}

function getAbsoluteBase() {
  // Resolves the root of the project regardless of GitHub Pages subdirectory
  const path = window.location.pathname;
  if (path.includes('/pages/')) {
    // e.g. /shopku/pages/cart.html -> /shopku/
    return path.substring(0, path.indexOf('/pages/')) + '/';
  }
  // e.g. /shopku/ or /shopku/index.html -> /shopku/
  const lastSlash = path.lastIndexOf('/');
  return path.substring(0, lastSlash + 1);
}
