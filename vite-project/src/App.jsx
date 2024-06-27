import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import ItemDetail from './components/ItemCard';

const App = () => {

  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10, imageUrl: "https://placehold.jp/150x150.png", description: "Description for Item 1" },
    { id: 2, name: 'Item 2', price: 20, imageUrl: "https://placehold.jp/150x150.png", description: "Description for Item 2" },
    { id: 3, name: 'Item 3', price: 25, imageUrl: "https://placehold.jp/150x150.png", description: "Description for Item 3" },
  ]);

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:itemId" element={<ItemDetail items={items} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
