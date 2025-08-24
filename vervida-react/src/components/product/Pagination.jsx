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
    >
      <BootstrapPagination className="mb-0 flex-wrap justify-content-center">
        <BootstrapPagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <BootstrapPagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />

        {generatePages().map((page) => (
          <motion.div
            key={page}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BootstrapPagination.Item
              active={page === currentPage}
              onClick={() => handlePageChange(page)}
              style={{
                background: page === currentPage ? 'linear-gradient(135deg, var(--vervida-primary), var(--vervida-secondary))' : undefined,
                borderColor: page === currentPage ? 'var(--vervida-primary)' : undefined
              }}
            >
              {page}
            </BootstrapPagination.Item>
          </motion.div>
        ))}

        <BootstrapPagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <BootstrapPagination.Last
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        />
      </BootstrapPagination>
      
      <div className="text-center mt-3">
        <small className="text-muted">
          Page {currentPage} of {totalPages}
        </small>
      </div>
    </motion.div>
  );
};

export default Pagination;
