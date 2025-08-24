// src/components/product/ProductFilters.jsx
import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { categories } from '../../data/mockProducts';

const ProductFilters = ({ selectedCategory, onCategoryChange, productCount }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="vervida-card border-0 shadow-sm">
        <Card.Header className="bg-white border-0 py-3">
          <h5 className="mb-0 fw-bold text-dark">
            🔍 Filter Products
          </h5>
        </Card.Header>
        <Card.Body className="p-0">
          <ListGroup variant="flush">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ListGroup.Item
                  action
                  active={selectedCategory === category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`d-flex justify-content-between align-items-center py-3 border-0 ${
                    selectedCategory === category.id
                      ? 'bg-primary bg-opacity-10 text-primary fw-semibold'
                      : 'text-dark'
                  }`}
                  style={{
                    cursor: 'pointer',
                    borderLeft: selectedCategory === category.id ? '4px solid var(--vervida-primary)' : '4px solid transparent',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span>
                    <span className="me-2" role="img" aria-label={category.name}>
                      {category.icon}
                    </span>
                    {category.name}
                  </span>
                  <Badge 
                    bg={selectedCategory === category.id ? 'primary' : 'secondary'} 
                    className="rounded-pill"
                  >
                    {selectedCategory === category.id ? productCount : ''}
                  </Badge>
                </ListGroup.Item>
              </motion.div>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Filter Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 p-3 bg-light rounded-3"
      >
        <small className="text-muted d-block mb-1">Currently viewing:</small>
        <div className="fw-semibold text-primary">
          {categories.find(cat => cat.id === selectedCategory)?.name || 'All Products'}
        </div>
        <div className="text-muted small mt-1">
          {productCount} {productCount === 1 ? 'product' : 'products'} found
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductFilters;


