import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import ProductModal from './ProductModal';
import Pagination from './Pagination';
import { categories } from '../../data/mockProducts';

const ProductGrid = ({ 
  products, 
  selectedCategory, 
  onCategoryChange, 
  onAddToCart, 
  searchTerm 
}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCategoryChange = (category) => {
    onCategoryChange(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const highlightSearchTerm = (text, searchTerm) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} style={{ 
          backgroundColor: '#fef3c7', 
          padding: '2px 4px',
          borderRadius: '3px',
          fontWeight: 'bold'
        }}>
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <Container fluid>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-5 py-5"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
          borderRadius: '20px',
          border: '1px solid rgba(99, 102, 241, 0.2)'
        }}
      >
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="display-4 fw-bold mb-3"
          style={{ 
            background: 'linear-gradient(135deg, var(--vervida-primary), var(--vervida-secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Discover Amazing Products
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="lead text-muted mb-4"
        >
          Shop from our curated collection of premium products
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 200 }}
          className="d-inline-block"
        >
          <div className="bg-primary text-white px-4 py-2 rounded-pill shadow-sm">
            {products.length} Products Available
          </div>
        </motion.div>
      </motion.div>

      <Row>
        {/* Filters Sidebar */}
        <Col lg={3} className="mb-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ProductFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              productCount={products.length}
            />
          </motion.div>
        </Col>

        {/* Products Grid */}
        <Col lg={9}>
          {currentProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-5"
            >
              <div className="p-5 bg-light rounded-4">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                  style={{ fontSize: '4rem' }}
                >
                  🔍
                </motion.div>
                <h3 className="mt-3 text-muted">No products found</h3>
                <p className="text-muted">
                  {searchTerm 
                    ? `No products match "${searchTerm}" in the ${selectedCategory} category`
                    : `No products available in the ${selectedCategory} category`
                  }
                </p>
              </div>
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <Row className="g-4">
                  <AnimatePresence mode="wait">
                    {currentProducts.map((product) => (
                      <Col key={product.id} xs={12} sm={6} md={6} lg={4} xl={3}>
                        <motion.div
                          variants={itemVariants}
                          layout
                          whileHover={{ y: -5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                          <ProductCard
                            product={product}
                            onProductClick={handleProductClick}
                            onAddToCart={onAddToCart}
                            highlightSearchTerm={highlightSearchTerm}
                            searchTerm={searchTerm}
                          />
                        </motion.div>
                      </Col>
                    ))}
                  </AnimatePresence>
                </Row>
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="d-flex justify-content-center mt-5"
                >
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </motion.div>
              )}
            </>
          )}
        </Col>
      </Row>

      {/* Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        show={!!selectedProduct}
        onHide={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
      />
    </Container>
  );
};

export default ProductGrid;
