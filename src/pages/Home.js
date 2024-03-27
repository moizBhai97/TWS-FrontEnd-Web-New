import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { Container, Grid, Typography, Box } from '@mui/material';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Categories from '../components/Categories/Categories';
import Products from '../components/Products/Products';
import { styled } from '@mui/system';
import { getProducts } from '../services/getProducts';

const StyledBox = styled(Box)(({ theme }) => ({
    height: '1px',
    backgroundImage: `linear-gradient(to right, transparent, ${theme.palette.primary.main}, transparent)`,
    margin: theme.spacing(2, 0),
}));

const Home = () => {

    const[products, setProducts] = useState([]);
    const[categories, setCategories] = useState([]);

    const top = 64;

    // const products = [];
    // for (let i = 1; i <= 14; i++) {
    //     for (let j = 1; j <= 7; j++) {
    //         products.push({
    //             id: (i - 1) * 7 + j,
    //             name: `Product ${(i - 1) * 7 + j}`,
    //             description: `Description ${(i - 1) * 7 + j}`,
    //             price: ((i - 1) * 7 + j) * 100,
    //             category: `Category ${i}`,
    //             image: '/assets/images/image.jpg',
    //             isFavorite: false
    //         });
    //     }
    // }

    // products[0].image = '/assets/images/image2.jpg';
    // products[0].description = 'Description and more description and more description and more description and more description';

    // const categories = [...new Set(products.map((product) => product.category))];

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
            console.log(data);
            setCategories([...new Set(data.map((product) => product.category))]);
        });
    }, []);

    return (
        <Container maxWidth="xl" sx={{ mt: top / 8 + 2 }}>
            <ImageSlider />
            <Categories categories={categories} />
            <Grid container sx={{ display: 'block' }}>
                {categories.map((category) => (
                    <Element name={category} key={category}>
                        <Grid item xs={12} mt={4}>
                            <StyledBox />
                            <Grid item xs={12} mt={4}>
                                <Typography variant="h4" component="h2" gutterBottom>{category}</Typography>
                                <Products products={products.filter(product => product.category === category)} />
                            </Grid>
                        </Grid>
                    </Element>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;