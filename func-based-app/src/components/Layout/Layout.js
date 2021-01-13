import React from 'react';

import Auth from '../../containers/Auth/Auth';
import Products from '../../containers/Products/Products';
import './Layout.css';

const Layout = () => {
    return (
        <main>
            <Auth />
            <Products />
        </main>
    );
};

export default Layout;