import { Card } from 'react-bootstrap';

const Item = ({ id, tipo, stock, precio, img }) => {
    return (
        <>
            <Card key={id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{tipo}</Card.Title>
                    <Card.Text>{stock}</Card.Text>
                    <Card.Text>{precio}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Item;