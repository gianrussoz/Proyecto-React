import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { H2, ImgContainer, Button, StockAmount, StockAmountContainer, Price, ProductAmountContainer, ProductAmount, Img, Resume, ResumeTitle, ResumeItem, ContentCart, Bottom, ItemContainer, TopContainer, TopContainerBottom, ResumeItemPrice, CartItems } from '../styles/styled-components';

const Cart = () => {
    const detail = useContext(CartContext);

    const createOrder = () => {
        detail.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
                stock: increment(-item.qtyItem)
            });
        });

        const itemsFirebase = detail.cartList.map(item => ({
            id: item.idItem,
            title: item.nombre,
            price: item.precio
        }));

        const order = {
            buyer: {
                name: "Enzo Perez",
                email: "ep24@gmail.com",
                phone: "+9 1220-1824"
            },
            items: itemsFirebase,
            date: serverTimestamp(),
            total: detail.precioFinal()
        };

        const createdOrder = async () => {
            const newOrder = doc(collection(db, "orders"));
            await setDoc(newOrder, order);
            return newOrder;
        }
    createdOrder()
        .then(result =>
            toast.success(`Orden realizada! Muchas gracias por su compra🥰
            Por precaución, guarde su id:
            ${result.id}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }))
        .catch(error => console.log(error));

        detail.borrarLista();
    }

    return (
        <>
            <TopContainer>
                <H2>Tu carrito</H2>
                <TopContainerBottom>
                    <Link to='/'><Button>Seguir comprando</Button></Link>
                        {
                            (detail.cartList.length > 0)
                            ? <Button type="filled" onClick={detail.borrarLista}>Vaciar carrito</Button>
                            : <StockAmount>Your cart is empty</StockAmount>
                        }
                </TopContainerBottom>
            </TopContainer>
            <ContentCart>
                <Bottom><CartItems>

                
                {  detail.cartList.map(item =>
                    <div key={item.idItem}>
                        <ItemContainer>
                                <StockAmountContainer>
                                    <Button onClick={() => detail.borrarProducto(item.idItem)}>Borrar producto</Button>
                                    <StockAmount>Producto: {item.name}</StockAmount>
                                </StockAmountContainer>
                                <ProductAmountContainer>
                                    <ProductAmount>{item.qtyItem} item/s</ProductAmount>
                                    <ProductAmount>/</ProductAmount>
                                    <ProductAmount>$ {item.precio} C/U</ProductAmount>
                                </ProductAmountContainer>
                                <Price>$ {detail.precioItem(item.idItem)} </Price>
                            <ImgContainer>
                                <Img alt="foto" src={item.img} />
                            </ImgContainer>
                        </ItemContainer>
                    </div>
                )
                }</CartItems>
                {
                    detail.cartList.length > 0 &&
                    <Resume>
                        <ResumeTitle>ORDEN</ResumeTitle>
                            <ResumeItem>Subtotal</ResumeItem>
                            <ResumeItemPrice>$ {detail.calcSubTotal()}</ResumeItemPrice>
                            <ResumeItem>IVA</ResumeItem>
                            <ResumeItemPrice>$ {detail.iva()}</ResumeItemPrice>
                            <ResumeItem>Total</ResumeItem>
                            <ResumeItemPrice>$ {detail.precioFinal()}</ResumeItemPrice>
                            <Button onClick={createOrder}>Comprar</Button>
                    </Resume>
                }
                </Bottom>
            </ContentCart>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/>
        </>
    );
}

export default Cart;