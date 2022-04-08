import { products } from '../../products';
import { Card } from 'react-bootstrap';

// let productos = products;

/* let mostrarProductos = (tiempo, contenido) => {
    return new Promise((resolve, reject) => {
        if (productos = true) {
            setTimeout(() => resolve (contenido), tiempo);
        } else {
            reject("No hay productos");
        }
    })
}

mostrarProductos */
const ItemList = ({ products }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default ItemList;
            products.length > 0
            ? products.map(producto => producto id={producto.id} nombre={producto.tipo} precio={producto.precio} foto={producto.img[0]} stock={producto.stock})
            : console.log("No hay productos");