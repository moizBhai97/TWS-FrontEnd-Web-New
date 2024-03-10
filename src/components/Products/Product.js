import React, { useState } from 'react';
import ProductPopUp from './ProductPopUp';
import { Card, CardContent, CardMedia, Button, Typography, CardActions, IconButton, Box, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Product = ({ product, handleFavoriteClick }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', minWidth: { xs: 105, sm: 120, md: 120 } }}>
            <IconButton
                aria-label="add to favorites"
                onClick={() => handleFavoriteClick(product.id)}
                sx={{
                    position: 'absolute',
                    right: 5,
                    top: 5,
                    color: product.isFavorite ? 'primary.main' : 'inherit',
                    backgroundColor: 'background.paper',
                    '&:hover': { backgroundColor: 'background.paper' }
                }}
            >
                {product.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
            />
            <CardContent sx={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography gutterBottom variant="h5" component="div" marginBottom={0} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {product.name}
                </Typography>
                <Box sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    <Typography variant="body1" color="text.secondary">
                        {product.description}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center">
                    <Typography variant="h6">
                        ${product.price}
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth onClick={() => handleOpen()}> Add to Cart </Button>
                </Box>
            </CardActions>
            {open && <ProductPopUp product={product} open={open} handleClose={handleClose} />}
        </Card>
    )
};

export default Product;