import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa';
import './AdminProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = useSelector(state => state.product.products.find(p => p.id === parseInt(id)));

    const [guides, setGuides] = useState([
        { guide: 'guide 1', description: '' },
        { guide: 'guide 2', description: '' },
        { guide: 'guide 3', description: '' },
    ]);

    if (!product) return <div>Product not found</div>;

    const handleInputChange = (index, event) => {
        const values = [...guides];
        values[index][event.target.name] = event.target.value;
        setGuides(values);
    };

    const handleAddGuide = () => {
        setGuides([...guides, { guide: '', description: '' }]);
    };

    const handleRemoveGuide = (index) => {
        const values = [...guides];
        values.splice(index, 1);
        setGuides(values);
    };

    return (
        <div className="product-detail" style={{ marginLeft: '6%' }}>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} style={{ float: 'right', height: '420px' }} />
            <div className="description-page">
                <div className="left-panel">
                    <div className="section">
                        <h2>Title <FaEdit /></h2>
                        <input type="text" placeholder="Sub title" />
                    </div>
                    <div className="section">
                        <h2>Guide <FaEdit /></h2>
                        {guides.map((guide, index) => (
                            <div key={index} className="guide">
                                <input
                                    type="text"
                                    name="guide"
                                    placeholder="guide"
                                    value={guide.guide}
                                    onChange={(event) => handleInputChange(index, event)}
                                />
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="description"
                                    value={guide.description}
                                    onChange={(event) => handleInputChange(index, event)}
                                />
                                <button onClick={() => handleRemoveGuide(index)}><FaTrashAlt /></button>
                            </div>
                        ))}
                        <button className="add-guide" onClick={handleAddGuide}><FaPlus /></button>
                    </div>
                    <div className="section">
                        <h2>Description <FaEdit /></h2>
                        <textarea placeholder="Write your description here"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
