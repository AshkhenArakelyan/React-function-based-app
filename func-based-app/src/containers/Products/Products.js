import React from 'react';

import Product from '../../components/Product/Product';
import './Products.css';
import { products } from '../../data-mockup/products-mockup';

const Products = () => {
    return (
        <div className="products">
            <h2>Products</h2>
            {products.map(elem => {
                return <Product key={elem.id} title={elem.title} description={elem.description}/>
            })
            }
        </div>
    );
};

export default Products;