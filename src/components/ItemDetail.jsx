import ItemCount from './ItemCount';
import { Card,Container, Row } from 'react-bootstrap';

const ItemDetail = ({ item }) => {
    const onAdd = (count) => {
        alert("Añadiste " + count + " items al carrito.");
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Title>{item.tipo}</Card.Title>
                    <Card.Text>{item.stock}</Card.Text>
                    <Card.Text>{item.precio}</Card.Text>
                </Row>
            </Container>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        </>
    );
}
export default ItemDetail;