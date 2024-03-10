import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Product from './Product';

const Products = ({ products: initialProducts }) => {
    const [products, setProducts] = useState(initialProducts);

    const handleFavoriteClick = (id) => {
        const newProducts = products.map(product =>
            product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
        );
        setProducts(newProducts);
    };

    return (
        <Grid container spacing={2} alignItems="stretch">
            {products.map((product, index) => (
                <Grid item xs={6} sm ={3} md={2} key={product.id}>
                    <Product product={product} index={index} handleFavoriteClick={handleFavoriteClick} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Products;