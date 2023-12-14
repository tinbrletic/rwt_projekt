import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPage from './Register.jsx';
import LoginPage from './Login.jsx';
import './index.css';

const getCurrentPage = () => {
  const path = window.location.pathname;

  // Implement your logic to determine which page to show based on the URL
  if (path === './Login.jsx') {
    return <LoginPage />;
  } else {
    return <RegisterPage />;
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {getCurrentPage()}
  </React.StrictMode>,
);
