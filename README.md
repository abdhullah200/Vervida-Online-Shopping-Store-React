# 🛍️ Vervida - Premium Online Shopping Store

A modern, responsive e-commerce platform built with React, featuring an elegant design, smooth animations, and intuitive user experience. Vervida offers a premium shopping experience with carefully curated products across multiple categories.

---

## ⚡ Setup Instructions

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/abdhullah200/Vervida-Online-Shopping-Store-React.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Vervida-Online-Shopping-Store-React/vervida-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📋 Approach & Assumptions

### Approach
- Component-driven architecture: UI is split into reusable, modular React components for maintainability and scalability.
- State management via React hooks (useState, useEffect, custom hooks like useCart).
- Responsive design using CSS and Bootstrap for mobile and desktop compatibility.
- Mock data is used for products; no backend/API integration.
- Focus on accessibility, performance, and clean code practices.

### Assumptions
- All product data is static and stored locally (no API calls).
- No user authentication or payment processing is implemented.
- Cart state is persisted using browser localStorage.
- Application is expected to run in modern browsers supporting ES6+ and React 18.
- The assessment focuses on front-end skills only.

## ➕ Additional Features
- Dark theme integration for improved user experience.
- Animated transitions and UI feedback using Framer Motion and React Hot Toast.
- Advanced search with real-time highlighting.
- Persistent cart with quantity management and notifications.
- Accessibility features: semantic HTML, ARIA labels, keyboard navigation.


A modern, responsive e-commerce platform built with React, featuring an elegant design, smooth animations, and intuitive user experience. Vervida offers a premium shopping experience with carefully curated products across multiple categories.

## ✨ Features

### 🎨 Modern UI/UX

- **Beautiful Design**: Clean, modern interface with gradient themes and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Theme Integration**: Elegant dark theme with proper contrast ratios
- **Smooth Animations**: Powered by Framer Motion for delightful interactions

### 🛒 Shopping Experience

- **Product Catalog**: Browse through curated products across multiple categories
- **Advanced Search**: Real-time search with highlighting functionality
- **Category Filtering**: Filter products by Electronics, Jewelry, Men's & Women's Clothing
- **Product Details**: Detailed product modals with ratings, descriptions, and features
- **Shopping Cart**: Persistent cart with quantity management and real-time totals

### 🔧 Technical Features

- **React 18**: Built with the latest React features and best practices
- **Bootstrap 5**: Responsive grid system and UI components
- **Framer Motion**: Smooth animations and transitions
- **React Hot Toast**: Beautiful notification system
- **Local Storage**: Persistent cart state across sessions
- **Mock API**: Realistic product data with categories and ratings

### 📱 User Interface

- **Fixed Navigation**: Smart navbar that hides/shows on scroll
- **Hero Section**: Engaging landing area with call-to-action buttons
- **Product Grid**: Responsive grid layout with hover effects
- **Pagination**: Smooth pagination for better performance
- **Cart Offcanvas**: Slide-out cart with detailed breakdown
- **Loading States**: Beautiful loading spinners and skeletons

## 🚀 Quick Start


# Vervida Online Shopping Store (React)

## Project Overview

This is a front-end assessment project for a React-based online shopping store. The application allows users to browse products, filter and search, add items to a cart, and view product details in a modal. The project demonstrates best practices in React development, component structure, and responsive design.

## Features

- Product listing with grid and pagination
- Product filtering by category, price, and search
- Product details modal
- Shopping cart with off-canvas view
- Responsive design for desktop and mobile
- Loading spinner for async actions
- Reusable header and footer components

## Technologies Used

- React (functional components, hooks)
- CSS (custom styles)
- JavaScript (ES6+)

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/abdhullah200/Vervida-Online-Shopping-Store-React.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Vervida-Online-Shopping-Store-React/vervida-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Browse products on the main page
- Use filters to narrow down products
- Click a product to view details in a modal
- Add products to the cart and view the cart off-canvas

## Assessment Requirements

- Clean and modular code structure
- Use of React hooks and functional components
- Responsive design (mobile and desktop)
- Well-documented code and components
- No backend/API integration; uses mock data

## Folder Structure

- `src/components/` - Reusable UI components
- `src/cart/` - Cart-related components
- `src/product/` - Product-related components
- `src/data/` - Mock product data
- `src/hooks/` - Custom React hooks
- `src/services/` - API service (mock)
- `src/styles/` - Global styles

## Notes

- This project is for assessment purposes and demonstrates front-end skills only.
- All product data is mocked; no real transactions occur.

---
For any questions, please refer to the assessment PDF or contact the project maintainer.
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── product/
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductModal.jsx
│   │   │   ├── ProductFilters.jsx
│   │   │   └── Pagination.jsx
│   │   └── cart/
│   │       └── CartOffcanvas.jsx
│   ├── data/
│   │   └── mockProducts.js
│   ├── hooks/
│   │   └── useCart.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## 🛠️ Technology Stack

| Technology   | Purpose                   | Version |
|--------------|---------------------------|---------|
| **React**    | Frontend Framework        | 18.x    |
| **Bootstrap**| UI Component Library      | 5.x     |
| **Framer Motion** | Animation Library    | Latest  |
| **React Icons** | Icon Library          | Latest  |
| **React Hot Toast** | Notifications      | Latest  |
| **Axios**    | HTTP Client               | Latest  |

## 🎯 Key Components

### Header Component

- Fixed navigation with scroll behavior
- Search functionality with real-time filtering
- Cart counter with badge animations
- Smooth section scrolling

### ProductGrid Component

- Responsive product layout
- Category filtering
- Search highlighting
- Pagination support

### Shopping Cart

- Persistent cart state
- Quantity management
- Price calculations with tax and shipping
- Free shipping notifications

### Product Modal

- Detailed product information
- Image gallery
- Quantity selector
- Add to cart functionality

## 🎨 Styling & Theming

### CSS Variables

```css
:root {
  --vervida-primary: #6366f1;
  --vervida-secondary: #8b5cf6;
  --vervida-accent: #06b6d4;
  --vervida-dark: #1f2937;
  --vervida-light: #f8fafc;
}
```

### Custom Components

- Gradient buttons and cards
- Animated hover effects
- Responsive breakpoints
- Smooth transitions

## 📱 Responsive Design

| Breakpoint | Device         | Layout         |
|------------|----------------|----------------|
| `xs` (0px) | Mobile         | Single column  |
| `sm` (576px) | Mobile Large | 2 columns      |
| `md` (768px) | Tablet        | 2-3 columns    |
| `lg` (992px) | Desktop       | 3-4 columns    |
| `xl` (1200px) | Large Desktop | 4+ columns     |

## 🔄 State Management

### Cart State (useCart Hook)

- Add/remove items
- Update quantities
- Calculate totals
- Persist to localStorage
- Toast notifications

### Product State

- Category filtering
- Search functionality
- Pagination
- Loading states

## 🛡️ Best Practices

### Performance

- **Code Splitting**: Components are properly split
- **Lazy Loading**: Images load on demand
- **Memoization**: useCallback for expensive operations
- **Pagination**: Limits items per page for better performance

### Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color schemes

### Code Quality

- **ESLint**: Code linting with React rules
- **Component Architecture**: Reusable, modular components
- **Error Handling**: Graceful error states
- **TypeScript Ready**: Easy migration path

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

