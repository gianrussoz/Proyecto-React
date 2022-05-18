import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, count) => {
        let found = cartList.find(products => products.id === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    img: item.img,
                    nombre: item.tipo,
                    precio: item.precio,
                    qtyItem: count
                }
            ]);
        } else {
            found.qtyItem += count;
        }
    }

    const borrarLista = () => {
        setCartList([]);
    }

    const borrarProducto = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
    }

    const precioItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].precio * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let itemTotal = cartList.map(item => precioItem(item.idItem));
        return itemTotal.reduce((precioAnterior, precioActual) => precioAnterior + precioActual);
    }

    const iva = () => {
        return calcSubTotal() * 0.21;
    }

    const precioFinal = () => {
        return calcSubTotal() + iva();
    }

    const itemsCW = () => {
        let cantidad = cartList.map(item => item.qtyItem);
        return cantidad.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <>
            <CartContext.Provider value={{cartList, addToCart, borrarLista, borrarProducto, itemsCW, precioItem, calcSubTotal, iva, precioFinal}}>
                {children}
            </CartContext.Provider>
        </>
    );
}

export default CartContextProvider;