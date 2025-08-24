import React, { useState } from 'react';
import { Modal, Button, Badge, Row, Col, Alert } from 'react-bootstrap';
import { FiX, FiShoppingCart, FiStar, FiHeart, FiShare2, FiMinus, FiPlus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const ProductModal = ({ product, show, onHide, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
    onHide();
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FiStar key={i} className="text-warning" fill="currentColor" size={16} />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FiStar key="half" className="text-warning" size={16} style={{ opacity: 0.5 }} />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FiStar key={`empty-${i}`} className="text-muted" size={16} />
      );
    }

    return stars;
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header className="border-0 pb-0">
        <Button 
          variant="outline-secondary" 
          size="sm" 
          onClick={onHide} 
          className="rounded-circle p-2 ms-auto"
        >
          <FiX size={18} />
        </Button>
      </Modal.Header>

      <Modal.Body className="pt-0">
        <Row>
          {/* Product Images */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="position-relative"
            >
              <div 
                className="rounded-4 overflow-hidden shadow-sm mb-3"
                style={{ height: '400px' }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>

              {/* Category Badge */}
              <Badge 
                bg="primary" 
                className="position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill"
                style={{ fontSize: '12px', textTransform: 'capitalize' }}
              >
                {product.category}
              </Badge>

              {/* Stock Alert */}
              {product.stock && product.stock < 10 && (
                <Alert variant="warning" className="mt-3 py-2 px-3 mb-0">
                  <small className="mb-0">
                    ⚠️ Only {product.stock} items left in stock!
                  </small>
                </Alert>
              )}
            </motion.div>
          </Col>

          {/* Product Details */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="fw-bold mb-3 text-dark">{product.title}</h3>

              {/* Rating */}
              <div className="d-flex align-items-center mb-3">
                <div className="d-flex me-2">
                  {renderStars(product.rating?.rate || 4)}
                </div>
                <span className="text-muted">
                  {product.rating?.rate || 4}/5 ({product.rating?.count || 0} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <h4 className="text-primary fw-bold mb-1">
                  ${product.price.toFixed(2)}
                </h4>
                {product.originalPrice && (
                  <div>
                    <span className="text-muted text-decoration-line-through me-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <Badge bg="danger" className="rounded-pill">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-4">
                <h6 className="fw-semibold mb-2">Description</h6>
                <p className="text-muted">{product.description}</p>
              </div>

              {/* Quantity Selector */}
              <div className="mb-4">
                <h6 className="fw-semibold mb-2">Quantity</h6>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="rounded-circle p-2"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{ width: '40px', height: '40px' }}
                  >
                    <FiMinus size={14} />
                  </Button>
                  
                  <span className="mx-4 fw-bold fs-5 px-3 py-2 bg-light rounded text-center" style={{ minWidth: '60px' }}>
                    {quantity}
                  </span>
                  
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="rounded-circle p-2"
                    onClick={() => setQuantity(quantity + 1)}
                    style={{ width: '40px', height: '40px' }}
                  >
                    <FiPlus size={14} />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-grid gap-2">
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-100 py-3 fw-bold rounded-3"
                    onClick={handleAddToCart}
                    style={{
                      background: 'linear-gradient(135deg, var(--vervida-primary), var(--vervida-secondary))',
                      border: 'none',
                      fontSize: '16px'
                    }}
                  >
                    <FiShoppingCart size={20} className="me-2" />
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </Button>
                </motion.div>

                <div className="d-flex gap-2 mt-2">
                  <Button variant="outline-danger" className="flex-grow-1 rounded-3">
                    <FiHeart size={16} className="me-1" />
                    Wishlist
                  </Button>
                  <Button variant="outline-secondary" className="flex-grow-1 rounded-3">
                    <FiShare2 size={16} className="me-1" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Product Features */}
              <div className="mt-4 p-3 bg-light rounded-3">
                <h6 className="fw-semibold mb-2">Product Features</h6>
                <ul className="list-unstyled mb-0 small text-muted">
                  <li>✅ Free shipping on orders over $100</li>
                  <li>✅ 30-day money-back guarantee</li>
                  <li>✅ 1-year warranty included</li>
                  <li>✅ 24/7 customer support</li>
                </ul>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
