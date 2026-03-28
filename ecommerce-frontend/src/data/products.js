export const categories = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'electronics', name: 'Electronics', icon: '💻' },
  { id: 'clothing', name: 'Clothing', icon: '👕' },
  { id: 'home', name: 'Home & Kitchen', icon: '🏠' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'books', name: 'Books', icon: '📚' },
];

export const products = [
  // Electronics
  {
    id: 1,
    name: 'Wireless Noise-Cancelling Headphones',
    price: 249.99,
    originalPrice: 349.99,
    category: 'electronics',
    rating: 4.5,
    reviews: 128,
    image: 'https://picsum.photos/seed/headphones1/400/400',
    description:
      'Experience premium audio with active noise cancellation, 30-hour battery life, and foldable design. Perfect for travel, work, and everyday listening. Connects seamlessly via Bluetooth 5.0 with multi-device support.',
    badge: 'Sale',
    inStock: true,
  },
  {
    id: 2,
    name: 'Ultra Slim Laptop 15"',
    price: 1199.99,
    originalPrice: null,
    category: 'electronics',
    rating: 4.8,
    reviews: 256,
    image: 'https://picsum.photos/seed/laptop1/400/400',
    description:
      'Powerful 15-inch laptop with Intel Core i7 processor, 16GB RAM, 512GB SSD, and a stunning 4K display. Lightweight at only 1.4kg, making it perfect for professionals on the go.',
    badge: 'New',
    inStock: true,
  },
  {
    id: 3,
    name: 'Smartwatch Series X',
    price: 299.99,
    originalPrice: 399.99,
    category: 'electronics',
    rating: 4.3,
    reviews: 89,
    image: 'https://picsum.photos/seed/watch1/400/400',
    description:
      'Track your health and stay connected with this premium smartwatch. Features heart rate monitoring, GPS, sleep tracking, and a 7-day battery life. Water resistant up to 50 meters.',
    badge: 'Sale',
    inStock: true,
  },
  {
    id: 4,
    name: 'Portable Bluetooth Speaker',
    price: 79.99,
    originalPrice: null,
    category: 'electronics',
    rating: 4.4,
    reviews: 312,
    image: 'https://picsum.photos/seed/speaker1/400/400',
    description:
      '360° surround sound with deep bass in a compact, waterproof design. 20-hour playtime, built-in microphone, and connects via Bluetooth 5.0 or 3.5mm aux. Perfect for outdoor adventures.',
    badge: null,
    inStock: true,
  },
  {
    id: 5,
    name: '4K Action Camera',
    price: 179.99,
    originalPrice: 229.99,
    category: 'electronics',
    rating: 4.6,
    reviews: 74,
    image: 'https://picsum.photos/seed/camera1/400/400',
    description:
      'Capture your adventures in stunning 4K at 60fps. Waterproof to 30 meters without a case, 2-inch touchscreen, and comes with a mounting kit and spare battery.',
    badge: 'Hot',
    inStock: true,
  },

  // Clothing
  {
    id: 6,
    name: "Men's Classic Polo Shirt",
    price: 39.99,
    originalPrice: null,
    category: 'clothing',
    rating: 4.2,
    reviews: 203,
    image: 'https://picsum.photos/seed/polo1/400/400',
    description:
      'Timeless polo shirt crafted from 100% premium piqué cotton. Slim-fit silhouette with ribbed collar, two-button placket, and side vents for comfort. Available in 8 colors.',
    badge: null,
    inStock: true,
  },
  {
    id: 7,
    name: "Women's Running Sneakers",
    price: 119.99,
    originalPrice: 159.99,
    category: 'clothing',
    rating: 4.7,
    reviews: 445,
    image: 'https://picsum.photos/seed/shoes1/400/400',
    description:
      'Engineered for performance, these sneakers feature responsive cushioning, breathable mesh upper, and a durable rubber outsole with excellent grip. Ideal for road running and gym workouts.',
    badge: 'Sale',
    inStock: true,
  },
  {
    id: 8,
    name: 'Denim Jacket',
    price: 69.99,
    originalPrice: null,
    category: 'clothing',
    rating: 4.3,
    reviews: 167,
    image: 'https://picsum.photos/seed/jacket1/400/400',
    description:
      'Classic denim jacket with a modern slim fit. Features two chest pockets, two side pockets, and adjustable button cuffs. Made from sustainable cotton denim.',
    badge: 'New',
    inStock: true,
  },
  {
    id: 9,
    name: "Women's Floral Summer Dress",
    price: 54.99,
    originalPrice: 74.99,
    category: 'clothing',
    rating: 4.5,
    reviews: 298,
    image: 'https://picsum.photos/seed/dress1/400/400',
    description:
      'Light and breezy floral midi dress perfect for warm days. Features a v-neck, elasticated waist, and flutter sleeves. Made from 100% soft viscose fabric.',
    badge: 'Sale',
    inStock: true,
  },
  {
    id: 10,
    name: 'Cozy Zip-Up Hoodie',
    price: 59.99,
    originalPrice: null,
    category: 'clothing',
    rating: 4.6,
    reviews: 521,
    image: 'https://picsum.photos/seed/hoodie1/400/400',
    description:
      'Stay comfortable in this ultra-soft zip-up hoodie made from a cotton-polyester blend. Features a kangaroo pocket, adjustable hood, and ribbed cuffs. Available in 12 colors.',
    badge: null,
    inStock: true,
  },

  // Home & Kitchen
  {
    id: 11,
    name: 'Drip Coffee Maker',
    price: 89.99,
    originalPrice: 119.99,
    category: 'home',
    rating: 4.4,
    reviews: 389,
    image: 'https://picsum.photos/seed/coffee1/400/400',
    description:
      'Brew perfect coffee every morning with this programmable 12-cup coffee maker. Features a built-in grinder, adjustable brew strength, keep-warm function, and easy-clean carafe.',
    badge: 'Sale',
    inStock: true,
  },
  {
    id: 12,
    name: 'Luxury Throw Pillow Set (4-pack)',
    price: 44.99,
    originalPrice: null,
    category: 'home',
    rating: 4.5,
    reviews: 156,
    image: 'https://picsum.photos/seed/pillow1/400/400',
    description:
      'Elevate your living room with this set of 4 decorative throw pillows in complementary colors. Made from high-quality velvet fabric with hypoallergenic insert included.',
    badge: null,
    inStock: true,
  },
  {
    id: 13,
    name: 'Professional Chef Knife Set',
    price: 129.99,
    originalPrice: 179.99,
    category: 'home',
    rating: 4.8,
    reviews: 234,
    image: 'https://picsum.photos/seed/knife1/400/400',
    description:
      'Complete 8-piece German high-carbon stainless steel knife set. Includes chef, bread, carving, utility, and paring knives plus kitchen shears, honing steel, and a hardwood block.',
    badge: 'Sale',
    inStock: true,
  },
  {
    id: 14,
    name: 'Scented Candle Collection',
    price: 34.99,
    originalPrice: null,
    category: 'home',
    rating: 4.6,
    reviews: 412,
    image: 'https://picsum.photos/seed/candle1/400/400',
    description:
      'Set of 6 hand-poured soy wax candles in glass jars. Scents include lavender, vanilla, cedarwood, eucalyptus, rose, and sandalwood. Each burns for up to 45 hours.',
    badge: 'Hot',
    inStock: true,
  },
  {
    id: 15,
    name: 'Egyptian Cotton Sheet Set',
    price: 79.99,
    originalPrice: 109.99,
    category: 'home',
    rating: 4.7,
    reviews: 678,
    image: 'https://picsum.photos/seed/sheets1/400/400',
    description:
      '400 thread count Egyptian cotton sheet set including fitted sheet, flat sheet, and two pillowcases. Cool, breathable, and wrinkle-resistant. Available in 15 colors.',
    badge: 'Sale',
    inStock: true,
  },

  // Sports
  {
    id: 16,
    name: 'Premium Yoga Mat',
    price: 49.99,
    originalPrice: null,
    category: 'sports',
    rating: 4.6,
    reviews: 892,
    image: 'https://picsum.photos/seed/yoga1/400/400',
    description:
      '6mm thick non-slip yoga mat made from eco-friendly natural rubber. Features alignment lines, moisture-wicking surface, and comes with a carrying strap. Perfect for all yoga styles.',
    badge: null,
    inStock: true,
  },
  {
    id: 17,
    name: 'Adjustable Dumbbell Set',
    price: 199.99,
    originalPrice: 249.99,
    category: 'sports',
    rating: 4.7,
    reviews: 345,
    image: 'https://picsum.photos/seed/dumbbell1/400/400',
    description:
      'Space-saving adjustable dumbbells that replace 15 sets of weights. Adjusts from 5 to 52.5 lbs in seconds with a dial mechanism. Includes a storage tray.',
    badge: 'Sale',
    inStock: true,
  },
  {
    id: 18,
    name: 'Hydration Running Backpack',
    price: 64.99,
    originalPrice: null,
    category: 'sports',
    rating: 4.4,
    reviews: 187,
    image: 'https://picsum.photos/seed/backpack1/400/400',
    description:
      '12L trail running backpack with a 1.5L hydration bladder included. Features breathable back panel, multiple pockets, trekking pole attachments, and reflective details.',
    badge: 'New',
    inStock: true,
  },

  // Books
  {
    id: 19,
    name: 'Clean Code: A Handbook',
    price: 34.99,
    originalPrice: null,
    category: 'books',
    rating: 4.9,
    reviews: 1204,
    image: 'https://picsum.photos/seed/book1/400/400',
    description:
      'The definitive guide to writing clean, maintainable code by Robert C. Martin. Covers best practices, refactoring patterns, and real-world case studies. A must-have for every developer.',
    badge: 'Bestseller',
    inStock: true,
  },
  {
    id: 20,
    name: 'The Art of Cooking: Mastering Flavors',
    price: 27.99,
    originalPrice: 35.99,
    category: 'books',
    rating: 4.7,
    reviews: 563,
    image: 'https://picsum.photos/seed/book2/400/400',
    description:
      'A beautifully illustrated cookbook with 250 recipes from world-class chefs. Covers techniques from basic knife skills to advanced molecular gastronomy, with step-by-step photography.',
    badge: 'Sale',
    inStock: true,
  },
  {
    id: 21,
    name: 'Atomic Habits',
    price: 18.99,
    originalPrice: null,
    category: 'books',
    rating: 4.8,
    reviews: 3420,
    image: 'https://picsum.photos/seed/book3/400/400',
    description:
      'The #1 New York Times bestseller by James Clear. Learn proven techniques to build good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
    badge: 'Hot',
    inStock: true,
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.badge !== null).slice(0, 8);

export const getProductsByCategory = (category) =>
  category === 'all' ? products : products.filter((p) => p.category === category);

export const getProductById = (id) => products.find((p) => p.id === parseInt(id));

export const getRelatedProducts = (product, limit = 4) =>
  products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
