import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const generatePages = () => {
    const pages = [];
    const showPages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages, startPage + showPages - 1);
    
    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="d-flex flex-column align-items-center"
    >
      <BootstrapPagination className="mb-3 flex-wrap justify-content-center shadow-sm">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <BootstrapPagination.First
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="rounded-pill me-1"
            style={{
              border: '2px solid #e5e7eb',
              color: currentPage === 1 ? '#9ca3af' : 'var(--vervida-primary)',
              fontWeight: '600'
            }}
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <BootstrapPagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-pill me-1"
            style={{
              border: '2px solid #e5e7eb',
              color: currentPage === 1 ? '#9ca3af' : 'var(--vervida-primary)',
              fontWeight: '600'
            }}
          />
        </motion.div>

        {generatePages().map((page) => (
          <motion.div
            key={page}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <BootstrapPagination.Item
              active={page === currentPage}
              onClick={() => handlePageChange(page)}
              className="rounded-pill mx-1 vervida-pagination-item"
              style={{
                border: '2px solid',
                borderColor: page === currentPage ? 'var(--vervida-primary)' : '#e5e7eb',
                background: page === currentPage 
                  ? 'linear-gradient(135deg, var(--vervida-primary), var(--vervida-secondary))' 
                  : 'white',
                color: page === currentPage ? 'white' : 'var(--vervida-primary)',
                fontWeight: '600',
                minWidth: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: page === currentPage 
                  ? '0 4px 12px rgba(99, 102, 241, 0.3)' 
                  : '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              {page}
            </BootstrapPagination.Item>
          </motion.div>
        ))}

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <BootstrapPagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-pill ms-1"
            style={{
              border: '2px solid #e5e7eb',
              color: currentPage === totalPages ? '#9ca3af' : 'var(--vervida-primary)',
              fontWeight: '600'
            }}
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <BootstrapPagination.Last
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="rounded-pill ms-1"
            style={{
              border: '2px solid #e5e7eb',
              color: currentPage === totalPages ? '#9ca3af' : 'var(--vervida-primary)',
              fontWeight: '600'
            }}
          />
        </motion.div>
      </BootstrapPagination>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="d-flex align-items-center gap-3 p-3 bg-light rounded-pill shadow-sm"
        style={{ border: '1px solid #e5e7eb' }}
      >
        <div className="d-flex align-items-center gap-2">
          <span className="text-muted small fw-semibold">Page</span>
          <span 
            className="px-3 py-1 rounded-pill fw-bold text-white"
            style={{
              background: 'linear-gradient(135deg, var(--vervida-primary), var(--vervida-secondary))',
              minWidth: '40px',
              textAlign: 'center'
            }}
          >
            {currentPage}
          </span>
          <span className="text-muted small fw-semibold">of {totalPages}</span>
        </div>
        
        <div className="vr opacity-50"></div>
        
        <div className="text-muted small">
          <span className="fw-semibold text-primary">{totalPages * 10}</span> items total
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Pagination;
