import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './style.css'; // Removed to prevent global CSS from overriding Tailwind
import App from './components/App.jsx';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
