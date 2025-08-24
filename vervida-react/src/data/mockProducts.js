export const mockProducts = [
  // Electronics
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    description: "High-quality wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.8, count: 245 },
    stock: 15
  },
  {
    id: 2,
    title: "4K Smart TV 55 inch",
    price: 799.99,
    originalPrice: 999.99,
    description: "Ultra-HD 4K Smart TV with HDR, built-in streaming apps, and voice control. Crystal clear picture quality for the ultimate viewing experience.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.6, count: 189 },
    stock: 8
  },
  {
    id: 3,
    title: "Gaming Laptop Pro",
    price: 1299.99,
    originalPrice: 1599.99,
    description: "High-performance gaming laptop with RTX graphics, 16GB RAM, and 1TB SSD. Built for gaming enthusiasts and content creators.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.7, count: 156 },
    stock: 5
  },
  {
    id: 4,
    title: "Wireless Charging Pad",
    price: 49.99,
    originalPrice: 69.99,
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicators and overcharge protection.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.3, count: 92 },
    stock: 25
  },
  {
    id: 5,
    title: "Bluetooth Speaker Waterproof",
    price: 89.99,
    description: "Portable waterproof Bluetooth speaker with 360-degree sound, 12-hour battery life, and rugged design for outdoor adventures.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.5, count: 134 },
    stock: 18
  },

  // Women's Clothing
  {
    id: 6,
    title: "Elegant Summer Maxi Dress",
    price: 89.99,
    originalPrice: 129.99,
    description: "Beautiful floral maxi dress perfect for summer occasions. Lightweight fabric with adjustable straps and flowing silhouette.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.4, count: 87 },
    stock: 12
  },
  {
    id: 7,
    title: "Professional Blazer",
    price: 149.99,
    originalPrice: 199.99,
    description: "Tailored blazer perfect for office wear. Premium fabric with classic cut and versatile styling options for professional women.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.6, count: 203 },
    stock: 9
  },
  {
    id: 8,
    title: "Cozy Winter Sweater",
    price: 69.99,
    description: "Soft cashmere blend sweater with ribbed texture. Available in multiple colors, perfect for layering during cold seasons.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.7, count: 156 },
    stock: 20
  },
  {
    id: 9,
    title: "High-Waisted Jeans",
    price: 79.99,
    originalPrice: 99.99,
    description: "Comfortable high-waisted jeans with stretch fabric. Classic straight-leg cut that flatters all body types.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.2, count: 178 },
    stock: 16
  },

  // Men's Clothing
  {
    id: 10,
    title: "Classic Denim Jacket",
    price: 99.99,
    originalPrice: 139.99,
    description: "Timeless denim jacket with vintage wash and comfortable fit. A wardrobe essential for casual and smart-casual looks.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.5, count: 123 },
    stock: 14
  },
  {
    id: 11,
    title: "Business Dress Shirt",
    price: 59.99,
    description: "Crisp white dress shirt made from premium cotton. Perfect for business meetings and formal occasions.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.3, count: 201 },
    stock: 22
  },
  {
    id: 12,
    title: "Casual Polo Shirt",
    price: 39.99,
    originalPrice: 59.99,
    description: "Comfortable polo shirt in premium cotton pique. Available in various colors, perfect for weekend casual wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.1, count: 145 },
    stock: 28
  },
  {
    id: 13,
    title: "Winter Wool Coat",
    price: 249.99,
    originalPrice: 349.99,
    description: "Premium wool coat with classic tailoring and warm lining. Perfect for cold weather with sophisticated style.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.8, count: 89 },
    stock: 7
  },

  // Jewelry
  {
    id: 14,
    title: "Classic Men's Watch",
    price: 199.99,
    originalPrice: 299.99,
    description: "Elegant timepiece with leather strap and water resistance up to 100m. Swiss movement with classic design.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.7, count: 234 },
    stock: 11
  },
  {
    id: 15,
    title: "Diamond Stud Earrings",
    price: 599.99,
    originalPrice: 799.99,
    description: "Brilliant cut diamond stud earrings set in 14k white gold. Perfect for everyday elegance or special occasions.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.9, count: 156 },
    stock: 6
  },
  {
    id: 16,
    title: "Gold Chain Necklace",
    price: 299.99,
    description: "18k gold plated chain necklace with adjustable length. Hypoallergenic and perfect for layering with other jewelry.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.5, count: 178 },
    stock: 13
  },
  {
    id: 17,
    title: "Silver Bracelet Set",
    price: 89.99,
    originalPrice: 129.99,
    description: "Set of three sterling silver bracelets with different textures. Can be worn together or separately.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.3, count: 92 },
    stock: 18
  },
  {
    id: 18,
    title: "Vintage Ring Collection",
    price: 149.99,
    originalPrice: 199.99,
    description: "Set of vintage-inspired rings with antique finish. Includes 3 different designs in various sizes.",
    category: "jewelery",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.6, count: 134 },
    stock: 15
  },

  // Additional Electronics
  {
    id: 19,
    title: "Smart Fitness Tracker",
    price: 129.99,
    originalPrice: 179.99,
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life. Track your health and fitness goals.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.4, count: 287 },
    stock: 21
  },
  {
    id: 20,
    title: "Wireless Mouse & Keyboard Set",
    price: 79.99,
    description: "Ergonomic wireless mouse and keyboard set with long battery life. Perfect for office or home use.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.2, count: 165 },
    stock: 16
  },


  // More Women's Clothing
  {
    id: 21,
    title: "Leather Handbag",
    price: 199.99,
    originalPrice: 299.99,
    description: "Genuine leather handbag with multiple compartments. Spacious and stylish for everyday use.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&auto=format",
    rating: { rate: 4.7, count: 145 },
    stock: 8
  }
];

export const categories = [
  { id: "all", name: "All Products", icon: "🛍️" },
  { id: "electronics", name: "Electronics", icon: "💻" },
  { id: "jewelery", name: "Jewelry", icon: "💎" },
  { id: "men's clothing", name: "Men's Clothing", icon: "👔" },
  { id: "women's clothing", name: "Women's Clothing", icon: "👗" }
];

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  if (category === 'all') {
    return mockProducts;
  }
  return mockProducts.filter(product => product.category === category);
};

// Helper function to search products
export const searchProducts = (products, searchTerm) => {
  if (!searchTerm) return products;
  
  return products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Helper function to get featured products (highest rated)
export const getFeaturedProducts = (limit = 6) => {
  return mockProducts
    .sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0))
    .slice(0, limit);
};

// Helper function to get products on sale
export const getSaleProducts = () => {
  return mockProducts.filter(product => product.originalPrice);
};

export default mockProducts;