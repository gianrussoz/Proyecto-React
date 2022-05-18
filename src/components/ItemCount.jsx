import { useState } from 'react';
import { Button, StockAmount, StockAmountContainer } from '../styles/styled-components';


function ItemCount ({ stock, initial, onAdd }) {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if (count > initial + 1) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <StockAmountContainer>
                <Button onClick={decrement}> - </Button>
                <StockAmount>{count}</StockAmount>
                <Button onClick={increment}> + </Button>
                <Button onClick={() => onAdd(count)}>Añadir al carrito</Button>
            </StockAmountContainer>
        </>
    );
}

export default ItemCount;