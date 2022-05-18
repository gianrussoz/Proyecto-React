import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from './CartContext';
import { Button, ProductDetails, Img, ImgContainer, ProductDetailInfo, Price, ProductTitle } from '../styles/styled-components';
import  loader  from '../assets/loader.gif';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const detail = useContext(CartContext);

    const onAdd = (count) => {
        toast.success(`Añadiste ${count} productos al carrito!`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setItemCount(count);
        detail.addToCart(item, count);
    }

    return (
        <>
            {
                item.img ?
                <ProductDetails>
                        <ImgContainer>
                            <Img alt="foto" src={item.img} />
                        </ImgContainer>
                        <ProductDetailInfo>
                            <ProductTitle>{item.tipo}</ProductTitle>
                            <Price>${item.precio}</Price>
                            {
                            itemCount === 0
                            ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                            : <Link to='/cart'><Button>Ir al carrito</Button></Link>
                            }
                        </ProductDetailInfo>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </ProductDetails>
            : <img src={ loader } alt="loader"/>
            }
        </>
    );
}
export default ItemDetail;