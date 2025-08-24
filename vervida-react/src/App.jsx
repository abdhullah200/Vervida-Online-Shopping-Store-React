import React, { useState, useEffect, useCallback } from 'react';
import { Toaster } from 'react-hot-toast';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ProductGrid from './components/product/ProductGrid';
import CartOffcanvas from './components/cart/CartOffcanvas';
import { useCart } from './hooks/useCart';
import { productService } from './services/api';
import LoadingSpinner from './components/common/LoadingSpinner';
import './styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  
  const cart = useCart();
  
  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await productService.getProductsByCategory(selectedCategory);
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]);
  
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <div className="App">
      <Header 
        cartCount={cart.cartCount}
        onCartClick={() => setShowCart(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Container fluid className="px-4 py-5" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <Row className="w-100 align-items-center">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-3 fw-bold mb-4" style={{ 
                  background: 'linear-gradient(135deg, var(--vervida-primary), var(--vervida-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Welcome to Vervida
                </h1>
                <p className="lead text-muted mb-4">
                  Discover amazing products, exceptional quality, and unbeatable prices. 
                  Your premium shopping destination for everything you need and want.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg" 
                      className="px-4 py-3 rounded-pill fw-bold"
                      onClick={() => scrollToSection('products')}
                      style={{
                        background: 'linear-gradient(135deg, var(--vervida-primary), var(--vervida-secondary))',
                        border: 'none'
                      }}
                    >
                      Shop Now
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline-primary" 
                      size="lg" 
                      className="px-4 py-3 rounded-pill fw-bold"
                      onClick={() => scrollToSection('contact')}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div 
                  className="rounded-4 overflow-hidden shadow-lg"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
                    padding: '3rem',
                    border: '1px solid rgba(99, 102, 241, 0.2)'
                  }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                    style={{ fontSize: '8rem' }}
                  >
                    🛍️
                  </motion.div>
                  <h3 className="mt-3 text-primary fw-bold">Premium Quality</h3>
                  <p className="text-muted">Curated products from trusted brands</p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Products Section */}
      <section id="products">
        <main className="container-fluid px-4 py-5">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <ProductGrid 
              products={filteredProducts}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              onAddToCart={cart.addToCart}
              searchTerm={searchTerm}
            />
          )}
        </main>
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <Footer />
      </section>
      
      <CartOffcanvas 
        show={showCart}
        onHide={() => setShowCart(false)}
        cartItems={cart.cartItems}
        onUpdateQuantity={cart.updateQuantity}
        onRemoveItem={cart.removeFromCart}
        cartTotal={cart.cartTotal}
        onClearCart={cart.clearCart}
      />
      
      <Toaster position="top-right" />
    </div>
  );
}

export default App;