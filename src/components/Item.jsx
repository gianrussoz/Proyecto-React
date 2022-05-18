import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import { CardContainer, ItemTitle, ItemStock, Price } from '../styles/styled-components';

const Item = ({ id, tipo, stock, precio, img }) => {
    return (
        <>
            <CardContainer>
                <Card className="card" key={id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <ItemTitle>{tipo}</ItemTitle>
                        <ItemStock> <strong>{stock}</strong> unidades en stock</ItemStock>
                        <Price>$ {precio}</Price>
                        <Link to={`/item/${id}`}><InfoIcon>Más detalles</InfoIcon></Link>
                    </Card.Body>
                </Card>
            </CardContainer>
        </>
    );
}

export default Item;