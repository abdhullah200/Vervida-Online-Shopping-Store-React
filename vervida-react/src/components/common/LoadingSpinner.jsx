import React from 'react';
import { Spinner, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ message = "Loading amazing products..." }) => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-4"
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--vervida-primary), var(--vervida-secondary))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto'
            }}
          >
            <Spinner 
              animation="border" 
              variant="light" 
              style={{ width: '30px', height: '30px' }}
            />
          </div>
        </motion.div>
        
        <motion.h5
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary fw-semibold mb-2"
        >
          {message}
        </motion.h5>
        
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted small"
        >
          Please wait while we fetch the latest products for you...
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default LoadingSpinner;
