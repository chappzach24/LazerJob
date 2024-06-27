// src/components/ItemCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const ItemCard = ({ item }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <Link to={`/item/${item.id}`}>
        <div className="border p-3">
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} className="img-fluid custom-image mb-2" />
          <p>Price: ${item.price}</p>
        </div>
      </Link>
    </Col>
  );
};

export default ItemCard;
