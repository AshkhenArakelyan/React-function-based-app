import React from 'react';

import './Product.css';

const Product = ({id, title, description}) => {
    return (
        <div className="product-item">
            <h3>{title}</h3>
            <h5>{description}</h5>
        </div>
    );
};

export default Product;