import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <>
            <h2>Tu carrito</h2>
            <button onClick={test.removeList}>Vaciar carrito</button>
            {  test.cartList.map(item =>
                <div>
                    <img alt="foto" src={item.img} />
                    <span>
                        <b>Product: {item.name}</b>
                    </span>
                    <div>{item.precio}</div>
                </div>
            )
            }
        </>
    );
}

export default Cart;