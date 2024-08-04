import React ,{useState} from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import './ProductTable.css';
import heroimage2 from '../Images/hero image 2.png';
import heroimage1 from '../Images/Hero image 1.png';

const ProductTable = () => {
    const products = useSelector(state => state.product.products);
    
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4; // Number of products per row
    const rowsPerPage = 5; // Number of rows per page
    const totalProductsPerPage = productsPerPage * rowsPerPage;

    const totalPages = Math.ceil(products.length / totalProductsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const startIndex = (currentPage - 1) * totalProductsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + totalProductsPerPage);
   

    return (
        
        <div >
            <div style={{backgroundColor:'grey'}}>
                <h2 style={{float:'left',paddingTop:'8%',marginLeft:'2%'}}>'As interesting <br></br>
                as a plant'</h2>
                <img src={heroimage2} style={{height:'320px',paddingLeft:'20%'}}></img>
                <img src={heroimage1} style={{height:'320px'}}></img>
            </div>
            <h3 style={{marginLeft:'4%'}}>Fetured Products</h3>
            <diV className="product-table">
                {products.slice(0, 20).map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </diV>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>{"<"}</button>
                <span>{currentPage}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>{">"}</button>
            </div>
        </div>
    );
};

export default ProductTable;
