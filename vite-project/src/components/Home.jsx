// src/components/Home.jsx
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemCard from './ItemCard'; // Import the ItemCard component

//import pics
import pro1 from "../Photos/BottleOpener.jpg";
import pro2 from "../Photos/PassholderTumbler.jpg";
import pro3 from "../Photos/TinkerbellTumbler.jpg";

const Home = () => {
  // Define state for items
  const [items, setItems] = useState([
    { id: 1, name: 'Bottle Opener', price: 10, image: pro1, description: "Description for Item 1" },
    { id: 2, name: 'PassHolder Tumbler', price: 20, image: pro2, description: "Description for Item 2" },
    { id: 3, name: 'Tinkerbell Tumbler', price: 22, image: pro3, description: "Description for Item 3" },
  ]);

  return (
    <Container>
      <h1 className="mt-4 mb-4">Welcome to My Shop</h1>
      <Row>
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
