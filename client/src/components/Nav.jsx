import React from 'react';
import { Link } from 'react-router-dom';
import '../Nav.css'; // Import your custom CSS file

const Home = () => {
  return (
    <div className="nav-container">
      <h1>Store Finder</h1>
      <Link to="/">go back home</Link>
      
    </div>
  );
};

export default Home;