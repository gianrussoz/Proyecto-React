import { Button } from 'react-bootstrap';
import { useState } from 'react';

function ItemCount ({ stock, initial, onAdd }) {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <Button onClick={decrement}> - </Button>
            <span>{count}</span>
            <Button onClick={increment}> + </Button>
            <Button onClick={() => onAdd(count)}>Añadir al carrito</Button>
        </>
    );
}

export default ItemCount;