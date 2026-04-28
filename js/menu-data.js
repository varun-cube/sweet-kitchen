// Sweet Kitchen Menu Data

const menuItems = [
  // Sweets
  {
    id: 1,
    category: 'Sweets',
    name: 'Gulab Jamun (500g)',
    description: 'Soft milk solids in sugar syrup, served warm',
    price: 150,
    veg: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    category: 'Sweets',
    name: 'Jalebi (400g)',
    description: 'Crispy, tangy-sweet spirals, perfect with tea',
    price: 120,
    veg: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    category: 'Sweets',
    name: 'Rasgulla (500g)',
    description: 'Soft cheese balls in light sugar syrup',
    price: 140,
    veg: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    category: 'Sweets',
    name: 'Barfi Mix (400g)',
    description: 'Assorted barfis - kaju, coconut, and chocolate',
    price: 180,
    veg: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab54a81?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    category: 'Sweets',
    name: 'Kheer (300g)',
    description: 'Creamy rice pudding with nuts and cardamom',
    price: 100,
    veg: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop'
  },

  // Meals
  {
    id: 6,
    category: 'Meals',
    name: 'Chhatrapati Sambhaji Nagari Biryani (1 plate)',
    description: 'Aromatic rice with tender meat & spices',
    price: 200,
    veg: false,
    popular: true,
    image: 'https://images.unsplash.com/photo-1631040822154-e629aaaf9f0d?w=400&h=300&fit=crop'
  },
  {
    id: 7,
    category: 'Meals',
    name: 'Veg Biryani (1 plate)',
    description: 'Fragrant rice with fresh vegetables',
    price: 160,
    veg: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b8?w=400&h=300&fit=crop'
  },
  {
    id: 8,
    category: 'Meals',
    name: 'Chicken Curry with Roti (1 combo)',
    description: '2 rotis + butter chicken gravy',
    price: 140,
    veg: false,
    popular: false,
    image: 'https://images.unsplash.com/photo-1603505439956-2a3fc3a51b89?w=400&h=300&fit=crop'
  },
  {
    id: 9,
    category: 'Meals',
    name: 'Dal Makhani with Rice (1 combo)',
    description: 'Creamy lentils + steamed basmati rice',
    price: 120,
    veg: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
  },
  {
    id: 10,
    category: 'Meals',
    name: 'Paneer Tikka Masala (1 plate)',
    description: 'Cottage cheese cubes in creamy tomato gravy',
    price: 180,
    veg: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1599043513145-7b8bea6b5e3f?w=400&h=300&fit=crop'
  },

  // Snacks
  {
    id: 11,
    category: 'Snacks',
    name: 'Samosa (6 pieces)',
    description: 'Crispy potato & peas filled pastry',
    price: 60,
    veg: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop'
  },
  {
    id: 12,
    category: 'Snacks',
    name: 'Onion Pakora (400g)',
    description: 'Crispy onion fritters, served with chutney',
    price: 80,
    veg: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1585618863215-ba2657e5e0f7?w=400&h=300&fit=crop'
  },
  {
    id: 13,
    category: 'Snacks',
    name: 'Mirchi Bajji (6 pieces)',
    description: 'Fried green chilies stuffed with spices',
    price: 70,
    veg: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1585523741865-36a919e91fbc?w=400&h=300&fit=crop'
  },
  {
    id: 14,
    category: 'Snacks',
    name: 'Vegetable Spring Rolls (4 pieces)',
    description: 'Crispy rolls with mixed vegetables',
    price: 90,
    veg: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b11?w=400&h=300&fit=crop'
  },

  // Combos
  {
    id: 15,
    category: 'Combos',
    name: 'Sweet Lover\'s Combo',
    description: 'Gulab Jamun + Jalebi + Barfi Mix',
    price: 350,
    veg: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab54a81?w=400&h=300&fit=crop'
  },
  {
    id: 16,
    category: 'Combos',
    name: 'Biryani Duo Pack',
    description: 'Chhatrapati Sambhaji Nagari Biryani + Veg Biryani + Raita',
    price: 420,
    veg: false,
    popular: true,
    image: 'https://images.unsplash.com/photo-1631040822154-e629aaaf9f0d?w=400&h=300&fit=crop'
  },
  {
    id: 17,
    category: 'Combos',
    name: 'Family Feast (Veg)',
    description: 'Dal Makhani + Paneer Tikka + Rice + Rotis + Raita',
    price: 450,
    veg: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
  },
  {
    id: 18,
    category: 'Combos',
    name: 'Snack Attack Pack',
    description: 'Samosa + Pakora + Spring Rolls + Chutney',
    price: 200,
    veg: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1585523741865-36a919e91fbc?w=400&h=300&fit=crop'
  },

  // Beverages
  {
    id: 19,
    category: 'Beverages',
    name: 'Fresh Mango Shake (500ml)',
    description: 'Creamy mango smoothie with ice cream',
    price: 80,
    veg: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1590080876614-37267ea6e25f?w=400&h=300&fit=crop'
  },
  {
    id: 20,
    category: 'Beverages',
    name: 'Lassi (500ml)',
    description: 'Traditional yogurt drink with cardamom',
    price: 50,
    veg: true,
    popular: false,
    image: 'https://images.unsplash.com/photo-1590080876614-37267ea6e25f?w=400&h=300&fit=crop'
  },
  {
    id: 21,
    category: 'Beverages',
    name: 'Rose Milk (500ml)',
    description: 'Sweet milk with rose and almond flavors',
    price: 60,
    veg: true,
    popular: true,
    image: 'https://images.unsplash.com/photo-1590080876614-37267ea6e25f?w=400&h=300&fit=crop'
  }
];

// Get categories from menu
const getCategories = () => {
  return [...new Set(menuItems.map(item => item.category))];
};

// Get items by category
const getItemsByCategory = (category) => {
  return menuItems.filter(item => item.category === category);
};

// Get popular items
const getPopularItems = () => {
  return menuItems.filter(item => item.popular).slice(0, 8);
};

// Search items
const searchItems = (query) => {
  return menuItems.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );
};

// Filter items
const filterItems = (items, options) => {
  let filtered = [...items];

  if (options.veg !== null && options.veg !== undefined) {
    filtered = filtered.filter(item => item.veg === options.veg);
  }

  if (options.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (options.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (options.sortBy === 'popular') {
    filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
  }

  return filtered;
};
