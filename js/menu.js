// Sweet Kitchen - Menu Page Functionality

let cart = [];
let displayedItems = [...menuItems];

// Initialize menu page
document.addEventListener('DOMContentLoaded', () => {
  initCategoryTabs();
  initSearchAndFilter();
  renderMenuItems(menuItems);
  loadCartFromStorage();
});

// Initialize category tabs
function initCategoryTabs() {
  const categories = getCategories();
  const tabsContainer = document.getElementById('category-tabs');

  // Add "All" tab
  const allTab = document.createElement('button');
  allTab.className = 'category-tab active';
  allTab.textContent = 'All';
  allTab.dataset.category = 'all';
  allTab.addEventListener('click', () => filterByCategory('all'));
  tabsContainer.appendChild(allTab);

  // Add category tabs
  categories.forEach(category => {
    const tab = document.createElement('button');
    tab.className = 'category-tab';
    tab.textContent = category;
    tab.dataset.category = category;
    tab.addEventListener('click', () => filterByCategory(category));
    tabsContainer.appendChild(tab);
  });
}

// Filter by category
function filterByCategory(category) {
  // Update active tab
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  event.target.classList.add('active');

  // Filter items
  if (category === 'all') {
    displayedItems = [...menuItems];
  } else {
    displayedItems = getItemsByCategory(category);
  }

  // Reset search and filters
  document.getElementById('search-input').value = '';
  document.getElementById('veg-filter').value = '';
  document.getElementById('sort-filter').value = '';

  renderMenuItems(displayedItems);

  // Track event
  trackEvent('category_filter', {
    category: category
  });
}

// Initialize search and filter
function initSearchAndFilter() {
  const searchInput = document.getElementById('search-input');
  const vegFilter = document.getElementById('veg-filter');
  const sortFilter = document.getElementById('sort-filter');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    applyFilters(query, vegFilter.value, sortFilter.value);
  });

  vegFilter.addEventListener('change', (e) => {
    applyFilters(searchInput.value, e.target.value, sortFilter.value);
  });

  sortFilter.addEventListener('change', (e) => {
    applyFilters(searchInput.value, vegFilter.value, e.target.value);
  });
}

// Apply all filters
function applyFilters(searchQuery, vegFilter, sortBy) {
  let filtered = [...displayedItems];

  // Search
  if (searchQuery) {
    filtered = searchItems(searchQuery);
  }

  // Veg filter
  const vegFilterValue = vegFilter === 'veg' ? true : vegFilter === 'nonveg' ? false : null;
  filtered = filterItems(filtered, {
    veg: vegFilterValue,
    sortBy: sortBy || ''
  });

  renderMenuItems(filtered);

  trackEvent('menu_filter', {
    search_query: searchQuery || 'none',
    veg_filter: vegFilter || 'all',
    sort: sortBy || 'default'
  });
}

// Render menu items
function renderMenuItems(items) {
  const container = document.getElementById('menu-items');
  container.innerHTML = '';

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <h3>No items found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    `;
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="card-img">
      <div class="card-content">
        <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem; flex-wrap: wrap;">
          <span class="badge ${item.veg ? 'badge-veg' : 'badge-nonveg'}">
            ${item.veg ? '🥬 Veg' : '🍗 Non-Veg'}
          </span>
          ${item.popular ? '<span class="badge badge-popular">Popular</span>' : ''}
        </div>
        <h3 class="card-title">${item.name}</h3>
        <p class="card-description">${item.description}</p>
        <div class="card-footer">
          <span class="card-price">${SK.formatPrice(item.price)}</span>
          <button class="btn-primary btn-sm" onclick="addToCart(${item.id})" style="padding: 6px 12px;">Add</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Add item to cart
function addToCart(itemId) {
  const item = menuItems.find(i => i.id === itemId);
  if (!item) return;

  // Check if item already in cart
  const existingItem = cart.find(i => i.id === itemId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  openCart();

  trackEvent('item_added_to_cart', {
    item_name: item.name,
    item_price: item.price
  });
}

// Remove item from cart
function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  saveCartToStorage();
  updateCartUI();

  trackEvent('item_removed_from_cart', {
    item_id: itemId
  });
}

// Update cart UI
function updateCartUI() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  // Update cart count badge
  if (cartCount) {
    if (cart.length > 0) {
      cartCount.textContent = cart.length;
      cartCount.style.display = 'flex';
    } else {
      cartCount.style.display = 'none';
    }
  }

  cartItemsContainer.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">Cart is empty</p>';
  } else {
    cart.forEach(item => {
      total += item.price * item.quantity;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div style="display: flex; gap: 1rem;">
            <span>Qty: ${item.quantity}</span>
            <span class="cart-item-price">${SK.formatPrice(item.price * item.quantity)}</span>
          </div>
        </div>
        <button class="cart-remove" onclick="removeFromCart(${item.id})">✕</button>
      `;
      cartItemsContainer.appendChild(itemEl);
    });
  }

  cartTotal.textContent = SK.formatPrice(total);

  // Show/hide empty state
  const cartEmpty = document.getElementById('cart-empty');
  const cartCheckout = document.getElementById('cart-checkout');
  if (cart.length === 0) {
    cartEmpty.style.display = 'block';
    cartCheckout.style.display = 'none';
  } else {
    cartEmpty.style.display = 'none';
    cartCheckout.style.display = 'block';
  }
}

// Open cart sidebar
function openCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  cartSidebar.classList.add('open');
  trackEvent('cart_opened');
}

// Close cart sidebar
function closeCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  cartSidebar.classList.remove('open');
}

// Checkout via WhatsApp
function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert('Cart is empty');
    return;
  }

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const url = SK.buildWhatsAppOrderURL('', 0, cart);

  trackEvent('checkout_started', {
    cart_items: cart.length,
    total: total
  });

  window.open(url, '_blank');
}

// Save cart to localStorage
function saveCartToStorage() {
  localStorage.setItem('sweetKitchenCart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
  const saved = localStorage.getItem('sweetKitchenCart');
  if (saved) {
    cart = JSON.parse(saved);
    updateCartUI();
  }
}

// Clear cart
function clearCart() {
  if (confirm('Clear cart?')) {
    cart = [];
    saveCartToStorage();
    updateCartUI();
    trackEvent('cart_cleared');
  }
}

// Export for global use
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.checkoutWhatsApp = checkoutWhatsApp;
window.clearCart = clearCart;
