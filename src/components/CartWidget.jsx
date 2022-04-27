import * as React from 'react';
import { useContext } from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <>
            <IconButton aria-label="cart">
                <Badge badgeContent={test.itemsCW()} color="primary">
                    <ShoppingCartIcon  className="botonCarrito"/>
                </Badge>
            </IconButton>
        </>
    )
}

export default CartWidget;