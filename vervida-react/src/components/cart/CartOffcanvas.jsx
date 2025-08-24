import React from 'react';
import { Offcanvas, Button, ListGroup, Badge, Alert } from 'react-bootstrap';
import { FiX, FiShoppingBag, FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const CartOffcanvas = ({ 
  show, 
  onHide, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  cartTotal, 
  onClearCart 
}) => {
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      onRemoveItem(productId);
    } else {
      onUpdateQuantity(productId, newQuantity);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const shipping = cartTotal > 100 ? 0 : 9.99;
  const tax = cartTotal * 0.08; // 8% tax
  const finalTotal = cartTotal + shipping + tax;

  return (
    <Offcanvas 
      show={show} 
      onHide={onHide} 
      placement="end" 
      style={{ 
        width: '400px',
        zIndex: 1060 // Higher than navbar's 1050
      }}
    >
      <Offcanvas.Header className="border-bottom py-3 px-4 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: show ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="me-3"
          >
            <FiShoppingBag size={24} className="text-primary" />
          </motion.div>
          <div>
            <Offcanvas.Title className="mb-0 fw-bold">Shopping Cart</Offcanvas.Title>
            <small className="text-muted">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </small>
          </div>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button 
            variant="outline-secondary" 
            onClick={onHide} 
            className="rounded-circle d-flex align-items-center justify-content-center p-0"
            style={{ 
              width: '36px', 
              height: '36px',
              border: '2px solid #dee2e6',
              transition: 'all 0.2s ease'
            }}
          >
            <FiX size={18} />
          </Button>
        </motion.div>
      </Offcanvas.Header>

      <Offcanvas.Body className="p-0">
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-5 h-100 d-flex flex-column justify-content-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
              style={{ fontSize: '4rem' }}
              className="mb-3"
            >
              🛒
            </motion.div>
            <h5 className="mb-3 text-muted">Your cart is empty</h5>
            <p className="text-muted small mb-4">
              Add some products to get started!
            </p>
            <Button 
              variant="primary" 
              className="rounded-pill px-4"
              onClick={onHide}
              style={{
                background: 'linear-gradient(135deg, var(--vervida-primary), var(--vervida-secondary))',
                border: 'none'
              }}
            >
              Continue Shopping
            </Button>
          </motion.div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-grow-1" style={{ maxHeight: 'calc(100vh - 300px)', overflowY: 'auto' }}>
              <ListGroup variant="flush">
                <AnimatePresence>
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <ListGroup.Item className="border-0 p-4">
                        <div className="d-flex align-items-center">
                          {/* Product Image */}
                          <div 
                            className="me-3 rounded-3 overflow-hidden shadow-sm"
                            style={{ width: '60px', height: '60px' }}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-100 h-100 object-fit-cover"
                            />
                          </div>

                          {/* Product Details */}
                          <div className="flex-grow-1">
                            <h6 className="mb-1 fw-semibold text-truncate" style={{ fontSize: '14px' }}>
                              {item.title}
                            </h6>
                            <div className="d-flex align-items-center justify-content-between">
                              <small className="text-muted text-capitalize">
                                {item.category}
                              </small>
                              <div className="fw-bold text-primary">
                                {formatPrice(item.price)}
                              </div>
                            </div>

                            {/* Quantity Controls */}
                            <div className="d-flex align-items-center justify-content-between mt-2">
                              <div className="d-flex align-items-center">
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center p-0"
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  style={{ width: '32px', height: '32px', minWidth: '32px' }}
                                >
                                  <FiMinus size={12} />
                                </motion.button>
                                
                                <Badge 
                                  bg="light" 
                                  text="dark" 
                                  className="mx-3 px-3 py-2 fw-bold"
                                  style={{ fontSize: '12px' }}
                                >
                                  {item.quantity}
                                </Badge>
                                
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center p-0"
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  style={{ width: '32px', height: '32px', minWidth: '32px' }}
                                >
                                  <FiPlus size={12} />
                                </motion.button>
                              </div>

                              <motion.button
                                whileHover={{ scale: 1.1, color: '#ef4444' }}
                                whileTap={{ scale: 0.9 }}
                                className="btn btn-outline-danger btn-sm rounded-circle d-flex align-items-center justify-content-center p-0"
                                onClick={() => onRemoveItem(item.id)}
                                style={{ width: '32px', height: '32px', minWidth: '32px' }}
                              >
                                <FiTrash2 size={12} />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </ListGroup.Item>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </ListGroup>
            </div>

            {/* Cart Summary */}
            <div className="border-top bg-light p-4">
              {/* Free Shipping Alert */}
              {cartTotal < 100 && cartTotal > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Alert variant="info" className="py-2 px-3 mb-3 border-0 rounded-3">
                    <small>
                      Add {formatPrice(100 - cartTotal)} more for free shipping! 🚚
                    </small>
                  </Alert>
                </motion.div>
              )}

              {/* Price Breakdown */}
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">
                    Shipping
                    {shipping === 0 && <Badge bg="success" className="ms-2">FREE</Badge>}
                  </span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Tax</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <h6 className="fw-bold mb-0">Total</h6>
                  <h6 className="fw-bold mb-0 text-primary">{formatPrice(finalTotal)}</h6>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-grid gap-2">
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="w-100 rounded-3 py-3 fw-bold"
                    style={{
                      background: 'linear-gradient(135deg, var(--vervida-primary), var(--vervida-secondary))',
                      border: 'none',
                      fontSize: '16px'
                    }}
                  >
                    Checkout ({formatPrice(finalTotal)})
                  </Button>
                </motion.div>
                
                <div className="d-flex gap-2">
                  <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    className="flex-grow-1 rounded-3"
                    onClick={onHide}
                  >
                    Continue Shopping
                  </Button>
                  <Button 
                    variant="outline-danger" 
                    size="sm" 
                    className="rounded-3"
                    onClick={onClearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
