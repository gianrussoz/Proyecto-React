import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

const Item = ({ id, tipo, stock, precio, img }) => {
    return (
        <>
            <Card className="card" key={id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{tipo}</Card.Title>
                    <Card.Text>{stock}</Card.Text>
                    <Card.Text>{precio}</Card.Text>
                    <Link to={`/item/${id}`}><InfoIcon>Más detalles</InfoIcon></Link>
                </Card.Body>
            </Card>
        </>
    );
}

export default Item;