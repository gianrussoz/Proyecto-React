import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Card, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from './CartContext';

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
        detail.addToCart(item,count);
    }

    return (
        <>
            {
                item.img ?
                <Container fluid>
                    <Row>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Title>{item.tipo}</Card.Title>
                        <Card.Text>{item.stock}</Card.Text>
                        <Card.Text>${item.precio}</Card.Text>
                        {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart'><Button>CheckOut</Button></Link>
                        }
                    </Row>
                    <ToastContainer />
                </Container>
            : <p>No hay productos</p>
            }
        </>
    );
}
export default ItemDetail;