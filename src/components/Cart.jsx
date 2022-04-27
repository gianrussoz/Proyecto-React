import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <>
            <h2>Tu carrito</h2>
            <Link to='/'><button>Seguir comprando</button></Link>
                {
                    (test.cartList.length > 0)
                    ? <button type="filled" onClick={test.borrarLista}>Vaciar carrito</button>
                    : <p>Your cart is empty</p>
                }

            {  test.cartList.map(item =>
                <div>
                    <img alt="foto" src={item.img} />
                    <span>
                        <b>Producto: {item.name}</b>
                    </span>
                    <div>{item.precio}</div>
                    <p>$ {test.precioItem(item.id)}</p>
                </div>
            )
            }

            {
                test.cartList.length > 0 &&
                <div>
                    <h4>ORDER SUMMARY</h4>
                        <p>Subtotal</p>
                        <strong>{test.calcSubTotal()}</strong>
                        <p>IVA</p>
                        <strong>{test.iva()}</strong>
                        <p>Total</p>
                        <strong>{test.precioFinal()}</strong>
                    <p>Terminar compra</p>
                </div>
            }
        </>
    );
}

export default Cart;