import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = useSelector(state => state.product.products.find(p => p.id === parseInt(id)));
    
    if (!product) return <div>Product not found</div>;
    
    return (
        <div className="product-detail" style={{marginLeft:'6%'}}>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} style={{float:'right',height:'420px'}}/>
            <p>{product.description}</p>
            <h1>Plant Care Guide</h1>
            <hr ></hr>
            <div>Water: {product.water}</div>
            <hr></hr>
            <div>Light: {product.light}</div>
            <hr></hr>
            <div>Tips: {product.tips}</div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <h1>Description</h1>
                <hr></hr>
                <div>{product.desc}</div>
            </div>
        </div>
    );
};

export default ProductDetail;
