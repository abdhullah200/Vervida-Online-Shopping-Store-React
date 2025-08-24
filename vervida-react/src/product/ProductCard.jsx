import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FiShoppingCart, FiEye, FiStar, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProductCard = ({ product, onProductClick, onAddToCart, highlightSearchTerm, searchTerm }) => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  const handleProductClick = () => {
    onProductClick(product);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FiStar key={i} className="text-warning" fill="currentColor" size={14} />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FiStar key="half" className="text-warning" size={14} style={{ opacity: 0.5 }} />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FiStar key={`empty-${i}`} className="text-muted" size={14} />
      );
    }

    return stars;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <Card 
        className="h-100 vervida-card border-0 overflow-hidden cursor-pointer"
        onClick={handleProductClick}
        style={{ 
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Product Image */}
        <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            className="w-100 h-100 object-fit-cover"
            style={{ 
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          />
          
          {/* Overlay with actions */}
          <div 
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0"
            style={{
              background: 'rgba(0,0,0,0.6)',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '0';
            }}
          >
            <div className="d-flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-light rounded-circle p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleProductClick();
                }}
              >
                <FiEye size={18} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-outline-light rounded-circle p-2"
                onClick={(e) => e.stopPropagation()}
              >
                <FiHeart size={18} />
              </motion.button>
            </div>
          </div>

          {/* Category Badge */}
          <Badge 
            bg="primary" 
            className="position-absolute top-0 start-0 m-2 px-3 py-2 rounded-pill"
            style={{ 
              fontSize: '11px',
              textTransform: 'capitalize',
              fontWeight: '600'
            }}
          >
            {product.category}
          </Badge>

          {/* Stock Badge */}
          {product.stock && product.stock < 10 && (
            <Badge 
              bg="danger" 
              className="position-absolute top-0 end-0 m-2 px-3 py-2 rounded-pill"
              style={{ 
                fontSize: '11px',
                fontWeight: '600'
              }}
            >
              Only {product.stock} left!
            </Badge>
          )}
        </div>

        <Card.Body className="p-4">
          {/* Product Title */}
          <Card.Title 
            className="mb-2 text-truncate fw-bold"
            style={{ 
              fontSize: '1rem',
              color: 'var(--vervida-dark)',
              height: '1.5rem'
            }}
          >
            {highlightSearchTerm(product.title, searchTerm)}
          </Card.Title>

          {/* Rating */}
          <div className="d-flex align-items-center mb-2">
            <div className="d-flex me-2">
              {renderStars(product.rating?.rate || 4)}
            </div>
            <small className="text-muted">
              ({product.rating?.count || 0} reviews)
            </small>
          </div>

          {/* Description */}
          <Card.Text 
            className="text-muted small mb-3"
            style={{ 
              height: '3rem',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}
          >
            {product.description}
          </Card.Text>

          {/* Price and Add to Cart */}
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h5 className="mb-0 fw-bold text-primary">
                ${product.price.toFixed(2)}
              </h5>
              {product.originalPrice && (
                <small className="text-muted text-decoration-line-through">
                  ${product.originalPrice.toFixed(2)}
                </small>
              )}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                size="sm"
                className="rounded-pill px-3 py-2 fw-semibold"
                onClick={handleAddToCart}
                style={{
                  background: 'linear-gradient(135deg, var(--vervida-primary), var(--vervida-secondary))',
                  border: 'none',
                  fontSize: '12px',
                  transition: 'all 0.3s ease'
                }}
              >
                <FiShoppingCart size={14} className="me-1" />
                Add to Cart
              </Button>
            </motion.div>
          </div>
        </Card.Body>

        {/* Hover Effect Overlay */}
        <div 
          className="position-absolute bottom-0 start-0 w-100"
          style={{
            height: '4px',
            background: 'linear-gradient(135deg, var(--vervida-primary), var(--vervida-secondary))',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scaleX(1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scaleX(0)';
          }}
        />
      </Card>
    </motion.div>
  );
};

export default ProductCard;