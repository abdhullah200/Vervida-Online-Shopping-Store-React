// src/components/common/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light mt-5">
      <Container fluid className="py-5">
        <Row className="gy-4">
          {/* Company Info */}
          <Col lg={4} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="d-flex align-items-center mb-3">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                  style={{ display: 'inline-block', fontSize: '2rem' }}
                >
                  ✨
                </motion.span>
                <h4 className="mb-0 ms-2 fw-bold text-white">Vervida</h4>
              </div>
              <p className="text-light opacity-75 mb-4">
                Your premium destination for quality products and exceptional shopping experiences. 
                We curate the best items to make your life better and more stylish.
              </p>
              <div className="d-flex gap-3">
                {[
                  { icon: FiFacebook, href: '#', label: 'Facebook' },
                  { icon: FiTwitter, href: '#', label: 'Twitter' },
                  { icon: FiInstagram, href: '#', label: 'Instagram' },
                  { icon: FiLinkedin, href: '#', label: 'LinkedIn' }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-light opacity-75 p-2 rounded-circle"
                    style={{ 
                      background: 'rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.2)';
                      e.target.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.1)';
                      e.target.style.opacity = '0.75';
                    }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h6 className="fw-bold text-white mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                {[
                  'About Us',
                  'Products',
                  'Categories',
                  'New Arrivals',
                  'Best Sellers',
                  'Sale Items'
                ].map((link) => (
                  <li key={link} className="mb-2">
                    <motion.a
                      href="#"
                      className="text-light opacity-75 text-decoration-none"
                      whileHover={{ x: 5, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Col>

          {/* Customer Service */}
          <Col lg={3} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h6 className="fw-bold text-white mb-3">Customer Service</h6>
              <ul className="list-unstyled">
                {[
                  'Contact Us',
                  'Shipping Info',
                  'Returns & Exchanges',
                  'Size Guide',
                  'FAQ',
                  'Privacy Policy'
                ].map((link) => (
                  <li key={link} className="mb-2">
                    <motion.a
                      href="#"
                      className="text-light opacity-75 text-decoration-none"
                      whileHover={{ x: 5, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h6 className="fw-bold text-white mb-3">Contact Information</h6>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <FiMapPin className="me-3 text-primary" size={18} />
                  <span className="text-light opacity-75 small">
                    123 Commerce Street<br />
                    Business District, NY 10001
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <FiPhone className="me-3 text-primary" size={18} />
                  <span className="text-light opacity-75 small">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <FiMail className="me-3 text-primary" size={18} />
                  <span className="text-light opacity-75 small">
                    support@vervida.com
                  </span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-4 p-3 bg-light rounded-3">
                <h6 className="fw-semibold mb-2 text-dark">Business Hours</h6>
                <div className="text-muted small">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="d-flex justify-content-between mb-1">
                    <span>Saturday:</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Sunday:</span>
                    <span>12:00 PM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Bottom Bar */}
      <div className="bg-darker py-3 border-top border-secondary">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6}>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-0 text-light opacity-75 small"
              >
                © {currentYear} Vervida. All rights reserved. Made with ❤️ for amazing customers.
              </motion.p>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="d-flex flex-wrap justify-content-md-end gap-3">
                <motion.a
                  href="#"
                  className="text-light opacity-75 text-decoration-none small"
                  whileHover={{ opacity: 1, x: 2 }}
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="#"
                  className="text-light opacity-75 text-decoration-none small"
                  whileHover={{ opacity: 1, x: 2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="text-light opacity-75 text-decoration-none small"
                  whileHover={{ opacity: 1, x: 2 }}
                >
                  Cookie Policy
                </motion.a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;