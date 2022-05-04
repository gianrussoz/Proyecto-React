import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { serverTimestamp } from 'firebase/firestore';

const Cart = () => {
    const detail = useContext(CartContext);

    const order ={
        buyer: {
            name: "hola",
            email: "hola",
            phone: "hola"
        },
        date: serverTimestamp(),
        total: detail.precioFinal(),
        items: detail.cartList.map(item => ({
            id: item.id,
            title: item.tipo,
            price: item.precio,
            count: item.count
        })),
    }
}

    const createdOrder = async() => {
        const newOrder = doc(collection(db, "orders"));
        await setDoc(newOrder, order);
        return newOrder;
    }
createdOrder()
    .then(result => alert("orden creada"))
    .catch(error => console.log(error));
detail.borrarLista();

    return (
        <>
            <h2>Tu carrito</h2>
            <Link to='/'><button>Seguir comprando</button></Link>
                {
                    (detail.cartList.length > 0)
                    ? <button type="filled" onClick={detail.borrarLista}>Vaciar carrito</button>
                    : <p>Your cart is empty</p>
                }

            {  detail.cartList.map(item =>
                <div key={item.idItem}>
                    <p>$ {detail.precioItem(item.idItem)}</p>
                    <img alt="foto" src={item.img} />
                    <span>
                        <b>Producto: {item.name}</b>
                    </span>
                    <div>${item.precio}</div>
                    <button onClick={() => detail.borrarProducto(item.idItem)}>Borrar producto</button>
                </div>
            )
            }

            {
                detail.cartList.length > 0 &&
                <div>
                    <h4>ORDER SUMMARY</h4>
                        <p>Subtotal</p>
                        <strong>{detail.calcSubTotal()}</strong>
                        <p>IVA</p>
                        <strong>{detail.iva()}</strong>
                        <p>Total</p>
                        <strong>{detail.precioFinal()}</strong>
                        <button type="filled" onClick={pay}>Comprar</button>
                </div>
            }
        </>
    );
}

export default Cart;