import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Badge, Form, InputGroup } from 'react-bootstrap';
import { FiShoppingCart, FiSearch, FiMenu } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';

const Header = ({ cartCount, onCartClick, searchTerm, onSearchChange }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top or scrolling up
      if (currentScrollY < 50 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down (only after scrolling past 50px)
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    controls.start({
      y: isVisible ? 0 : -100,
      opacity: isVisible ? 1 : 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 0.5
      }
    });
  }, [isVisible, controls]);

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
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1050 // Lower than cart's 1060
      }}
    >
      <Navbar 
        expand="lg" 
        className="vervida-gradient shadow-lg" 
        variant="dark"
        style={{
          backdropFilter: 'blur(10px)',
          background: 'linear-gradient(135deg, var(--vervida-primary), var(--vervida-secondary))'
        }}
      >
        <Container fluid className="px-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Navbar.Brand 
              onClick={() => scrollToSection('home')} 
              className="fw-bold fs-2 text-white"
              style={{ cursor: 'pointer' }}
            >
              <motion.span
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                style={{ display: 'inline-block' }}
              >
                ✨
              </motion.span>
              {' '}Vervida
            </Navbar.Brand>
          </motion.div>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FiMenu color="white" size={24} />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Nav.Link 
                  onClick={() => scrollToSection('home')} 
                  className="text-white fw-semibold px-3"
                  style={{ cursor: 'pointer' }}
                >
                  Home
                </Nav.Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Nav.Link 
                  onClick={() => scrollToSection('products')} 
                  className="text-white fw-semibold px-3"
                  style={{ cursor: 'pointer' }}
                >
                  Products
                </Nav.Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Nav.Link 
                  onClick={() => scrollToSection('contact')} 
                  className="text-white fw-semibold px-3"
                  style={{ cursor: 'pointer' }}
                >
                  Contact Us
                </Nav.Link>
              </motion.div>
            </Nav>

            <div className="d-flex align-items-center gap-3">
              {/* Search Bar */}
              <InputGroup style={{ width: '300px' }} className="d-none d-md-flex">
                <InputGroup.Text className="bg-white border-0">
                  <FiSearch className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="border-0 shadow-sm"
                  style={{ 
                    borderRadius: '0 8px 8px 0',
                    fontSize: '14px'
                  }}
                />
              </InputGroup>

              {/* Mobile Search */}
              <div className="d-md-none w-100 mt-2 mb-2">
                <InputGroup>
                  <InputGroup.Text className="bg-white border-0">
                    <FiSearch className="text-muted" />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="border-0 shadow-sm"
                    style={{ 
                      borderRadius: '0 8px 8px 0',
                      fontSize: '14px'
                    }}
                  />
                </InputGroup>
              </div>

              {/* Cart Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="position-relative"
              >
                <button
                  className="btn btn-outline-light rounded-pill px-3 py-2 d-flex align-items-center gap-2 border-2"
                  onClick={onCartClick}
                  style={{ 
                    transition: 'all 0.3s ease',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <FiShoppingCart size={20} />
                  <span className="d-none d-lg-inline fw-semibold">Cart</span>
                  {cartCount > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="position-absolute top-0 start-100 translate-middle"
                    >
                      <Badge 
                        bg="danger" 
                        className="rounded-pill shadow-sm"
                        style={{ 
                          fontSize: '10px',
                          minWidth: '20px',
                          height: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {cartCount}
                      </Badge>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Header;