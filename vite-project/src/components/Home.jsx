// src/components/Home.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';  

const Home = () => {
  // Define state for items
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10, imageUrl: "https://placehold.jp/150x150.png" },
    { id: 2, name: 'Item 2', price: 20, imageUrl: "https://placehold.jp/150x150.png" },
    { id: 3, name: 'Item 3', price: 25, imageUrl: "https://placehold.jp/150x150.png" },

  ]);

  return (
    <Container>
      <h1 className="mt-4 mb-4">Welcome to My Shop</h1>
      <Row>
        {items.map(item => (
          <Col key={item.id} xs={12} sm={6} md={4} className="mb-4">
            <div className="border p-3">
              <h3>{item.name}</h3>
              <img src={item.imageUrl} alt={item.name} className="img-fluid mb-2" />
              <p>Price: ${item.price}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
