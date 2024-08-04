import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="product-card" onClick={handleClick}>
            <img src={product.image} alt={product.name} />
            <h3 >{product.name}</h3>
        </div>
    );
};

export default ProductCard;
