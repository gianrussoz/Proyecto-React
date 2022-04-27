import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, count) => {
        let found = cartList.find(product => product.id === item.id);
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
        let result = cartList.filter(item => item.id != id);
        setCartList(result);
    }

    const precioItem = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => precioItem(item.id));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const iva = () => {
        return calcSubTotal() * 0.21;
    }

    const precioFinal = () => {
        return calcSubTotal();
    }

    const itemsCW = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
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